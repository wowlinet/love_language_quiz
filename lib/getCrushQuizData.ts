import type { Locale } from '@/i18n/config'

export async function getCrushQuizData(locale: Locale) {
  switch (locale) {
    case 'de':
      return import('./crushQuizData.de')
    case 'fr':
      return import('./crushQuizData.fr')
    case 'es':
      return import('./crushQuizData.es')
    case 'ru':
      return import('./crushQuizData.ru')
    default:
      return import('./crushQuizData')
  }
}
