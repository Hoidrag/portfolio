import { useLanguage } from '../LanguageContext'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <span>© 2026 — Samuel Hoidrag</span>
      <a className="footer-location" href="#home">
        {t.backToTop} <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}
