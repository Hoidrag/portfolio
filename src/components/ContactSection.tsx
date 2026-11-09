import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageProvider'
import { SiteFooter } from './SiteFooter'

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<'copied' | 'failed' | null>(null)
  const email = 'hoidragsamuel@yahoo.com'
  const { t } = useLanguage()

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <section className="content-section contact-section" id="contact">
      <div className="contact-main">
        <div className="section-heading">
          <p className="section-kicker">{t.contactKicker}</p>
          <span className="section-index">03 / 03</span>
        </div>
        <div className="contact-content">
          <div>
            <h2>
              {t.contactTitle}
              <br />
              <span className="highlight">{t.contactTitleHighlight}</span>
            </h2>
            <p>{t.contactDescription}</p>
          </div>
          <div className="contact-actions">
            <a
              className="contact-link"
              href={`mailto:${email}?subject=${encodeURIComponent(t.contactEmailSubject)}`}
            >
              <span>{email}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <button className="contact-copy" type="button" onClick={copyEmail}>
              {t.copyEmail}
            </button>
            <span className="copy-status" aria-live="polite">
              {copyStatus === 'copied'
                ? t.emailCopied
                : copyStatus === 'failed'
                  ? t.emailCopyFailed
                  : ''}
            </span>
          </div>
        </div>
      </div>
      <SiteFooter />
    </section>
  )
}
