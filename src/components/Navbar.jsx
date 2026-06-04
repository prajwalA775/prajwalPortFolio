import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const t = {
  logoName: 'Prajwal',
  logoSuffix: '.dev',
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  achievements: 'Achievements',
  education: 'Education',
  contact: 'Contact'
};

const navItems = [
  { name: t.home, href: '#home' },
  { name: t.about, href: '#about' },
  { name: t.skills, href: '#skills' },
  { name: t.projects, href: '#projects' },
  { name: t.achievements, href: '#achievements' },
  { name: t.education, href: '#education' },
  { name: t.contact, href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background shadow & height toggle on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress bar percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current active section
      const sections = navItems.map(item => item.href.slice(1));
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'var(--transition-smooth)',
        backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        height: scrolled ? '4.5rem' : '5.5rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Reading Progress Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
          boxShadow: '0 0 8px var(--color-primary)',
          transition: 'width 0.1s ease-out',
        }}
      />

      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            fontSize: '1.25rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            color: '#fff',
          }}
        >
          <div
            style={{
              padding: '0.4rem',
              borderRadius: '0.5rem',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Code size={18} color="#fff" />
          </div>
          <span>{t.logoName}<span className="text-gradient-primary">{t.logoSuffix}</span></span>
        </a>

        {/* Desktop Menu */}
        <div
          style={{
            display: 'none',
          }}
          className="desktop-menu-only"
        >
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
            }}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  style={{
                    color: activeSection === item.href.slice(1) ? '#fff' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.925rem',
                    transition: 'var(--transition-smooth)',
                    position: 'relative',
                    padding: '0.25rem 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.href.slice(1)) {
                      e.target.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                        boxShadow: '0 0 8px var(--color-primary)',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(3, 7, 18, 0.4)',
              backdropFilter: 'blur(8px)',
              zIndex: 45,
              animation: 'fadeInBackdrop 0.3s ease-out',
            }}
          />

          {/* Drawer Panel */}
          <div
            className="drawer-gradient-bg"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 'min(300px, 80vw)',
              height: '100vh',
              backdropFilter: 'blur(24px)',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 1.5rem',
              borderLeft: '1px solid var(--border-color)',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
              animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Subtle gradient glow blob inside drawer */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                right: '-50px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
                zIndex: -1,
              }}
            />

            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                paddingBottom: '1.25rem',
              }}
            >
              {/* Logo copy inside drawer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                <div
                  style={{
                    padding: '0.3rem',
                    borderRadius: '0.375rem',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Code size={14} color="#fff" />
                </div>
                <span>{t.logoName}<span className="text-gradient-primary">{t.logoSuffix}</span></span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="drawer-close-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50%',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  width: '2.25rem',
                  height: '2.25rem',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav List */}
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`drawer-link ${isActive ? 'active-drawer-link' : ''}`}
                      style={{
                        color: isActive ? '#fff' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'var(--transition-smooth)',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}

      {/* Inline styles to handle desktop-only media query visibility */}
      <style>{`
        .desktop-menu-only {
          display: none !important;
        }
        .mobile-menu-toggle {
          display: flex !important;
        }
        @media (min-width: 1024px) {
          .desktop-menu-only {
            display: block !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes drawerGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .drawer-gradient-bg {
          background: linear-gradient(135deg, rgba(3, 7, 18, 0.94), rgba(11, 17, 32, 0.94), rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05));
          background-size: 400% 400%;
          animation: drawerGradient 15s ease infinite;
        }
        .drawer-link {
          padding-left: 1rem !important;
          background: transparent;
        }
        .drawer-link:hover {
          color: #fff !important;
          background: rgba(255, 255, 255, 0.03);
          padding-left: 1.25rem !important;
        }
        .active-drawer-link {
          color: #fff !important;
          background: rgba(99, 102, 241, 0.06) !important;
          padding-left: 1.25rem !important;
          box-shadow: inset 8px 0 15px rgba(99, 102, 241, 0.05);
        }
        .active-drawer-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 15%;
          bottom: 15%;
          width: 4px;
          border-radius: 9999px;
          background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
          box-shadow: 0 0 10px var(--color-primary), 0 0 20px var(--color-secondary);
        }
        .drawer-close-btn:hover {
          color: #fff !important;
          background: rgba(239, 68, 68, 0.1) !important;
          border-color: rgba(239, 68, 68, 0.3) !important;
          transform: rotate(90deg);
        }
      `}</style>
    </nav>
  );
}
