import type { Locale } from '@/i18n/config'

export async function getLoveQuizData(locale: Locale) {
  switch (locale) {
    case 'de':
      return import('./loveQuizData.de')
    case 'fr':
      return import('./loveQuizData.fr')
    case 'es':
      return import('./loveQuizData.es')
    case 'ru':
      return import('./loveQuizData.ru')
    default:
      return import('./loveQuizData')
  }
}
