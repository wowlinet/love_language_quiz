'use client'

import { useState, useEffect } from 'react'
import type { SoulmateQuestion, SoulmateResult, QuizResponse } from '@/lib/soulmateQuizData'
import { calculateSoulmateResult } from '@/lib/soulmateQuizData'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'
import confetti from 'canvas-confetti'

interface SoulmateClientProps {
  lang: Locale
  questions: SoulmateQuestion[]
  soulmateTypes: Record<string, SoulmateResult>
}

const translations: Record<Locale, {
  // Landing page
  discoverTitle: string
  compatibilityType: string
  landingSubtitle: string
  whatYouDiscover: string
  uniqueType: string
  detailedAnalysis: string
  personalizedInsights: string
  practicalTips: string
  takesTime: string
  thoughtfulQuestions: string
  privateSecure: string
  noRegistration: string
  startQuiz: string
  freeNoEmail: string
  // Quiz
  question: string
  of: string
  quizTitle: string
  quizSubtitle: string
  evaluates: string
  emotionalStyle: string
  communicationPrefs: string
  lifestyleCompat: string
  coreValues: string
  futureVision: string
  idealQualities: string
  // Results
  quizCompleted: string
  yourResults: string
  discoverIdeal: string
  yourType: string
  compatibilityProfile: string
  emotional: string
  communication: string
  lifestyle: string
  values: string
  future: string
  keyCharacteristics: string
  findingTips: string
  idealPartner: string
  shareResults: string
  inviteSomeone: string
  retakeQuiz: string
  rememberTitle: string
  rememberText: string
  exploreMore: string
  loveLangQuiz: string
  readArticles: string
  copied: string
}> = {
  en: {
    discoverTitle: "Discover Your Soulmate",
    compatibilityType: "Compatibility Type",
    landingSubtitle: "Take our comprehensive compatibility quiz to understand your relationship preferences, discover what you seek in a meaningful partnership, and learn how to recognize your ideal soulmate.",
    whatYouDiscover: "What You'll Discover:",
    uniqueType: "Your unique soulmate compatibility type",
    detailedAnalysis: "Detailed compatibility analysis across 5 key dimensions",
    personalizedInsights: "Personalized insights about your ideal partner",
    practicalTips: "Practical tips for building meaningful relationships",
    takesTime: "Takes only 3-5 minutes",
    thoughtfulQuestions: "10 thoughtful questions",
    privateSecure: "100% Private & Secure",
    noRegistration: "No registration required",
    startQuiz: "Start Your Soulmate Quiz",
    freeNoEmail: "Free • No email required • Instant results",
    question: "Question",
    of: "of",
    quizTitle: "Discover Your Soulmate Type",
    quizSubtitle: "Take this quiz to understand your relationship preferences and discover what you seek in a meaningful partnership. Answer honestly to reveal your ideal soulmate compatibility type.",
    evaluates: "This Assessment Evaluates:",
    emotionalStyle: "Emotional connection style",
    communicationPrefs: "Communication preferences",
    lifestyleCompat: "Lifestyle compatibility",
    coreValues: "Core values alignment",
    futureVision: "Future vision & goals",
    idealQualities: "Ideal partner qualities",
    quizCompleted: "🎉 Quiz Completed!",
    yourResults: "Your Soulmate Compatibility Results",
    discoverIdeal: "Discover your ideal partner characteristics",
    yourType: "Your Soulmate Compatibility Type",
    compatibilityProfile: "Your Compatibility Profile",
    emotional: "💖 Emotional",
    communication: "💬 Communication",
    lifestyle: "🌟 Lifestyle",
    values: "🎯 Values",
    future: "🔮 Future",
    keyCharacteristics: "Your Key Characteristics",
    findingTips: "Tips for Finding Your Soulmate",
    idealPartner: "Your Ideal Partner Qualities",
    shareResults: "📱 Share Results",
    inviteSomeone: "💌 Invite Someone",
    retakeQuiz: "🔄 Retake Quiz",
    rememberTitle: "Remember: Love is a Journey",
    rememberText: "Your soulmate compatibility type is a guide to understanding your relationship preferences. True love grows through understanding, communication, and shared experiences. Use these insights as a starting point for building meaningful connections.",
    exploreMore: "Explore More About Love & Relationships",
    loveLangQuiz: "💕 Take Love Language Quiz",
    readArticles: "📚 Read Love Articles",
    copied: "Copied to clipboard!",
  },
  de: {
    discoverTitle: "Entdecke deinen Seelenverwandten",
    compatibilityType: "Kompatibilitätstyp",
    landingSubtitle: "Mache unser umfassendes Kompatibilitätsquiz, um deine Beziehungspräferenzen zu verstehen, zu entdecken, was du in einer bedeutungsvollen Partnerschaft suchst, und zu lernen, wie du deinen idealen Seelenverwandten erkennst.",
    whatYouDiscover: "Was du entdecken wirst:",
    uniqueType: "Deinen einzigartigen Seelenverwandten-Kompatibilitätstyp",
    detailedAnalysis: "Detaillierte Kompatibilitätsanalyse über 5 Schlüsseldimensionen",
    personalizedInsights: "Personalisierte Einblicke über deinen idealen Partner",
    practicalTips: "Praktische Tipps zum Aufbau bedeutungsvoller Beziehungen",
    takesTime: "Dauert nur 3-5 Minuten",
    thoughtfulQuestions: "10 durchdachte Fragen",
    privateSecure: "100% Privat & Sicher",
    noRegistration: "Keine Registrierung erforderlich",
    startQuiz: "Starte dein Seelenverwandten-Quiz",
    freeNoEmail: "Kostenlos • Keine E-Mail erforderlich • Sofortige Ergebnisse",
    question: "Frage",
    of: "von",
    quizTitle: "Entdecke deinen Seelenverwandten-Typ",
    quizSubtitle: "Mache dieses Quiz, um deine Beziehungspräferenzen zu verstehen und zu entdecken, was du in einer bedeutungsvollen Partnerschaft suchst. Antworte ehrlich, um deinen idealen Seelenverwandten-Kompatibilitätstyp zu enthüllen.",
    evaluates: "Diese Bewertung untersucht:",
    emotionalStyle: "Emotionaler Verbindungsstil",
    communicationPrefs: "Kommunikationspräferenzen",
    lifestyleCompat: "Lebensstil-Kompatibilität",
    coreValues: "Kernwerte-Ausrichtung",
    futureVision: "Zukunftsvision & Ziele",
    idealQualities: "Ideale Partnerqualitäten",
    quizCompleted: "🎉 Quiz Abgeschlossen!",
    yourResults: "Deine Seelenverwandten-Kompatibilitätsergebnisse",
    discoverIdeal: "Entdecke deine idealen Partnereigenschaften",
    yourType: "Dein Seelenverwandten-Kompatibilitätstyp",
    compatibilityProfile: "Dein Kompatibilitätsprofil",
    emotional: "💖 Emotional",
    communication: "💬 Kommunikation",
    lifestyle: "🌟 Lebensstil",
    values: "🎯 Werte",
    future: "🔮 Zukunft",
    keyCharacteristics: "Deine Schlüsselmerkmale",
    findingTips: "Tipps zur Suche nach deinem Seelenverwandten",
    idealPartner: "Deine idealen Partnerqualitäten",
    shareResults: "📱 Ergebnisse teilen",
    inviteSomeone: "💌 Jemanden einladen",
    retakeQuiz: "🔄 Quiz wiederholen",
    rememberTitle: "Denke daran: Liebe ist eine Reise",
    rememberText: "Dein Seelenverwandten-Kompatibilitätstyp ist ein Leitfaden zum Verständnis deiner Beziehungspräferenzen. Wahre Liebe wächst durch Verständnis, Kommunikation und gemeinsame Erfahrungen. Nutze diese Erkenntnisse als Ausgangspunkt für den Aufbau bedeutungsvoller Verbindungen.",
    exploreMore: "Erkunde mehr über Liebe & Beziehungen",
    loveLangQuiz: "💕 Liebessprachen-Quiz machen",
    readArticles: "📚 Liebesartikel lesen",
    copied: "In Zwischenablage kopiert!",
  },
  fr: {
    discoverTitle: "Découvrez votre âme sœur",
    compatibilityType: "Type de compatibilité",
    landingSubtitle: "Répondez à notre quiz de compatibilité complet pour comprendre vos préférences relationnelles, découvrir ce que vous recherchez dans un partenariat significatif et apprendre à reconnaître votre âme sœur idéale.",
    whatYouDiscover: "Ce que vous découvrirez :",
    uniqueType: "Votre type de compatibilité d'âme sœur unique",
    detailedAnalysis: "Analyse détaillée de la compatibilité sur 5 dimensions clés",
    personalizedInsights: "Aperçus personnalisés sur votre partenaire idéal",
    practicalTips: "Conseils pratiques pour construire des relations significatives",
    takesTime: "Prend seulement 3-5 minutes",
    thoughtfulQuestions: "10 questions réfléchies",
    privateSecure: "100% Privé et Sécurisé",
    noRegistration: "Aucune inscription requise",
    startQuiz: "Commencer votre quiz d'âme sœur",
    freeNoEmail: "Gratuit • Aucun email requis • Résultats instantanés",
    question: "Question",
    of: "sur",
    quizTitle: "Découvrez votre type d'âme sœur",
    quizSubtitle: "Répondez à ce quiz pour comprendre vos préférences relationnelles et découvrir ce que vous recherchez dans un partenariat significatif. Répondez honnêtement pour révéler votre type de compatibilité d'âme sœur idéal.",
    evaluates: "Cette évaluation examine :",
    emotionalStyle: "Style de connexion émotionnelle",
    communicationPrefs: "Préférences de communication",
    lifestyleCompat: "Compatibilité du mode de vie",
    coreValues: "Alignement des valeurs fondamentales",
    futureVision: "Vision et objectifs d'avenir",
    idealQualities: "Qualités de partenaire idéal",
    quizCompleted: "🎉 Quiz Terminé !",
    yourResults: "Vos résultats de compatibilité d'âme sœur",
    discoverIdeal: "Découvrez les caractéristiques de votre partenaire idéal",
    yourType: "Votre type de compatibilité d'âme sœur",
    compatibilityProfile: "Votre profil de compatibilité",
    emotional: "💖 Émotionnel",
    communication: "💬 Communication",
    lifestyle: "🌟 Mode de vie",
    values: "🎯 Valeurs",
    future: "🔮 Avenir",
    keyCharacteristics: "Vos caractéristiques clés",
    findingTips: "Conseils pour trouver votre âme sœur",
    idealPartner: "Qualités de votre partenaire idéal",
    shareResults: "📱 Partager les résultats",
    inviteSomeone: "💌 Inviter quelqu'un",
    retakeQuiz: "🔄 Refaire le quiz",
    rememberTitle: "Rappelez-vous : L'amour est un voyage",
    rememberText: "Votre type de compatibilité d'âme sœur est un guide pour comprendre vos préférences relationnelles. Le véritable amour grandit par la compréhension, la communication et les expériences partagées. Utilisez ces aperçus comme point de départ pour construire des connexions significatives.",
    exploreMore: "Explorez plus sur l'amour et les relations",
    loveLangQuiz: "💕 Faire le quiz des langages d'amour",
    readArticles: "📚 Lire des articles sur l'amour",
    copied: "Copié dans le presse-papiers !",
  },
  es: {
    discoverTitle: "Descubre a tu alma gemela",
    compatibilityType: "Tipo de compatibilidad",
    landingSubtitle: "Realiza nuestro quiz completo de compatibilidad para entender tus preferencias de relación, descubrir qué buscas en una pareja significativa y aprender a reconocer a tu alma gemela ideal.",
    whatYouDiscover: "Lo que descubrirás:",
    uniqueType: "Tu tipo único de compatibilidad de alma gemela",
    detailedAnalysis: "Análisis detallado de compatibilidad en 5 dimensiones clave",
    personalizedInsights: "Perspectivas personalizadas sobre tu pareja ideal",
    practicalTips: "Consejos prácticos para construir relaciones significativas",
    takesTime: "Solo toma 3-5 minutos",
    thoughtfulQuestions: "10 preguntas reflexivas",
    privateSecure: "100% Privado y Seguro",
    noRegistration: "Sin registro requerido",
    startQuiz: "Comienza tu quiz de alma gemela",
    freeNoEmail: "Gratis • Sin correo requerido • Resultados instantáneos",
    question: "Pregunta",
    of: "de",
    quizTitle: "Descubre tu tipo de alma gemela",
    quizSubtitle: "Realiza este quiz para entender tus preferencias de relación y descubrir qué buscas en una pareja significativa. Responde honestamente para revelar tu tipo de compatibilidad de alma gemela ideal.",
    evaluates: "Esta evaluación examina:",
    emotionalStyle: "Estilo de conexión emocional",
    communicationPrefs: "Preferencias de comunicación",
    lifestyleCompat: "Compatibilidad de estilo de vida",
    coreValues: "Alineación de valores fundamentales",
    futureVision: "Visión y objetivos futuros",
    idealQualities: "Cualidades de pareja ideal",
    quizCompleted: "🎉 ¡Quiz Completado!",
    yourResults: "Tus resultados de compatibilidad de alma gemela",
    discoverIdeal: "Descubre las características de tu pareja ideal",
    yourType: "Tu tipo de compatibilidad de alma gemela",
    compatibilityProfile: "Tu perfil de compatibilidad",
    emotional: "💖 Emocional",
    communication: "💬 Comunicación",
    lifestyle: "🌟 Estilo de vida",
    values: "🎯 Valores",
    future: "🔮 Futuro",
    keyCharacteristics: "Tus características clave",
    findingTips: "Consejos para encontrar a tu alma gemela",
    idealPartner: "Cualidades de tu pareja ideal",
    shareResults: "📱 Compartir resultados",
    inviteSomeone: "💌 Invitar a alguien",
    retakeQuiz: "🔄 Repetir quiz",
    rememberTitle: "Recuerda: El amor es un viaje",
    rememberText: "Tu tipo de compatibilidad de alma gemela es una guía para entender tus preferencias de relación. El amor verdadero crece a través de la comprensión, la comunicación y las experiencias compartidas. Usa estas perspectivas como punto de partida para construir conexiones significativas.",
    exploreMore: "Explora más sobre el amor y las relaciones",
    loveLangQuiz: "💕 Hacer el quiz de lenguajes del amor",
    readArticles: "📚 Leer artículos de amor",
    copied: "¡Copiado al portapapeles!",
  },
  ru: {
    discoverTitle: "Откройте для себя свою вторую половинку",
    compatibilityType: "Тип совместимости",
    landingSubtitle: "Пройдите наш всеобъемлющий квиз совместимости, чтобы понять свои предпочтения в отношениях, узнать, что вы ищете в значимом партнерстве, и научиться распознавать свою идеальную вторую половинку.",
    whatYouDiscover: "Что вы узнаете:",
    uniqueType: "Ваш уникальный тип совместимости второй половинки",
    detailedAnalysis: "Детальный анализ совместимости по 5 ключевым измерениям",
    personalizedInsights: "Персонализированные инсайты о вашем идеальном партнере",
    practicalTips: "Практические советы по построению значимых отношений",
    takesTime: "Занимает всего 3-5 минут",
    thoughtfulQuestions: "10 продуманных вопросов",
    privateSecure: "100% Приватно и Безопасно",
    noRegistration: "Регистрация не требуется",
    startQuiz: "Начать квиз второй половинки",
    freeNoEmail: "Бесплатно • Email не требуется • Мгновенные результаты",
    question: "Вопрос",
    of: "из",
    quizTitle: "Откройте для себя свой тип второй половинки",
    quizSubtitle: "Пройдите этот квиз, чтобы понять свои предпочтения в отношениях и узнать, что вы ищете в значимом партнерстве. Отвечайте честно, чтобы раскрыть свой идеальный тип совместимости второй половинки.",
    evaluates: "Эта оценка исследует:",
    emotionalStyle: "Стиль эмоциональной связи",
    communicationPrefs: "Предпочтения в общении",
    lifestyleCompat: "Совместимость образа жизни",
    coreValues: "Согласование основных ценностей",
    futureVision: "Видение будущего и цели",
    idealQualities: "Качества идеального партнера",
    quizCompleted: "🎉 Квиз завершен!",
    yourResults: "Ваши результаты совместимости второй половинки",
    discoverIdeal: "Откройте для себя характеристики вашего идеального партнера",
    yourType: "Ваш тип совместимости второй половинки",
    compatibilityProfile: "Ваш профиль совместимости",
    emotional: "💖 Эмоциональный",
    communication: "💬 Общение",
    lifestyle: "🌟 Образ жизни",
    values: "🎯 Ценности",
    future: "🔮 Будущее",
    keyCharacteristics: "Ваши ключевые характеристики",
    findingTips: "Советы по поиску вашей второй половинки",
    idealPartner: "Качества вашего идеального партнера",
    shareResults: "📱 Поделиться результатами",
    inviteSomeone: "💌 Пригласить кого-то",
    retakeQuiz: "🔄 Пройти заново",
    rememberTitle: "Помните: Любовь — это путешествие",
    rememberText: "Ваш тип совместимости второй половинки — это руководство для понимания ваших предпочтений в отношениях. Настоящая любовь растет через понимание, общение и совместный опыт. Используйте эти инсайты как отправную точку для построения значимых связей.",
    exploreMore: "Узнайте больше о любви и отношениях",
    loveLangQuiz: "💕 Пройти квиз языков любви",
    readArticles: "📚 Читать статьи о любви",
    copied: "Скопировано в буфер обмена!",
  },
}

