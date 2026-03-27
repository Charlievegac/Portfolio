import { Container } from 'react-bootstrap';
import AppButton from '../AppButton/AppButton';
import Title from '../Title/Title';

const Resume = (): JSX.Element => {
  return (
    <div
      id="resume"
      className="d-flex align-items-start"
      style={{
        minHeight: 'auto',
        padding: '0em 0 6rem',
        background: '#000000'
      }}
    >
      <Container fluid className="mx-auto" style={{ width: 'min(97%, 1500px)' }}>
        <Title content="RESUME" />
        <div className="d-flex flex-wrap align-items-center gap-2">
          <AppButton
            title="VIEW RESUME →"
            href="#"
            className="rounded-pill fw-bold"
            action="view_resume"
            style={{
              border: '1px solid rgba(255,255,255,0.78)',
              padding: '0.5rem 1.5rem',
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              background: 'rgba(255,255,255,0.04)',
              color: '#fff'
            }}
          />
          <AppButton
            title="LINKEDIN →"
            href="https://www.linkedin.com/in/carlosjvega05/"
            className="rounded-pill fw-bold"
            action="open_linkedin"
            style={{
              border: '1px solid rgba(255,255,255,0.78)',
              padding: '0.5rem 1.5rem',
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              background: 'rgba(255,255,255,0.04)',
              color: '#fff'
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Resume;
