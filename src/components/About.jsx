import { Award, GraduationCap, Code2, BrainCircuit } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const t = {
  subtitle: 'Get To Know Me',
  title: 'About Me',
  engHeading: 'Engineering the Future with ',
  engHighlight: 'Code & AI',
  introParagraph1: 'I am a passionate and driven Computer Science Engineering student at ',
  college: 'Nitte Meenakshi Institute of Technology',
  introParagraph1End: '. My journey in tech is driven by an insatiable curiosity about how things work and a desire to build products that make a positive impact.',
  introParagraph2: 'With a solid foundation in core programming paradigms like Object-Oriented Programming in Java and scripting in Python, combined with Data Structures and Algorithms in Java, I tackle complex challenges analytically. I am actively translating this technical depth into high-performance web applications and multi-modal AI intelligence tools.',
  statusLabel: 'Current Status',
  statusValue: 'B.E. CSE Student',
  cgpaLabel: 'Academic CGPA',
  cgpaValue: '8.97 / 10',
  locationLabel: 'Location',
  locationValue: 'Bangalore, India',
  mindsetLabel: 'Mindset',
  mindsetValue: 'Continuous Learner',
  cardEducationTitle: 'Education',
  cardEducationDesc: 'B.E. Computer Science Engineering student (2023 - 2027)',
  cardScoreTitle: 'Academic Score',
  cardScoreDesc: 'Outstanding academic standing with a CGPA of 8.97',
  cardFoundationsTitle: 'Core Foundations',
  cardFoundationsDesc: 'Strong grounding in Java, Python, Data Structures & Algorithms',
  cardInterestsTitle: 'Key Interests',
  cardInterestsDesc: 'Deep interest in Full-Stack Web Development, Artificial Intelligence & Machine Learning'
};

export default function About() {
  const reveal = useScrollReveal();

  const cards = [
    {
      icon: <GraduationCap size={24} className="text-gradient-primary" />,
      title: t.cardEducationTitle,
      desc: t.cardEducationDesc,
    },
    {
      icon: <Award size={24} className="text-gradient-primary" />,
      title: t.cardScoreTitle,
      desc: t.cardScoreDesc,
    },
    {
      icon: <Code2 size={24} className="text-gradient-primary" />,
      title: t.cardFoundationsTitle,
      desc: t.cardFoundationsDesc,
    },
    {
      icon: <BrainCircuit size={24} className="text-gradient-primary" />,
      title: t.cardInterestsTitle,
      desc: t.cardInterestsDesc,
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">{t.subtitle}</p>
          <h2 className="section-title">{t.title}</h2>
          <div className="title-glow-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Text Intro */}
          <div className="reveal-hidden" ref={reveal}>
            <h3
              style={{
                fontSize: '1.75rem',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {t.engHeading}<span className="text-gradient-primary">{t.engHighlight}</span>
            </h3>
            <p
              style={{
                marginBottom: '1.25rem',
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
              }}
            >
              {t.introParagraph1}
              <strong style={{ color: '#fff' }}>{t.college}</strong>
              {t.introParagraph1End}
            </p>
            <p
              style={{
                marginBottom: '1.5rem',
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
              }}
            >
              {t.introParagraph2}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-color)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
              }}
              className="about-metrics"
            >
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>{t.statusLabel}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>{t.statusValue}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>{t.cgpaLabel}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent)' }}>{t.cgpaValue}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>{t.locationLabel}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>{t.locationValue}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>{t.mindsetLabel}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>{t.mindsetValue}</span>
              </div>
            </div>
          </div>

          {/* Right Core Pillars Card Deck */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
            }}
            className="about-cards-container"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card reveal-hidden"
                ref={reveal}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{card.title}</h4>
                  <p style={{ fontSize: '0.925rem' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
          .about-cards-container {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .about-cards-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
