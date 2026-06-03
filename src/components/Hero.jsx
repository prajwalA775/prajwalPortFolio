import { useEffect, useState } from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const titles = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver'];
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = titles[currentTitleIdx];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === word) {
      // Pause at the end of the word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative blobs inside section scope */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      <div
        className="container"
        style={{
          zIndex: 10,
          textAlign: 'center',
        }}
      >
        {/* Welcome Tag */}
        <div
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
            marginBottom: '2rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            animation: 'fadeInDown 0.8s ease-out',
          }}
        >
          <span>Welcome to my universe</span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1rem',
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          Hey, I'm <span className="text-gradient-primary">Prajwal Amagi</span>
        </h1>

        {/* Subtitle / Animated Typing Title */}
        <h3
          style={{
            fontSize: 'clamp(1.25rem, 3.5vw, 2.25rem)',
            fontWeight: 600,
            color: '#fff',
            height: '2.5rem',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <span>I am a </span>
          <span style={{ color: 'var(--color-primary)' }}>{currentText}</span>
          <span className="typing-cursor" />
        </h3>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '650px',
            margin: '0 auto 1rem',
            color: '#fff',
            fontWeight: 500,
            opacity: 0.9,
          }}
        >
          "Transforming ideas into scalable web applications and AI-powered solutions."
        </p>

        {/* Short Intro */}
        <p
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            maxWidth: '750px',
            margin: '0 auto 2.5rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
          }}
        >
          I am a passionate Computer Science Engineering student with expertise in Full-Stack Development, Data Structures & Algorithms, Artificial Intelligence, and modern web technologies. I enjoy building innovative solutions that solve real-world problems.
        </p>

        {/* CTA Actions Panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="hero-buttons-container"
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a
              href="/Prajwal_Amagi_Resume.pdf"
              download
              className="btn btn-secondary"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(99, 102, 241, 0.15))',
                borderColor: 'rgba(20, 184, 166, 0.3)',
              }}
            >
              Resume <Download size={16} color="var(--color-accent)" />
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            <a
              href="https://github.com/prajwalA775"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prajwal-amagi-7096b42b6/"
              target="_blank"
              rel="noreferrer"
              className="social-icon-link"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'var(--text-muted)',
            cursor: 'pointer',
          }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll Down</span>
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
        @media (min-width: 640px) {
          .hero-buttons-container {
            flex-direction: row !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
