import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Does My Crush Like Me? Quiz – Free Signs Your Crush Likes You Back',
  description: 'Take the "Does My Crush Like Me?" quiz to decode the signs and find out if your crush likes you back. 18 expert questions analyze communication, body language, and behavior patterns. Get instant results!',
  keywords: 'does my crush like me quiz, crush likes me back, signs crush likes you, decode crush signals, crush compatibility test, does he like me, does she like me',
  openGraph: {
    title: 'Does My Crush Like Me? Quiz – Find Out If They Like You Back',
    description: 'Take the "Does My Crush Like Me?" quiz to decode the signs and find out if your crush likes you back. Analyze communication patterns, body language, and more.',
    type: 'website',
  },
}

export default function CrushQuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
