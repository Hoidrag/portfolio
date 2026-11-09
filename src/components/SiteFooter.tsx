import { useLanguage } from '../i18n/LanguageProvider'

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
