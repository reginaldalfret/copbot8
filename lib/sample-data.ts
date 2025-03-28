import type { KnowledgeBase } from "./types"

export function loadSampleData(): KnowledgeBase {
  return {
    entries: [
      {
        category: "Complaints",
        question: "How do I file a police complaint?",
        answer:
          "To file a police complaint:\n\n1. Visit your nearest police station\n2. Approach the duty officer and explain your situation\n3. The officer will record your statement in the Station House Diary\n4. You'll receive a copy of the complaint with a reference number\n5. For serious offenses, an FIR (First Information Report) will be registered\n\nYou can also file complaints online through the official police website or mobile app in many states.",
        keywords: ["file", "complaint", "report", "police", "station", "how to"],
        translations: {
          hindi: {
            question: "मैं पुलिस शिकायत कैसे दर्ज करूं?",
            answer:
              "पुलिस शिकायत दर्ज करने के लिए:\n\n1. अपने निकटतम पुलिस स्टेशन पर जाएं\n2. ड्यूटी अधिकारी से संपर्क करें और अपनी स्थिति समझाएं\n3. अधिकारी आपका बयान स्टेशन हाउस डायरी में दर्ज करेगा\n4. आपको एक संदर्भ संख्या के साथ शिकायत की एक प्रति मिलेगी\n5. गंभीर अपराधों के लिए, एक एफआईआर (प्रथम सूचना रिपोर्ट) दर्ज की जाएगी\n\nकई राज्यों में आप आधिकारिक पुलिस वेबसाइट या मोबाइल ऐप के माध्यम से ऑनलाइन भी शिकायत दर्ज कर सकते हैं।",
          },
          ta: {
            question: "நான் காவல்துறை புகார் எப்படி பதிவு செய்வது?",
            answer: "காவல்துறை புகார் பதிவு செய்ய:\n\n1. உங்கள் அருகிலுள்ள காவல் நிலையத்திற்கு செல்லவும்\n2. பணி அதிகாரியை அணுகி உங்கள் நிலையை விளக்கவும்\n3. அதிகாரி உங்கள் வாக்குமூலத்தை காவல் நிலைய பதிவேட்டில் பதிவு செய்வார்\n4. உங்களுக்கு குறிப்பு எண்ணுடன் புகாரின் நகல் வழங்கப்படும்\n5. கடுமையான குற்றங்களுக்கு, முதல் தகவல் அறிக்கை (FIR) பதிவு செய்யப்படும்\n\nபல மாநிலங்களில் அதிகாரப்பூர்வ காவல்துறை இணையதளம் அல்லது மொபைல் செயலி மூலமாகவும் புகார் பதிவு செய்யலாம்."
          }
        },
      },
      {
        category: "FIR",
        question: "What is an FIR and how do I file one?",
        answer:
          "An FIR (First Information Report) is an official document recording information about a cognizable offense. To file an FIR:\n\n1. Visit the police station in whose jurisdiction the incident occurred\n2. Provide all details of the incident to the officer\n3. The officer will record your statement and read it back to you\n4. Sign the statement after verifying its accuracy\n5. You'll receive a free copy of the FIR\n\nFiling an FIR is your right, and the police cannot refuse to register it for cognizable offenses. If refused, you can approach the Superintendent of Police or file a complaint with the local Magistrate.",
        keywords: ["fir", "first information report", "register", "file"],
        translations: {
          hindi: {
            question: "एफआईआर क्या है और मैं इसे कैसे दर्ज करूं?",
            answer:
              "एफआईआर (प्रथम सूचना रिपोर्ट) एक आधिकारिक दस्तावेज है जो संज्ञेय अपराध के बारे में जानकारी दर्ज करता है। एफआईआर दर्ज करने के लिए:\n\n1. उस पुलिस स्टेशन पर जाएं जिसके क्षेत्राधिकार में घटना हुई है\n2. अधिकारी को घटना के सभी विवरण प्रदान करें\n3. अधिकारी आपका बयान दर्ज करेगा और आपको वापस पढ़कर सुनाएगा\n4. इसकी सटीकता की जांच करने के बाद बयान पर हस्ताक्षर करें\n5. आपको एफआईआर की एक मुफ्त प्रति मिलेगी\n\nएफआईआर दर्ज करना आपका अधिकार है, और पुलिस संज्ञेय अपराधों के लिए इसे दर्ज करने से इनकार नहीं कर सकती। यदि इनकार किया जाता है, तो आप पुलिस अधीक्षक से संपर्क कर सकते हैं या स्थानीय मजिस्ट्रेट के पास शिकायत दर्ज करा सकते हैं।",
          },
          ta: {
            question: "FIR என்றால் என்ன மற்றும் அதை எப்படி பதிவு செய்வது?",
            answer: "FIR (முதல் தகவல் அறிக்கை) என்பது குற்றவியல் வழக்குகளை பதிவு செய்வதற்கான அதிகாரப்பூர்வ ஆவணம். FIR பதிவு செய்ய:\n\n1. சம்பவம் நடந்த பகுதியின் காவல் நிலையத்திற்கு செல்லவும்\n2. சம்பவத்தின் அனைத்து விவரங்களையும் அதிகாரியிடம் தெரிவிக்கவும்\n3. அதிகாரி உங்கள் வாக்குமூலத்தை பதிவு செய்து உங்களிடம் படித்து காட்டுவார்\n4. சரிபார்த்த பின் வாக்குமூலத்தில் கையொப்பமிடவும்\n5. FIR-ன் இலவச நகல் உங்களுக்கு வழங்கப்படும்\n\nFIR பதிவு செய்வது உங்கள் உரிமை, குற்றவியல் வழக்குகளில் காவல்துறை இதை மறுக்க முடியாது. மறுத்தால், காவல் கண்காணிப்பாளரை அணுகலாம் அல்லது உள்ளூர் நீதிபதியிடம் முறையிடலாம்."
          }
        },
      },
      {
        category: "Investigation",
        question: "What happens after I file a police complaint?",
        answer:
          "After filing a police complaint:\n\n1. For non-cognizable offenses, the police may conduct a preliminary inquiry\n2. For cognizable offenses where an FIR is registered, a formal investigation begins\n3. The investigation may include visiting the crime scene, collecting evidence, recording statements of witnesses, and questioning suspects\n4. The investigating officer will prepare a case diary documenting all actions\n5. Upon completion, a charge sheet (final report) is filed in court if evidence supports the charges\n6. If evidence is insufficient, a closure report may be filed\n\nYou can check the status of your complaint by visiting the police station or through online portals where available.",
        keywords: ["after", "complaint", "investigation", "process", "status"],
        translations: {
          hindi: {
            question: "पुलिस शिकायत दर्ज करने के बाद क्या होता है?",
            answer:
              "पुलिस शिकायत दर्ज करने के बाद:\n\n1. गैर-संज्ञेय अपराधों के लिए, पुलिस प्रारंभिक जांच कर सकती है\n2. संज्ञेय अपराधों के लिए जहां एफआईआर दर्ज की जाती है, एक औपचारिक जांच शुरू होती है\n3. जांच में अपराध स्थल का दौरा, सबूत इकट्ठा करना, गवाहों के बयान दर्ज करना और संदिग्धों से पूछताछ शामिल हो सकती है\n4. जांच अधिकारी सभी कार्यों का दस्तावेजीकरण करते हुए एक केस डायरी तैयार करेगा\n5. पूरा होने पर, यदि सबूत आरोपों का समर्थन करते हैं तो अदालत में एक चार्जशीट (अंतिम रिपोर्ट) दायर की जाती है\n6. यदि सबूत अपर्याप्त हैं, तो एक क्लोजर रिपोर्ट दायर की जा सकती है\n\nआप पुलिस स्टेशन जाकर या जहां उपलब्ध हो ऑनलाइन पोर्टल के माध्यम से अपनी शिकायत की स्थिति की जांच कर सकते हैं।",
          },
          ta: {
            question: "காவல்துறை புகார் பதிவு செய்த பிறகு என்ன நடக்கும்?",
            answer: "காவல்துறை புகார் பதிவு செய்த பிறகு:\n\n1. சிறிய குற்றங்களுக்கு, காவல்துறை ஆரம்ப விசாரணை மேற்கொள்ளலாம்\n2. FIR பதிவு செய்யப்பட்ட பெரிய குற்றங்களுக்கு, முறையான விசாரணை தொடங்கும்\n3. விசாரணையில் குற்ற இடத்தை பார்வையிடுதல், ஆதாரங்கள் சேகரித்தல், சாட்சிகளின் வாக்குமூலம் பதிவு செய்தல், சந்தேக நபர்களிடம் விசாரணை போன்றவை அடங்கும்\n4. விசாரணை அதிகாரி அனைத்து நடவடிக்கைகளையும் வழக்கு நாட்குறிப்பில் பதிவு செய்வார்\n5. விசாரணை முடிந்து, குற்றச்சாட்டுகளுக்கு ஆதாரம் இருந்தால், குற்றப்பத்திரிகை நீதிமன்றத்தில் தாக்கல் செய்யப்படும்\n6. போதிய ஆதாரம் இல்லையெனில், வழக்கு முடிவு அறிக்கை தாக்கல் செய்யப்படலாம்\n\nகாவல் நிலையத்திற்கு நேரில் சென்றோ அல்லது இணையதள போர்ட்டல் மூலமாகவோ உங்கள் புகாரின் நிலையை தெரிந்துகொள்ளலாம்."
          }
        },
      },
      {
        category: "Rights",
        question: "What are my rights if I am arrested?",
        answer:
          "If you are arrested, you have the following rights:\n\n1. Right to know the grounds of arrest\n2. Right to inform a friend, relative, or lawyer about your arrest\n3. Right to be produced before a magistrate within 24 hours of arrest\n4. Right to legal representation, including free legal aid if you cannot afford a lawyer\n5. Right to remain silent and not be compelled to be a witness against yourself\n6. Right to medical examination\n7. Right to be treated with dignity and not be subjected to torture or inhuman treatment\n\nThese rights are guaranteed under Articles 21 and 22 of the Indian Constitution and various provisions of the Criminal Procedure Code.",
        keywords: ["rights", "arrest", "detained", "custody"],
        translations: {
          hindi: {
            question: "यदि मुझे गिरफ्तार किया जाता है तो मेरे क्या अधिकार हैं?",
            answer:
              "यदि आपको गिरफ्तार किया जाता है, तो आपके पास निम्नलिखित अधिकार हैं:\n\n1. गिरफ्तारी के आधारों को जानने का अधिकार\n2. किसी मित्र, रिश्तेदार या वकील को अपनी गिरफ्तारी के बारे में सूचित करने का अधिकार\n3. गिरफ्तारी के 24 घंटे के भीतर मजिस्ट्रेट के समक्ष पेश किए जाने का अधिकार\n4. कानूनी प्रतिनिधित्व का अधिकार, जिसमें मुफ्त कानूनी सहायता शामिल है यदि आप वकील का खर्च वहन नहीं कर सकते\n5. चुप रहने का अधिकार और अपने खिलाफ गवाह बनने के लिए मजबूर न किए जाने का अधिकार\n6. चिकित्सा परीक्षा का अधिकार\n7. गरिमा के साथ व्यवहार किए जाने का अधिकार और यातना या अमानवीय व्यवहार के अधीन न होने का अधिकार\n\nये अधिकार भारतीय संविधान के अनुच्छेद 21 और 22 और आपराधिक प्रक्रिया संहिता के विभिन्न प्रावधानों के तहत गारंटीकृत हैं।",
          },
          ta: {
            question: "நான் கைது செய்யப்பட்டால் எனக்கு என்ன உரிமைகள் உள்ளன?",
            answer: "நீங்கள் கைது செய்யப்பட்டால், உங்களுக்கு பின்வரும் உரிமைகள் உள்ளன:\n\n1. கைது செய்யப்பட்டதற்கான காரணங்களை அறியும் உரிமை\n2. உங்கள் கைது குறித்து நண்பர், உறவினர் அல்லது வழக்கறிஞரிடம் தெரிவிக்கும் உரிமை\n3. கைது செய்யப்பட்ட 24 மணி நேரத்திற்குள் நீதிபதி முன் ஆஜர்படுத்தப்படும் உரிமை\n4. சட்ட பிரதிநிதித்துவம் பெறும் உரிமை, வழக்கறிஞர் கட்டணம் செலுத்த முடியாவிட்டால் இலவச சட்ட உதவி பெறும் உரிமை\n5. மௌனமாக இருக்கும் உரிமை மற்றும் உங்களுக்கு எதிராக சாட்சியாக இருக்க கட்டாயப்படுத்தப்படாத உரிமை\n6. மருத்துவ பரிசோதனை பெறும் உரிமை\n7. கண்ணியத்துடன் நடத்தப்படும் உரிமை மற்றும் சித்திரவதை அல்லது மனிதாபிமானமற்ற நடத்தைக்கு உட்படுத்தப்படாத உரிமை\n\nஇந்த உரிமைகள் இந்திய அரசியலமைப்பின் சரத்து 21 மற்றும் 22, குற்றவியல் நடைமுறை சட்டத்தின் பல்வேறு விதிகளின் கீழ் உத்தரவாதம் அளிக்கப்பட்டுள்ளன."
          }
        },
      },
    ],
    emergencyContacts: {
      "Police Emergency": "100",
      "Women Helpline": "1091",
      "Child Helpline": "1098",
      Ambulance: "108",
      "National Emergency Number": "112",
      "Traffic Police": "1073",
      "Anti-Corruption Helpline": "1064",
      "Cyber Crime Helpline": "1930",
    },
    legalProvisions: {
      "302": {
        description: "Section 302 of the Indian Penal Code deals with punishment for murder.",
        punishment: "Punishment for murder is death or imprisonment for life, and also fine.",
        translations: {
          ta: {
            description: "பிரிவு 302 இந்திய தண்டனைச் சட்டத்தின் கீழ் கொலைக்கான தண்டனையை கையாளுகிறது."
          }
        }
        ta_punishment: "கொலைக்கான தண்டனை மரணம் அல்லது ஆயுள் சிறை, மற்றும் அபராதம்."
      },
      "376": {
        description: "Section 376 of the Indian Penal Code deals with punishment for rape.",
        punishment: "Rigorous imprisonment for a term not less than ten years, but which may extend to imprisonment for life, and shall also be liable to fine.",
        ta_description: "பிரிவு 376 இந்திய தண்டனைச் சட்டத்தின் கீழ் பாலியல் வன்கொடுமைக்கான தண்டனையை கையாளுகிறது.",
        ta_punishment: "குறைந்தது பத்து ஆண்டுகள் கடுங்காவல் சிறை, ஆயுள் சிறை வரை நீட்டிக்கப்படலாம், மற்றும் அபராதம் விதிக்கப்படும்."
      },
      "420": {
        description: "Section 420 of the Indian Penal Code deals with cheating and dishonestly inducing delivery of property.",
        punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
        ta_description: "பிரிவு 420 இந்திய தண்டனைச் சட்டத்தின் கீழ் மோசடி மற்றும் ஏமாற்றி சொத்து கைமாற்றத்தை கையாளுகிறது.",
        ta_punishment: "ஏழு ஆண்டுகள் வரை சிறை தண்டனை, மற்றும் அபராதம் விதிக்கப்படும்."
      },
      "354": {
        description: "Section 354 of the Indian Penal Code deals with assault or criminal force to woman with intent to outrage her modesty.",
        punishment: "Imprisonment of either description for a term which shall not be less than one year but which may extend to five years, and shall also be liable to fine.",
        ta_description: "பிரிவு 354 இந்திய தண்டனைச் சட்டத்தின் கீழ் பெண்களின் கற்பை சிதைக்கும் நோக்கத்துடன் தாக்குதல் அல்லது குற்றவியல் வன்முறையை கையாளுகிறது.",
        ta_punishment: "குறைந்தது ஒரு ஆண்டு முதல் ஐந்து ஆண்டுகள் வரை சிறை தண்டனை, மற்றும் அபராதம் விதிக்கப்படும்."
      },
      "498A": {
        description: "Section 498A of the Indian Penal Code deals with husband or relative of husband of a woman subjecting her to cruelty.",
        punishment: "Imprisonment for a term which may extend to three years and shall also be liable to fine.",
        ta_description: "பிரிவு 498A இந்திய தண்டனைச் சட்டத்தின் கீழ் கணவன் அல்லது கணவனின் உறவினர்கள் பெண்ணை கொடுமைப்படுத்துவதை கையாளுகிறது.",
        ta_punishment: "மூன்று ஆண்டுகள் வரை சிறை தண்டனை, மற்றும் அபராதம் விதிக்கப்படும்."
      },
      "304B": {
        description: "Section 304B of the Indian Penal Code deals with dowry death.",
        punishment: "Imprisonment for a term which shall not be less than seven years but which may extend to imprisonment for life.",
        ta_description: "பிரிவு 304B இந்திய தண்டனைச் சட்டத்தின் கீழ் வரதட்சணை மரணத்தை கையாளுகிறது.",
        ta_punishment: "குறைந்தது ஏழு ஆண்டுகள் முதல் ஆயுள் சிறை வரை தண்டனை விதிக்கப்படும்."
      },
    },
  }
}
