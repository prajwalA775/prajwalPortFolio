import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const t = {
  subtitle: 'Academic Roadmap',
  title: 'Education',
  degree: 'Bachelor of Engineering',
  major: 'Computer Science & Engineering',
  college: 'Nitte Meenakshi Institute of Technology',
  duration: '2023 - 2027',
  location: 'Bangalore, India',
  cgpa: 'CGPA: 8.97 / 10.0',
  courseworkTitle: 'Core Coursework',
  course1: 'Data Structures & Algorithms (DSA)',
  course2: 'Object-Oriented Programming (Java)',
  course3: 'Database Management Systems (DBMS)',
  course4: 'Operating Systems (OS)',
  course5: 'Web Technologies (React, Node.js)',
  course6: 'Artificial Intelligence & Machine Learning',
  
  // PUC Info
  pucDegree: 'Pre-University Education (Class XII)',
  pucMajor: 'Science (PCMB)',
  pucCollege: 'Government Pre-University College, Gadag',
  pucDuration: '2020 - 2022',
  pucLocation: 'Gadag, Karnataka, India',
  pucScore: 'Percentage: 95.83%',
  pucCourseworkTitle: 'Core Subjects',
  pucCourse1: 'Physics',
  pucCourse2: 'Chemistry',
  pucCourse3: 'Mathematics',
  pucCourse4: 'Biology',
  
  // School Info
  schoolDegree: 'Secondary School Education (Class X)',
  schoolMajor: 'General Education',
  schoolCollege: 'Bapuji Vidyaniketan High School, Annigeri',
  schoolDuration: '2019 - 2020',
  schoolLocation: 'Annigeri, Karnataka, India',
  schoolScore: 'Percentage: 96.00%',
  schoolCourseworkTitle: 'Key Focus Areas',
  schoolCourse1: 'Science',
  schoolCourse2: 'Mathematics',
  schoolCourse3: 'Social Science',
  schoolCourse4: 'Languages',
};

