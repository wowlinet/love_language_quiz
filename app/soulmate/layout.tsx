import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who Is My Soulmate Quiz – Free Compatibility Test to Discover Your Ideal Partner',
  description: 'Take our "who is my soulmate quiz" to discover your ideal partner characteristics and relationship compatibility patterns. Find out "is he or she my soulmate" with our comprehensive soulmate compatibility quiz. Get personalized insights into what you seek in meaningful romantic relationships and how to recognize compatible partners.',
  openGraph: {
    title: 'Who Is My Soulmate Quiz – Discover Your Compatibility Type',
    description: 'Take our interactive "who is my soulmate quiz" to understand your relationship preferences and find your ideal partner match.',
    type: 'website',
  },
  keywords: 'who is my soulmate quiz, is he or she my soulmate quiz, soulmate quiz, compatibility test, relationship quiz, ideal partner, love compatibility, soulmate finder, relationship assessment',
}

export default function SoulmateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}