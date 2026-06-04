import { useEffect, useState } from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
// import profilePic from '../assets/profile.png';
import profilePic from '../assets/Prajwal_Profile_pic.jpeg'
import resumePdf from "../assets/Prajwal's_Resume_Updated.pdf";

const t = {
  welcome: 'Welcome to my universe',
  heyPrefix: "Hey, I'm ",
  name: 'Prajwal Amagi',
  typingPrefix: 'I am a ',
  tagline: '"Transforming ideas into scalable web applications and AI-powered solutions."',
  intro: 'I am a passionate Computer Science Engineering student with expertise in Full-Stack Development, Data Structures & Algorithms, Artificial Intelligence, and modern web technologies. I enjoy building innovative solutions that solve real-world problems.',
  viewWork: 'View My Work',
  contactMe: 'Contact Me',
  resume: 'Resume',
  scrollDown: 'Scroll Down'
};

const Github = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const titles = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver'];

export default function Hero() {
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = titles.at(currentTitleIdx);
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === word) {
      // Pause at the end of the word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      // Wrap state updates in a timeout to avoid calling setState synchronously in the effect
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
      }, 300);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? word.substring(0, currentText.length - 1)
            : word.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIdx]);

  return (
    <section
      id="home"
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative blobs inside section scope */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      <div
        className="container hero-container"
        style={{
          zIndex: 10,
        }}
      >
        {/* 1. Welcome Tag */}
        <div
          className="hero-welcome-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            color: 'var(--color-primary)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            animation: 'fadeInDown 0.8s ease-out',
          }}
        >
          <span>{t.welcome}</span>
        </div>

        {/* 2. Profile Picture */}
        <div className="hero-profile-container">
          <div className="profile-image-wrapper">
            <img src={profilePic} alt={t.name} className="profile-image" />
          </div>
        </div>

        {/* 3. Name */}
        <h1
          className="hero-title"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          {t.heyPrefix}<span className="text-gradient-primary">{t.name}</span>
        </h1>

        {/* 4. Subtitle / Animated Typing Title */}
        <h3
          className="hero-subtitle-typed"
          style={{
            fontSize: 'clamp(1.25rem, 3.5vw, 2.25rem)',
            fontWeight: 600,
            color: '#fff',
            height: '2.5rem',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <span>{t.typingPrefix}</span>
          <span style={{ color: 'var(--color-primary)' }}>{currentText}</span>
          <span className="typing-cursor" />
        </h3>

        {/* 5. Tagline & Description */}
        <div className="hero-description-group">
          <p
            className="hero-tagline"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: '650px',
              color: '#fff',
              fontWeight: 500,
              opacity: 0.9,
              marginBottom: '1rem',
            }}
          >
            {t.tagline}
          </p>

          <p
            className="hero-intro"
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              maxWidth: '750px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            {t.intro}
          </p>
        </div>

        {/* 6. Buttons */}
        <div className="hero-buttons-wrapper">
          <a href="#projects" className="btn btn-primary">
            {t.viewWork} <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.contactMe}
          </a>
          <a
            href={resumePdf}
            download
            className="btn btn-secondary"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(99, 102, 241, 0.15))',
              borderColor: 'rgba(20, 184, 166, 0.3)',
            }}
          >
            {t.resume} <Download size={16} color="var(--color-accent)" />
          </a>
        </div>

        {/* 7. Social Icons */}
        <div className="hero-socials-wrapper">
          <a
            href="https://github.com/prajwalA775"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/prajwal-amagi-271aa9354/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/callme.as_prajwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            title="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* 8. Scroll Down Indicator */}
        <div
          className="hero-scroll-indicator"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.scrollDown}</span>
          <div className="animate-float" style={{ animationDuration: '2s' }}>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes profileFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .profile-image-wrapper {
          position: relative;
          width: 240px;
          height: 240px;
          max-width: 70vw;
          max-height: 70vw;
          border-radius: 50%;
          padding: 5px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent));
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite, profileFloat 6s ease-in-out infinite;
          box-shadow: 0 0 25px rgba(99, 102, 241, 0.3);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 5;
        }
        
        .profile-image-wrapper::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent));
          background-size: 200% 200%;
          border-radius: 50%;
          z-index: -1;
          opacity: 0.7;
          filter: blur(12px);
          animation: gradientMove 6s ease infinite;
        }
        
        .profile-image-wrapper:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 0 35px rgba(99, 102, 241, 0.6), 0 0 70px rgba(20, 184, 166, 0.4);
        }
        
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--bg-primary);
          background: var(--bg-secondary);
        }

        .hero-buttons-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          width: 100%;
        }
        
        .hero-socials-wrapper {
          display: flex;
          flex-direction: row !important;
          gap: 1.5rem !important;
          justify-content: center;
        }

        .hero-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        #about {
          padding-top: 3.5rem !important;
        }

        @media (max-width: 639px) {
          .hero-buttons-wrapper {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 0 1rem;
          }
          .hero-buttons-wrapper .btn {
            width: 100% !important;
          }
        }

        @media (max-width: 1023px) {
          #home {
            padding-top: 7rem !important;
            padding-bottom: 1.5rem !important;
            min-height: auto !important;
          }
          #about {
            padding-top: 2rem !important;
          }
          .hero-container {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 1.25rem !important;
          }
          .hero-welcome-badge {
            order: 1 !important;
          }
          .hero-profile-container {
            order: 2 !important;
            margin: 1.5rem 0 !important;
          }
          .hero-title {
            order: 3 !important;
            text-align: center !important;
          }
          .hero-subtitle-typed {
            order: 4 !important;
            text-align: center !important;
          }
          .hero-description-group {
            order: 5 !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-tagline {
            text-align: center !important;
            margin: 0 auto 1rem !important;
          }
          .hero-intro {
            text-align: center !important;
            margin: 0 auto !important;
          }
          .hero-buttons-wrapper {
            order: 6 !important;
          }
          .hero-socials-wrapper {
            order: 7 !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            gap: 1.5rem !important;
          }
          .hero-scroll-indicator {
            order: 8 !important;
            margin-top: 1rem !important;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .profile-image-wrapper {
            width: 300px !important;
            height: 300px !important;
          }
        }

        @media (min-width: 1024px) {
          .hero-container {
            display: grid !important;
            grid-template-columns: 1.2fr 0.8fr !important;
            gap: 2rem !important;
            align-items: center !important;
            justify-content: space-between !important;
          }
          .hero-welcome-badge {
            grid-column: 1 !important;
            grid-row: 1 !important;
            justify-self: start !important;
          }
          .hero-title {
            grid-column: 1 !important;
            grid-row: 2 !important;
            text-align: left !important;
          }
          .hero-subtitle-typed {
            grid-column: 1 !important;
            grid-row: 3 !important;
            text-align: left !important;
          }
          .hero-description-group {
            grid-column: 1 !important;
            grid-row: 4 !important;
            text-align: left !important;
          }
          .hero-tagline, .hero-intro {
            margin-left: 0 !important;
            margin-right: auto !important;
            text-align: left !important;
          }
          .hero-buttons-wrapper {
            grid-column: 1 !important;
            grid-row: 5 !important;
            justify-content: flex-start !important;
          }
          .hero-socials-wrapper {
            grid-column: 1 / span 2 !important;
            grid-row: 6 !important;
            justify-self: center !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            gap: 1.5rem !important;
            margin-top: 2rem !important;
          }
          .hero-profile-container {
            grid-column: 2 !important;
            grid-row: 1 / span 5 !important;
            justify-self: center !important;
            align-self: center !important;
          }
          .hero-scroll-indicator {
            grid-column: 1 / span 2 !important;
            grid-row: 7 !important;
            justify-self: center !important;
            margin-top: 1rem !important;
          }
          .profile-image-wrapper {
            width: 320px !important;
            height: 320px !important;
            max-width: none !important;
            max-height: none !important;
            padding: 6px;
          }
        }
      `}</style>
    </section>
  );
}
