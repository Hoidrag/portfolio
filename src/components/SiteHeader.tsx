import { useLanguage } from '../i18n/LanguageProvider'

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label={t.homeLabel}>
        Samuel<span>.</span>
      </a>
      <nav className="main-nav" aria-label={t.navLabel}>
        <a href="#about">{t.aboutNav}</a>
        <a href="#projects">{t.projectsNav}</a>
        <a href="#contact">{t.contactNav}</a>
        <button
          className="language-toggle"
          type="button"
          aria-label={t.switchLanguage}
          onClick={() => setLanguage(language === 'en' ? 'ro' : 'en')}
        >
          {language === 'en' ? 'RO' : 'EN'}
        </button>
      </nav>
    </header>
  )
}