export default function SoulmateClient({
  lang,
  questions,
  soulmateTypes
}: SoulmateClientProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<QuizResponse[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<SoulmateResult | null>(null)
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const [animatePercentages, setAnimatePercentages] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const t = translations[lang]

  const buildPath = (path: string) => {
    return lang === 'en' ? path : `/${lang}${path}`
  }

  useEffect(() => {
    const storageKey = `soulmateResult_${lang}`
    const savedResult = localStorage.getItem(storageKey)
    if (savedResult) {
      setResult(JSON.parse(savedResult))
    }
  }, [lang])

  useEffect(() => {
    if (showResult && result) {
      triggerConfetti()
      setTimeout(() => setAnimatePercentages(true), 500)
    }
  }, [showResult, result])

  const handleAnswer = (option: { text: string; value: string; weight: number }) => {
    const question = questions[currentQuestion]
    const newResponse: QuizResponse = {
      questionId: question.id,
      selectedOption: option.value,
      weight: option.weight,
      category: question.category
    }

    const newResponses = [...responses, newResponse]
    setResponses(newResponses)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newResponses)
    }
  }

  const calculateResults = (finalResponses: QuizResponse[]) => {
    const calculatedResult = calculateSoulmateResult(finalResponses)
    setResult(calculatedResult)
    setShowResult(true)

    const storageKey = `soulmateResult_${lang}`
    const dateKey = `soulmateTestDate_${lang}`

    localStorage.setItem(storageKey, JSON.stringify(calculatedResult))
    localStorage.setItem(dateKey, new Date().toISOString())
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
    if (!result) return

    const shareText = `I just discovered I'm "${result.title}" in relationships! Take the Soulmate Compatibility Quiz to discover your ideal partner type: ${window.location.origin}${buildPath('/soulmate')}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Soulmate Compatibility Result',
          text: shareText,
          url: window.location.origin + buildPath('/soulmate'),
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

  const handleInvite = () => {
    const inviteUrl = window.location.origin + buildPath('/soulmate')
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

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!isStarted && !showResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-8xl">💕</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.discoverTitle}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              {t.compatibilityType}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.landingSubtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.whatYouDiscover}</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3 text-xl">💖</span>
                  <span>{t.uniqueType}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3 text-xl">🎯</span>
                  <span>{t.detailedAnalysis}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 text-xl">✨</span>
                  <span>{t.personalizedInsights}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">💡</span>
                  <span>{t.practicalTips}</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 mb-6">
                <div className="text-4xl mb-3">⏱️</div>
                <p className="text-gray-700 font-medium">{t.takesTime}</p>
                <p className="text-gray-600 text-sm">{t.thoughtfulQuestions}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <div className="text-4xl mb-3">🔒</div>
                <p className="text-gray-700 font-medium">{t.privateSecure}</p>
                <p className="text-gray-600 text-sm">{t.noRegistration}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={startQuiz}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t.startQuiz}
          </button>
          <p className="text-gray-500 text-sm mt-4">{t.freeNoEmail}</p>
        </div>
      </div>
    )
  }

  if (showResult && result) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        {showCopyNotification && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            ✓ {t.copied}
          </div>
        )}

        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full mb-4 animate-bounce-slow">
            <span className="text-2xl font-bold">{t.quizCompleted}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in-up animation-delay-200">
            {t.yourResults}
          </h1>
          <p className="text-gray-600 animate-fade-in-up animation-delay-400">{t.discoverIdeal}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 md:p-12 border-b-4 border-rose-500">
            <div className="text-center">
              <div className="inline-block mb-4">
                <span className="text-6xl">💕</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                {t.yourType}
              </h2>
              <p className="text-5xl font-bold text-rose-600 mb-6">
                {result.title}
              </p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                {result.description}
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t.compatibilityProfile}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {Object.entries(result.compatibility).map(([category, score], index) => (
                <div key={category} className="bg-gray-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
                    {category === 'emotional' ? t.emotional :
                     category === 'communication' ? t.communication :
                     category === 'lifestyle' ? t.lifestyle :
                     category === 'values' ? t.values :
                     t.future}
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

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t.keyCharacteristics}
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

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t.findingTips}
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

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t.idealPartner}
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

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={handleShare}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {t.shareResults}
              </button>
              <button
                onClick={handleInvite}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {t.inviteSomeone}
              </button>
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {t.retakeQuiz}
              </button>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💝</div>
              <h4 className="text-lg font-semibold text-amber-800 mb-2">
                {t.rememberTitle}
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                {t.rememberText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t.exploreMore}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={buildPath('/test')}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.loveLangQuiz}
            </Link>
            <Link
              href={buildPath('/articles')}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.readArticles}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-4 md:py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6 border border-rose-100">
          {currentQuestion === 0 && (
            <div className="mb-6 text-center pb-6 border-b-2 border-gradient-to-r from-rose-200 via-pink-200 to-purple-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-4 shadow-xl animate-pulse">
                <span className="text-4xl">💕</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                {t.quizTitle}
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-5 font-medium">
                {t.quizSubtitle}
              </p>
              <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-5 rounded-2xl border-2 border-rose-200 shadow-lg mt-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-lg font-bold text-gray-900">{t.evaluates}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-800">
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-rose-500">💖</span>
                    <span className="font-medium">{t.emotionalStyle}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-pink-500">💬</span>
                    <span className="font-medium">{t.communicationPrefs}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-purple-500">🌟</span>
                    <span className="font-medium">{t.lifestyleCompat}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-blue-500">🎯</span>
                    <span className="font-medium">{t.coreValues}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-indigo-500">🔮</span>
                    <span className="font-medium">{t.futureVision}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all">
                    <span className="text-teal-500">💝</span>
                    <span className="font-medium">{t.idealQualities}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

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
