import { Button, Container } from 'react-bootstrap';

const HeroSection = (): JSX.Element => {
  return (
    <section
      id="home"
      className="position-relative min-vh-100 text-light"
      style={{
        paddingTop: '9.8rem',
        paddingBottom: '6rem',
        backgroundImage:
          'linear-gradient(180deg, rgba(177, 185, 196, 0.35) 0%, rgb(0, 0, 0) 100%), url("/hero-field.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container fluid className="mx-auto px-0" style={{ width: 'min(97%, 1500px)' }}>
        <div className="d-flex flex-column h-100">
          <div className="d-flex flex-column align-items-start">
            <h1
              className="m-0 fw-bold text-white"
              style={{
                fontSize: 'clamp(2.25rem, 7vw, 6rem)',
                lineHeight: '0.96',
                letterSpacing: '0.08em'
              }}
            >
              SOFTWARE
              <br />
              <span style={{ color: 'black' }}>ENGINEER</span>
            </h1>
            <p
              className="mb-0 mt-3 fw-semibold"
              style={{
                maxWidth: '42rem',
                color: '#f1f5f9',
                fontSize: 'clamp(1rem, 1.6vw, 2rem)',
                lineHeight: 1.52,
                letterSpacing: '0.08em'
              }}
            >
              <span className="d-inline-block text-nowrap">
                Current Junior @ USC Studying Computer Science and business administration.
              </span>
              <br />
              Passionate about developing Full-Stack applications, and projects
              that help improve/ optimize/scale productive and business insights.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 pt-1">
              <Button
                href="#contact"
                className="rounded-pill fw-bold"
                style={{
                  minWidth: '6.9rem',
                  border: '1px solid rgba(255,255,255,0.72)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  letterSpacing: '0.08em',
                  padding: '0.55rem 1.3rem'
                }}
              >
                CONTACT
              </Button>
              <Button
                href="#projects"
                className="rounded-pill fw-bold"
                style={{
                  minWidth: '6.9rem',
                  border: '1px solid rgba(255,255,255,0.72)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  letterSpacing: '0.08em',
                  padding: '0.55rem 1.3rem'
                }}
              >
                VIEW WORK
              </Button>
            </div>
          </div>

          <div className="mt-4 align-self-end text-end" style={{ maxWidth: '56rem' }}>
              <h2 className="mb-1" style={{ fontSize: '1.75em', letterSpacing: '0.06em' }}>
                More About Me:
              </h2>
              <ul
                className="mb-0 ps-0"
                style={{
                  listStyle: 'disc inside',
                  fontSize: '1.75em',
                  fontWeight: 500,
                  lineHeight: 1.45,
                  letterSpacing: '0.03em'
                }}
              >
                <li>I love agriculture, and working with my hands</li>
                <li>The outdoors, and exploring the world</li>
                <li>Eating, and trying new foods</li>
                <li>Strategy video games</li>
              </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
