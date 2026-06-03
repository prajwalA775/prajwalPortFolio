import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

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
          <span>Prajwal<span className="text-gradient-primary">.dev</span></span>
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
        <div
          style={{
            position: 'fixed',
            top: scrolled ? '4.5rem' : '5.5rem',
            left: 0,
            width: '100vw',
            height: 'calc(100vh - 4.5rem)',
            background: 'rgba(3, 7, 18, 0.96)',
            backdropFilter: 'blur(20px)',
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            borderTop: '1px solid var(--border-color)',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              listStyle: 'none',
            }}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: activeSection === item.href.slice(1) ? '#fff' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    display: 'block',
                    transition: 'var(--transition-smooth)',
                    borderLeft: activeSection === item.href.slice(1) ? '3px solid var(--color-primary)' : '3px solid transparent',
                    paddingLeft: '1rem',
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
