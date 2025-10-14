'use client'

import { useState, useEffect } from 'react'
import { loveQuestions, loveQuizResults, calculateLoveQuizResult } from '@/lib/loveQuizData'
import Link from 'next/link'
import confetti from 'canvas-confetti'

export default function AmIInLovePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [resultLevel, setResultLevel] = useState('')
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const [animateResult, setAnimateResult] = useState(false)

  const maxScore = loveQuestions.length * 4 // Maximum possible score

  useEffect(() => {
    // Load previous results from localStorage if available
    const savedResult = localStorage.getItem('amIInLoveResult')
    const savedScore = localStorage.getItem('amIInLoveScore')
    if (savedResult && savedScore) {
      setResultLevel(savedResult)
    }
  }, [])

  useEffect(() => {
    // Trigger confetti and animation when results are shown
    if (showResult && resultLevel) {
      const result = loveQuizResults[resultLevel]
      // Only show confetti for positive results
      if (resultLevel === 'deeply_in_love' || resultLevel === 'strongly_attracted') {
        triggerConfetti()
      }
      setTimeout(() => setAnimateResult(true), 300)
    }
  }, [showResult, resultLevel])

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < loveQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((sum, score) => sum + score, 0)
    const level = calculateLoveQuizResult(totalScore, maxScore)

    setResultLevel(level)
    setShowResult(true)

    // Save to localStorage
    localStorage.setItem('amIInLoveResult', level)
    localStorage.setItem('amIInLoveScore', totalScore.toString())
    localStorage.setItem('amIInLoveTestDate', new Date().toISOString())
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

    const result = loveQuizResults[resultLevel]
    const totalScore = answers.reduce((sum, score) => sum + score, 0)
    const percentage = Math.round((totalScore / maxScore) * 100)

    const shareText = `I just took the "Am I in Love?" quiz and got: ${result.title} (${percentage}% love score)! Take the quiz to discover your feelings: ${window.location.origin}/am-i-in-love`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Am I in Love Quiz Result',
          text: shareText,
          url: window.location.origin + '/am-i-in-love',
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

  const progress = ((currentQuestion + 1) / loveQuestions.length) * 100
  const totalScore = answers.reduce((sum, score) => sum + score, 0)
  const percentage = Math.round((totalScore / maxScore) * 100)

  if (showResult && resultLevel) {
    const result = loveQuizResults[resultLevel]

    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Copy Notification */}
        {showCopyNotification && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            ✓ Copied to clipboard!
          </div>
        )}

        {/* Results Header */}
        <div className="text-center mb-8">
          <div
            className={`inline-block bg-gradient-to-r ${result.color} text-white px-6 py-3 rounded-full mb-4 transition-all duration-700 ${
              animateResult ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <span className="text-2xl font-bold">Quiz Completed!</span>
          </div>
          <h1
            className={`text-4xl font-bold text-gray-900 mb-2 transition-all duration-700 delay-200 ${
              animateResult ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Your Result
          </h1>
          <p
            className={`text-gray-600 transition-all duration-700 delay-300 ${
              animateResult ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Based on your answers, here&apos;s what your feelings reveal
          </p>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 delay-400 ${
            animateResult ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Result Hero Section */}
          <div className={`bg-gradient-to-br ${result.color} p-8 md:p-12 text-white`}>
            <div className="text-center">
              <div className="inline-block mb-4">
                <span className="text-7xl">{result.title.split(' ')[0]}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {result.title.substring(result.title.indexOf(' ') + 1)}
              </h2>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-2xl font-bold">Love Score: {percentage}%</p>
                <p className="text-sm mt-1 opacity-90">{totalScore} out of {maxScore} points</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Description */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="bg-rose-100 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  💭
                </span>
                What This Means
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {result.description}
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  📊
                </span>
                Your Score Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">Overall Love Score</span>
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Deeply in Love</div>
                    <div className="text-xs text-gray-500 mt-1">80-100%</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Strong Feelings</div>
                    <div className="text-xs text-gray-500 mt-1">60-79%</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Developing</div>
                    <div className="text-xs text-gray-500 mt-1">40-59%</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Uncertain</div>
                    <div className="text-xs text-gray-500 mt-1">20-39%</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Not in Love</div>
                    <div className="text-xs text-gray-500 mt-1">0-19%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advice Section */}
            <div className="mb-10 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100">
              <h3 className="text-2xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  💡
                </span>
                Advice for You
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

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <button
                onClick={handleShare}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Results
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

            {/* Info Box */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>Remember:</strong> This quiz is for self-reflection and entertainment. Love is complex and unique for everyone. Trust your own feelings and experiences above any quiz result.
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
    <div className="max-w-3xl mx-auto px-4 py-12">
      {currentQuestion === 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Am I in Love?</h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the truth about your feelings with this scientifically-informed quiz.
              Answer honestly based on how you truly feel, not how you think you should feel.
            </p>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg border-2 border-rose-100">
              <h3 className="font-semibold text-gray-900 mb-2">What This Quiz Measures:</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>💭 Emotional connection and intimacy</li>
                <li>🤝 Commitment and future thinking</li>
                <li>💖 Physical and romantic attraction</li>
                <li>🌟 Authenticity and vulnerability</li>
                <li>⚖️ Balance of give and take</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">
              Question {currentQuestion + 1} of {loveQuestions.length}
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
          {loveQuestions[currentQuestion].text}
        </h1>

        <div className="space-y-3">
          {loveQuestions[currentQuestion].options.map((option, index) => (
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
