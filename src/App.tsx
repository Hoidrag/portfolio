import './App.css'

const projectIdeas = [
  {
    number: '01',
    title: 'Analytics dashboard',
    description:
      'A clear, responsive dashboard for exploring data and keeping track of what matters.',
    tools: 'React · TypeScript',
  },
  {
    number: '02',
    title: 'E-commerce experience',
    description:
      'A thoughtful storefront concept focused on smooth browsing and a simple checkout.',
    tools: 'React · UI',
  },
  {
    number: '03',
    title: 'End-to-end test toolkit',
    description:
      'Reusable browser tests that make essential user journeys easier to trust.',
    tools: 'Cypress · Playwright',
  },
]

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Samuel home">
          Samuel<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

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
            I’m Samuel — a frontend developer and QA engineer who enjoys
            building thoughtful web experiences and making sure they work
            beautifully.
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
                  tests: <span className="code-green">"Cypress + Playwright"</span>,
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
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-heading">
          <p className="section-kicker">A LITTLE ABOUT ME</p>
          <span className="section-index">01 / 03</span>
        </div>
        <div className="about-content">
          <h2>
            Building for the web,
            <br />
            <span className="highlight">testing every detail.</span>
          </h2>
          <div className="about-copy">
            <p>
              I’m Samuel Hoidrag, a frontend developer working with React,
              TypeScript, and modern web technologies. I also bring a quality
              assurance perspective to my work, with experience in manual and
              automated testing.
            </p>
            <p>
              I enjoy turning ideas into approachable interfaces and checking
              that every detail works as it should — using tools like Cypress
              and Playwright along the way.
            </p>
            <div className="skills" aria-label="Technologies and tools">
              <span>React</span>
              <span>TypeScript</span>
              <span>Frontend</span>
              <span>Manual QA</span>
              <span>Cypress</span>
              <span>Playwright</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">SELECTED PROJECT IDEAS</p>
          <span className="section-index">02 / 03</span>
        </div>
        <div className="projects-intro">
          <h2>Things taking shape.</h2>
          <p>
            This portfolio is still growing. Here are a few ideas I’m exploring
            — more work coming soon.
          </p>
        </div>
        <div className="project-list">
          {projectIdeas.map((project) => (
            <a
              className="project-card"
              href={`mailto:hoidragsamuel@yahoo.com?subject=${encodeURIComponent(`Tell me about ${project.title}`)}`}
              key={project.number}
              aria-label={`Discuss the ${project.title} project idea by email`}
            >
              <span className="project-number">{project.number}</span>
              <span className="project-details">
                <span className="project-title">{project.title}</span>
                <span className="project-description">
                  {project.description}
                </span>
                <span className="project-tools">{project.tools}</span>
              </span>
              <span className="project-action">
                <span className="project-status">IN PROGRESS</span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
        <p className="projects-note">
          These are concepts in progress, not published projects. Have an idea
          in mind? <a href="#contact">Let’s talk.</a>
        </p>
      </section>

      <section className="content-section contact-section" id="contact">
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
        <div className="deploy-visual">
          <div className="deploy-orbit deploy-orbit-outer" aria-hidden="true" />
          <div className="deploy-orbit deploy-orbit-inner" aria-hidden="true" />
          <div className="code-window deploy-code-window">
            <div className="code-window-bar">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>deploy.ts</span>
              <span className="window-menu" aria-hidden="true">
                •••
              </span>
            </div>
            <div className="deploy-code-lines">
              <div className="deploy-code-line deploy-code-line-1">
                <span className="line-number">01</span>
                <span>
                  <span className="code-purple">type</span> Status ={' '}
                  <span className="code-green">"working"</span> |{' '}
                  <span className="code-green">"don't touch"</span>;
                </span>
              </div>
              <div className="deploy-code-line deploy-code-line-2">
                <span className="line-number">02</span>
                <span>
                  <span className="code-purple">function</span>{' '}
                  <span className="code-blue">deploy</span>(bugs:{' '}
                  <span className="code-purple">number</span>): Status {'{'}
                </span>
              </div>
              <div className="deploy-code-line deploy-code-line-3">
                <span className="line-number">03</span>
                <span>
                  &nbsp;&nbsp;<span className="code-purple">if</span> (bugs &gt;
                  0) {'{'}
                </span>
              </div>
              <div className="deploy-code-line deploy-code-line-4">
                <span className="line-number">04</span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-purple">return</span>{' '}
                  <span className="code-green">"working"</span>;
                </span>
              </div>
              <div className="deploy-code-line deploy-code-line-5">
                <span className="line-number">05</span>
                <span>&nbsp;&nbsp;{'}'}</span>
              </div>
              <div className="deploy-code-line deploy-code-line-6">
                <span className="line-number">06</span>
                <span>
                  &nbsp;&nbsp;<span className="code-purple">return</span>{' '}
                  <span className="code-green">"don't touch"</span>;
                </span>
              </div>
              <div className="deploy-code-line deploy-code-line-7">
                <span className="line-number">07</span>
                <span>{'}'}</span>
              </div>
              <div className="deploy-code-line deploy-code-line-8 deploy-code-comment">
                <span className="line-number">08</span>
                <span>
                  // if it works, it's not a bug anymore
                  <span className="deploy-code-cursor" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <span>© 2026 — Samuel Hoidrag</span>
          <a className="footer-location" href="#home">
            BACK TO TOP <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </section>
    </main>
  )
}

export default App
