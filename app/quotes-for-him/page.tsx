import QuotesClient from './QuotesClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Love Quotes for Him - Romantic & Heartfelt Messages | Love Language Quiz',
  description: 'Discover 100+ beautiful love quotes for him. Express your deepest feelings with romantic and heartfelt messages. Share love quotes on social media and touch his heart.',
  keywords: ['love quotes for him'],
  authors: [{ name: 'Love Language Quiz' }],
  openGraph: {
    title: 'Love Quotes for Him - Beautiful Romantic Messages',
    description: 'A curated collection of 100+ heartfelt love quotes to express your feelings. Share the perfect words of love.',
    url: '/quotes-for-him',
    siteName: 'Love Language Quiz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Love Quotes for Him',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Quotes for Him - Beautiful Romantic Messages',
    description: 'A curated collection of 100+ heartfelt love quotes to express your feelings.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/quotes-for-him',
  },
}

export default function QuotesForHim() {
  return <QuotesClient />
}
