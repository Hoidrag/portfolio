import { useLanguage } from '../i18n/LanguageProvider'

function CodeVisual() {
  const { t } = useLanguage()

  return (
    <div className="visual" aria-hidden="true">
      <div className="visual-orbit orbit-outer" />
      <div className="visual-orbit orbit-inner" />
      <div className="code-window">
        <div className="code-window-bar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>samuel.ts</span>
          <span className="window-menu">•••</span>
        </div>
        <div className="code-lines">
          <div className="code-line">
            <span className="line-number">01</span>
            <span>
              <span className="code-purple">const</span>{' '}
              <span className="code-blue">sam</span> = {'{'}
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">02</span>
            <span>
              {t.codeBuildsLabel}:{' '}
              <span className="code-green">"React + TS"</span>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">03</span>
            <span>
              {t.codeTestsLabel}:{' '}
              <span className="code-green">"Cypress + Playwright"</span>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">04</span>
            <span>
              {t.codeBugLabel}:{' '}
              <span className="code-green">"{t.codeBugValue}"</span>
            </span>
          </div>
          <div className="code-line active-code-line">
            <span className="line-number">05</span>
            <span>
              {t.codeStatusLabel}:{' '}
              <span className="code-green">
                "{t.codeStatus}"
              </span>
              <span className="code-cursor" />
            </span>
          </div>
          <div className="code-line code-comment">
            <span className="line-number">06</span>
            <span>
              {'}'} // {t.codeProgressComment}
            </span>
          </div>
        </div>
      </div>
      <span className="code-stamp">&lt; / &gt;</span>
      <span className="visual-caption">{t.visualCaption}</span>
      <span className="visual-number">01</span>
    </div>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="home" aria-labelledby="page-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {t.heroKicker}
        </p>
        <h1 id="page-title">
          {t.heroTitle}
          <br />
          {t.heroTitleSecond}{' '}
          <span className="highlight">{t.heroTitleHighlight}</span>
        </h1>
        <p className="description">{t.heroDescription}</p>
        <div className="hero-links">
          <a className="text-link" href="#projects">
            {t.exploreWork} <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link text-link-muted" href="#contact">
            {t.getInTouch} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="signature">
          <span className="signature-line" aria-hidden="true" />
          <span>{t.thanksForStoppingBy}</span>
        </div>
      </div>
      <CodeVisual />
    </section>
  )
}
