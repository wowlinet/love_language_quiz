import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Am I in Love Quiz – Take am i in love survey & Test to Discover Your True Feelings',
  description: 'Take the "Am I in Love?" quiz to discover your true feelings. Answer 15 insightful questions based on relationship psychology to find out if you\'re in love. Get personalized results and expert advice instantly.',
  keywords: 'am i in love quiz,love calculator',
  openGraph: {
    title: 'Am I in Love Quiz – Take am i in love survey & Test to Discover Your True Feelings',
    description: 'Take the "Am I in Love?" quiz to discover your true feelings. Answer 15 insightful questions based on relationship psychology to find out if you\'re in love.',
    type: 'website',
  },
}

export default function AmIInLoveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
