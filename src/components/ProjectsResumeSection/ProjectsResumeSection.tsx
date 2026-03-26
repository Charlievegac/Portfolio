import { Container } from 'react-bootstrap';

interface ProjectRow {
  id: string;
  name: string;
  description: string;
  date: string;
  githubUrl: string;
  liveUrl: string;
  highlighted?: boolean;
}

const projectRows: ProjectRow[] = [
  {
    id: 'chadi',
    name: 'CHADI',
    description: 'Photo-Date Album + Generate Date Ideas',
    date: '02-24-26',
    githubUrl: '#',
    liveUrl: '#',
    highlighted: true
  },
  {
    id: 'agrov-farm',
    name: 'AGROV-FARM',
    description: 'Manage Inventory, Jobs, and Finances',
    date: '02-24-26',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'agrov-business',
    name: 'AGROV-BUSINESS',
    description: 'Manage Your Clients',
    date: '02-24-26',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'glez',
    name: 'GLEZ',
    description: 'Informative Web Application',
    date: '02-24-26',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 'cancer-ml',
    name: 'CANCER_ML',
    description: 'Cancer Detection + Classification',
    date: '02-24-26',
    githubUrl: '#',
    liveUrl: '#'
  }
];

const ProjectsResumeSection = (): JSX.Element => {
  return (
    <section id="projects" className="text-light" style={{ background: '#000000' }}>
      <div
        className="d-flex align-items-center"
        style={{
          minHeight: '100vh',
          background:
            'radial-gradient(circle at 20% 90%, rgba(255,255,255,0.12), transparent 50%), #000000'
        }}
      >
        <Container fluid className="mx-auto" style={{ width: 'min(97%, 1500px)' }}>
          <h2
            className="text-center fw-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 4.8vw, 4rem)', letterSpacing: '0.16em' }}
          >
            PROJECTS
          </h2>
          <div className="d-flex flex-column" style={{ gap: '0.9rem' }}>
            {projectRows.map((project) => (
              <article
                key={project.id}
                className="d-flex justify-content-between align-items-center rounded"
                style={{
                  gap: '1rem',
                  minHeight: '4.4rem',
                  padding: '0.6rem 1rem',
                  border: `1px solid ${project.highlighted ? '#efefef' : 'rgba(255,255,255,0.7)'}`,
                  background: project.highlighted ? '#efefef' : 'rgba(0,0,0,0.2)',
                  color: project.highlighted ? '#111' : '#f8fafc'
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
                    className="mb-0"
                    style={{
                      opacity: 0.92,
                      fontSize: 'clamp(0.64rem, 0.95vw, 1rem)',
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
                    className="d-inline-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                    style={{
                      width: '2rem',
                      height: '2rem',
                      border: '1px solid currentColor',
                      color: 'inherit',
                      fontSize: '0.68rem',
                      fontWeight: 700
                    }}
                    aria-label={`${project.name} github`}
                  >
                    GH
                  </a>
                  <a
                    href={project.liveUrl}
                    className="d-inline-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                    style={{
                      width: '2rem',
                      height: '2rem',
                      border: '1px solid currentColor',
                      color: 'inherit',
                      fontSize: '0.68rem',
                      fontWeight: 700
                    }}
                    aria-label={`${project.name} live link`}
                  >
                    OUT
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>

      <div
        id="resume"
        className="d-flex align-items-end"
        style={{
          minHeight: '42vh',
          padding: '4rem 0 6rem',
          background: '#000000',
          clipPath: 'polygon(0 18%, 40% 0, 100% 28%, 100% 100%, 0 100%)'
        }}
      >
        <Container fluid className="mx-auto" style={{ width: 'min(97%, 1500px)' }}>
          <h2
            className="mb-3 fw-bold"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.3rem)', letterSpacing: '0.17em' }}
          >
            RESUME
          </h2>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <a
              href="#"
              className="d-inline-block rounded-pill text-light text-decoration-none fw-bold"
              style={{
                border: '1px solid rgba(255,255,255,0.78)',
                padding: '0.5rem 1.5rem',
                fontSize: '0.82rem',
                letterSpacing: '0.08em'
              }}
            >
              VIEW RESUME
            </a>
            <a
              href="#"
              className="d-inline-block rounded-pill text-light text-decoration-none fw-bold"
              style={{
                border: '1px solid rgba(255,255,255,0.78)',
                padding: '0.5rem 1.5rem',
                fontSize: '0.82rem',
                letterSpacing: '0.08em'
              }}
            >
              LINKEDIN
            </a>
          </div>
        </Container>
      </div>

      <div id="contact" className="py-5" style={{ background: '#000000' }}>
        <Container fluid className="mx-auto" style={{ width: 'min(97%, 1500px)' }}>
          <h2
            className="text-center fw-bold mb-3"
            style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', letterSpacing: '0.14em' }}
          >
            CONTACT
          </h2>
          <form className="mx-auto d-flex flex-column" style={{ width: 'min(100%, 760px)', gap: '0.95rem' }}>
            <input
              type="text"
              placeholder="Name*"
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
            />
            <input
              type="email"
              placeholder="Email*"
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
            />
            <input
              type="text"
              placeholder="Message*"
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
            />
            <button
              type="submit"
              className="btn btn-outline-light rounded-pill align-self-center mt-3"
              style={{
                minWidth: '8.5rem',
                minHeight: '2.15rem',
                padding: '0.45rem 1.2rem',
                fontSize: '0.64rem',
                letterSpacing: '0.08em'
              }}
            >
              SEND
            </button>
          </form>
        </Container>
      </div>

      <footer style={{ background: '#e8e8e8', color: '#111111' }}>
        <Container fluid className="mx-auto py-4" style={{ width: 'min(97%, 1500px)' }}>
          <div className="d-flex flex-wrap align-items-start justify-content-between" style={{ gap: '1rem' }}>
            <div>
              <p className="mb-2 fw-semibold" style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                Creator
              </p>
              <p className="mb-0" style={{ fontSize: '0.75rem' }}>
                Carlos J. Vega
              </p>
            </div>
            <div>
              <p className="mb-2 fw-semibold" style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                CONTACT
              </p>
              <p className="mb-0" style={{ fontSize: '0.75rem' }}>
                Phone: 321-552-1462
              </p>
              <p className="mb-0" style={{ fontSize: '0.75rem' }}>
                Email: carlosvega@email.com
              </p>
            </div>
            <div>
              <p className="mb-2 fw-semibold" style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                SOCIALS
              </p>
              <div className="d-flex align-items-center gap-2">
                <a href="#" aria-label="Instagram" className="d-inline-flex">
                  <img src="/instagram-black.svg" alt="Instagram" style={{ width: '1rem', height: '1rem' }} />
                </a>
                <a href="#" aria-label="GitHub" className="d-inline-flex">
                  <img src="/github-black.svg" alt="GitHub" style={{ width: '1rem', height: '1rem' }} />
                </a>
                <a href="#" aria-label="LinkedIn" className="d-inline-flex">
                  <img src="/linkedin-black.png" alt="LinkedIn" style={{ width: '1rem', height: '1rem' }} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
};

export default ProjectsResumeSection;
