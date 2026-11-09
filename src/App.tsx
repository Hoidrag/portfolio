import { useEffect, useState } from 'react'
import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteHeader } from './components/SiteHeader'
import { LanguageContext } from './LanguageContext'
import { translations } from './i18n'
import type { Language } from './i18n'

function App() {
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
      <main className="page">
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </LanguageContext.Provider>
  )
}

export default App
