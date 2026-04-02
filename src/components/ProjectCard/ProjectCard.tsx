import { useMemo } from 'react';

export interface ProjectCardData {
  id: string;
  name: string;
  description: string;
  date: string;
  githubUrl: string | null;
  liveUrl: string | null;
  /** Folder under `public/project-previews/<previewFolder>/` (one folder per project). */
  previewFolder?: string;
  /** One or more filenames inside that folder (horizontal scroll). E.g. `['a.png', 'b.webp']`. */
  previewFiles?: string[];
}

export interface ProjectCardProps {
  project: ProjectCardData;
  selected: boolean;
  onSelect: (projectId: string) => void;
}

const encodePathSegments = (path: string): string =>
  path
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');

const buildPreviewUrls = (folder: string | undefined, files: string[] | undefined): string[] => {
  if (!folder || !files?.length) return [];
  const safeFolder = folder.replace(/^\/+|\/+$/g, '');
  const base = `${import.meta.env.BASE_URL}project-previews/${encodePathSegments(safeFolder)}/`;
  return files.map((file) => {
    const name = file.replace(/^\//, '');
    if (/^https?:\/\//i.test(name)) return name;
    return `${base}${encodePathSegments(name)}`;
  });
};

const ProjectCard = ({ project, selected, onSelect }: ProjectCardProps): JSX.Element => {
  const githubIcon = `${import.meta.env.BASE_URL}${selected ? 'github-black.svg' : 'github-white.svg'}`;
  const externalIcon = `${import.meta.env.BASE_URL}${selected ? 'external-link-black.png' : 'external-link-white.png'}`;

  const previewUrls = useMemo(
    () => buildPreviewUrls(project.previewFolder, project.previewFiles),
    [project.previewFolder, project.previewFiles]
  );

  const hasPreviews = previewUrls.length > 0;

  return (
    <article
      className={`project-row project-card rounded project-row-item ${
        hasPreviews ? 'd-flex flex-column align-items-stretch' : 'd-flex justify-content-between align-items-center'
      }`}
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
        gap: '0.65rem',
        padding: '0.45rem 0.85rem',
        border: `1px solid ${selected ? '#111827' : 'rgba(255,255,255,0.7)'}`,
        background: selected ? '#ffffff' : 'rgba(0,0,0,0.5)',
        color: selected ? '#111827' : '#f8fafc'
      }}
    >
      <div className="project-card-header-row d-flex w-100 justify-content-between align-items-center project-row-top" style={{ gap: '1rem' }}>
        <div className="d-flex align-items-baseline gap-3 text-break project-row-main flex-grow-1 min-w-0">
          <h3
            className="mb-0 fw-bold flex-shrink-0"
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
        <div className="d-flex align-items-center flex-shrink-0 project-row-actions" style={{ gap: '0.65rem' }}>
          <p
            className="mb-0"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 2rem)', letterSpacing: '0.09em' }}
          >
            {project.date}
          </p>
          {project.githubUrl != null && project.githubUrl !== '' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="d-inline-flex align-items-center justify-content-center rounded-circle text-decoration-none"
              style={{
                width: '2rem',
                height: '2rem',
                border: '1px solid currentColor',
                color: 'inherit'
              }}
              aria-label={`${project.name} github`}
            >
              <img src={githubIcon} alt="GitHub" style={{ width: '1rem', height: '1rem' }} />
            </a>
          ) : null}
          {project.liveUrl != null && project.liveUrl !== '' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="d-inline-flex align-items-center justify-content-center rounded-circle text-decoration-none"
              style={{
                width: '2rem',
                height: '2rem',
                border: '1px solid currentColor',
                color: 'inherit'
              }}
              aria-label={`${project.name} live link`}
            >
              <img src={externalIcon} alt="External link" style={{ width: '1rem', height: '1rem' }} />
            </a>
          ) : null}
        </div>
      </div>

      {hasPreviews ? (
        <div className={`project-card-preview ${selected ? 'project-card-preview--open' : ''}`}>
          <div className="project-card-preview-measure">
            <div
              className="project-preview-scroll project-card-preview-panel d-flex gap-2 w-100 overflow-x-auto pb-1"
              style={{
                marginTop: '0.35rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(15, 23, 42, 0.12)'
              }}
              onClick={(e) => e.stopPropagation()}
              role="region"
              aria-label={`${project.name} screenshots`}
            >
              {previewUrls.map((url, index) => (
                <div
                  key={`${project.id}-preview-${index}`}
                  className="flex-shrink-0 project-card-preview-thumb"
                >
                  <img
                    src={url}
                    alt={`${project.name} preview ${index + 1}`}
                    className="rounded"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default ProjectCard;
