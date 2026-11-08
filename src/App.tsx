import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteHeader } from './components/SiteHeader'

function App() {
  return (
    <main className="page">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
