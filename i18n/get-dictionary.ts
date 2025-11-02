import 'server-only'
import type { Locale } from './config'

// We enumerate all dictionaries here for better linting and type-safety
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
