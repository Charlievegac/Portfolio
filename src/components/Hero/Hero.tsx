import { Container } from 'react-bootstrap';
import AppButton from '../AppButton/AppButton';

const Hero = (): JSX.Element => {
  const heroImageUrl = `${import.meta.env.BASE_URL}hero-field.webp`;

  return (
    <section
      id="home"
      className="position-relative min-vh-100 text-light hero-section"
      style={{
        paddingTop: '9.8rem',
        paddingBottom: '6rem',
        backgroundImage:
          `linear-gradient(180deg, rgba(177, 185, 196, 0.35) 0%, rgb(0, 0, 0) 100%), url("${heroImageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container fluid className="mx-auto px-0" style={{ width: 'min(97%, 1500px)' }}>
        <div className="d-flex flex-column h-100">
          <div className="d-flex flex-column align-items-start hero-content-main">
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
              <span className="text-black">ENGINEER</span>
            </h1>
            <p
              className="mb-0 mt-3 fw-semibold"
              style={{
                maxWidth: '65rem',
                color: '#f1f5f9',
                fontSize: 'clamp(1rem, 1.6vw, 2rem)',
                lineHeight: 1.52,
                letterSpacing: '0.08em'
              }}
            >
              <span className="d-inline-block hero-intro-first-line">
                Current Junior @ USC Studying Computer Science + Business Administration.
              </span>
              <br />
              Passionate about <span style={{ color: '#22c55e' }}> Software </span> and <span style={{ color: '#22c55e' }}> Agriculture</span>.
              <br />
              Developing <span style={{ color: '#22c55e' }}> Full-Stack Applications </span> and other Projects
              <br />
              To Help Improve|Optimize|Scale <span style={{ color: '#22c55e' }}>Business Operations</span> and Provide Valuable Insights.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4 pt-1">
              <AppButton
                title="CONTACT"
                href="#contact"
                className="rounded-pill fw-bold"
                action="open_contact_section"
                style={{
                  minWidth: '6.9rem',
                  border: '1px solid rgba(255,255,255,0.72)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  letterSpacing: '0.08em',
                  padding: '0.55rem 1.3rem'
                }}
              />
              <AppButton
                title="VIEW WORK"
                href="#projects"
                className="rounded-pill fw-bold"
                action="open_projects_section"
                style={{
                  minWidth: '6.9rem',
                  border: '1px solid rgba(255,255,255,0.72)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  letterSpacing: '0.08em',
                  padding: '0.55rem 1.3rem'
                }}
              />
            </div>
          </div>

          <div className="mt-4 align-self-end text-end hero-about-block" style={{ maxWidth: '56rem' }}>
            <h2 className="mb-1" style={{ fontSize: '1.75em', letterSpacing: '0.06em' }}>
              More About Me:
            </h2>
            <ul
              className="mb-0 ps-0"
              style={{
                listStyle: 'disc inside',
                fontSize: '1.5em',
                fontWeight: 500,
                lineHeight: 1.45,
                letterSpacing: '0.03em'
              }}
            >
              <li>Fourth Generation Farmer From <span style={{ color: '#22c55e' }}>Jalisco</span>, Mexico</li>
              <li>I Love <span style={{ color: '#22c55e' }}>Agriculture</span> and want to help make it more <span style={{ color: '#22c55e' }}>Sustainable</span> and <span style={{ color: '#22c55e' }}>Efficient</span></li>
              <li>Cooking, Eating, and Trying New Restaurants <span style={{ color: '#22c55e' }}>"Emphasis on Eating"</span></li>
              <li>Coperation and <span style={{ color: '#22c55e' }}>Strategy Games</span> like Rainbow Six Siege, Monopoly, etc.</li>
              <li>Ideating and Creating Random Businesses at 2:00am with Friends</li>
              <li>Exploring the <span style={{ color: '#22c55e' }}>Outdoors</span> and <span style={{ color: '#22c55e' }}>Nature</span></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
