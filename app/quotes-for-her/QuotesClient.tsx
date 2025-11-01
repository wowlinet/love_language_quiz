'use client'

import { useState, useEffect } from 'react'
import quotesData from '@/lib/quotes-for-her.json'

interface Quote {
  text: string
  id: number
}

export default function QuotesClient() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [copiedId, setCopiedId] = useState<number | null>(null)

  useEffect(() => {
    // Transform quotes array into objects with IDs
    const transformedQuotes = quotesData.quotes.map((quote, index) => ({
      text: quote,
      id: index
    }))
    setQuotes(transformedQuotes)
  }, [])

  const handleCopy = async (quote: Quote) => {
    const copyText = `"${quote.text}"\n\n💝 From Love Language Quiz`

    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(copyText)
      setCopiedId(quote.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleSocialShare = (platform: string, quote: Quote) => {
    const text = encodeURIComponent(`"${quote.text}"\n\n💝 From Love Language Quiz`)
    const url = encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + '/quotes-for-her' : '')

    let shareUrl = ''

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`
        break
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${url}&text=${text}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <div className="relative overflow-hidden py-20 px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            💕 Love Quotes Collection
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Love Quotes{' '}
            <span className="text-rose-500">for Her</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of heartfelt quotes to express your deepest feelings. Share the love. ❤️
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="break-inside-avoid group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-rose-100 hover:border-rose-300 hover:-translate-y-1">
                {/* Quote Text */}
                <div className="relative">
                  <svg
                    className="absolute -top-2 -left-2 w-8 h-8 text-rose-200 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg relative z-10">
                    {quote.text}
                  </p>
                </div>

                {/* Share Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-3">
                    {/* Primary Copy Button */}
                    <button
                      onClick={() => handleCopy(quote)}
                      className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:from-rose-600 hover:to-pink-600 hover:shadow-lg transition-all duration-200 text-sm font-semibold group"
                    >
                      {copiedId === quote.id ? (
                        <>
                          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                          <span>Copy Quote</span>
                        </>
                      )}
                    </button>

                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs text-gray-500 font-medium">Share on:</span>
                      <button
                        onClick={() => handleSocialShare('twitter', quote)}
                        className="p-2.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-600 hover:text-sky-700 transition-all duration-200 hover:scale-110 hover:shadow-md group relative"
                        title="Share on Twitter/X"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        {/* <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          Twitter/X
                        </span> */}
                      </button>
                      <button
                        onClick={() => handleSocialShare('facebook', quote)}
                        className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 transition-all duration-200 hover:scale-110 hover:shadow-md group relative"
                        title="Share on Facebook"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        {/* <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          Facebook
                        </span> */}
                      </button>
                      <button
                        onClick={() => handleSocialShare('whatsapp', quote)}
                        className="p-2.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 hover:text-green-700 transition-all duration-200 hover:scale-110 hover:shadow-md group relative"
                        title="Share on WhatsApp"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        {/* <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          WhatsApp
                        </span> */}
                      </button>
                      <button
                        onClick={() => handleSocialShare('telegram', quote)}
                        className="p-2.5 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-600 hover:text-cyan-700 transition-all duration-200 hover:scale-110 hover:shadow-md group relative"
                        title="Share on Telegram"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        {/* <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          Telegram
                        </span> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Your Love Language
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Take our comprehensive quiz to understand how you express and receive love
            </p>
            <a
              href="/test"
              className="inline-block bg-white text-rose-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Take the Love Language Quiz
            </a>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
      </div>
    </div>
  )
}
