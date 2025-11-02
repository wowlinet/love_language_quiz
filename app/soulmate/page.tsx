'use client'

import { useState, useEffect } from 'react'
import { soulmateQuestions, calculateSoulmateResult, type SoulmateResult, type QuizResponse } from '@/lib/soulmateQuizData'
import Link from 'next/link'
import confetti from 'canvas-confetti'

export default function SoulmatePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<QuizResponse[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<SoulmateResult | null>(null)
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const [animatePercentages, setAnimatePercentages] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    // Load previous results from localStorage if available
    const savedResult = localStorage.getItem('soulmateResult')
    if (savedResult) {
      setResult(JSON.parse(savedResult))
    }
  }, [])

  useEffect(() => {
    // Trigger confetti when results are shown
    if (showResult && result) {
      triggerConfetti()
      // Delay percentage animation for visual effect
      setTimeout(() => setAnimatePercentages(true), 500)
    }
  }, [showResult, result])

  const handleAnswer = (option: { text: string; value: string; weight: number }) => {
    const question = soulmateQuestions[currentQuestion]
    const newResponse: QuizResponse = {
      questionId: question.id,
      selectedOption: option.value,
      weight: option.weight,
      category: question.category
    }

    const newResponses = [...responses, newResponse]
    setResponses(newResponses)

    if (currentQuestion < soulmateQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newResponses)
    }
  }

  const calculateResults = (finalResponses: QuizResponse[]) => {
    const calculatedResult = calculateSoulmateResult(finalResponses)
    setResult(calculatedResult)
    setShowResult(true)

    // Save to localStorage
    localStorage.setItem('soulmateResult', JSON.stringify(calculatedResult))
    localStorage.setItem('soulmateTestDate', new Date().toISOString())
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setResponses([])
    setShowResult(false)
    setAnimatePercentages(false)
    setIsStarted(false)
  }

  const startQuiz = () => {
    setIsStarted(true)
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

  const handleShare = async () => {
    if (!result) return

    const shareText = `I just discovered I'm "${result.title}" in relationships! Take the Soulmate Compatibility Quiz to discover your ideal partner type: ${window.location.origin}/soulmate`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Soulmate Compatibility Result',
          text: shareText,
          url: window.location.origin + '/soulmate',
        })
      } catch (err) {
        console.log('Share failed:', err)
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareText)
      setShowCopyNotification(true)
      setTimeout(() => setShowCopyNotification(false), 3000)
    }
  }

  const handleInvite = () => {
    const inviteUrl = window.location.origin + '/soulmate'
    const inviteText = `Hey! I just took the Soulmate Compatibility Quiz and learned so much about what I'm looking for in a partner. I'd love for you to take it too! ${inviteUrl}`

    if (navigator.share) {
      navigator.share({
        title: 'Soulmate Quiz Invitation',
        text: inviteText,
        url: inviteUrl,
      }).catch((err) => console.log('Share failed:', err))
    } else {
      navigator.clipboard.writeText(inviteText)
      setShowCopyNotification(true)
      setTimeout(() => setShowCopyNotification(false), 3000)
    }
  }

  const progress = ((currentQuestion + 1) / soulmateQuestions.length) * 100

  // Landing page before quiz starts
  if (!isStarted && !showResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-8xl">💕</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Soulmate
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              Compatibility Type
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Take our comprehensive compatibility quiz to understand your relationship preferences, 
            discover what you seek in a meaningful partnership, and learn how to recognize your ideal soulmate.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You&apos;ll Discover:</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3 text-xl">💖</span>
                  <span>Your unique soulmate compatibility type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 text-xl">🎯</span>
                  <span>Detailed compatibility analysis across 5 key dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✨</span>
                  <span>Personalized insights about your ideal partner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">💡</span>
                  <span>Practical tips for building meaningful relationships</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 mb-6">
                <div className="text-4xl mb-3">⏱️</div>
                <p className="text-gray-700 font-medium">Takes only 3-5 minutes</p>
                <p className="text-gray-600 text-sm">10 thoughtful questions</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <div className="text-4xl mb-3">🔒</div>
                <p className="text-gray-700 font-medium">100% Private &amp; Secure</p>
                <p className="text-gray-600 text-sm">No registration required</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={startQuiz}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Soulmate Quiz
          </button>
          <p className="text-gray-500 text-sm mt-4">Free • No email required • Instant results</p>
        </div>
      </div>
    )
  }

  // Results page
  if (showResult && result) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Copy Notification */}
        {showCopyNotification && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            ✓ Copied to clipboard!
          </div>
        )}

        {/* Celebration Banner */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full mb-4 animate-bounce-slow">
            <span className="text-2xl font-bold">🎉 Quiz Completed!</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in-up animation-delay-200">
            Your Soulmate Compatibility Results
          </h1>
          <p className="text-gray-600 animate-fade-in-up animation-delay-400">Discover your ideal partner characteristics</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Primary Result - Hero Section */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 md:p-12 border-b-4 border-rose-500">
            <div className="text-center">
              <div className="inline-block mb-4">
                <span className="text-6xl">💕</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                Your Soulmate Compatibility Type
              </h2>
              <p className="text-5xl font-bold text-rose-600 mb-6">
                {result.title}
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                {result.description}
              </p>
            </div>
          </div>

          {/* Compatibility Breakdown */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Your Compatibility Profile
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {Object.entries(result.compatibility).map(([category, score], index) => (
                <div key={category} className="bg-gray-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
                    {category === 'emotional' ? '💖 Emotional' :
                     category === 'communication' ? '💬 Communication' :
                     category === 'lifestyle' ? '🌟 Lifestyle' :
                     category === 'values' ? '🎯 Values' :
                     '🔮 Future'}
                  </h4>
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={
                          category === 'emotional' ? '#f43f5e' :
                          category === 'communication' ? '#ec4899' :
                          category === 'lifestyle' ? '#8b5cf6' :
                          category === 'values' ? '#6366f1' :
                          '#3b82f6'
                        }
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${animatePercentages ? score * 2.51 : 0} 251.2`}
                        className="transition-all duration-2000 ease-out"
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800">
                        {animatePercentages ? score : 0}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Characteristics */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Your Key Characteristics
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {result.characteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4">
                    <span className="text-rose-500 mr-3 text-xl">✨</span>
                    <span className="text-gray-700">{characteristic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relationship Tips */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tips for Finding Your Soulmate
              </h3>
              <div className="space-y-4">
                {result.tips.map((tip, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                    <span className="text-purple-500 mr-3 text-xl">💡</span>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Partner */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Your Ideal Partner Qualities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {result.idealPartner.map((quality, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                    <span className="text-emerald-500 mr-3 text-xl">💖</span>
                    <span className="text-gray-700">{quality}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={handleShare}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                📱 Share Results
              </button>
              <button
                onClick={handleInvite}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                💌 Invite Someone
              </button>
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                🔄 Retake Quiz
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💝</div>
              <h4 className="text-lg font-semibold text-amber-800 mb-2">
                Remember: Love is a Journey
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                Your soulmate compatibility type is a guide to understanding your relationship preferences. 
                True love grows through understanding, communication, and shared experiences. 
                Use these insights as a starting point for building meaningful connections.
              </p>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Explore More About Love &amp; Relationships
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/test"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              💕 Take Love Language Quiz
            </Link>
            <Link
              href="/articles"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              📚 Read Love Articles
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Quiz questions
  const question = soulmateQuestions[currentQuestion]

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
                Discover Your Soulmate Type
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-5 font-medium">
                Take this quiz to understand your relationship preferences and discover what you seek
                in a meaningful partnership. Answer honestly to reveal your ideal soulmate compatibility type.
              </p>
              <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-5 rounded-2xl border-2 border-rose-200 shadow-lg mt-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-lg font-bold text-gray-900">This Assessment Evaluates:</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-800">
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-rose-500">💖</span>
                    <span className="font-medium">Emotional connection style</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-pink-500">💬</span>
                    <span className="font-medium">Communication preferences</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-purple-500">🌟</span>
                    <span className="font-medium">Lifestyle compatibility</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-blue-500">🎯</span>
                    <span className="font-medium">Core values alignment</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-indigo-500">🔮</span>
                    <span className="font-medium">Future vision & goals</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-teal-500">💝</span>
                    <span className="font-medium">Ideal partner qualities</span>
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
                    Question {currentQuestion + 1} of {soulmateQuestions.length}
                  </h2>
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-3 shadow-lg">
              <span className="text-3xl">
                {question.category === 'communication' ? '💬' :
                 question.category === 'values' ? '🎯' :
                 question.category === 'lifestyle' ? '🌟' :
                 question.category === 'emotional' ? '💖' :
                 '🔮'}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              {question.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
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
        </div>
      </div>
    </div>
  )
}