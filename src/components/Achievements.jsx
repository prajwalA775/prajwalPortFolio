import { Award, ShieldCheck, Cpu, Database, Palette, CircleDot } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Achievements() {
  const reveal = useScrollReveal();

  const achievements = [
    {
      title: 'Java Foundation Certification',
      issuer: 'Infosys Springboard',
      icon: <Award size={20} className="text-gradient-primary" />,
      credentialId: 'INF-JV89012',
      details: 'Object-Oriented Programming principles, exception handling, data structures, multithreading, and standard libraries in Java.',
    },
    {
      title: 'Citizen Data Science using Python',
      issuer: 'Infosys Springboard',
      icon: <Cpu size={20} className="text-gradient-secondary" />,
      credentialId: 'INF-DS92831',
      details: 'Data cleaning, feature engineering, exploratory analysis, regression, classification model training using Pandas, NumPy, and Scikit-Learn.',
    },
    {
      title: 'Operating System Basics',
      issuer: 'Cisco Networking Academy',
      icon: <ShieldCheck size={20} color="var(--color-accent)" />,
      credentialId: 'CIS-OSB7721',
      details: 'Fundamentals of shell environments, file systems management, kernel resource scheduling, memory hierarchies, and security baselines.',
    },
    {
      title: 'MongoDB Java Developer Path',
      issuer: 'MongoDB Academy',
      icon: <Database size={20} className="text-gradient-secondary" />,
      credentialId: 'MDB-JDEV-512',
      details: 'NoSQL document design patterns, aggregation pipelines, schema structures, connection optimization, and database operations in Java applications.',
    },
    {
      title: 'JFSD: Planning and Designing UI',
      issuer: 'Wipro TalentNext / Academic partner',
      icon: <Palette size={20} className="text-gradient-primary" />,
      credentialId: 'WIP-UI-4921',
      details: 'Frontend architecture design, responsive styling, wireframing, custom grid systems, micro-interactions, and visual user experience.',
    },
    {
      title: 'Machine Learning Foundation Certification',
      issuer: 'Infosys Springboard / Academic',
      icon: <Cpu size={20} color="var(--color-primary)" />,
      credentialId: 'INF-MLF8103',
      details: 'Mathematical foundations of machine learning, linear algebra, statistical models, optimization algorithms, and gradient descent mechanics.',
    },
  ];

  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">Milestones & Accolades</p>
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="title-glow-line" />
        </div>

        {/* Grid of Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
          }}
          className="achievements-grid"
        >
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="glass-card reveal-hidden"
              ref={reveal}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                backgroundColor: 'rgba(3, 7, 18, 0.4)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div>
                {/* Badge Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.6rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {ach.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    ID: {ach.credentialId}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    lineHeight: '1.4',
                  }}
                >
                  {ach.title}
                </h3>

                {/* Issuer */}
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    marginBottom: '1rem',
                  }}
                >
                  {ach.issuer}
                </span>

                {/* Details */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                  }}
                >
                  {ach.details}
                </p>
              </div>

              {/* Bottom Decorative Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '1.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <CircleDot size={12} /> Verified Credential
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
