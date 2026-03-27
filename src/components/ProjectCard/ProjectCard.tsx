export interface ProjectCardData {
  id: string;
  name: string;
  description: string;
  date: string;
  githubUrl: string;
  liveUrl: string | null;
}

export interface ProjectCardProps {
  project: ProjectCardData;
  selected: boolean;
  onSelect: (projectId: string) => void;
}

const ProjectCard = ({ project, selected, onSelect }: ProjectCardProps): JSX.Element => (
  <article
    className="project-row d-flex justify-content-between align-items-center rounded"
    role="button"
    tabIndex={0}
    aria-pressed={selected}
    data-selected={selected ? 'true' : 'false'}
    onClick={() => onSelect(project.id)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(project.id);
      }
    }}
    style={{
      gap: '1rem',
      minHeight: '4.4rem',
      padding: '0.6rem 1rem',
      border: `1px solid ${selected ? '#efefef' : 'rgba(255,255,255,0.7)'}`,
      background: selected ? '#efefef' : 'rgba(0,0,0,0.2)',
      color: selected ? '#111' : '#f8fafc'
    }}
  >
    <div className="d-flex align-items-baseline gap-3 text-break">
      <h3
        className="mb-0 fw-bold"
        style={{ fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', letterSpacing: '0.12em' }}
      >
        {project.name}
      </h3>
      <p
        className="project-description mb-0"
        style={{
          opacity: 0.92,
          fontSize: 'clamp(0.52rem, 0.72vw, 0.82rem)',
          letterSpacing: '0.08em'
        }}
      >
        {project.description}
      </p>
    </div>
    <div className="d-flex align-items-center" style={{ gap: '0.65rem' }}>
      <p
        className="mb-0"
        style={{ fontSize: 'clamp(1.05rem, 2vw, 2rem)', letterSpacing: '0.09em' }}
      >
        {project.date}
      </p>
      <a
        href={project.githubUrl}
        target="_blank"
        className="d-inline-flex align-items-center justify-content-center rounded-circle text-decoration-none"
        style={{
          width: '2rem',
          height: '2rem',
          border: '1px solid currentColor',
          color: 'inherit'
        }}
        aria-label={`${project.name} github`}
      >
        <img
          src={selected ? '/github-black.svg' : '/github-white.svg'}
          alt="GitHub"
          style={{ width: '1rem', height: '1rem' }}
        />
      </a>
      {project.liveUrl != null && project.liveUrl !== '' ? (
        <a
          href={project.liveUrl}
          target="_blank"
          className="d-inline-flex align-items-center justify-content-center rounded-circle text-decoration-none"
          style={{
            width: '2rem',
            height: '2rem',
            border: '1px solid currentColor',
            color: 'inherit'
          }}
          aria-label={`${project.name} live link`}
        >
          <img
            src={selected ? '/external-link-black.png' : '/external-link-white.png'}
            alt="External link"
            style={{ width: '1rem', height: '1rem' }}
          />
        </a>
      ) : null}
    </div>
  </article>
);

export default ProjectCard;
