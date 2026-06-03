import { useState, useEffect } from 'react';
import { Terminal, Layout, Server, Database, Wrench } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Skills() {
  const reveal = useScrollReveal();
  const [activeTab, setActiveTab] = useState('all');
  const [animateProgress, setAnimateProgress] = useState(false);

  const categories = [
    { id: 'all', label: 'All Skills', icon: null },
    { id: 'languages', label: 'Languages', icon: <Terminal size={14} /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout size={14} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={14} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={14} /> },
    { id: 'tools', label: 'Tools', icon: <Wrench size={14} /> },
  ];

  const skillData = [
    // Languages
    { name: 'Java', level: 90, category: 'languages' },
    { name: 'Python', level: 85, category: 'languages' },
    { name: 'JavaScript', level: 80, category: 'languages' },
    { name: 'C Programming', level: 75, category: 'languages' },
    
    // Frontend
    { name: 'React.js', level: 88, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'HTML5', level: 92, category: 'frontend' },
    { name: 'CSS3', level: 85, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express.js', level: 83, category: 'backend' },
    { name: 'FastAPI', level: 80, category: 'backend' },
    { name: 'REST APIs', level: 88, category: 'backend' },
    
    // Databases
    { name: 'MongoDB', level: 85, category: 'databases' },
    { name: 'PostgreSQL', level: 82, category: 'databases' },
    { name: 'MySQL', level: 80, category: 'databases' },
    
    // Tools
    { name: 'Git', level: 88, category: 'tools' },
    { name: 'GitHub', level: 90, category: 'tools' },
    { name: 'Postman', level: 85, category: 'tools' },
    { name: 'VS Code', level: 92, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
  ];

  // Trigger skill bar animation slightly after component loads/mounts or is scrolled into view
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = activeTab === 'all'
    ? skillData
    : skillData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">What I Bring to the Table</p>
          <h2 className="section-title">My Skills</h2>
          <div className="title-glow-line" />
        </div>

        {/* Categories Tab Selector */}
        <div
          className="reveal-hidden"
          ref={reveal}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.6rem 1.2rem',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activeTab === cat.id ? 'var(--color-primary)' : 'var(--border-color)',
                backgroundColor: activeTab === cat.id ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                color: activeTab === cat.id ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== cat.id) {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== cat.id) {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Meters Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
            minHeight: '200px', // Prevent layout shifting
          }}
          className="skills-grid"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="glass-card reveal-hidden"
              ref={reveal}
              style={{
                padding: '1.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'rgba(3, 7, 18, 0.5)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontWeight: 600, color: '#fff', fontSize: '1rem' }}>
                  {skill.name}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="skills-progress-bg">
                <div
                  className="skills-progress-fill"
                  style={{
                    width: animateProgress ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
