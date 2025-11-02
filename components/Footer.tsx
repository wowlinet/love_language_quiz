import Link from 'next/link'
import type { Locale } from '@/i18n/config'

interface FooterProps {
  lang?: Locale
}

const translations: Record<Locale, {
  brandDescription: string
  quickLinks: string
  home: string
  takeQuiz: string
  articles: string
  quotesForHer: string
  quotesForHim: string
  learnMore: string
  aboutLoveLanguages: string
  wordsOfAffirmation: string
  qualityTime: string
  allRightsReserved: string
  privacyPolicy: string
  termsOfService: string
}> = {
  en: {
    brandDescription: "Discover how you express and receive love. Understanding your love language can transform your relationships and help you connect on a deeper level.",
    quickLinks: "Quick Links",
    home: "Home",
    takeQuiz: "Take the Quiz",
    articles: "Articles",
    quotesForHer: "Love Quotes for Her",
    quotesForHim: "Love Quotes for Him",
    learnMore: "Learn More",
    aboutLoveLanguages: "About Love Languages",
    wordsOfAffirmation: "Words of Affirmation",
    qualityTime: "Quality Time",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  de: {
    brandDescription: "Entdecke, wie du Liebe ausdrückst und empfängst. Das Verständnis deiner Liebessprache kann deine Beziehungen transformieren und dir helfen, auf einer tieferen Ebene zu verbinden.",
    quickLinks: "Schnelllinks",
    home: "Startseite",
    takeQuiz: "Quiz machen",
    articles: "Artikel",
    quotesForHer: "Liebeszitate für Sie",
    quotesForHim: "Liebeszitate für Ihn",
    learnMore: "Mehr erfahren",
    aboutLoveLanguages: "Über Liebessprachen",
    wordsOfAffirmation: "Bestätigende Worte",
    qualityTime: "Qualitätszeit",
    allRightsReserved: "Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
  },
  fr: {
    brandDescription: "Découvrez comment vous exprimez et recevez l'amour. Comprendre votre langage d'amour peut transformer vos relations et vous aider à vous connecter à un niveau plus profond.",
    quickLinks: "Liens rapides",
    home: "Accueil",
    takeQuiz: "Faire le quiz",
    articles: "Articles",
    quotesForHer: "Citations d'amour pour Elle",
    quotesForHim: "Citations d'amour pour Lui",
    learnMore: "En savoir plus",
    aboutLoveLanguages: "À propos des langages d'amour",
    wordsOfAffirmation: "Paroles valorisantes",
    qualityTime: "Moments de qualité",
    allRightsReserved: "Tous droits réservés.",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
  },
  es: {
    brandDescription: "Descubre cómo expresas y recibes amor. Comprender tu lenguaje del amor puede transformar tus relaciones y ayudarte a conectar a un nivel más profundo.",
    quickLinks: "Enlaces rápidos",
    home: "Inicio",
    takeQuiz: "Hacer el quiz",
    articles: "Artículos",
    quotesForHer: "Citas de amor para Ella",
    quotesForHim: "Citas de amor para Él",
    learnMore: "Aprender más",
    aboutLoveLanguages: "Acerca de los lenguajes del amor",
    wordsOfAffirmation: "Palabras de afirmación",
    qualityTime: "Tiempo de calidad",
    allRightsReserved: "Todos los derechos reservados.",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos de servicio",
  },
  ru: {
    brandDescription: "Откройте для себя, как вы выражаете и получаете любовь. Понимание вашего языка любви может преобразовать ваши отношения и помочь вам связаться на более глубоком уровне.",
    quickLinks: "Быстрые ссылки",
    home: "Главная",
    takeQuiz: "Пройти квиз",
    articles: "Статьи",
    quotesForHer: "Цитаты о любви для Нее",
    quotesForHim: "Цитаты о любви для Него",
    learnMore: "Узнать больше",
    aboutLoveLanguages: "О языках любви",
    wordsOfAffirmation: "Слова подтверждения",
    qualityTime: "Качественное время",
    allRightsReserved: "Все права защищены.",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия использования",
  },
}

export default function Footer({ lang = 'en' }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const t = translations[lang]

  const buildPath = (path: string) => {
    return lang === 'en' ? path : `/${lang}${path}`
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Love Language Quiz
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              {t.brandDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={buildPath('/')} className="hover:text-rose-400 transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={buildPath('/test')} className="hover:text-rose-400 transition-colors">
                  {t.takeQuiz}
                </Link>
              </li>
              <li>
                <Link href={buildPath('/articles')} className="hover:text-rose-400 transition-colors">
                  {t.articles}
                </Link>
              </li>
              <li>
                <Link href={buildPath('/quotes-for-her')} className="hover:text-rose-400 transition-colors">
                  {t.quotesForHer}
                </Link>
              </li>
              <li>
                <Link href={buildPath('/quotes-for-him')} className="hover:text-rose-400 transition-colors">
                  {t.quotesForHim}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.learnMore}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={buildPath('/articles/understanding-love-languages')}
                  className="hover:text-rose-400 transition-colors"
                >
                  {t.aboutLoveLanguages}
                </Link>
              </li>
              <li>
                <Link
                  href={buildPath('/articles/words-of-affirmation')}
                  className="hover:text-rose-400 transition-colors"
                >
                  {t.wordsOfAffirmation}
                </Link>
              </li>
              <li>
                <Link
                  href={buildPath('/articles/quality-time')}
                  className="hover:text-rose-400 transition-colors"
                >
                  {t.qualityTime}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Love Language Quiz. {t.allRightsReserved}
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href={buildPath('/privacy')} className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
              {t.privacyPolicy}
            </Link>
            <Link href={buildPath('/terms')} className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
