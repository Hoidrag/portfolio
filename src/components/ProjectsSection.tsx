import { projectIdeas } from '../data/projects'

export function ProjectsSection() {
  return (
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
        These are concepts in progress, not published projects. Have an idea in
        mind? <a href="#contact">Let’s talk.</a>
      </p>
    </section>
  )
}
