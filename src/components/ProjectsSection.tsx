import { useLanguage } from '../i18n/LanguageProvider'
import { projectIdeas } from '../data/projects'
import medcarePreview from '../assets/medcare-preview.svg'

type ProjectPreviewProps = {
  kind: 'medcare' | 'store' | 'tests'
  label: string
  conceptLabel: string
}

const previewKinds = ['medcare', 'store', 'tests'] as const

function ProjectPreview({ kind, label, conceptLabel }: ProjectPreviewProps) {
  return (
    <div className={`project-preview project-preview-${kind}`} aria-hidden="true">
      {kind === 'medcare' ? (
        <img className="medcare-preview-image" src={medcarePreview} alt="" />
      ) : (
        <div className="preview-window">
          <div className="preview-toolbar">
            <span className="preview-dots">
              <i />
              <i />
              <i />
            </span>
            <span>{label}</span>
            <span className="preview-live">
              <i /> {kind === 'tests' ? 'SPEC' : 'UI'}
            </span>
          </div>
          {kind === 'store' && (
            <div className="store-preview-body">
              <div className="store-preview-nav">
                <i />
                <i />
                <i />
              </div>
              <div className="store-preview-hero">
                <span className="store-preview-copy">
                  <i />
                  <i />
                  <b />
                </span>
                <span className="store-preview-product">
                  <i />
                </span>
              </div>
              <div className="store-preview-items">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
          {kind === 'tests' && (
            <div className="test-preview-body">
              <div className="test-preview-summary">
                <span>
                  <i />
                  <b />
                </span>
                <span>
                  <i />
                  <b />
                </span>
              </div>
              <div className="test-preview-list">
                <span>
                  <i />
                  <b />
                  <em />
                </span>
                <span>
                  <i />
                  <b />
                  <em />
                </span>
                <span>
                  <i />
                  <b />
                  <em />
                </span>
                <span>
                  <i />
                  <b />
                  <em />
                </span>
              </div>
            </div>
          )}
        </div>
      )}
      {kind !== 'medcare' && (
        <span className="preview-caption">{conceptLabel}</span>
      )}
    </div>
  )
}

export function ProjectsSection() {
  const { t } = useLanguage()

  if (t.projects.length !== projectIdeas.length) {
    throw new Error('Project translations and metadata must have matching entries')
  }

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
      <div className="project-grid">
        {t.projects.map((translatedProject, index) => {
          const project = projectIdeas[index]
          const previewKind = previewKinds[index]
          const previewLabel = t.projectPreviewLabels[index]

          if (!project || !previewKind || !previewLabel) {
            throw new Error(
              `Missing project presentation data for project ${index + 1}`,
            )
          }

          return (
            <a
              className="project-showcase-card"
              href={`mailto:hoidragsamuel@yahoo.com?subject=${encodeURIComponent(`${t.projectEmailSubject} ${translatedProject.title}`)}`}
              key={project.number}
              aria-label={t.discussProject.replace(
                '{title}',
                translatedProject.title,
              )}
            >
              <ProjectPreview
                kind={previewKind}
                label={previewLabel}
                conceptLabel={t.projectConceptLabel}
              />
              <span className="showcase-details">
                <span className="showcase-meta">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{t.projectStatus}</span>
                </span>
                <span className="project-title">{translatedProject.title}</span>
                <span className="project-description">
                  {translatedProject.description}
                </span>
                <span className="project-tools">{project.tools}</span>
                <span className="showcase-link">
                  {t.discussProjectLink} <span aria-hidden="true">↗</span>
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
