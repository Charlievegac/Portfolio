import { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard, { ProjectCardData } from '../ProjectCard/ProjectCard';

const Projects = (): JSX.Element => {
  const projectBgUrl = `${import.meta.env.BASE_URL}project-bg.png`;
  const projectRows: ProjectCardData[] = useMemo(
    () => [
      {
        id: 'chadi',
        name: 'CHADI',
        description: 'Create a Photo Based Date Album with Your Significant Other + Generate New Date Ideas with AI',
        date: 'On-Going Project',
        githubUrl: '',
        liveUrl: null
      },
      {
        id: 'agrov-farm',
        name: 'AGROV-FARM',
        description: 'Part of AGROV. Operations Management Microservice for Farmers.',
        date: 'On-Going Project',
        githubUrl: '',
        liveUrl: null
      },
      {
        id: 'agrov-distributor',
        name: 'AGROV-DIST',
        description: 'Part of AGROV. Operations Management Microservice for Distirbutors (Managers|Engineers) and communicate with Farmers.',
        date: 'On-Going Project',
        githubUrl: '',
        liveUrl: null
      },
      {
        id: 'glez',
        name: 'GLEZ',
        description: 'Informative Web App. Showcases Landscaping Services for a Company in the LA Area.',
        date: '02-24-26',
        githubUrl: '',
        liveUrl: null
      },
      {
        id: 'cancer-ml',
        name: 'RNA_CANCER_CLASSIFICATION',
        description: 'RNA Cancer Classification Utilizing ML (Naive Bayes)',
        date: '04-12-25',
        githubUrl: '',
        liveUrl: null
      },{
        id: 'breast-cancer-ml',
        name: 'BREAST_CANCER_DETECTION',
        description: 'Breast Cancer Detection Utilizing ML (KNN)',
        date: '31-10-25',
        githubUrl: '',
        liveUrl: null
      },
      {
        id: 'agropecuaria-vega',
        name: 'AGROPECUARIA VEGA',
        description: 'Informitive Web App. Showcases my Family\'s Agricultural Business.',
        date: '12-31-24',
        githubUrl: 'https://github.com/Charlievegac/AgropecuariaVega',
        liveUrl: 'https://charlievegac.github.io/AgropecuariaVega/'
      }
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string>(projectRows[0]?.id ?? '');

  return (
    <section id="projects" className="text-light py-5" style={{ backgroundImage: `url("${projectBgUrl}")`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div
        className="d-flex align-items-center"
        style={{
          minHeight: '100vh',
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
              <ProjectCard
                key={project.id}
                project={project}
                selected={project.id === selectedId}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
