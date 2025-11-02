import type { Locale } from '@/i18n/config'

export async function getSoulmateQuizData(locale: Locale) {
  switch (locale) {
    case 'de':
      return import('./soulmateQuizData.de')
    case 'fr':
      return import('./soulmateQuizData.fr')
    case 'es':
      return import('./soulmateQuizData.es')
    case 'ru':
      return import('./soulmateQuizData.ru')
    default:
      return import('./soulmateQuizData')
  }
}
