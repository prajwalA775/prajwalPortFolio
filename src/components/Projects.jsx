import { useState } from 'react';
import { ExternalLink, Sparkles, FolderCode, Eye } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Github = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const reveal = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'full-stack', label: 'Full-Stack' },
    { id: 'database', label: 'APIs & DBs' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Smart Campus Multi-Modal GPT for Colloquium Events',
      description:
        'Developed an AI-powered colloquium platform that extracts event details from PDF/DOCX notices, stores them in a centralized database, and enables users to search events and get real-time answers through a text and voice chatbot.',
      tech: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'NLP', 'Web Speech API', 'GitHub'],
      category: 'ai-ml',
      github: 'https://github.com/prajwalA775/',
      demo: '#',
      features: [
        'Multi-modal notice parser (PDF & DOCX parsing using Python libraries)',
        'Conversational AI voice assistant (Web Speech API integration)',
        'Relational schema design in PostgreSQL for fast event lookup',
        'FastAPI REST endpoints with cross-origin security (CORS)',
      ],
      impact: 'Automated notice ingestion, reducing administrative notice-board latency from days to seconds while providing a highly interactive chatbot for students.',
    },
    {
      id: 2,
      title: 'CivicFix – AI-Powered Civic Issue Reporting Platform',
      description:
        'Built a full-stack civic issue reporting platform that enables citizens to report and track infrastructure issues with AI-based issue classification, complaint management, location tracking, and real-time status updates.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT', 'Leaflet Maps'],
      category: 'full-stack',
      github: 'https://github.com/prajwalA775/',
      demo: '#',
      features: [
        'AI classification of uploaded issue photos using Google Gemini API',
        'Interactive map reporting using Leaflet.js with geographical markers',
        'Stateful status workflows (Reported -> Verified -> In Progress -> Resolved)',
        'Secure token authentication with JSON Web Tokens (JWT)',
      ],
      impact: 'Allows citizens to easily bypass traditional red tape by crowdsourcing reports with automated categorizations for municipality routing.',
    },
    {
      id: 3,
      title: 'PassOP – Personal Password Manager',
      description:
        'Developed a secure password management application with CRUD APIs for storing and managing credentials through RESTful services.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Crypto-JS'],
      category: 'database',
      github: 'https://github.com/prajwalA775/',
      demo: '#',
      features: [
        'Local credentials encryption before database synchronization',
        'Full CRUD lifecycle support for credential records',
        'Interactive modern UI with one-click copy and password strength generator',
      ],
      impact: 'Ensures sensitive credential data is encrypted at rest, helping users securely manage passwords locally and globally.',
    },
    {
      id: 4,
      title: 'Event Management System',
      description:
        'Built an event scheduling and participant management platform using database optimization, CRUD operations, and relational database design.',
      tech: ['SQL', 'DBMS', 'Node.js', 'REST API', 'Express.js'],
      category: 'database',
      github: 'https://github.com/prajwalA775/',
      demo: '#',
      features: [
        'Relational design enforcing referential integrity (foreign key cascades)',
        'Advanced SQL queries, aggregations, and indices for rapid query response',
        'Stateful participant registration validation logic',
      ],
      impact: 'Demonstrated optimization of relational database queries, improving lookup performance for high-throughput scheduling workloads.',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">Showcasing My Creations</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-glow-line" />
        </div>

        {/* Project Filters */}
        <div
          className="reveal-hidden"
          ref={reveal}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.5rem 1.25rem',
                borderRadius: '0.375rem',
                border: '1px solid',
                borderColor: activeFilter === filter.id ? 'var(--color-primary)' : 'var(--border-color)',
                backgroundColor: activeFilter === filter.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                color: activeFilter === filter.id ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.id) {
                  e.target.style.color = '#fff';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.id) {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.borderColor = 'var(--border-color)';
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card reveal-hidden"
              ref={reveal}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                padding: '2rem',
                border: '1px solid var(--border-color)',
              }}
            >
              <div>
                {/* Header Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-primary)',
                    marginBottom: '1rem',
                  }}
                >
                  {project.category === 'ai-ml' ? <Sparkles size={16} /> : <FolderCode size={16} />}
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.category === 'ai-ml' ? 'Artificial Intelligence' : project.category === 'full-stack' ? 'Full-Stack Web' : 'Back-End & DB'}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    lineHeight: '1.4',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '1.25rem',
                  marginTop: 'auto',
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-accent)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-accent)')}
                >
                  <Eye size={16} /> Details & Impact
                </button>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                    style={{ width: '2.25rem', height: '2.25rem' }}
                    title="View Source on GitHub"
                  >
                    <Github size={16} />
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon-link"
                      style={{ width: '2.25rem', height: '2.25rem' }}
                      title="Launch App"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backgroundColor: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(16px)',
            animation: 'fadeIn 0.25s ease-out',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid var(--border-color-glow)',
              cursor: 'default',
              padding: '2.5rem',
              backgroundColor: 'var(--bg-secondary)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: '1.6rem',
                lineHeight: '1.3',
                marginBottom: '1rem',
                color: '#fff',
              }}
            >
              {selectedProject.title}
            </h3>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ borderColor: 'var(--color-primary)' }}>
                  {t}
                </span>
              ))}
            </div>

            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.5rem' }}>Overview</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.5rem' }}>Key Features</h4>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }}>{feature}</li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Impact & Learning</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              {selectedProject.impact}
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedProject(null)}
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                Close
              </button>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
