import { useLanguage } from '../LanguageContext'
import { projectIdeas } from '../data/projects'

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-kicker">{t.projectsKicker}</p>
        <span className="section-index">02 / 03</span>
      </div>
      <div className="projects-intro">
        <h2>{t.projectsTitle}</h2>
        <p>{t.projectsDescription}</p>
      </div>
      <div className="project-list">
        {t.projects.map((translatedProject, index) => {
          const project = projectIdeas[index]

          if (!project) {
            throw new Error(`Missing project metadata for project ${index + 1}`)
          }

          return (
            <a
              className="project-card"
              href={`mailto:hoidragsamuel@yahoo.com?subject=${encodeURIComponent(`${t.projectEmailSubject} ${translatedProject.title}`)}`}
              key={project.number}
              aria-label={t.discussProject.replace(
                '{title}',
                translatedProject.title,
              )}
            >
              <span className="project-number">{project.number}</span>
              <span className="project-details">
                <span className="project-title">{translatedProject.title}</span>
                <span className="project-description">
                  {translatedProject.description}
                </span>
                <span className="project-tools">{project.tools}</span>
              </span>
              <span className="project-action">
                <span className="project-status">{t.projectStatus}</span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
            </a>
          )
        })}
      </div>
      <p className="projects-note">
        {t.projectsNote} <a href="#contact">{t.projectsContact}</a>
      </p>
    </section>
  )
}
