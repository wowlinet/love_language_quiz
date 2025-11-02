import Link from "next/link";
import { type Locale } from '@/i18n/config'

type HomeTranslations = {
  title: string;
  subtitle: string;
  cta: string;
  takesTime: string;
  whatAreTitle: string;
  whatAreSubtitle: string;
  languages: {
    wordsOfAffirmation: { title: string; desc: string };
    qualityTime: { title: string; desc: string };
    receivingGifts: { title: string; desc: string };
    actsOfService: { title: string; desc: string };
    physicalTouch: { title: string; desc: string };
  };
  whyTakeTitle: string;
  whyTakeSubtitle: string;
  scientificBased: { title: string; desc: string };
  instant: { title: string; desc: string };
  actionable: { title: string; desc: string };
  howItWorksTitle: string;
  steps: Array<{ title: string; desc: string }>;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}

const translations: Record<Locale, HomeTranslations> = {
  en: {
    title: "How Do You Give & Receive Love?",
    subtitle: "Take our comprehensive quiz to understand your primary love language and strengthen your relationships through deeper connection and understanding.",
    cta: "Start the Quiz →",
    takesTime: "Takes only 3-5 minutes · 10 thoughtful questions",
    whatAreTitle: "What Are the 5 Love Languages?",
    whatAreSubtitle: "Everyone expresses and receives love differently. Understanding your love language helps you communicate better and build stronger connections.",
    languages: {
      wordsOfAffirmation: {
        title: "Words of Affirmation",
        desc: "Verbal expressions of love, appreciation, and encouragement mean everything. Kind words and compliments fill your love tank."
      },
      qualityTime: {
        title: "Quality Time",
        desc: "Undivided attention and meaningful moments together make you feel truly loved and valued in relationships."
      },
      receivingGifts: {
        title: "Receiving Gifts",
        desc: "Thoughtful gifts and tangible symbols of love show you that you're remembered and cherished by others."
      },
      actsOfService: {
        title: "Acts of Service",
        desc: "Actions speak louder than words. When someone helps you or makes your life easier, it shows they care."
      },
      physicalTouch: {
        title: "Physical Touch",
        desc: "Physical affection and closeness help you feel connected, secure, and deeply loved in your relationships."
      }
    },
    whyTakeTitle: "Why Take Our Quiz?",
    whyTakeSubtitle: "Discover how understanding your love language can transform your relationships",
    scientificBased: {
      title: "Scientifically Based",
      desc: "Based on Dr. Gary Chapman's research on the 5 love languages"
    },
    instant: {
      title: "Instant Results",
      desc: "Get your personalized results immediately after completing the quiz"
    },
    actionable: {
      title: "Actionable Insights",
      desc: "Receive practical tips to improve your relationships"
    },
    howItWorksTitle: "How the Online Love Language Test Works",
    steps: [
      { title: "Answer Honestly", desc: "Take your time and choose the responses that truly resonate with you, not what you think is 'right' or what others expect." },
      { title: "Complete All Questions", desc: "The quiz consists of 10 carefully crafted questions. Answer all of them to get the most accurate results." },
      { title: "Review Your Results", desc: "See your primary love language and complete breakdown of all five languages. Your results are automatically saved in your browser." },
      { title: "Share & Discuss", desc: "Encourage your partner, friends, or family to take the quiz too. Compare and discuss your results to better understand each other." }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: "How long does the quiz take?", answer: "The quiz takes approximately 5-7 minutes to complete. There are 10 questions, and you can take your time with each one." },
      { question: "Can I have more than one love language?", answer: "Yes! While you'll have a primary love language, it's common to relate to multiple love languages. The quiz will show you a breakdown of all five." },
      { question: "Will my results be saved?", answer: "Yes, your results are automatically saved in your browser's local storage. You can return anytime to view them without retaking the quiz." },
      { question: "Can my love language change over time?", answer: "Absolutely. Your love language can evolve based on life experiences, relationships, and personal growth. It's healthy to retake the quiz periodically." },
      { question: "Should my partner take the quiz too?", answer: "Highly recommended! Understanding both your and your partner's love languages can dramatically improve communication and connection in your relationship." },
      { question: "What if I don't agree with my results?", answer: "The quiz is a guide, not a definitive answer. Use it as a starting point for self-reflection and conversation. You know yourself best!" }
    ],
    ctaTitle: "Ready to Transform Your Relationships?",
    ctaSubtitle: "Start your love language journey today",
    ctaButton: "Take the Free Quiz"
  },
  de: {
    title: "Wie gibst und empfängst du Liebe?",
    subtitle: "Mache unser umfassendes Quiz, um deine primäre Liebessprache zu verstehen und deine Beziehungen durch tiefere Verbindung und Verständnis zu stärken.",
    cta: "Quiz starten →",
    takesTime: "Nur 3-5 Minuten · 10 durchdachte Fragen",
    whatAreTitle: "Was sind die 5 Liebessprachen?",
    whatAreSubtitle: "Jeder drückt und empfängt Liebe unterschiedlich aus. Das Verständnis deiner Liebessprache hilft dir, besser zu kommunizieren und stärkere Verbindungen aufzubauen.",
    languages: {
      wordsOfAffirmation: {
        title: "Worte der Bestätigung",
        desc: "Verbale Ausdrücke von Liebe, Wertschätzung und Ermutigung bedeuten alles. Freundliche Worte und Komplimente füllen deinen Liebestank."
      },
      qualityTime: {
        title: "Qualitätszeit",
        desc: "Ungeteilte Aufmerksamkeit und bedeutungsvolle Momente zusammen lassen dich in Beziehungen wirklich geliebt und geschätzt fühlen."
      },
      receivingGifts: {
        title: "Geschenke empfangen",
        desc: "Durchdachte Geschenke und greifbare Symbole der Liebe zeigen dir, dass du von anderen in Erinnerung behalten und geschätzt wirst."
      },
      actsOfService: {
        title: "Hilfsbereitschaft",
        desc: "Taten sagen mehr als Worte. Wenn jemand dir hilft oder dein Leben erleichtert, zeigt das Fürsorge."
      },
      physicalTouch: {
        title: "Körperliche Berührung",
        desc: "Körperliche Zuneigung und Nähe helfen dir, dich in deinen Beziehungen verbunden, sicher und tief geliebt zu fühlen."
      }
    },
    whyTakeTitle: "Warum unser Quiz machen?",
    whyTakeSubtitle: "Entdecke, wie das Verständnis deiner Liebessprache deine Beziehungen transformieren kann",
    scientificBased: {
      title: "Wissenschaftlich fundiert",
      desc: "Basierend auf Dr. Gary Chapmans Forschung über die 5 Liebessprachen"
    },
    instant: {
      title: "Sofortige Ergebnisse",
      desc: "Erhalte deine personalisierten Ergebnisse sofort nach Abschluss des Quiz"
    },
    actionable: {
      title: "Umsetzbare Einblicke",
      desc: "Erhalte praktische Tipps zur Verbesserung deiner Beziehungen"
    },
    howItWorksTitle: "So funktioniert der Online-Liebessprachen-Test",
    steps: [
      { title: "Ehrlich antworten", desc: "Nimm dir Zeit und wähle die Antworten, die wirklich mit dir resonieren, nicht was du für 'richtig' hältst oder was andere erwarten." },
      { title: "Alle Fragen beantworten", desc: "Das Quiz besteht aus 10 sorgfältig ausgearbeiteten Fragen. Beantworte alle, um die genauesten Ergebnisse zu erhalten." },
      { title: "Deine Ergebnisse prüfen", desc: "Sieh deine primäre Liebessprache und die vollständige Aufschlüsselung aller fünf Sprachen. Deine Ergebnisse werden automatisch in deinem Browser gespeichert." },
      { title: "Teilen & Diskutieren", desc: "Ermutige deinen Partner, Freunde oder Familie, das Quiz ebenfalls zu machen. Vergleicht und diskutiert eure Ergebnisse, um einander besser zu verstehen." }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { question: "Wie lange dauert das Quiz?", answer: "Das Quiz dauert etwa 5-7 Minuten. Es gibt 10 Fragen, und du kannst dir für jede Zeit nehmen." },
      { question: "Kann ich mehr als eine Liebessprache haben?", answer: "Ja! Während du eine primäre Liebessprache hast, ist es üblich, sich mit mehreren Liebessprachen zu identifizieren. Das Quiz zeigt dir eine Aufschlüsselung aller fünf." },
      { question: "Werden meine Ergebnisse gespeichert?", answer: "Ja, deine Ergebnisse werden automatisch im lokalen Speicher deines Browsers gespeichert. Du kannst jederzeit zurückkehren, um sie anzusehen, ohne das Quiz erneut zu machen." },
      { question: "Kann sich meine Liebessprache im Laufe der Zeit ändern?", answer: "Absolut. Deine Liebessprache kann sich basierend auf Lebenserfahrungen, Beziehungen und persönlichem Wachstum entwickeln. Es ist gesund, das Quiz regelmäßig zu wiederholen." },
      { question: "Sollte mein Partner das Quiz auch machen?", answer: "Sehr empfehlenswert! Das Verständnis sowohl deiner als auch der Liebessprache deines Partners kann die Kommunikation und Verbindung in eurer Beziehung dramatisch verbessern." },
      { question: "Was ist, wenn ich mit meinen Ergebnissen nicht einverstanden bin?", answer: "Das Quiz ist ein Leitfaden, keine definitive Antwort. Nutze es als Ausgangspunkt für Selbstreflexion und Gespräche. Du kennst dich selbst am besten!" }
    ],
    ctaTitle: "Bereit, deine Beziehungen zu transformieren?",
    ctaSubtitle: "Beginne heute deine Liebessprachen-Reise",
    ctaButton: "Kostenloses Quiz machen"
  },
  fr: {
    title: "Comment donnez-vous et recevez-vous l'amour ?",
    subtitle: "Répondez à notre quiz complet pour comprendre votre langage d'amour principal et renforcer vos relations grâce à une connexion et une compréhension plus profondes.",
    cta: "Commencer le quiz →",
    takesTime: "Seulement 3-5 minutes · 10 questions réfléchies",
    whatAreTitle: "Quels sont les 5 langages d'amour ?",
    whatAreSubtitle: "Chacun exprime et reçoit l'amour différemment. Comprendre votre langage d'amour vous aide à mieux communiquer et à construire des liens plus forts.",
    languages: {
      wordsOfAffirmation: {
        title: "Paroles valorisantes",
        desc: "Les expressions verbales d'amour, d'appréciation et d'encouragement signifient tout. Les mots gentils et les compliments remplissent votre réservoir d'amour."
      },
      qualityTime: {
        title: "Moments de qualité",
        desc: "L'attention ininterrompue et les moments significatifs ensemble vous font sentir vraiment aimé et valorisé dans les relations."
      },
      receivingGifts: {
        title: "Recevoir des cadeaux",
        desc: "Les cadeaux réfléchis et les symboles tangibles d'amour vous montrent que vous êtes mémorisé et chéri par les autres."
      },
      actsOfService: {
        title: "Services rendus",
        desc: "Les actions parlent plus fort que les mots. Quand quelqu'un vous aide ou facilite votre vie, cela montre qu'il se soucie de vous."
      },
      physicalTouch: {
        title: "Toucher physique",
        desc: "L'affection physique et la proximité vous aident à vous sentir connecté, en sécurité et profondément aimé dans vos relations."
      }
    },
    whyTakeTitle: "Pourquoi faire notre quiz ?",
    whyTakeSubtitle: "Découvrez comment la compréhension de votre langage d'amour peut transformer vos relations",
    scientificBased: {
      title: "Scientifiquement fondé",
      desc: "Basé sur les recherches du Dr Gary Chapman sur les 5 langages d'amour"
    },
    instant: {
      title: "Résultats instantanés",
      desc: "Obtenez vos résultats personnalisés immédiatement après avoir terminé le quiz"
    },
    actionable: {
      title: "Conseils pratiques",
      desc: "Recevez des conseils pratiques pour améliorer vos relations"
    },
    howItWorksTitle: "Comment fonctionne le test des langages d'amour en ligne",
    steps: [
      { title: "Répondez honnêtement", desc: "Prenez votre temps et choisissez les réponses qui résonnent vraiment avec vous, pas ce que vous pensez être 'correct' ou ce que les autres attendent." },
      { title: "Complétez toutes les questions", desc: "Le quiz se compose de 10 questions soigneusement élaborées. Répondez à toutes pour obtenir les résultats les plus précis." },
      { title: "Consultez vos résultats", desc: "Découvrez votre langage d'amour principal et la répartition complète des cinq langages. Vos résultats sont automatiquement sauvegardés dans votre navigateur." },
      { title: "Partagez et discutez", desc: "Encouragez votre partenaire, vos amis ou votre famille à faire le quiz aussi. Comparez et discutez vos résultats pour mieux vous comprendre." }
    ],
    faqTitle: "Questions fréquemment posées",
    faqs: [
      { question: "Combien de temps prend le quiz ?", answer: "Le quiz prend environ 5-7 minutes. Il y a 10 questions, et vous pouvez prendre votre temps pour chacune." },
      { question: "Puis-je avoir plus d'un langage d'amour ?", answer: "Oui ! Bien que vous ayez un langage d'amour principal, il est courant de s'identifier à plusieurs langages d'amour. Le quiz vous montrera une répartition des cinq." },
      { question: "Mes résultats seront-ils sauvegardés ?", answer: "Oui, vos résultats sont automatiquement sauvegardés dans le stockage local de votre navigateur. Vous pouvez revenir à tout moment pour les consulter sans refaire le quiz." },
      { question: "Mon langage d'amour peut-il changer avec le temps ?", answer: "Absolument. Votre langage d'amour peut évoluer en fonction des expériences de vie, des relations et de la croissance personnelle. Il est sain de refaire le quiz périodiquement." },
      { question: "Mon partenaire devrait-il faire le quiz aussi ?", answer: "Hautement recommandé ! Comprendre à la fois votre langage d'amour et celui de votre partenaire peut considérablement améliorer la communication et la connexion dans votre relation." },
      { question: "Et si je ne suis pas d'accord avec mes résultats ?", answer: "Le quiz est un guide, pas une réponse définitive. Utilisez-le comme point de départ pour la réflexion personnelle et la conversation. Vous vous connaissez le mieux !" }
    ],
    ctaTitle: "Prêt à transformer vos relations ?",
    ctaSubtitle: "Commencez votre voyage des langages d'amour aujourd'hui",
    ctaButton: "Répondre au quiz gratuit"
  },
  es: {
    title: "¿Cómo das y recibes amor?",
    subtitle: "Haz nuestro test completo para entender tu lenguaje del amor principal y fortalecer tus relaciones a través de una conexión y comprensión más profundas.",
    cta: "Comenzar el test →",
    takesTime: "Solo 3-5 minutos · 10 preguntas reflexivas",
    whatAreTitle: "¿Cuáles son los 5 lenguajes del amor?",
    whatAreSubtitle: "Todos expresan y reciben amor de manera diferente. Comprender tu lenguaje del amor te ayuda a comunicarte mejor y construir conexiones más fuertes.",
    languages: {
      wordsOfAffirmation: {
        title: "Palabras de afirmación",
        desc: "Las expresiones verbales de amor, aprecio y aliento lo significan todo. Las palabras amables y los cumplidos llenan tu tanque de amor."
      },
      qualityTime: {
        title: "Tiempo de calidad",
        desc: "La atención sin distracciones y los momentos significativos juntos te hacen sentir verdaderamente amado y valorado en las relaciones."
      },
      receivingGifts: {
        title: "Recibir regalos",
        desc: "Los regalos pensados y los símbolos tangibles de amor te muestran que eres recordado y apreciado por otros."
      },
      actsOfService: {
        title: "Actos de servicio",
        desc: "Las acciones hablan más que las palabras. Cuando alguien te ayuda o hace tu vida más fácil, muestra que le importas."
      },
      physicalTouch: {
        title: "Toque físico",
        desc: "El afecto físico y la cercanía te ayudan a sentirte conectado, seguro y profundamente amado en tus relaciones."
      }
    },
    whyTakeTitle: "¿Por qué hacer nuestro test?",
    whyTakeSubtitle: "Descubre cómo entender tu lenguaje del amor puede transformar tus relaciones",
    scientificBased: {
      title: "Científicamente fundamentado",
      desc: "Basado en la investigación del Dr. Gary Chapman sobre los 5 lenguajes del amor"
    },
    instant: {
      title: "Resultados instantáneos",
      desc: "Obtén tus resultados personalizados inmediatamente después de completar el test"
    },
    actionable: {
      title: "Consejos prácticos",
      desc: "Recibe consejos prácticos para mejorar tus relaciones"
    },
    howItWorksTitle: "Cómo funciona el test de lenguajes del amor en línea",
    steps: [
      { title: "Responde honestamente", desc: "Tómate tu tiempo y elige las respuestas que realmente resuenan contigo, no lo que crees que es 'correcto' o lo que otros esperan." },
      { title: "Completa todas las preguntas", desc: "El test consta de 10 preguntas cuidadosamente elaboradas. Responde todas para obtener los resultados más precisos." },
      { title: "Revisa tus resultados", desc: "Ve tu lenguaje del amor principal y el desglose completo de los cinco lenguajes. Tus resultados se guardan automáticamente en tu navegador." },
      { title: "Comparte y discute", desc: "Anima a tu pareja, amigos o familia a hacer el test también. Compara y discute tus resultados para entenderse mejor." }
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { question: "¿Cuánto tiempo toma el test?", answer: "El test toma aproximadamente 5-7 minutos. Hay 10 preguntas, y puedes tomarte tu tiempo con cada una." },
      { question: "¿Puedo tener más de un lenguaje del amor?", answer: "¡Sí! Aunque tendrás un lenguaje del amor principal, es común identificarse con varios lenguajes del amor. El test te mostrará un desglose de los cinco." },
      { question: "¿Se guardarán mis resultados?", answer: "Sí, tus resultados se guardan automáticamente en el almacenamiento local de tu navegador. Puedes volver en cualquier momento para verlos sin volver a hacer el test." },
      { question: "¿Puede cambiar mi lenguaje del amor con el tiempo?", answer: "Absolutamente. Tu lenguaje del amor puede evolucionar según las experiencias de vida, relaciones y crecimiento personal. Es saludable volver a hacer el test periódicamente." },
      { question: "¿Debería mi pareja hacer el test también?", answer: "¡Muy recomendado! Entender tanto tu lenguaje del amor como el de tu pareja puede mejorar dramáticamente la comunicación y la conexión en tu relación." },
      { question: "¿Qué pasa si no estoy de acuerdo con mis resultados?", answer: "El test es una guía, no una respuesta definitiva. Úsalo como punto de partida para la autorreflexión y la conversación. ¡Tú te conoces mejor!" }
    ],
    ctaTitle: "¿Listo para transformar tus relaciones?",
    ctaSubtitle: "Comienza tu viaje de lenguajes del amor hoy",
    ctaButton: "Hacer el test gratis"
  },
  ru: {
    title: "Как вы даёте и получаете любовь?",
    subtitle: "Пройдите наш подробный тест, чтобы понять ваш основной язык любви и укрепить ваши отношения через более глубокую связь и понимание.",
    cta: "Начать тест →",
    takesTime: "Всего 3-5 минут · 10 продуманных вопросов",
    whatAreTitle: "Что такое 5 языков любви?",
    whatAreSubtitle: "Каждый выражает и получает любовь по-своему. Понимание вашего языка любви помогает лучше общаться и строить более крепкие связи.",
    languages: {
      wordsOfAffirmation: {
        title: "Слова поддержки",
        desc: "Словесные выражения любви, признательности и ободрения значат всё. Добрые слова и комплименты наполняют ваш бак любви."
      },
      qualityTime: {
        title: "Время вместе",
        desc: "Безраздельное внимание и значимые моменты вместе заставляют вас чувствовать себя по-настоящему любимым и ценным в отношениях."
      },
      receivingGifts: {
        title: "Получение подарков",
        desc: "Продуманные подарки и материальные символы любви показывают, что вас помнят и ценят другие."
      },
      actsOfService: {
        title: "Помощь и поддержка",
        desc: "Дела говорят громче слов. Когда кто-то помогает вам или облегчает вашу жизнь, это показывает заботу."
      },
      physicalTouch: {
        title: "Физическое прикосновение",
        desc: "Физическая привязанность и близость помогают вам чувствовать связь, безопасность и глубокую любовь в ваших отношениях."
      }
    },
    whyTakeTitle: "Почему стоит пройти наш тест?",
    whyTakeSubtitle: "Узнайте, как понимание вашего языка любви может изменить ваши отношения",
    scientificBased: {
      title: "Научно обоснован",
      desc: "Основан на исследовании доктора Гэри Чепмена о 5 языках любви"
    },
    instant: {
      title: "Мгновенные результаты",
      desc: "Получите персонализированные результаты сразу после прохождения теста"
    },
    actionable: {
      title: "Практические советы",
      desc: "Получите практические советы для улучшения ваших отношений"
    },
    howItWorksTitle: "Как работает онлайн-тест языков любви",
    steps: [
      { title: "Отвечайте честно", desc: "Не торопитесь и выбирайте ответы, которые действительно резонируют с вами, а не то, что вы считаете 'правильным' или чего ожидают другие." },
      { title: "Ответьте на все вопросы", desc: "Тест состоит из 10 тщательно подобранных вопросов. Ответьте на все, чтобы получить наиболее точные результаты." },
      { title: "Просмотрите свои результаты", desc: "Узнайте ваш основной язык любви и полную разбивку всех пяти языков. Ваши результаты автоматически сохраняются в браузере." },
      { title: "Поделитесь и обсудите", desc: "Предложите вашему партнеру, друзьям или семье тоже пройти тест. Сравните и обсудите результаты, чтобы лучше понять друг друга." }
    ],
    faqTitle: "Часто задаваемые вопросы",
    faqs: [
      { question: "Сколько времени занимает тест?", answer: "Тест занимает примерно 5-7 минут. Всего 10 вопросов, и вы можете не торопиться с каждым." },
      { question: "Может ли у меня быть более одного языка любви?", answer: "Да! Хотя у вас будет основной язык любви, обычно люди идентифицируют себя с несколькими языками любви. Тест покажет вам разбивку всех пяти." },
      { question: "Будут ли сохранены мои результаты?", answer: "Да, ваши результаты автоматически сохраняются в локальном хранилище вашего браузера. Вы можете вернуться в любое время, чтобы просмотреть их, не проходя тест заново." },
      { question: "Может ли мой язык любви измениться со временем?", answer: "Абсолютно. Ваш язык любви может эволюционировать на основе жизненного опыта, отношений и личностного роста. Полезно периодически проходить тест заново." },
      { question: "Должен ли мой партнер тоже пройти тест?", answer: "Настоятельно рекомендуется! Понимание как вашего, так и языка любви вашего партнера может значительно улучшить общение и связь в ваших отношениях." },
      { question: "Что делать, если я не согласен с результатами?", answer: "Тест - это руководство, а не окончательный ответ. Используйте его как отправную точку для самоанализа и разговора. Вы знаете себя лучше всех!" }
    ],
    ctaTitle: "Готовы изменить ваши отношения?",
    ctaSubtitle: "Начните ваше путешествие по языкам любви сегодня",
    ctaButton: "Пройти бесплатный тест"
  }
}

