'use client'

import { useState, useEffect } from 'react'
import { questions, loveLanguageDescriptions, type QuizResult } from '@/lib/quizData'
import Link from 'next/link'
import confetti from 'canvas-confetti'

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [results, setResults] = useState<QuizResult[]>([])
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const [animatePercentages, setAnimatePercentages] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)

  useEffect(() => {
    // Load previous results from localStorage if available
    const savedResults = localStorage.getItem('loveLanguageResults')
    if (savedResults) {
      setResults(JSON.parse(savedResults))
    }
  }, [])

  useEffect(() => {
    // Trigger confetti when results are shown
    if (showResult && results.length > 0) {
      triggerConfetti()
      // Delay percentage animation for visual effect
      setTimeout(() => setAnimatePercentages(true), 500)
    }
  }, [showResult, results])

  const handleAnswer = (language: string) => {
    const newAnswers = [...answers, language]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (finalAnswers: string[]) => {
    const scores: Record<string, number> = {}

    finalAnswers.forEach((language) => {
      scores[language] = (scores[language] || 0) + 1
    })

    const sortedResults = Object.entries(scores)
      .map(([language, score]) => ({ language, score }))
      .sort((a, b) => b.score - a.score)

    setResults(sortedResults)
    setShowResult(true)

    // Save to localStorage
    localStorage.setItem('loveLanguageResults', JSON.stringify(sortedResults))
    localStorage.setItem('loveLanguageTestDate', new Date().toISOString())
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setAnimatePercentages(false)
  }

  const triggerConfetti = () => {
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min
    }

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Fire confetti from left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#ec4899', '#8b5cf6', '#6366f1', '#3b82f6']
      })

      // Fire confetti from right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#ec4899', '#8b5cf6', '#6366f1', '#3b82f6']
      })
    }, 250)

    // Additional burst effect
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#8b5cf6']
      })
    }, 300)
  }

  const handleShare = () => {
    if (results.length === 0) return
    setShowShareModal(true)
  }

  const handleSocialShare = (platform: string) => {
    if (results.length === 0) return

    const primaryLanguage = results[0].language
    const percentage = ((results[0].score / questions.length) * 100).toFixed(0)
    const text = encodeURIComponent(
      `I just discovered my primary love language is ${primaryLanguage} (${percentage}%)! 💕\n\nTake the Love Language Quiz to discover yours and let's understand each other better!`
    )
    const url = encodeURIComponent(window.location.origin + '/test')

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
      case 'copy':
        const copyText = `I just discovered my primary love language is ${primaryLanguage} (${percentage}%)! 💕\n\nTake the Love Language Quiz to discover yours and let's understand each other better!\n\n${window.location.origin}/test`
        navigator.clipboard.writeText(copyText)
        setShowCopyNotification(true)
        setTimeout(() => setShowCopyNotification(false), 3000)
        setShowShareModal(false)
        return
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
      setShowShareModal(false)
    }
  }

  const handleInvite = () => {
    const inviteUrl = window.location.origin + '/test'
    const inviteText = `Hey! I just took the Love Language Quiz and learned so much about myself. I'd love for you to take it too so we can better understand each other! ${inviteUrl}`

    if (navigator.share) {
      navigator.share({
        title: 'Love Language Quiz Invitation',
        text: inviteText,
        url: inviteUrl,
      }).catch((err) => console.log('Share failed:', err))
    } else {
      navigator.clipboard.writeText(inviteText)
      setShowCopyNotification(true)
      setTimeout(() => setShowCopyNotification(false), 3000)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResult && results.length > 0) {
    const primaryLanguage = results[0].language
    const languageInfo = loveLanguageDescriptions[primaryLanguage]

    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Copy Notification */}
        {showCopyNotification && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            ✓ Copied to clipboard!
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowShareModal(false)}>
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mb-4">
                  <span className="text-3xl">💕</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Share Your Results
                </h3>
                <p className="text-gray-600">
                  Invite your friends to discover their love language!
                </p>
              </div>

              {/* Result Preview */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 mb-6 border border-rose-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Your Primary Love Language</p>
                  <p className="text-2xl font-bold text-rose-600 mb-1">{languageInfo.title}</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {((results[0].score / questions.length) * 100).toFixed(0)}% Match
                  </p>
                </div>
              </div>

              {/* Share Options */}
              <div className="space-y-3 mb-6">
                <p className="text-sm font-medium text-gray-700 text-center mb-3">Share on:</p>

                {/* Social Media Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSocialShare('twitter')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter/X
                  </button>

                  <button
                    onClick={() => handleSocialShare('facebook')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </button>

                  <button
                    onClick={() => handleSocialShare('whatsapp')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </button>

                  <button
                    onClick={() => handleSocialShare('telegram')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram
                  </button>
                </div>

                {/* Copy Link Button */}
                <button
                  onClick={() => handleSocialShare('copy')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Celebration Banner */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full mb-6 shadow-lg animate-bounce-slow">
            <span className="text-3xl">🎉</span>
            <span className="text-2xl font-bold">Quiz Completed!</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
            Your Love Language Results
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-400">Discover how you express and receive love</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Primary Result - Hero Section */}
          <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-10 md:p-16 border-b-4 border-rose-500 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/20 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-rose-400 rounded-full mb-6 shadow-xl">
                <span className="text-5xl">🏆</span>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-sm uppercase tracking-widest font-semibold text-rose-600/80">
                  Your Primary Love Language
                </p>
                <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  {languageInfo.title}
                </h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  {languageInfo.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <span className="text-3xl font-bold text-rose-600">
                    {((results[0].score / questions.length) * 100).toFixed(0)}%
                  </span>
                  <span className="text-gray-600 font-medium">Match Score</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Complete Results Breakdown */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl shadow-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Complete Results Breakdown
                  </h3>
                  <p className="text-gray-600">All five love languages ranked by your responses</p>
                </div>
              </div>
              <div className="space-y-6">
                {results.map((result, index) => {
                  const percentage = (result.score / questions.length) * 100
                  const animatedPercentage = animatePercentages ? percentage : 0
                  return (
                    <div
                      key={result.language}
                      className={`group relative p-6 rounded-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                        index === 0
                          ? 'bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 shadow-lg'
                          : 'bg-gray-50 border-2 border-gray-200 hover:border-rose-200'
                      }`}
                      style={{
                        animationDelay: `${index * 150}ms`,
                        opacity: animatePercentages ? 1 : 0,
                        transform: animatePercentages ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.5s ease-out'
                      }}
                    >
                      {index === 0 && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                          <span>👑</span> Top Match
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-full text-xl ${
                            index === 0 ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </div>
                          <span className={`font-bold text-xl ${
                            index === 0 ? 'text-rose-600' : 'text-gray-800'
                          }`}>
                            {result.language}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 font-medium">
                            {result.score}/{questions.length} responses
                          </span>
                          <span className={`text-2xl font-bold transition-all duration-700 ${
                            index === 0 ? 'text-rose-600' : 'text-gray-700'
                          }`}>
                            {animatedPercentage.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                      <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                        <div
                          className={`h-6 rounded-full transition-all duration-1500 ease-out relative overflow-hidden ${
                            index === 0
                              ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500'
                              : 'bg-gradient-to-r from-rose-300 to-pink-300'
                          }`}
                          style={{
                            width: `${animatedPercentage}%`,
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          {index === 0 && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tips Section */}
            <div className="mb-12 p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border-2 border-blue-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">
                    Tips for {languageInfo.title}
                  </h3>
                  <p className="text-blue-700">Practical advice to strengthen your relationships</p>
                </div>
              </div>
              <div className="grid gap-4">
                {languageInfo.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed text-lg pt-1">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <button
                onClick={handleShare}
                className="group relative px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="relative z-10">Share Results</span>
              </button>

              <button
                onClick={handleInvite}
                className="group relative px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="relative z-10">Invite Friends</span>
              </button>

              <button
                onClick={resetQuiz}
                className="group relative px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="relative z-10">Retake Quiz</span>
              </button>

              <Link
                href="/articles"
                className="group relative px-6 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="relative z-10">Read Articles</span>
              </Link>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 p-6 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-amber-900 mb-2">Important Note</h4>
                  <p className="text-amber-800 leading-relaxed">
                    Your results are saved locally in your browser. Share them with your partner or friends to learn more about each other and strengthen your relationships! 💕
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-4 md:py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6 border border-rose-100">
          {/* Title and Introduction - Only show on first question */}
          {currentQuestion === 0 && (
            <div className="mb-6 text-center pb-6 border-b-2 border-gradient-to-r from-rose-200 via-pink-200 to-purple-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-4 shadow-xl animate-pulse">
                <span className="text-4xl">💕</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Love Language Quiz
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-5 font-medium">
                Discover how you express and receive love. Understanding your love language can transform
                your relationships and help you connect more deeply with those you care about.
              </p>
              <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-5 rounded-2xl border-2 border-rose-200 shadow-lg mt-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-lg font-bold text-gray-900">This Assessment Evaluates:</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-800">
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-rose-500">💬</span>
                    <span className="font-medium">Words of Affirmation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-pink-500">⏰</span>
                    <span className="font-medium">Quality Time</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-purple-500">🎁</span>
                    <span className="font-medium">Receiving Gifts</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-blue-500">🤝</span>
                    <span className="font-medium">Acts of Service</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-indigo-500">🫂</span>
                    <span className="font-medium">Physical Touch</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-teal-500">💝</span>
                    <span className="font-medium">Your unique preferences</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Progress Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-md">
                  <span className="text-white font-bold text-xs">{currentQuestion + 1}</span>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-800">
                    Question {currentQuestion + 1} of {questions.length}
                  </h2>
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {progress.toFixed(0)}%
              </span>
            </div>
            <div className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 rounded-full transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl mb-3 shadow-md">
              <span className="text-3xl">💗</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 leading-tight">
              {questions[currentQuestion].text}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-2 mb-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.language)}
                className="group relative w-full text-left p-3 md:p-4 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl hover:border-rose-400 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 to-pink-50/0 group-hover:from-rose-50 group-hover:to-pink-50 transition-all duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-rose-400 group-hover:to-pink-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <span className="text-xs font-bold text-gray-600 group-hover:text-white transition-colors">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <span className="text-gray-800 group-hover:text-gray-900 font-medium text-sm md:text-base leading-snug flex-grow">
                    {option.text}
                  </span>
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-300 group-hover:text-rose-500 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          {currentQuestion > 0 && (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1)
                  setAnswers(answers.slice(0, -1))
                }}
                className="group flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-rose-400 hover:text-rose-600 transition-all shadow-md hover:shadow-lg text-sm"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
