import type { Locale } from '@/i18n/config'

export async function getQuizData(locale: Locale) {
  switch (locale) {
    case 'de':
      return import('./quizData.de')
    case 'fr':
      return import('./quizData.fr')
    case 'es':
      return import('./quizData.es')
    case 'ru':
      return import('./quizData.ru')
    default:
      return import('./quizData')
  }
}
