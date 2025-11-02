'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { i18n, type Locale, localeNames, localeFlags } from '@/i18n/config'

type NavigationProps = {
  lang?: Locale
}

export default function Navigation({ lang = 'en' }: NavigationProps) {
  const pathname = usePathname()
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

  // Extract the path without language prefix
  const getPathWithoutLang = (path: string) => {
    for (const locale of i18n.locales) {
      // Handle /de/, /fr/, etc. (home pages with trailing slash)
      if (path === `/${locale}/`) {
        return '/'
      }
      // Handle /de/test, /fr/test, etc. (sub-pages)
      if (path.startsWith(`/${locale}/`)) {
        return path.slice(locale.length + 1)
      }
      // Handle /de, /fr, etc. (home pages without trailing slash - shouldn't happen due to middleware)
      if (path === `/${locale}`) {
        return '/'
      }
    }
    return path === '' ? '/' : path
  }

  // Build path with language prefix
  const buildPath = (path: string, locale: Locale) => {
    // Normalize path (remove leading slash if exists, we'll add it)
    const normalizedPath = path.startsWith('/') ? path : `/${path}`

    if (locale === 'en') {
      return normalizedPath
    }

    // For non-English locales, add language prefix
    const fullPath = `/${locale}${normalizedPath}`

    // Add trailing slash only for non-English home pages
    if (normalizedPath === '/') {
      return `${fullPath}/`
    }

    return fullPath
  }

  const currentPath = getPathWithoutLang(pathname)

  const navItems = [
    { name: lang === 'en' ? 'Home' : lang === 'de' ? 'Startseite' : lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Главная', path: '/' },
    { name: lang === 'en' ? 'Love Language' : lang === 'de' ? 'Liebessprachen' : lang === 'fr' ? 'Langages d\'Amour' : lang === 'es' ? 'Lenguajes del Amor' : 'Языки любви', path: '/test' },
    { name: lang === 'en' ? 'Am I in Love?' : lang === 'de' ? 'Bin ich verliebt?' : lang === 'fr' ? 'Suis-je amoureux ?' : lang === 'es' ? '¿Estoy enamorado?' : 'Я влюблён?', path: '/am-i-in-love' },
    { name: lang === 'en' ? 'Crush Quiz' : lang === 'de' ? 'Schwarm-Quiz' : lang === 'fr' ? 'Quiz Béguin' : lang === 'es' ? 'Test de Enamoramiento' : 'Тест на симпатию', path: '/crush-quiz' },
    { name: lang === 'en' ? 'Does He Love Me?' : lang === 'de' ? 'Liebt er/sie mich?' : lang === 'fr' ? 'M\'aime-t-il/elle ?' : lang === 'es' ? '¿Me ama?' : 'Любит ли он/она меня?', path: '/does-he-love-me' },
    { name: lang === 'en' ? 'Articles' : lang === 'de' ? 'Artikel' : lang === 'fr' ? 'Articles' : lang === 'es' ? 'Artículos' : 'Статьи', path: '/articles' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href={buildPath('/', lang)} className="text-2xl font-bold text-rose-600 font-pacifico">
                  Love Language Quiz
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={buildPath(item.path, lang)}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      currentPath === item.path
                        ? 'border-rose-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Change language"
                >
                  <span className="text-xl">{localeFlags[lang]}</span>
                  <span className="hidden sm:inline text-sm font-medium text-gray-700">
                    {localeNames[lang]}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {isLanguageMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLanguageMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                      {i18n.locales.map((locale) => (
                        <Link
                          key={locale}
                          href={buildPath(currentPath, locale)}
                          onClick={() => setIsLanguageMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                            lang === locale ? 'bg-rose-50 text-rose-600' : 'text-gray-700'
                          }`}
                        >
                          <span className="text-xl">{localeFlags[locale]}</span>
                          <span className="font-medium">{localeNames[locale]}</span>
                          {lang === locale && (
                            <svg className="w-4 h-4 ml-auto text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={buildPath(item.path, lang)}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  currentPath === item.path
                    ? 'bg-rose-50 border-rose-500 text-rose-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
