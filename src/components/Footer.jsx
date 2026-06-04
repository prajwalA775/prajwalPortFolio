import { useEffect, useState } from 'react';
import { ChevronUp, Mail } from 'lucide-react';

const Github = ({ size = 24, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const t = {
  brandName: 'Prajwal Siddayya Amagi',
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  achievements: 'Achievements',
  education: 'Education',
  contact: 'Contact',
  rightsReserved: 'All rights reserved. Built with ❤️ by Prajwal.',
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          textAlign: 'center',
        }}
      >
        {/* Brand Name / Logo */}
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#fff',
          }}
        >
          {t.brandName}
        </span>

        {/* Quick links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.home}</a>
          <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.about}</a>
          <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.skills}</a>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.projects}</a>
          <a href="#achievements" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.achievements}</a>
          <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.education}</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.contact}</a>
        </div>

        {/* Footer social icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/prajwalA775" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} title="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/prajwal-amagi-271aa9354/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://www.instagram.com/callme.as_prajwal/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} title="Instagram">
            <Instagram size={18} />
          </a>
          <a href="mailto:prajwalamagi775775@gmail.com" style={{ color: 'var(--text-secondary)' }} title="Email">
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            marginTop: '0.5rem',
          }}
        >
          &copy; {new Date().getFullYear()} {t.brandName}. {t.rightsReserved}
        </p>
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 45,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
          transition: 'var(--transition-smooth)',
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: showScrollTop ? 'all' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.4)';
        }}
        title="Scroll to Top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
}
