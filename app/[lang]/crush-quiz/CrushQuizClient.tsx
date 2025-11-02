'use client'

import { useState, useEffect } from 'react'
import type { CrushQuestion, CrushQuizResult } from '@/lib/crushQuizData'
import { calculateCrushQuizResult } from '@/lib/crushQuizData'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'
import confetti from 'canvas-confetti'

interface CrushQuizClientProps {
  lang: Locale
  questions: CrushQuestion[]
  results: Record<string, CrushQuizResult>
}

const translations: Record<Locale, {
  title: string
  subtitle: string
  evaluates: string
  communicationPatterns: string
  timeAttention: string
  bodyLanguage: string
  effortInitiative: string
  emotionalEngagement: string
  socialMedia: string
  question: string
  of: string
  previous: string
  resultsIn: string
  basedOn: string
  interestLevel: string
  outOf: string
  points: string
  verdict: string
  interestAnalysis: string
  signsTheyLike: string
  definitely: string
  veryLikely: string
  possibly: string
  unclear: string
  justFriends: string
  notInterested: string
  whatToDo: string
  shareResults: string
  retakeQuiz: string
  loveLanguageQuiz: string
  disclaimer: string
  disclaimerText: string
  shareTitle: string
  shareSubtitle: string
  sharePreview: string
  yourAssessment: string
  shareOn: string
  twitter: string
  facebook: string
  whatsapp: string
  telegram: string
  copyLink: string
  copied: string
}> = {
  en: {
    title: "Does My Crush Like Me?",
    subtitle: "Wondering if your crush feels the same way? Answer honestly based on what you've actually observed. Discover the signs and signals they might be showing.",
    evaluates: "This Assessment Evaluates:",
    communicationPatterns: "Communication patterns",
    timeAttention: "Time and attention given",
    bodyLanguage: "Body language signals",
    effortInitiative: "Effort and initiative",
    emotionalEngagement: "Emotional engagement",
    socialMedia: "Social media behavior",
    question: "Question",
    of: "of",
    previous: "Previous",
    resultsIn: "Results Are In!",
    basedOn: "Based on the signs you've observed",
    interestLevel: "Interest Level:",
    outOf: "out of",
    points: "points",
    verdict: "The Verdict",
    interestAnalysis: "Interest Level Analysis",
    signsTheyLike: "Signs They Like You",
    definitely: "Definitely",
    veryLikely: "Very Likely",
    possibly: "Possibly",
    unclear: "Unclear",
    justFriends: "Just Friends",
    notInterested: "Not Interested",
    whatToDo: "What to Do Next",
    shareResults: "Share Results",
    retakeQuiz: "Retake Quiz",
    loveLanguageQuiz: "Love Language Quiz",
    disclaimer: "Disclaimer:",
    disclaimerText: "This quiz is for fun and self-reflection. Real relationships require direct communication. The best way to know if someone likes you is to have an honest conversation with them.",
    shareTitle: "Share Your Results",
    shareSubtitle: "Let your friends find out if their crush likes them too!",
    sharePreview: "Your Crush Assessment",
    yourAssessment: "Your Crush Assessment",
    shareOn: "Share on:",
    twitter: "Twitter/X",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    copyLink: "Copy Link",
    copied: "Copied to clipboard!",
  },
  de: {
    title: "Mag mein Schwarm mich?",
    subtitle: "Fragst du dich, ob dein Schwarm genauso fühlt? Antworte ehrlich basierend auf dem, was du tatsächlich beobachtet hast. Entdecke die Zeichen und Signale, die er/sie zeigen könnte.",
    evaluates: "Diese Bewertung untersucht:",
    communicationPatterns: "Kommunikationsmuster",
    timeAttention: "Gegebene Zeit und Aufmerksamkeit",
    bodyLanguage: "Körpersprache-Signale",
    effortInitiative: "Anstrengung und Initiative",
    emotionalEngagement: "Emotionales Engagement",
    socialMedia: "Social-Media-Verhalten",
    question: "Frage",
    of: "von",
    previous: "Zurück",
    resultsIn: "Die Ergebnisse sind da!",
    basedOn: "Basierend auf den von dir beobachteten Zeichen",
    interestLevel: "Interessensniveau:",
    outOf: "von",
    points: "Punkten",
    verdict: "Das Urteil",
    interestAnalysis: "Interessensniveau-Analyse",
    signsTheyLike: "Zeichen, dass er/sie dich mag",
    definitely: "Definitiv",
    veryLikely: "Sehr wahrscheinlich",
    possibly: "Möglicherweise",
    unclear: "Unklar",
    justFriends: "Nur Freunde",
    notInterested: "Nicht interessiert",
    whatToDo: "Was als Nächstes zu tun ist",
    shareResults: "Ergebnisse teilen",
    retakeQuiz: "Quiz wiederholen",
    loveLanguageQuiz: "Liebessprachen-Quiz",
    disclaimer: "Haftungsausschluss:",
    disclaimerText: "Dieses Quiz dient dem Spaß und der Selbstreflexion. Echte Beziehungen erfordern direkte Kommunikation. Der beste Weg zu wissen, ob jemand dich mag, ist ein ehrliches Gespräch.",
    shareTitle: "Teile deine Ergebnisse",
    shareSubtitle: "Lass deine Freunde herausfinden, ob ihr Schwarm sie auch mag!",
    sharePreview: "Deine Schwarm-Bewertung",
    yourAssessment: "Deine Schwarm-Bewertung",
    shareOn: "Teilen auf:",
    twitter: "Twitter/X",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    copyLink: "Link kopieren",
    copied: "In Zwischenablage kopiert!",
  },
  fr: {
    title: "Mon crush m'aime-t-il/elle ?",
    subtitle: "Vous vous demandez si votre crush ressent la même chose ? Répondez honnêtement en vous basant sur ce que vous avez réellement observé. Découvrez les signes et signaux qu'il/elle pourrait montrer.",
    evaluates: "Cette évaluation examine :",
    communicationPatterns: "Modèles de communication",
    timeAttention: "Temps et attention accordés",
    bodyLanguage: "Signaux du langage corporel",
    effortInitiative: "Effort et initiative",
    emotionalEngagement: "Engagement émotionnel",
    socialMedia: "Comportement sur les réseaux sociaux",
    question: "Question",
    of: "sur",
    previous: "Précédent",
    resultsIn: "Les résultats sont là !",
    basedOn: "Basé sur les signes que vous avez observés",
    interestLevel: "Niveau d'intérêt :",
    outOf: "sur",
    points: "points",
    verdict: "Le verdict",
    interestAnalysis: "Analyse du niveau d'intérêt",
    signsTheyLike: "Signes qu'il/elle vous aime",
    definitely: "Définitivement",
    veryLikely: "Très probable",
    possibly: "Possiblement",
    unclear: "Peu clair",
    justFriends: "Juste amis",
    notInterested: "Pas intéressé",
    whatToDo: "Que faire ensuite",
    shareResults: "Partager les résultats",
    retakeQuiz: "Refaire le quiz",
    loveLanguageQuiz: "Quiz des langages d'amour",
    disclaimer: "Avertissement :",
    disclaimerText: "Ce quiz est pour le divertissement et l'auto-réflexion. Les vraies relations nécessitent une communication directe. La meilleure façon de savoir si quelqu'un vous aime est d'avoir une conversation honnête.",
    shareTitle: "Partagez vos résultats",
    shareSubtitle: "Laissez vos amis découvrir si leur crush les aime aussi !",
    sharePreview: "Votre évaluation de crush",
    yourAssessment: "Votre évaluation de crush",
    shareOn: "Partager sur :",
    twitter: "Twitter/X",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    copyLink: "Copier le lien",
    copied: "Copié dans le presse-papiers !",
  },
  es: {
    title: "¿Le gusto a mi crush?",
    subtitle: "¿Te preguntas si tu crush siente lo mismo? Responde honestamente basándote en lo que has observado. Descubre las señales que podría estar mostrando.",
    evaluates: "Esta evaluación examina:",
    communicationPatterns: "Patrones de comunicación",
    timeAttention: "Tiempo y atención dados",
    bodyLanguage: "Señales de lenguaje corporal",
    effortInitiative: "Esfuerzo e iniciativa",
    emotionalEngagement: "Compromiso emocional",
    socialMedia: "Comportamiento en redes sociales",
    question: "Pregunta",
    of: "de",
    previous: "Anterior",
    resultsIn: "¡Los resultados están aquí!",
    basedOn: "Basado en las señales que has observado",
    interestLevel: "Nivel de interés:",
    outOf: "de",
    points: "puntos",
    verdict: "El veredicto",
    interestAnalysis: "Análisis del nivel de interés",
    signsTheyLike: "Señales de que le gustas",
    definitely: "Definitivamente",
    veryLikely: "Muy probable",
    possibly: "Posiblemente",
    unclear: "Poco claro",
    justFriends: "Solo amigos",
    notInterested: "No interesado",
    whatToDo: "Qué hacer a continuación",
    shareResults: "Compartir resultados",
    retakeQuiz: "Repetir quiz",
    loveLanguageQuiz: "Quiz de lenguajes del amor",
    disclaimer: "Descargo de responsabilidad:",
    disclaimerText: "Este quiz es para diversión y autorreflexión. Las relaciones reales requieren comunicación directa. La mejor manera de saber si alguien te gusta es tener una conversación honesta.",
    shareTitle: "Comparte tus resultados",
    shareSubtitle: "¡Deja que tus amigos descubran si su crush también les gusta!",
    sharePreview: "Tu evaluación de crush",
    yourAssessment: "Tu evaluación de crush",
    shareOn: "Compartir en:",
    twitter: "Twitter/X",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    copyLink: "Copiar enlace",
    copied: "¡Copiado al portapapeles!",
  },
  ru: {
    title: "Нравлюсь ли я своему объекту симпатии?",
    subtitle: "Интересно, испытывает ли ваш объект симпатии то же самое? Отвечайте честно, основываясь на том, что вы действительно наблюдали. Откройте для себя знаки и сигналы, которые он/она может показывать.",
    evaluates: "Эта оценка исследует:",
    communicationPatterns: "Модели общения",
    timeAttention: "Уделенное время и внимание",
    bodyLanguage: "Сигналы языка тела",
    effortInitiative: "Усилия и инициатива",
    emotionalEngagement: "Эмоциональное вовлечение",
    socialMedia: "Поведение в социальных сетях",
    question: "Вопрос",
    of: "из",
    previous: "Назад",
    resultsIn: "Результаты готовы!",
    basedOn: "На основе наблюдаемых вами знаков",
    interestLevel: "Уровень интереса:",
    outOf: "из",
    points: "баллов",
    verdict: "Вердикт",
    interestAnalysis: "Анализ уровня интереса",
    signsTheyLike: "Признаки симпатии",
    definitely: "Определенно",
    veryLikely: "Очень вероятно",
    possibly: "Возможно",
    unclear: "Неясно",
    justFriends: "Просто друзья",
    notInterested: "Не интересуется",
    whatToDo: "Что делать дальше",
    shareResults: "Поделиться результатами",
    retakeQuiz: "Пройти заново",
    loveLanguageQuiz: "Квиз языков любви",
    disclaimer: "Отказ от ответственности:",
    disclaimerText: "Этот квиз предназначен для развлечения и самоанализа. Настоящие отношения требуют прямого общения. Лучший способ узнать, нравитесь ли вы кому-то - честный разговор.",
    shareTitle: "Поделитесь своими результатами",
    shareSubtitle: "Пусть ваши друзья узнают, нравятся ли они своему объекту симпатии!",
    sharePreview: "Ваша оценка симпатии",
    yourAssessment: "Ваша оценка симпатии",
    shareOn: "Поделиться в:",
    twitter: "Twitter/X",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    copyLink: "Копировать ссылку",
    copied: "Скопировано в буфер обмена!",
  },
}

