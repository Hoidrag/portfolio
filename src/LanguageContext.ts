import { createContext, useContext } from 'react'
import type { Language, Translation } from './i18n'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('Language content must be rendered inside LanguageContext')
  }

  return context
}
