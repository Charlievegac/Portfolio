import { Container, Nav, Navbar } from 'react-bootstrap';

const PortfolioNavbar = (): JSX.Element => {
  return (
    <Navbar expand="lg" fixed="top" className="pt-3">
      <Container fluid className="px-3 px-lg-4 d-flex justify-content-between">
        <Navbar.Brand
          href="#home"
          className="text-light fw-bold mb-0 d-inline-flex align-items-center gap-2"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 2rem)', letterSpacing: '0.22em' }}
        >
          CARLOS VEGA
          <span
            className="d-inline-flex"
            style={{
              width: '1em',
              height: '1em',
              background: '#ffffff',
              flex: '0 0 auto'
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="portfolio-navbar-nav"
          className="border border-light-subtle"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        />
        <Navbar.Collapse id="portfolio-navbar-nav" className="justify-content-end">
          <Nav
            className="d-flex align-items-center gap-2 p-2 rounded-pill mt-3 mt-lg-0"
            style={{
              border: '1px solid rgba(255,255,255,0.45)',
              background: 'rgba(255,255,255,0.14)',
              backdropFilter: 'blur(11px)',
              WebkitBackdropFilter: 'blur(11px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.23)'
            }}
          >
            <Nav.Link
              href="#home"
              className="text-white rounded-pill px-3 py-2 fw-bold"
              style={{ letterSpacing: '0.08em', fontSize: '0.85rem' }}
            >
              ABOUT_ME
            </Nav.Link>
            <Nav.Link
              href="#knowledge"
              className="text-light rounded-pill px-3 py-2 fw-bold"
              style={{ letterSpacing: '0.08em', fontSize: '0.85rem' }}
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="text-light rounded-pill px-3 py-2 fw-bold"
              style={{ letterSpacing: '0.08em', fontSize: '0.85rem' }}
            >
              PROJECTS
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className="text-light rounded-pill px-3 py-2 fw-bold"
              style={{ letterSpacing: '0.08em', fontSize: '0.85rem' }}
            >
              RESUME
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="text-light rounded-pill px-3 py-2 fw-bold border border-light-subtle"
              style={{ letterSpacing: '0.08em', fontSize: '0.85rem' }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
