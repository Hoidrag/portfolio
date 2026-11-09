import { useState } from 'react'
import { SiteFooter } from './SiteFooter'

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState('')
  const email = 'hoidragsamuel@yahoo.com'

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Email copied to clipboard.')
    } catch {
      setCopyStatus('Could not copy. Please select and copy the email address.')
    }
  }

  return (
    <section className="content-section contact-section" id="contact">
      <div className="contact-main">
        <div className="section-heading">
          <p className="section-kicker">SAY HELLO</p>
          <span className="section-index">03 / 03</span>
        </div>
        <div className="contact-content">
          <div>
            <h2>
              Have a project
              <br />
              in <span className="highlight">mind?</span>
            </h2>
            <p>
              I’m always happy to talk about frontend development, QA, or
              something new you’re building.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-link" href={`mailto:${email}`}>
              <span>{email}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <button className="contact-copy" type="button" onClick={copyEmail}>
              COPY EMAIL
            </button>
            <span className="copy-status" aria-live="polite">
              {copyStatus}
            </span>
          </div>
        </div>
      </div>
      <SiteFooter />
    </section>
  )
}
