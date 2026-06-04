import { Award, ShieldCheck, Cpu, Database, Palette, CircleDot, ExternalLink } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const t = {
  subtitle: 'Milestones & Accolades',
  title: 'Achievements & Certifications',
  idLabel: 'ID: ',
  verifiedCredential: 'Verified Credential',
  viewCertificate: 'View Certificate',
  ach1Title: 'Java Foundation Certification',
  ach1Issuer: 'Infosys Springboard',
  ach1Details: 'Object-Oriented Programming principles, exception handling, data structures, multithreading, and standard libraries in Java.',
  ach2Title: 'Citizen Data Science using Python',
  ach2Issuer: 'Infosys Springboard',
  ach2Details: 'Data cleaning, feature engineering, exploratory analysis, regression, classification model training using Pandas, NumPy, and Scikit-Learn.',
  ach3Title: 'Operating System Basics',
  ach3Issuer: 'Cisco Networking Academy',
  ach3Details: 'Fundamentals of shell environments, file systems management, kernel resource scheduling, memory hierarchies, and security baselines.',
  ach4Title: 'MongoDB Java Developer Path',
  ach4Issuer: 'MongoDB Academy',
  ach4Details: 'NoSQL document design patterns, aggregation pipelines, schema structures, connection optimization, and database operations in Java applications.',
  ach5Title: 'JFSD: Planning and Designing UI',
  ach5Issuer: 'Wipro TalentNext / Academic partner',
  ach5Details: 'Frontend architecture design, responsive styling, wireframing, custom grid systems, micro-interactions, and visual user experience.',
  ach6Title: 'Machine Learning Foundation Certification',
  ach6Issuer: 'Infosys Springboard / Academic',
  ach6Details: 'Mathematical foundations of machine learning, linear algebra, statistical models, optimization algorithms, and gradient descent mechanics.',
};

export default function Achievements() {
  const reveal = useScrollReveal();

  const achievements = [
    {
      title: t.ach1Title,
      issuer: t.ach1Issuer,
      icon: <Award size={20} className="text-gradient-primary" />,
      credentialId: 'INF-JV89012',
      details: t.ach1Details,
      certificateUrl: 'https://drive.google.com/file/d/1cXmEgCgp-BDMhg6WjM9TWpVnVyqubMge/view?usp=drive_link',
    },
    {
      title: t.ach2Title,
      issuer: t.ach2Issuer,
      icon: <Cpu size={20} className="text-gradient-secondary" />,
      credentialId: 'INF-DS92831',
      details: t.ach2Details,
      certificateUrl: 'https://drive.google.com/file/d/1oyLwS2rfn5NZ36_1vnaFfF0TRAgCWMn8/view?usp=drive_link',
    },
    {
      title: t.ach3Title,
      issuer: t.ach3Issuer,
      icon: <ShieldCheck size={20} color="var(--color-accent)" />,
      credentialId: 'CIS-OSB7721',
      details: t.ach3Details,
      certificateUrl: 'https://drive.google.com/file/d/1wDBPITl_G7vnyrH4gAttskhQ5TzttptL/view?usp=drive_link',
    },
    {
      title: t.ach4Title,
      issuer: t.ach4Issuer,
      icon: <Database size={20} className="text-gradient-secondary" />,
      credentialId: 'MDB-JDEV-512',
      details: t.ach4Details,
      certificateUrl: 'https://drive.google.com/file/d/1K52TTkC2473QXAzuFfU6-sDmpxyl4Wfg/view?usp=drive_link',
    },
    {
      title: t.ach5Title,
      issuer: t.ach5Issuer,
      icon: <Palette size={20} className="text-gradient-primary" />,
      credentialId: 'WIP-UI-4921',
      details: t.ach5Details,
      certificateUrl: 'https://drive.google.com/file/d/1e79hFUnTRo106mT6bf7iyMVIlgH7pWvH/view?usp=drive_link',
    },
    {
      title: t.ach6Title,
      issuer: t.ach6Issuer,
      icon: <Cpu size={20} color="var(--color-primary)" />,
      credentialId: 'INF-MLF8103',
      details: t.ach6Details,
      certificateUrl: 'https://drive.google.com/file/d/1WrV08n6TwImV3G7FhzPhvWUioI1qZ5lb/view?usp=drive_link',
    },
  ];

  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">{t.subtitle}</p>
          <h2 className="section-title">{t.title}</h2>
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
          {achievements.map((ach, idx) => {
            const CardElement = ach.certificateUrl ? 'a' : 'div';
            return (
              <CardElement
                key={idx}
                href={ach.certificateUrl || undefined}
                target={ach.certificateUrl ? '_blank' : undefined}
                rel={ach.certificateUrl ? 'noopener noreferrer' : undefined}
                className={`glass-card reveal-hidden ${ach.certificateUrl ? 'clickable-card' : ''}`}
                ref={reveal}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  backgroundColor: 'rgba(3, 7, 18, 0.4)',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  color: 'inherit',
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
                      {t.idLabel}{ach.credentialId}
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

                {/* Bottom Decorative Indicator & Button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '1.5rem',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.75rem',
                      color: 'var(--color-accent)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <CircleDot size={12} /> {t.verifiedCredential}
                  </div>
                  {ach.certificateUrl && (
                    <div
                      className="view-cert-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        transition: 'var(--transition-smooth)',
                      }}
                    >
                      <span>{t.viewCertificate}</span>
                      <ExternalLink size={12} />
                    </div>
                  )}
                </div>
              </CardElement>
            );
          })}
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
        .clickable-card {
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .clickable-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          border-color: var(--color-primary) !important;
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.25), var(--shadow-glow) !important;
        }
        .clickable-card:hover .view-cert-btn {
          background: var(--color-primary) !important;
          color: #fff !important;
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
        }
      `}</style>
    </section>
  );
}
