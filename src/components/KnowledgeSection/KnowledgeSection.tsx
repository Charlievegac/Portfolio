import { useEffect, useMemo, useRef, useState } from 'react';
import { Badge, Container } from 'react-bootstrap';

interface SkillCard {
  id: string;
  code: string;
  title: string;
  description: string;
  tags: string[];
}

const skillCards: SkillCard[] = [
  {
    id: 'card-01',
    code: '(01)',
    title: 'Full-Stack Development',
    description:
      'Designing and building complete web applications from frontend to backend - including user interfaces, APIs, databases, authentication, and deployment.',
    tags: ['React', 'Django', 'REST API', 'NoSQL', 'JWT', 'Git']
  },
  {
    id: 'card-02',
    code: '(02)',
    title: 'Backend Engineer',
    description:
      'Designing scalable backend systems and APIs that power web and mobile applications, with a focus on performance, clean architecture, and data integrity.',
    tags: ['Python', 'Django ORM', 'REST API', 'Database Design', 'Error Handling']
  },
  {
    id: 'card-03',
    code: '(03)',
    title: 'Frontend Dev & UI/UX',
    description:
      'Designing and building responsive, user-friendly interfaces that combine strong visual design with clean, scalable React architecture.',
    tags: ['React', 'Figma', 'Axios', 'Bootstrap', 'Git']
  },
  {
    id: 'card-04',
    code: '(04)',
    title: 'Data & Automation',
    description:
      'Building automation scripts and data workflows that reduce manual effort, improve reporting quality, and speed up decision-making.',
    tags: ['TypeScript', 'Python', 'ETL', 'SQL', 'Automation']
  }
];

const KnowledgeSection = (): JSX.Element => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const repeatedCards = useMemo(
    () => Array.from({ length: 10 }, () => skillCards).flat(),
    []
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onScroll = (): void => {
      const firstCard = viewport.firstElementChild as HTMLElement | null;
      if (!firstCard) return;
      const step = firstCard.offsetWidth + 12;
      const rawIndex = Math.round(viewport.scrollLeft / step);
      const normalized = ((rawIndex % skillCards.length) + skillCards.length) % skillCards.length;
      setActiveIndex(normalized);
    };

    viewport.addEventListener('scroll', onScroll);
    return () => viewport.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="knowledge" className="text-light" style={{ background: '#000000', paddingTop: '6rem', paddingBottom: '6rem' }}>
      <Container fluid className="mx-auto" style={{ width: 'min(97%, 1500px)' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2
            className="fw-bold mb-0"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.18em' }}
          >
            WHAT I CAN DO
          </h2>
        </div>

        <div
          ref={viewportRef}
          className="d-flex overflow-auto pb-3"
          style={{
            gap: '0.75rem',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: 'grab'
          }}
          aria-label="Knowledge cards scroller"
        >
          {repeatedCards.map((card, index) => (
            <article
              key={`${card.id}-${index}`}
              className="h-100 d-flex flex-column flex-shrink-0"
              style={{
                width: 'min(31%, 23rem)',
                minHeight: '22.5rem',
                padding: '1rem 0.9rem',
                borderRadius: '1.1rem',
                border: '1px solid rgba(220,220,220,0.42)',
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.08) 100%)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 6px 30px rgba(0,0,0,0.4)',
                scrollSnapAlign: 'start'
              }}
            >
              <p
                className="mb-2"
                style={{
                  color: '#a3e635',
                  fontSize: 'clamp(1rem, 1.2vw, 1.4rem)',
                  fontWeight: 500,
                  letterSpacing: '0.08em'
                }}
              >
                {card.code}
              </p>
              <h3
                className="mb-2 fw-bold"
                style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', letterSpacing: '0.05em' }}
              >
                {card.title}
              </h3>
              <p
                className="mb-3"
                style={{
                  color: '#e2e8f0',
                  fontSize: 'clamp(0.82rem, 0.95vw, 1rem)',
                  lineHeight: 1.45,
                  letterSpacing: '0.03em'
                }}
              >
                {card.description}
              </p>
              <div className="d-flex flex-wrap gap-2 mt-auto">
                {card.tags.map((tag) => (
                  <Badge
                    key={`${card.id}-${index}-${tag}`}
                    bg="secondary"
                    className="rounded-pill fw-medium"
                    style={{
                      background: 'rgba(148,163,184,0.34)',
                      color: '#e5e7eb',
                      fontSize: '0.68rem',
                      letterSpacing: '0.05em',
                      padding: '0.28rem 0.55rem'
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-3 gap-2">
          {skillCards.map((card, index) => (
            <span
              key={card.id}
              className="rounded-pill"
              style={{
                width: '2rem',
                height: '0.24rem',
                background: index === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.35)',
                transition: 'background 160ms ease'
              }}
            />
          ))}
        </div>
        <style>
          {`
            #knowledge [aria-label="Knowledge cards scroller"]::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </Container>
    </section>
  );
};

export default KnowledgeSection;
