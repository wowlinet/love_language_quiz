import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Does He/She Love Me Quiz – Free Relationship Love Assessment Test',
  description: 'Take the "Does He/She Love Me?" quiz to evaluate if your partner truly loves you. 20 expert questions assess emotional support, respect, trust, affection, and commitment. Get honest insights about your relationship health.',
  keywords: 'does he love me quiz, does she love me test, relationship assessment, healthy love signs, partner loves me, relationship health quiz, true love test',
  openGraph: {
    title: 'Does He/She Love Me? Quiz – Assess Your Relationship',
    description: 'Take the "Does He/She Love Me?" quiz to evaluate if your partner truly loves you. Expert questions assess emotional support, respect, trust, and more.',
    type: 'website',
  },
}

export default function DoesHeLoveMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
