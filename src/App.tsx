import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteHeader } from './components/SiteHeader'
import { LanguageProvider } from './i18n/LanguageProvider'

function App() {
  return (
    <LanguageProvider>
      <main className="page">
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </LanguageProvider>
  )
}

export default App
