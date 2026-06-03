import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Education() {
  const reveal = useScrollReveal();

  const courses = [
    'Data Structures & Algorithms (DSA)',
    'Object-Oriented Programming (Java)',
    'Database Management Systems (DBMS)',
    'Operating Systems (OS)',
    'Web Technologies (React, Node.js)',
    'Artificial Intelligence & Machine Learning',
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">Academic Roadmap</p>
          <h2 className="section-title">Education</h2>
          <div className="title-glow-line" />
        </div>

        <div className="timeline">
          {/* Main Education Node */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div
                className="glass-card reveal-hidden"
                ref={reveal}
                style={{
                  padding: '2rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'rgba(11, 17, 32, 0.4)',
                }}
              >
                {/* Major Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: 'var(--color-primary)',
                      display: 'inline-flex',
                    }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Bachelor of Engineering
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3',
                  }}
                >
                  Computer Science & Engineering
                </h3>

                {/* Institute */}
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: '#fff',
                    marginBottom: '0.75rem',
                  }}
                >
                  Nitte Meenakshi Institute of Technology
                </h4>

                {/* Duration */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Calendar size={14} />
                  <span>2023 - 2027</span>
                  <span style={{ color: 'var(--text-muted)' }}>|</span>
                  <span>Bangalore, India</span>
                </div>

                {/* CGPA Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(20, 184, 166, 0.08)',
                    border: '1px solid rgba(20, 184, 166, 0.2)',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Award size={16} />
                  <span>CGPA: 8.97 / 10.0</span>
                </div>

                {/* Core Coursework */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '1.25rem',
                  }}
                >
                  <h5
                    style={{
                      fontSize: '0.925rem',
                      color: '#fff',
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <BookOpen size={14} /> Core Coursework
                  </h5>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {courses.map((course, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: '0.8rem',
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-color)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '4px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
