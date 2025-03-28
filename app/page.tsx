import { Header } from "@/components/header"
import { FeatureSection } from "@/components/feature-section"
import { HeroSection } from "@/components/hero-section"
import dynamic from 'next/dynamic';

const ChatInterface = dynamic(
  () => import('@/components/chat-interface').then((mod) => mod.ChatInterface),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <FeatureSection />
      <div className="flex-1 container max-w-5xl mx-auto p-4 py-8 mb-4">
        <ChatInterface />
      </div>
    </div>
  )
}
