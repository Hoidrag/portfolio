import { SiteFooter } from './SiteFooter'

export function ContactSection() {
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
          <a className="contact-link" href="mailto:hoidragsamuel@yahoo.com">
            <span>hoidragsamuel@yahoo.com</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <SiteFooter />
    </section>
  )
}
