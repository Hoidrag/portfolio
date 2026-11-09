import { useLanguage } from '../LanguageContext'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="content-section about-section" id="about">
      <div className="section-heading">
        <p className="section-kicker">{t.aboutKicker}</p>
        <span className="section-index">01 / 03</span>
      </div>
      <div className="about-content">
        <h2>
          {t.aboutTitle}
          <br />
          <span className="highlight">{t.aboutTitleHighlight}</span>
        </h2>
        <div className="about-copy">
          <p>{t.aboutParagraphOne}</p>
          <p>{t.aboutParagraphTwo}</p>
          <div className="skills" aria-label={t.skillsLabel}>
            <span>React</span>
            <span>TypeScript</span>
            <span>{t.manualQa}</span>
            <span>Cypress</span>
            <span>Playwright</span>
          </div>
        </div>
      </div>
    </section>
  )
}
