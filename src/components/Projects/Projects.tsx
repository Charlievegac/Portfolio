import { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard, { ProjectCardData } from '../ProjectCard/ProjectCard';

const Projects = (): JSX.Element => {
  const projectBgUrl = `${import.meta.env.BASE_URL}project-bg.png`;
  const projectRows: ProjectCardData[] = useMemo(
    () => [
      {
        id: 'agrov-farm',
        name: 'AGROV_FARM',
        description: 'Part of AGROV. Operations Management Microservice for Farmers.',
        date: 'On-Going',
        githubUrl: null,
        liveUrl: null,
        previewFolder: 'agrov-farm',
        previewFiles: ['Agrov_Home.png', 'Agrov_Auth.png', 'Agrov_Dashboard.png']
      },
      {
        id: 'agrov-distributor',
        name: 'AGROV_DIST',
        description: 'Part of AGROV. Operations Management Microservice for Distirbutors (Managers|Engineers) and communicate with Farmers.',
        date: 'On-Going',
        githubUrl: null,
        liveUrl: null,
        previewFolder: 'agrov-distributor',
        previewFiles: ['Agrov_Dashboard.png', 'Agrov_Products.png']
      },
      {
        id: 'chadi',
        name: 'CHADI',
        description: 'Create a Photo Based Date Album with Your Significant Other + Generate New Date Ideas with AI',
        date: '02-14-26',
        githubUrl: null,
        liveUrl: null,
        previewFolder: 'chadi',
        previewFiles: ['Chadi_Albums.png', 'Chadi_Memories.png']
      },
      {
        id: 'glez',
        name: 'GLEZ',
        description: 'Informative Web App. Showcases Landscaping Services for a Company in the LA Area.',
        date: '01-25-26',
        githubUrl: null,
        liveUrl: null,
        previewFolder: 'glez',
        previewFiles: ['placeholder.svg']
      },
      {
        id: 'cancer-ml',
        name: 'RNA_CANCER_CLASSIFICATION',
        description: 'RNA Cancer Classification Utilizing ML (Naive Bayes)',
        date: '04-12-25',
        githubUrl: null,
        liveUrl: null,
        previewFolder: 'cancer-ml',
        previewFiles: ['placeholder.svg']
      },
      {
        id: 'breast-cancer-ml',
        name: 'BREAST_CANCER_DETECTION',
        description: 'Breast Cancer Detection Utilizing ML (KNN)',
        date: '31-10-25',
        githubUrl: null,
        liveUrl: null,
        previewFolder: 'breast-cancer-ml',
        previewFiles: ['placeholder.svg']
      },
      {
        id: 'agropecuaria-vega',
        name: 'AGROPECUARIA_VEGA',
        description: 'Informitive Web App. Showcases my Family\'s Agricultural Business.',
        date: '12-31-24',
        githubUrl: 'https://github.com/Charlievegac/AgropecuariaVega',
        liveUrl: 'https://charlievegac.github.io/AgropecuariaVega/',
        previewFolder: 'agropecuaria-vega',
        previewFiles: ['placeholder.svg', 'placeholder.svg']
      }
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string>(projectRows[0]?.id ?? '');
  const handleSelectProject = (projectId: string): void => {
    setSelectedId((current) => (current === projectId ? '' : projectId));
  };

  return (
    <section id="projects" className="text-light py-5" style={{ backgroundImage: `url("${projectBgUrl}")`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div
        className="d-flex align-items-center"
        style={{
          minHeight: '100vh'
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
                onSelect={handleSelectProject}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
