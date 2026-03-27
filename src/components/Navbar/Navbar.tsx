import { useEffect, useMemo, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = (): JSX.Element => {
  const [activeHash, setActiveHash] = useState<string>(
    typeof window !== 'undefined' && window.location.hash ? window.location.hash : '#home'
  );

  const sectionHashes = useMemo(() => ['#home', '#knowledge', '#skills', '#projects', '#resume', '#contact'], []);

  useEffect(() => {
    const onHashChange = (): void => {
      setActiveHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const ids = sectionHashes
      .map((h) => h.replace('#', ''))
      .filter((id) => Boolean(document.getElementById(id)));

    if (ids.length === 0) return;

    const scores = new Map<string, { ratio: number; centerDelta: number }>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const viewportCenter = window.innerHeight / 2;
          const sectionCenter = entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
          const centerDelta = Math.abs(sectionCenter - viewportCenter);

          scores.set(entry.target.id, {
            ratio: entry.isIntersecting ? entry.intersectionRatio : 0,
            centerDelta
          });
        }

        let bestId: string | null = null;
        let bestRatio = -1;
        let bestDelta = Number.POSITIVE_INFINITY;
        for (const [id, score] of scores.entries()) {
          if (score.ratio <= 0) continue;

          if (score.ratio > bestRatio + 1e-6) {
            bestRatio = score.ratio;
            bestDelta = score.centerDelta;
            bestId = id;
            continue;
          }

          if (Math.abs(score.ratio - bestRatio) <= 1e-6 && score.centerDelta < bestDelta) {
            bestDelta = score.centerDelta;
            bestId = id;
          }
        }

        if (bestId) setActiveHash(`#${bestId}`);
      },
      {
        // Bias toward the section near the middle of the viewport.
        root: null,
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.02, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1]
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionHashes]);

  const navItemStyle = (hash: string): React.CSSProperties => ({
    letterSpacing: '0.08em',
    fontSize: activeHash === hash ? '1em' : '0.75em'
  });

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
            style={{ width: '1em', height: '1em', background: '#ffffff', flex: '0 0 auto', borderRadius: '5px', border: '1px solid #ffffff' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="portfolio-navbar-nav"
          className="border border-light-subtle"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        />
        <Navbar.Collapse id="portfolio-navbar-nav" className="justify-content-end">
          <Nav
            className="portfolio-nav-menu d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2 p-2 rounded-4 mt-3 mt-lg-0"
            style={{
              border: '1px solid rgba(255,255,255,0.45)',
              background: 'rgba(255,255,255,0.14)',
              backdropFilter: 'blur(11px)',
              WebkitBackdropFilter: 'blur(11px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.23)'
            }}
          >
            <Nav.Link href="#home" onClick={() => setActiveHash('#home')} className="text-white rounded-pill px-3 py-2 fw-bold text-center text-lg-start" style={navItemStyle('#home')}>
              ABOUT ME
            </Nav.Link>
            <Nav.Link href="#knowledge" onClick={() => setActiveHash('#knowledge')} className="text-light rounded-pill px-3 py-2 fw-bold text-center text-lg-start" style={navItemStyle('#knowledge')}>
              SKILLS
            </Nav.Link>
            <Nav.Link href="#projects" onClick={() => setActiveHash('#projects')} className="text-light rounded-pill px-3 py-2 fw-bold text-center text-lg-start" style={navItemStyle('#projects')}>
              PROJECTS
            </Nav.Link>
            <Nav.Link href="#resume" onClick={() => setActiveHash('#resume')} className="text-light rounded-pill px-3 py-2 fw-bold text-center text-lg-start" style={navItemStyle('#resume')}>
              RESUME
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setActiveHash('#contact')} className="text-light rounded-pill px-3 py-2 fw-bold border border-light-subtle text-center text-lg-start" style={navItemStyle('#contact')}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