export default function Education() {
  const reveal = useScrollReveal();

  const timelineData = [
    {
      type: 'engineering',
      degree: t.degree,
      major: t.major,
      institution: t.college,
      duration: t.duration,
      location: t.location,
      score: t.cgpa,
      courseworkTitle: t.courseworkTitle,
      courses: [t.course1, t.course2, t.course3, t.course4, t.course5, t.course6],
      icon: <GraduationCap size={20} />,
      accentColor: 'var(--color-accent)',
      bgBadge: 'rgba(20, 184, 166, 0.08)',
      borderBadge: 'rgba(20, 184, 166, 0.2)',
    },
    {
      type: 'puc',
      degree: t.pucDegree,
      major: t.pucMajor,
      institution: t.pucCollege,
      duration: t.pucDuration,
      location: t.pucLocation,
      score: t.pucScore,
      courseworkTitle: t.pucCourseworkTitle,
      courses: [t.pucCourse1, t.pucCourse2, t.pucCourse3, t.pucCourse4],
      icon: <BookOpen size={20} />,
      accentColor: 'var(--color-primary)',
      bgBadge: 'rgba(99, 102, 241, 0.08)',
      borderBadge: 'rgba(99, 102, 241, 0.2)',
    },
    {
      type: 'school',
      degree: t.schoolDegree,
      major: t.schoolMajor,
      institution: t.schoolCollege,
      duration: t.schoolDuration,
      location: t.schoolLocation,
      score: t.schoolScore,
      courseworkTitle: t.schoolCourseworkTitle,
      courses: [t.schoolCourse1, t.schoolCourse2, t.schoolCourse3, t.schoolCourse4],
      icon: <Award size={20} />,
      accentColor: 'var(--color-secondary)',
      bgBadge: 'rgba(168, 85, 247, 0.08)',
      borderBadge: 'rgba(168, 85, 247, 0.2)',
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">{t.subtitle}</p>
          <h2 className="section-title">{t.title}</h2>
          <div className="title-glow-line" />
        </div>

        <div className="education-timeline-container">
          {timelineData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`timeline-item-wrapper ${isLeft ? 'left-item' : 'right-item'} reveal-hidden`}
                ref={reveal}
                style={{
                  '--accent-color': item.accentColor,
                  '--accent-glow': `rgba(${item.type === 'engineering' ? '20, 184, 166' : item.type === 'puc' ? '99, 102, 241' : '168, 85, 247'}, 0.25)`,
                  '--accent-glow-subtle': `rgba(${item.type === 'engineering' ? '20, 184, 166' : item.type === 'puc' ? '99, 102, 241' : '168, 85, 247'}, 0.15)`,
                  '--accent-bg-glow': `rgba(${item.type === 'engineering' ? '20, 184, 166' : item.type === 'puc' ? '99, 102, 241' : '168, 85, 247'}, 0.08)`,
                }}
              >
                {/* Timeline Dot in the center line */}
                <div className="timeline-node-dot">
                  {item.icon}
                </div>

                {/* Education Card */}
                <div
                  className="glass-card education-card"
                  style={{
                    width: '100%',
                    padding: '2rem',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'rgba(11, 17, 32, 0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Degree & Duration Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ fontSize: '0.85rem', color: item.accentColor, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {item.degree}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <Calendar size={12} />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Major / Focus */}
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '0.5rem',
                        lineHeight: '1.3',
                        color: '#fff',
                      }}
                    >
                      {item.major}
                    </h3>

                    {/* Institution */}
                    <h4
                      style={{
                        fontSize: '1.025rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {item.institution}
                    </h4>

                    {/* Location */}
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {item.location}
                    </p>

                    {/* Score / CGPA Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.45rem 0.9rem',
                        borderRadius: '0.5rem',
                        background: item.bgBadge,
                        border: `1px solid ${item.borderBadge}`,
                        color: item.accentColor,
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <Award size={14} />
                      <span>{item.score}</span>
                    </div>
                  </div>

                  {/* Coursework / Focus Areas */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '1.25rem',
                    }}
                  >
                    <h5
                      style={{
                        fontSize: '0.9rem',
                        color: '#fff',
                        marginBottom: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <BookOpen size={14} /> {item.courseworkTitle}
                    </h5>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      {item.courses.map((course, idx2) => (
                        <span key={idx2} className="subject-chip">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Timeline Container and Lines */
        .education-timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
        }
        .education-timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--color-accent) 0%, var(--color-primary) 50%, var(--color-secondary) 100%);
          opacity: 0.35;
          border-radius: 9999px;
        }

        /* Timeline Items styling */
        .timeline-item-wrapper {
          display: flex;
          justify-content: flex-end;
          width: 50%;
          position: relative;
          padding: 1.5rem 2.5rem;
          box-sizing: border-box;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .timeline-item-wrapper.left-item {
          align-self: flex-start;
          justify-content: flex-end;
          left: 0;
          padding-right: 3.5rem;
          padding-left: 0;
        }
        .timeline-item-wrapper.right-item {
          align-self: flex-end;
          justify-content: flex-start;
          left: 0;
          padding-left: 3.5rem;
          padding-right: 0;
        }

        /* Glowing dots in the center line */
        .timeline-node-dot {
          position: absolute;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 3px solid var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          z-index: 10;
          box-shadow: 0 0 15px var(--accent-glow);
          top: 2rem;
          transition: var(--transition-elastic);
        }
        .left-item .timeline-node-dot {
          right: -1.375rem;
        }
        .right-item .timeline-node-dot {
          left: -1.375rem;
        }

        /* Cards hover and styles */
        .education-card {
          transition: var(--transition-smooth);
        }
        .timeline-item-wrapper:hover .education-card {
          transform: translateY(-6px) scale(1.01);
          border-color: var(--accent-color) !important;
          box-shadow: 0 12px 30px var(--accent-glow), var(--shadow-glow);
        }
        .timeline-item-wrapper:hover .timeline-node-dot {
          transform: scale(1.1);
          background: var(--accent-color);
          color: #fff;
          box-shadow: 0 0 25px var(--accent-color);
        }

        /* Coursework chips */
        .subject-chip {
          font-size: 0.775rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 0.3rem 0.7rem;
          border-radius: 9999px;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .subject-chip:hover {
          color: #fff;
          background: var(--accent-bg-glow);
          border-color: var(--accent-color) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px var(--accent-glow-subtle);
        }

        /* Responsive styling for Tablet & Mobile viewport */
        @media (max-width: 1023px) {
          .education-timeline-container::before {
            left: 1.5rem !important;
            transform: none !important;
          }
          .timeline-item-wrapper {
            width: 100% !important;
            left: 0 !important;
            align-self: flex-start !important;
            justify-content: flex-start !important;
            padding: 1.5rem 0 1.5rem 3.5rem !important;
          }
          .left-item .timeline-node-dot,
          .right-item .timeline-node-dot {
            left: 0.125rem !important;
            right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