export default function CrushQuizClient({
  lang,
  questions,
  results
}: CrushQuizClientProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [resultLevel, setResultLevel] = useState('')
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const [animateResult, setAnimateResult] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)

  const t = translations[lang]
  const maxScore = questions.length * 4

  const buildPath = (path: string) => {
    return lang === 'en' ? path : `/${lang}${path}`
  }

  useEffect(() => {
    const storageKey = `crushQuizResult_${lang}`
    const scoreKey = `crushQuizScore_${lang}`
    const savedResult = localStorage.getItem(storageKey)
    const savedScore = localStorage.getItem(scoreKey)
    if (savedResult && savedScore) {
      setResultLevel(savedResult)
    }
  }, [lang])

  useEffect(() => {
    if (showResult && resultLevel) {
      if (resultLevel === 'definitely_interested' || resultLevel === 'very_likely') {
        triggerConfetti()
      }
      setTimeout(() => setAnimateResult(true), 300)
    }
  }, [showResult, resultLevel])

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((sum, score) => sum + score, 0)
    const level = calculateCrushQuizResult(totalScore, maxScore)

    setResultLevel(level)
    setShowResult(true)

    const storageKey = `crushQuizResult_${lang}`
    const scoreKey = `crushQuizScore_${lang}`
    const dateKey = `crushQuizTestDate_${lang}`

    localStorage.setItem(storageKey, level)
    localStorage.setItem(scoreKey, totalScore.toString())
    localStorage.setItem(dateKey, new Date().toISOString())
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

  const handleShare = () => {
    if (!resultLevel) return
    setShowShareModal(true)
  }

  const handleSocialShare = (platform: string) => {
    if (!resultLevel) return

    const result = results[resultLevel]
    const totalScore = answers.reduce((sum, score) => sum + score, 0)
    const percentage = Math.round((totalScore / maxScore) * 100)
    const text = encodeURIComponent(
      `I just took the "Does My Crush Like Me?" quiz and got: ${result.title} (${percentage}% compatibility)! 💕\n\nFind out if your crush likes you!`
    )
    const url = encodeURIComponent(window.location.origin + buildPath('/crush-quiz'))

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
        const copyText = `I just took the "Does My Crush Like Me?" quiz and got: ${result.title} (${percentage}% compatibility)! 💕\n\nFind out if your crush likes you!\n\n${window.location.origin}${buildPath('/crush-quiz')}`
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

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const totalScore = answers.reduce((sum, score) => sum + score, 0)
  const percentage = Math.round((totalScore / maxScore) * 100)

  if (showResult && resultLevel) {
    const result = results[resultLevel]

    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        {showCopyNotification && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            ✓ {t.copied}
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
                  {t.shareTitle}
                </h3>
                <p className="text-gray-600">
                  {t.shareSubtitle}
                </p>
              </div>

              {/* Result Preview */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 mb-6 border border-rose-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">{t.yourAssessment}</p>
                  <p className="text-2xl font-bold text-rose-600 mb-1">{result.title}</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {percentage}% {t.interestLevel.replace(':', '')}
                  </p>
                </div>
              </div>

              {/* Share Options */}
              <div className="space-y-3 mb-6">
                <p className="text-sm font-medium text-gray-700 text-center mb-3">{t.shareOn}</p>

                {/* Social Media Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSocialShare('twitter')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    {t.twitter}
                  </button>

                  <button
                    onClick={() => handleSocialShare('facebook')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    {t.facebook}
                  </button>

                  <button
                    onClick={() => handleSocialShare('whatsapp')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t.whatsapp}
                  </button>

                  <button
                    onClick={() => handleSocialShare('telegram')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 rounded-lg transition-all hover:scale-105 hover:shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    {t.telegram}
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
                  {t.copyLink}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-8">
          <div
            className={`inline-block bg-gradient-to-r ${result.color} text-white px-6 py-3 rounded-full mb-4 transition-all duration-700 ${
              animateResult ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <span className="text-2xl font-bold">{t.resultsIn}</span>
          </div>
          <h1
            className={`text-4xl font-bold text-gray-900 mb-2 transition-all duration-700 delay-200 ${
              animateResult ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {t.title}
          </h1>
          <p
            className={`text-gray-600 transition-all duration-700 delay-300 ${
              animateResult ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {t.basedOn}
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
                <p className="text-2xl font-bold">{t.interestLevel} {percentage}%</p>
                <p className="text-sm mt-1 opacity-90">{totalScore} {t.outOf} {maxScore} {t.points}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="bg-rose-100 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  💭
                </span>
                {t.verdict}
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
                {t.interestAnalysis}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">{t.signsTheyLike}</span>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className={`text-center p-4 rounded-lg border-2 ${percentage >= 75 ? 'bg-rose-50 border-rose-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-2xl mb-1">🎉</div>
                    <div className="text-sm font-semibold text-gray-700">{t.definitely}</div>
                    <div className="text-xs text-gray-500 mt-1">75-100%</div>
                  </div>
                  <div className={`text-center p-4 rounded-lg border-2 ${percentage >= 60 && percentage < 75 ? 'bg-rose-50 border-rose-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-2xl mb-1">😊</div>
                    <div className="text-sm font-semibold text-gray-700">{t.veryLikely}</div>
                    <div className="text-xs text-gray-500 mt-1">60-74%</div>
                  </div>
                  <div className={`text-center p-4 rounded-lg border-2 ${percentage >= 45 && percentage < 60 ? 'bg-rose-50 border-rose-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-2xl mb-1">🤔</div>
                    <div className="text-sm font-semibold text-gray-700">{t.possibly}</div>
                    <div className="text-xs text-gray-500 mt-1">45-59%</div>
                  </div>
                  <div className={`text-center p-4 rounded-lg border-2 ${percentage >= 30 && percentage < 45 ? 'bg-rose-50 border-rose-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-2xl mb-1">💭</div>
                    <div className="text-sm font-semibold text-gray-700">{t.unclear}</div>
                    <div className="text-xs text-gray-500 mt-1">30-44%</div>
                  </div>
                  <div className={`text-center p-4 rounded-lg border-2 ${percentage >= 15 && percentage < 30 ? 'bg-rose-50 border-rose-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-2xl mb-1">💙</div>
                    <div className="text-sm font-semibold text-gray-700">{t.justFriends}</div>
                    <div className="text-xs text-gray-500 mt-1">15-29%</div>
                  </div>
                  <div className={`text-center p-4 rounded-lg border-2 ${percentage < 15 ? 'bg-rose-50 border-rose-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="text-2xl mb-1">💔</div>
                    <div className="text-sm font-semibold text-gray-700">{t.notInterested}</div>
                    <div className="text-xs text-gray-500 mt-1">0-14%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100">
              <h3 className="text-2xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  💡
                </span>
                {t.whatToDo}
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
                {t.shareResults}
              </button>

              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {t.retakeQuiz}
              </button>

              <Link
                href={buildPath('/test')}
                className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {t.loveLanguageQuiz}
              </Link>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>{t.disclaimer}</strong> {t.disclaimerText}
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
                {t.title}
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-5 font-medium">
                {t.subtitle}
              </p>
              <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-5 rounded-2xl border-2 border-rose-200 shadow-lg mt-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-lg font-bold text-gray-900">{t.evaluates}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-800">
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-rose-500">💬</span>
                    <span className="font-medium">{t.communicationPatterns}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-pink-500">⏰</span>
                    <span className="font-medium">{t.timeAttention}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-purple-500">👀</span>
                    <span className="font-medium">{t.bodyLanguage}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-blue-500">✨</span>
                    <span className="font-medium">{t.effortInitiative}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-indigo-500">❤️</span>
                    <span className="font-medium">{t.emotionalEngagement}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-teal-500">📱</span>
                    <span className="font-medium">{t.socialMedia}</span>
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
                    {t.question} {currentQuestion + 1} {t.of} {questions.length}
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
                onClick={() => handleAnswer(option.score)}
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
                {t.previous}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
