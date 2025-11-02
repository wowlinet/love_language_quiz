import type { Locale } from '@/i18n/config'

export async function getLoveMeQuizData(locale: Locale) {
  switch (locale) {
    case 'de':
      return import('./loveMeQuizData.de')
    case 'fr':
      return import('./loveMeQuizData.fr')
    case 'es':
      return import('./loveMeQuizData.es')
    case 'ru':
      return import('./loveMeQuizData.ru')
    default:
      return import('./loveMeQuizData')
  }
}
