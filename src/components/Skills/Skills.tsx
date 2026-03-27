import { useEffect, useMemo, useRef } from 'react';

interface TechRow {
  id: string;
  label: string;
  direction: 'left' | 'right';
  items: string[];
}

const techRows: TechRow[] = [
  {
    id: 'languages-tools',
    label: 'Languages & Tools',
    direction: 'right',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Java',
      'C++',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'Git',
      'Docker',
      'Linux'
    ]
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    direction: 'left',
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Django',
      'FastAPI',
      'Bootstrap',
      'Tailwind',
      'Axios',
      'Redux'
    ]
  },
  {
    id: 'concepts',
    label: 'Core CS Concepts',
    direction: 'right',
    items: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'System Design',
      'REST APIs',
      'Authentication',
      'Caching',
      'Concurrency',
      'Testing',
      'CI/CD'
    ]
  }
];

interface MarqueeRowProps {
  row: TechRow;
}

const MarqueeRow = ({ row }: MarqueeRowProps): JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const lastTsRef = useRef<number>(0);
  const segmentWidthRef = useRef<number>(0);
  const xRef = useRef<number>(0);
  const repeatedItems = useMemo(() => [...row.items, ...row.items, ...row.items], [row.items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const setup = (): void => {
      segmentWidthRef.current = track.scrollWidth / 3;
      xRef.current = -segmentWidthRef.current;
      track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
    };

    setup();

    const speed = 24;

    const animate = (ts: number): void => {
      if (!trackRef.current || segmentWidthRef.current === 0) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      if (lastTsRef.current === 0) {
        lastTsRef.current = ts;
      }

      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const delta = speed * dt * (row.direction === 'left' ? -1 : 1);
      xRef.current += delta;

      if (xRef.current <= -segmentWidthRef.current * 2) {
        xRef.current += segmentWidthRef.current;
      } else if (xRef.current >= 0) {
        xRef.current -= segmentWidthRef.current;
      }

      trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [row.direction]);

  return (
    <div className="overflow-hidden w-100">
      <div ref={trackRef} className="d-flex" style={{ gap: '1rem', width: 'max-content', willChange: 'transform' }}>
        {repeatedItems.map((item, index) => (
          <span
            key={`${row.id}-${item}-${index}`}
            className="d-inline-flex align-items-center justify-content-center rounded-pill skills-pill"
            style={{
              whiteSpace: 'nowrap',
              minWidth: '6.5rem',
              height: '2.3rem',
              padding: '0 1.15rem',
              border: '1px solid rgba(255,255,255,0.37)',
              background: 'rgba(255,255,255,0.03)',
              color: '#e5e7eb',
              fontSize: '1.35rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)'
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = (): JSX.Element => {
  return (
    <section id="skills" className="text-light" style={{ background: '#000000', paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="mx-auto" style={{ width: 'min(97%, 1500px)' }}>
        <h2
          className="fw-bold mb-4 text-uppercase"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.14em' }}
        >
          Skills
        </h2>
        {techRows.map((row) => (
          <div key={row.id} className="mb-4">
            <h3
              className="mb-3 fw-semibold"
              style={{ color: '#9ca3af', fontSize: '1.75rem', letterSpacing: '0.08em' }}
            >
              {row.label}
            </h3>
            <MarqueeRow row={row} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
