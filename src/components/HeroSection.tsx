function CodeVisual() {
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
              builds: <span className="code-green">"React + TS"</span>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">03</span>
            <span>
              tests:{' '}
              <span className="code-green">"Cypress + Playwright"</span>,
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">04</span>
            <span>
              bugs: <span className="code-green">"all intentional"</span>,
            </span>
          </div>
          <div className="code-line active-code-line">
            <span className="line-number">05</span>
            <span>
              status: <span className="code-green">"still in progress"</span>
              <span className="code-cursor" />
            </span>
          </div>
          <div className="code-line code-comment">
            <span className="line-number">06</span>
            <span>{'}'} // ship after one more test</span>
          </div>
        </div>
      </div>
      <span className="code-stamp">&lt; / &gt;</span>
      <span className="visual-caption">IN THE MAKING</span>
      <span className="visual-number">01</span>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="page-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          A LITTLE WORK IN PROGRESS
        </p>
        <h1 id="page-title">
          Good things
          <br />
          take <span className="highlight">time.</span>
        </h1>
        <p className="description">
          I’m Samuel — a frontend developer and QA engineer who enjoys building
          thoughtful web experiences and making sure they work beautifully.
        </p>
        <div className="hero-links">
          <a className="text-link" href="#projects">
            EXPLORE MY WORK <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link text-link-muted" href="#contact">
            GET IN TOUCH <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="signature">
          <span className="signature-line" aria-hidden="true" />
          <span>Thanks for stopping by</span>
        </div>
      </div>
      <CodeVisual />
    </section>
  )
}
