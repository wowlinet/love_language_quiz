import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Take the Love Language Quiz - Discover Your Love Language',
  description: 'Take our comprehensive love language quiz to discover how you express and receive love. Get personalized results and insights.',
  openGraph: {
    title: 'Take the Love Language Quiz',
    description: 'Discover your primary love language with our comprehensive quiz.',
    type: 'website',
  },
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
