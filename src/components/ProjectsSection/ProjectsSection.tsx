import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './ProjectsSection.module.css';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ProjectsSectionProps {
  projects: ProjectItem[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps): JSX.Element => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-4 mb-lg-5">
          <div>
            <p className={styles.kicker}>Selected Work</p>
            <h2 className={styles.title}>Projects</h2>
          </div>
        </div>
        <Row className="g-4">
          {projects.map((project) => (
            <Col md={6} xl={4} key={project.id}>
              <Card className={styles.card}>
                <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                <Card.Body className="p-4">
                  <Card.Title className={styles.cardTitle}>{project.title}</Card.Title>
                  <Card.Text className={styles.cardText}>{project.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <Badge key={`${project.id}-${tag}`} bg="light" text="dark">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
