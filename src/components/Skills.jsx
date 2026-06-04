import { useState } from 'react';
import { Terminal, Layout, Server, Database, Wrench } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const t = {
  subtitle: 'What I Bring to the Table',
  title: 'My Skills',
  catAll: 'All Skills',
  catLanguages: 'Languages',
  catFrontend: 'Frontend',
  catBackend: 'Backend',
  catDatabases: 'Databases',
  catTools: 'Tools'
};

export default function Skills() {
  const reveal = useScrollReveal();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: t.catAll, icon: null },
    { id: 'languages', label: t.catLanguages, icon: <Terminal size={14} /> },
    { id: 'frontend', label: t.catFrontend, icon: <Layout size={14} /> },
    { id: 'backend', label: t.catBackend, icon: <Server size={14} /> },
    { id: 'databases', label: t.catDatabases, icon: <Database size={14} /> },
    { id: 'tools', label: t.catTools, icon: <Wrench size={14} /> },
  ];

  const skillData = [
    // Languages
    { name: 'Java', category: 'languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', category: 'languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', category: 'languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'JavaScript', category: 'languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    
    // Frontend
    { name: 'React', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', category: 'frontend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    
    // Backend
    { name: 'Node.js', category: 'backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', category: 'backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'FastAPI', category: 'backend', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    
    // Databases
    { name: 'MongoDB', category: 'databases', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', category: 'databases', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', category: 'databases', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    
    // Tools
    { name: 'Git', category: 'tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', category: 'tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Postman', category: 'tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'VS Code', category: 'tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', category: 'tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillData
    : skillData.filter(skill => skill.category === activeTab);

  // Helper to ensure the marquee contains enough items to cycle seamlessly
  const getMarqueeItems = () => {
    if (filteredSkills.length === 0) return [];
    // Ensure we have at least 15 items in the list to avoid gaps
    const minItems = 15;
    const repeats = Math.ceil(minItems / filteredSkills.length);
    let list = [];
    for (let i = 0; i < repeats; i++) {
      list = [...list, ...filteredSkills];
    }
    return list;
  };

  const marqueeItems = getMarqueeItems();

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">{t.subtitle}</p>
          <h2 className="section-title">{t.title}</h2>
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

        {/* Horizontal Marquee */}
        <div className="marquee-container reveal-hidden" ref={reveal}>
          <div className="marquee-content">
            {marqueeItems.map((skill, index) => {
              const isDarkLogo = skill.name === 'GitHub' || skill.name === 'Express.js';
              return (
                <div
                  key={`track1-${skill.name}-${index}`}
                  className="marquee-item glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1.5rem',
                    backgroundColor: 'rgba(3, 7, 18, 0.5)',
                    borderColor: 'var(--border-color)',
                    minWidth: '180px',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="skill-logo"
                    style={{
                      width: '32px',
                      height: '32px',
                      filter: isDarkLogo ? 'invert(1) brightness(1.5)' : 'none',
                      objectFit: 'contain',
                    }}
                  />
                  <span style={{ fontWeight: 600, color: '#fff', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
            
            {/* Duplicated list to make scroll seamless */}
            {marqueeItems.map((skill, index) => {
              const isDarkLogo = skill.name === 'GitHub' || skill.name === 'Express.js';
              return (
                <div
                  key={`track2-${skill.name}-${index}`}
                  className="marquee-item glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1.5rem',
                    backgroundColor: 'rgba(3, 7, 18, 0.5)',
                    borderColor: 'var(--border-color)',
                    minWidth: '180px',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="skill-logo"
                    style={{
                      width: '32px',
                      height: '32px',
                      filter: isDarkLogo ? 'invert(1) brightness(1.5)' : 'none',
                      objectFit: 'contain',
                    }}
                  />
                  <span style={{ fontWeight: 600, color: '#fff', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          position: relative;
          width: 100%;
          padding: 2rem 0;
          background: rgba(3, 7, 18, 0.2);
          border-radius: 1rem;
          border: 1px solid var(--border-color);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.4);
        }
        
        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-secondary) 0%, transparent 100%);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-secondary) 0%, transparent 100%);
        }
        
        .marquee-content {
          display: flex;
          gap: 1.5rem;
          animation: marqueeScroll 25s linear infinite;
          width: max-content;
        }
        
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .marquee-item:hover {
          transform: translateY(-6px) scale(1.04);
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3), var(--shadow-md) !important;
          background-color: rgba(99, 102, 241, 0.08) !important;
        }
        
        .marquee-item:hover .skill-logo {
          transform: scale(1.15) rotate(5deg);
        }
        
        .skill-logo {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
}
