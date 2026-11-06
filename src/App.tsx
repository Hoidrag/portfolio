import './App.css'

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Portfolio home">
          Samuel<span>.</span>
        </a>
        <span className="topbar-label">PERSONAL PORTFOLIO</span>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />A LITTLE WORK IN
            PROGRESS
          </p>
          <h1 id="page-title">
            Good things
            <br />
            take <span className="highlight">time.</span>
          </h1>
          <p className="description">
            This portfolio is currently a work in progress. I’m putting the
            finishing touches on it — please check back soon.
          </p>
          <div className="signature">
            <span className="signature-line" aria-hidden="true" />
            <span>Thanks for stopping by</span>
          </div>
        </div>

        <div className="visual" aria-hidden="true">
          <div className="visual-orbit orbit-outer" />
          <div className="visual-orbit orbit-inner" />
          <div className="visual-sun" />
          <span className="visual-caption">IN THE MAKING</span>
          <span className="visual-number">01</span>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 — Samuel Hoidrag</span>
        <span className="footer-location">
          SEE YOU SOON <span>↗</span>
        </span>
      </footer>
    </main>
  )
}

export default App
