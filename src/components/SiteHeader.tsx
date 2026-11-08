export function SiteHeader() {
  return (
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
  )
}
