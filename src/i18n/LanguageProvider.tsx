import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Language, Translation } from './translations'
import { translations } from './translations'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.pageTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.pageDescription)
  }, [language, t])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('Language content must be rendered inside LanguageContext')
  }

  return context
}
