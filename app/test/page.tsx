'use client'

import { useState, useEffect } from 'react'
import { questions, loveLanguageDescriptions, type QuizResult } from '@/lib/quizData'
import Link from 'next/link'

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [results, setResults] = useState<QuizResult[]>([])
  const [showCopyNotification, setShowCopyNotification] = useState(false)

  useEffect(() => {
    // Load previous results from localStorage if available
    const savedResults = localStorage.getItem('loveLanguageResults')
    if (savedResults) {
      setResults(JSON.parse(savedResults))
    }
  }, [])

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
  }

  const handleShare = async () => {
    if (results.length === 0) return

    const primaryLanguage = results[0].language
    const shareText = `I just discovered my primary love language is ${primaryLanguage}! Take the Love Language Quiz to discover yours: ${window.location.origin}/test`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Love Language Result',
          text: shareText,
          url: window.location.origin + '/test',
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

        {/* Celebration Banner */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full mb-4">
            <span className="text-2xl font-bold">🎉 Quiz Completed!</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Love Language Results
          </h1>
          <p className="text-gray-600">Discover how you express and receive love</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Primary Result - Hero Section */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 md:p-12 border-b-4 border-rose-500">
            <div className="text-center">
              <div className="inline-block mb-4">
                <span className="text-6xl">🏆</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                Your Primary Love Language
              </h2>
              <p className="text-5xl font-bold text-rose-600 mb-6">
                {languageInfo.title}
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                {languageInfo.description}
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Complete Results Breakdown */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="bg-rose-100 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  📊
                </span>
                Complete Results Breakdown
              </h3>
              <div className="space-y-5">
                {results.map((result, index) => {
                  const percentage = (result.score / questions.length) * 100
                  return (
                    <div
                      key={result.language}
                      className={`p-4 rounded-xl ${
                        index === 0 ? 'bg-rose-50 border-2 border-rose-200' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-800 text-lg">
                          {index === 0 && <span className="mr-2">👑</span>}
                          {result.language}
                        </span>
                        <span className="font-bold text-gray-700">
                          {result.score}/{questions.length} ({percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                          className={`h-4 rounded-full transition-all duration-1000 ease-out ${
                            index === 0
                              ? 'bg-gradient-to-r from-rose-500 to-pink-500'
                              : 'bg-gradient-to-r from-rose-300 to-pink-300'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tips Section */}
            <div className="mb-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-900 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  💡
                </span>
                Tips for {languageInfo.title}
              </h3>
              <ul className="space-y-3">
                {languageInfo.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <button
                onClick={handleShare}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Results
              </button>

              <button
                onClick={handleInvite}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Invite Others
              </button>

              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Retake Quiz
              </button>

              <Link
                href="/articles"
                className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read Articles
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
                    <strong>Note:</strong> Your results are saved locally in your browser. Share them with your partner or friends to learn more about each other!
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
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <span className="text-sm text-gray-600">{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-rose-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-8 text-gray-900">
          {questions[currentQuestion].text}
        </h1>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.language)}
              className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-rose-500 hover:bg-rose-50 transition-colors"
            >
              <span className="text-gray-800">{option.text}</span>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1)
              setAnswers(answers.slice(0, -1))
            }}
            className="mt-6 text-gray-600 hover:text-gray-900"
          >
            ← Previous Question
          </button>
        )}
      </div>
    </div>
  )
}
