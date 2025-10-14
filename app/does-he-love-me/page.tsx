'use client'

import { useState, useEffect } from 'react'
import { loveMeQuestions, loveMeQuizResults, calculateLoveMeQuizResult } from '@/lib/loveMeQuizData'
import Link from 'next/link'
import confetti from 'canvas-confetti'

export default function DoesHeLoveMePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [resultLevel, setResultLevel] = useState('')
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const [animateResult, setAnimateResult] = useState(false)

  const maxScore = loveMeQuestions.length * 4

  useEffect(() => {
    const savedResult = localStorage.getItem('loveMeQuizResult')
    const savedScore = localStorage.getItem('loveMeQuizScore')
    if (savedResult && savedScore) {
      setResultLevel(savedResult)
    }
  }, [])

  useEffect(() => {
    if (showResult && resultLevel) {
      if (resultLevel === 'deeply_loves_you' || resultLevel === 'truly_loves_you') {
        triggerConfetti()
      }
      setTimeout(() => setAnimateResult(true), 300)
    }
  }, [showResult, resultLevel])

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < loveMeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((sum, score) => sum + score, 0)
    const level = calculateLoveMeQuizResult(totalScore, maxScore)

    setResultLevel(level)
    setShowResult(true)

    localStorage.setItem('loveMeQuizResult', level)
    localStorage.setItem('loveMeQuizScore', totalScore.toString())
    localStorage.setItem('loveMeQuizTestDate', new Date().toISOString())
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setAnimateResult(false)
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

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#ec4899', '#8b5cf6', '#6366f1', '#3b82f6']
      })

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#ec4899', '#8b5cf6', '#6366f1', '#3b82f6']
      })
    }, 250)

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
    if (!resultLevel) return

    const result = loveMeQuizResults[resultLevel]
    const shareText = `I just took the "Does He/She Love Me?" quiz and discovered important insights about my relationship. Take the quiz to evaluate your relationship: ${window.location.origin}/does-he-love-me`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Does He/She Love Me? Quiz',
          text: shareText,
          url: window.location.origin + '/does-he-love-me',
        })
      } catch (err) {
        console.log('Share failed:', err)
      }
    } else {
      navigator.clipboard.writeText(shareText)
      setShowCopyNotification(true)
      setTimeout(() => setShowCopyNotification(false), 3000)
    }
  }

  const progress = ((currentQuestion + 1) / loveMeQuestions.length) * 100
  const totalScore = answers.reduce((sum, score) => sum + score, 0)
  const percentage = Math.round((totalScore / maxScore) * 100)

  if (showResult && resultLevel) {
    const result = loveMeQuizResults[resultLevel]

    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        {showCopyNotification && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            ✓ Copied to clipboard!
          </div>
        )}

        <div className="text-center mb-8">
          <div
            className={`inline-block bg-gradient-to-r ${result.color} text-white px-6 py-3 rounded-full mb-4 transition-all duration-700 ${
              animateResult ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <span className="text-2xl font-bold">Assessment Complete</span>
          </div>
          <h1
            className={`text-4xl font-bold text-gray-900 mb-2 transition-all duration-700 delay-200 ${
              animateResult ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Your Relationship Assessment
          </h1>
          <p
            className={`text-gray-600 transition-all duration-700 delay-300 ${
              animateResult ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Based on your partner&apos;s behaviors and treatment
          </p>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 delay-400 ${
            animateResult ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className={`bg-gradient-to-br ${result.color} p-8 md:p-12 text-white`}>
            <div className="text-center">
              <div className="inline-block mb-4">
                <span className="text-7xl">{result.emoji}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {result.title}
              </h2>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-2xl font-bold">Love Score: {percentage}%</p>
                <p className="text-sm mt-1 opacity-90">{totalScore} out of {maxScore} points</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="bg-rose-100 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  💭
                </span>
                Assessment Summary
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {result.description}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  📊
                </span>
                Relationship Health Score
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">Overall Love & Health</span>
                  <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div
                    className={`h-6 rounded-full transition-all duration-2000 ease-out bg-gradient-to-r ${result.color}`}
                    style={{
                      width: animateResult ? `${percentage}%` : '0%',
                    }}
                  />
                </div>

                {/* Assessment Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-lg border-2 border-rose-100">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">❤️</span>
                      <span className="font-semibold text-gray-800">Emotional Support</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      How they support you emotionally through good and bad times
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-100">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🤝</span>
                      <span className="font-semibold text-gray-800">Respect & Trust</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Mutual respect, honesty, and trustworthiness in the relationship
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-100">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">💖</span>
                      <span className="font-semibold text-gray-800">Affection & Priority</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      How they show love and make you feel valued and prioritized
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-100">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🌱</span>
                      <span className="font-semibold text-gray-800">Growth & Future</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Support for your goals and commitment to a shared future
                    </p>
                  </div>
                </div>

                {/* Level Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                  <div className={`text-center p-3 rounded-lg border-2 ${percentage >= 80 ? 'bg-rose-50 border-rose-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-lg mb-1">💝</div>
                    <div className="text-xs font-semibold text-gray-700">Deep Love</div>
                    <div className="text-xs text-gray-500">80-100%</div>
                  </div>
                  <div className={`text-center p-3 rounded-lg border-2 ${percentage >= 65 && percentage < 80 ? 'bg-rose-50 border-rose-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-lg mb-1">💖</div>
                    <div className="text-xs font-semibold text-gray-700">True Love</div>
                    <div className="text-xs text-gray-500">65-79%</div>
                  </div>
                  <div className={`text-center p-3 rounded-lg border-2 ${percentage >= 50 && percentage < 65 ? 'bg-yellow-50 border-yellow-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-lg mb-1">💛</div>
                    <div className="text-xs font-semibold text-gray-700">Love + Issues</div>
                    <div className="text-xs text-gray-500">50-64%</div>
                  </div>
                  <div className={`text-center p-3 rounded-lg border-2 ${percentage >= 35 && percentage < 50 ? 'bg-orange-50 border-orange-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-lg mb-1">💭</div>
                    <div className="text-xs font-semibold text-gray-700">Uncertain</div>
                    <div className="text-xs text-gray-500">35-49%</div>
                  </div>
                  <div className={`text-center p-3 rounded-lg border-2 ${percentage >= 20 && percentage < 35 ? 'bg-red-50 border-red-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-lg mb-1">💔</div>
                    <div className="text-xs font-semibold text-gray-700">Questionable</div>
                    <div className="text-xs text-gray-500">20-34%</div>
                  </div>
                  <div className={`text-center p-3 rounded-lg border-2 ${percentage < 20 ? 'bg-red-50 border-red-300' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-lg mb-1">🚩</div>
                    <div className="text-xs font-semibold text-gray-700">Unhealthy</div>
                    <div className="text-xs text-gray-500">0-19%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100">
              <h3 className="text-2xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  💡
                </span>
                What You Should Know
              </h3>
              <ul className="space-y-3">
                {result.advice.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <button
                onClick={handleShare}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Quiz
              </button>

              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Retake Quiz
              </button>

              <Link
                href="/test"
                className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Love Language Quiz
              </Link>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>Important:</strong> This quiz is a tool for self-reflection, not professional advice. If you&apos;re in an unhealthy or unsafe relationship, please reach out to a counselor, therapist, or support hotline.
                  </p>
                </div>
              </div>
            </div>

            {percentage < 50 && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Need Support?</strong> National Domestic Violence Hotline: 1-800-799-7233 (24/7) or visit thehotline.org
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {currentQuestion === 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">💝🤔</div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Does He/She Love Me?</h1>
            <p className="text-lg text-gray-600 mb-6">
              Evaluate the health and depth of love in your relationship. This assessment analyzes
              key behaviors and patterns that indicate genuine, healthy love. Answer honestly based
              on consistent patterns, not occasional incidents.
            </p>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg border-2 border-rose-100">
              <h3 className="font-semibold text-gray-900 mb-3">This Assessment Evaluates:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-gray-700">
                <div className="flex items-start">
                  <span className="mr-2">❤️</span>
                  <span>Emotional support & empathy</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">🤝</span>
                  <span>Respect & trust</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">💖</span>
                  <span>Affection & prioritization</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">🗣️</span>
                  <span>Communication & conflict resolution</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">🌱</span>
                  <span>Support for your growth</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">🔮</span>
                  <span>Commitment & future planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">
              Question {currentQuestion + 1} of {loveMeQuestions.length}
            </h2>
            <span className="text-sm text-gray-600">{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-8 text-gray-900">
          {loveMeQuestions[currentQuestion].text}
        </h1>

        <div className="space-y-3">
          {loveMeQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-rose-500 hover:bg-rose-50 transition-all group"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-100 group-hover:bg-rose-100 rounded-full flex items-center justify-center mr-3 text-sm font-semibold text-gray-600 group-hover:text-rose-600 transition-colors">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-800 flex-grow">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1)
              setAnswers(answers.slice(0, -1))
            }}
            className="mt-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Question
          </button>
        )}
      </div>
    </div>
  )
}
