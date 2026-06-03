import { Award, GraduationCap, Code2, BrainCircuit } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const reveal = useScrollReveal();

  const cards = [
    {
      icon: <GraduationCap size={24} className="text-gradient-primary" />,
      title: 'Education',
      desc: 'B.E. Computer Science Engineering student (2023 - 2027)',
    },
    {
      icon: <Award size={24} className="text-gradient-primary" />,
      title: 'Academic Score',
      desc: 'Outstanding academic standing with a CGPA of 8.97',
    },
    {
      icon: <Code2 size={24} className="text-gradient-primary" />,
      title: 'Core Foundations',
      desc: 'Strong grounding in Java, Python, Data Structures & Algorithms',
    },
    {
      icon: <BrainCircuit size={24} className="text-gradient-primary" />,
      title: 'Key Interests',
      desc: 'Deep interest in Full-Stack Web Development, Artificial Intelligence & Machine Learning',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">Get To Know Me</p>
          <h2 className="section-title">About Me</h2>
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
              Engineering the Future with <span className="text-gradient-primary">Code & AI</span>
            </h3>
            <p
              style={{
                marginBottom: '1.25rem',
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
              }}
            >
              I am a passionate and driven Computer Science Engineering student at{' '}
              <strong style={{ color: '#fff' }}>Nitte Meenakshi Institute of Technology</strong>.
              My journey in tech is driven by an insatiable curiosity about how things work and a desire
              to build products that make a positive impact.
            </p>
            <p
              style={{
                marginBottom: '1.5rem',
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
              }}
            >
              With a solid foundation in core programming paradigms like Object-Oriented Java and scripting
              in Python, combined with Data Structures and Algorithms, I tackle complex challenges
              analytically. I am actively translating this technical depth into high-performance web
              applications and multi-modal AI intelligence tools.
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
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Current Status</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>B.E. CSE Student</span>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Academic CGPA</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent)' }}>8.97 / 10</span>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Location</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>Bangalore, India</span>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>Mindset</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>Continuous Learner</span>
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
