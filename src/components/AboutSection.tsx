export function AboutSection() {
  return (
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
            that every detail works as it should — using tools like Cypress and
            Playwright along the way.
          </p>
          <div className="skills" aria-label="Technologies and tools">
            <span>React</span>
            <span>TypeScript</span>
            <span>Manual QA</span>
            <span>Cypress</span>
            <span>Playwright</span>
          </div>
        </div>
      </div>
    </section>
  )
}
