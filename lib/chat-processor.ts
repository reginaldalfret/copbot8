import type { KnowledgeBase } from "./types"

export async function processQuery(query: string, knowledgeBase: KnowledgeBase, language: string): Promise<string> {
  // Normalize the query, preserving Tamil characters
  const normalizedQuery = query.trim().toLowerCase()

  // Tamil emergency keywords
  const tamilEmergencyKeywords = ['அவசரம்', 'உதவி', 'அவசர']
  const emergencyKeywords = ['emergency', 'urgent', 'help', ...tamilEmergencyKeywords]

  // Check for emergency keywords
  if (emergencyKeywords.some(keyword => normalizedQuery.includes(keyword))) {
    return formatEmergencyResponse(knowledgeBase.emergencyContacts, language)
  }

  // Check for legal provision queries
  // Tamil legal keywords
  const tamilLegalKeywords = ['பிரிவு', 'சட்டம்', 'தண்டனை']
  const legalKeywords = ['section', 'law', 'legal', 'punishment', 'penalty', ...tamilLegalKeywords]

  if (legalKeywords.some(keyword => normalizedQuery.includes(keyword))) {
    // Extract section numbers if present
    const sectionMatch = normalizedQuery.match(/section\s+(\d+)/i)
    if (sectionMatch && sectionMatch[1]) {
      const sectionNumber = sectionMatch[1]
      return formatLegalProvisionResponse(sectionNumber, knowledgeBase.legalProvisions, language)
    }
  }

  // Search for matching entries in the knowledge base
  const matchingEntries = knowledgeBase.entries
    .filter((entry) => {
      // Check if query contains keywords
      return entry.keywords.some((keyword) => normalizedQuery.includes(keyword.toLowerCase()))
    })
    .sort((a, b) => {
      // Sort by relevance (number of matching keywords)
      const aMatches = a.keywords.filter((keyword) => normalizedQuery.includes(keyword.toLowerCase())).length

      const bMatches = b.keywords.filter((keyword) => normalizedQuery.includes(keyword.toLowerCase())).length

      return bMatches - aMatches
    })

  if (matchingEntries.length > 0) {
    const entry = matchingEntries[0]

    // Return translated content if available and requested
    if (language !== "english" && entry.translations && entry.translations[language]) {
      return entry.translations[language].answer
    }

    return entry.answer
  }

  // If no specific match is found, provide a general response based on language
  if (language === 'ta') {
    return "மன்னிக்கவும், எனக்கு அந்த தகவல் தெரியவில்லை. தயவுசெய்து உங்கள் கேள்வியை மாற்றி கேளுங்கள் அல்லது காவல்துறை நடைமுறைகள், புகார் பதிவு, அவசர தொடர்புகள் அல்லது சட்ட விதிகள் பற்றி கேளுங்கள்."
  }
  return "I'm sorry, I don't have specific information about that. Please try rephrasing your question or ask about police procedures, complaint filing, emergency contacts, or legal provisions."
}

function formatEmergencyResponse(emergencyContacts: { [key: string]: string }, language: string): string {
  let response = "Here are the emergency contact numbers you can use:\n\n"

  Object.entries(emergencyContacts).forEach(([name, number]) => {
    response += `- ${name}: ${number}\n`
  })

  if (language === 'ta') {
    response = "அவசர தொடர்பு எண்கள்:\n\n"
    Object.entries(emergencyContacts).forEach(([name, number]) => {
      response += `- ${name}: ${number}\n`
    })
  }

  return response
}

function formatLegalProvisionResponse(
  sectionNumber: string,
  legalProvisions: { [key: string]: { description: string; punishment: string } },
  language: string,
): string {
  const section = legalProvisions[sectionNumber]

  if (!section) {
    return `I'm sorry, I don't have information about Section ${sectionNumber}. Please check if the section number is correct or ask about a different legal provision.`
  }

  let response = `Information about Section ${sectionNumber}:\n\n`
  response += `Description: ${section.description}\n\n`
  response += `Punishment: ${section.punishment}`

  if (language === 'ta') {
    response = `பிரிவு ${sectionNumber} பற்றிய தகவல்:\n\n`
    response += `விளக்கம்: ${section.description}\n\n`
    response += `தண்டனை: ${section.punishment}`
  }

  return response
}
