import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Love Language Test with Results – 5 Love Languages Quiz with Results',
  description: 'Take our free 5 love languages quiz online and instantly discover your love language profile. Get detailed results to understand how you give and receive love, and share your personalized test results with your partner to strengthen your connection.',
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