export default async function LangHome({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const t = translations[locale]

  const buildPath = (path: string) => {
    if (locale === 'en') {
      return path
    }
    // For non-English locales, add trailing slash only for home page
    if (path === '/') {
      return `/${locale}/`
    }
    return `/${locale}${path}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Pink Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              💕 {lang === 'en' ? 'Discover Your Love Language' :
                  lang === 'de' ? 'Entdecke deine Liebessprache' :
                  lang === 'fr' ? 'Découvrez votre langage d\'amour' :
                  lang === 'es' ? 'Descubre tu lenguaje del amor' :
                  'Откройте свой язык любви'}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              {t.title.split('&')[0]}
              <span className="text-rose-500">{t.title.includes('&') ? `& ${t.title.split('&')[1]}` : ''}</span>
            </h1>

            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              {t.subtitle}
            </p>

            <Link
              href={buildPath('/test')}
              className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-600 transition-colors mb-4"
            >
              {t.cta}
            </Link>

            <p className="text-gray-500 text-sm">
              {t.takesTime}
            </p>
          </div>
        </div>
      </section>

      {/* What Are Love Languages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.whatAreTitle}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.whatAreSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t.languages.wordsOfAffirmation.title,
                description: t.languages.wordsOfAffirmation.desc,
                iconBg: "bg-rose-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                ),
              },
              {
                title: t.languages.qualityTime.title,
                description: t.languages.qualityTime.desc,
                iconBg: "bg-blue-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                  </svg>
                ),
              },
              {
                title: t.languages.receivingGifts.title,
                description: t.languages.receivingGifts.desc,
                iconBg: "bg-purple-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,16L3,14V9A1,1 0 0,1 4,8H6.58L8.29,6.29C8.68,5.9 9.32,5.9 9.71,6.29L11.41,8H20A1,1 0 0,1 21,9V14L19,16H5M5,18V16H19V18A1,1 0 0,1 18,19H6A1,1 0 0,1 5,18M12,4L10.5,2.5C10.1,2.1 9.4,2.1 9,2.5L7.5,4H16.5L15,2.5C14.6,2.1 13.9,2.1 13.5,2.5L12,4Z"/>
                  </svg>
                ),
              },
              {
                title: t.languages.actsOfService.title,
                description: t.languages.actsOfService.desc,
                iconBg: "bg-emerald-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                  </svg>
                ),
              },
              {
                title: t.languages.physicalTouch.title,
                description: t.languages.physicalTouch.desc,
                iconBg: "bg-orange-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,8C20.1,8 21,8.9 21,10V16C21,17.1 20.1,18 19,18H17V16H19V10H17V8H19M15,8V10H13V16H15V18H13C11.9,18 11,17.1 11,16V10C11,8.9 11.9,8 13,8H15M9,8V18H7V10H5V8H9Z"/>
                  </svg>
                ),
              },
            ].map((language, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`${language.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {language.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{language.title}</h3>
                <p className="text-gray-600 leading-relaxed">{language.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Take Quiz Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whyTakeTitle}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.whyTakeSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.scientificBased.title,
                description: t.scientificBased.desc,
                icon: "🔬",
              },
              {
                title: t.instant.title,
                description: t.instant.desc,
                icon: "⚡",
              },
              {
                title: t.actionable.title,
                description: t.actionable.desc,
                icon: "💡",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t.howItWorksTitle}
          </h2>
          <div className="space-y-6">
            {t.steps.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t.faqTitle}
          </h2>
          <div className="space-y-6">
            {t.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            {t.ctaSubtitle}
          </p>
          <Link
            href={buildPath('/test')}
            className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
