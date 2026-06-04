import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

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
  subtitle: "Let's Connect",
  title: 'Contact Me',
  projectInMind: 'Have a Project in Mind?',
  introText: 'I am open to internship opportunities, collaborative projects, or general tech discussions. Reach out and let\'s create something extraordinary.',
  emailLabel: 'Email Address',
  phoneLabel: 'Phone Number',
  locationLabel: 'Current Location',
  locationValue: 'Bangalore, Karnataka, India',
  socialLabel: 'Connect Socially',
  sendMessageTitle: 'Send Me a Message',
  nameLabel: 'Your Name',
  namePlaceholder: 'John Doe',
  emailLabelInput: 'Email Address',
  emailPlaceholder: 'john@example.com',
  messageLabel: 'Your Message',
  messagePlaceholder: 'Type your message here...',
  btnSending: 'Transmitting Message...',
  btnSend: 'Send Message',
  successMsg: '✓ Thank you! Your message has been sent successfully.',
  errorMsg: '✗ Failed to send message. Please try again or contact me directly via email.',
};

export default function Contact() {
  const reveal = useScrollReveal();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const email = 'prajwalamagi775775@gmail.com';
  const phone = '+91 8618594695';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Fallback simulation if key is not configured in local environment
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      console.warn('Web3Forms Access Key is not configured. Simulating success...');
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: 'Prajwal Portfolio',
        }),
      });

      const result = await response.json();
      setIsSubmitting(false);

      if (response.status === 200 || result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Web3Forms Error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission Network Error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-title-wrapper reveal-hidden" ref={reveal}>
          <p className="section-subtitle">{t.subtitle}</p>
          <h2 className="section-title">{t.title}</h2>
          <div className="title-glow-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}
          className="contact-grid"
        >
          {/* Left Panel: Contact Info */}
          <div className="reveal-hidden" ref={reveal}>
            <h3
              style={{
                fontSize: '1.6rem',
                fontFamily: 'var(--font-heading)',
                marginBottom: '1rem',
              }}
            >
              {t.projectInMind}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}
            >
              {t.introText}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              {/* Email Card */}
              <div
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  backgroundColor: 'rgba(3, 7, 18, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '0.6rem',
                      borderRadius: '0.375rem',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>{t.emailLabel}</span>
                    <a
                      href={`mailto:${email}`}
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#fff',
                        textDecoration: 'none',
                      }}
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedEmail ? 'var(--color-accent)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                  }}
                  title="Copy to clipboard"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  backgroundColor: 'rgba(3, 7, 18, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '0.6rem',
                      borderRadius: '0.375rem',
                      background: 'rgba(20, 184, 166, 0.1)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>{t.phoneLabel}</span>
                    <a
                      href={`tel:${phone}`}
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#fff',
                        textDecoration: 'none',
                      }}
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedPhone ? 'var(--color-accent)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                  }}
                  title="Copy to clipboard"
                >
                  {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.25rem',
                  backgroundColor: 'rgba(3, 7, 18, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '0.6rem',
                      borderRadius: '0.375rem',
                      background: 'rgba(168, 85, 247, 0.1)',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>{t.locationLabel}</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>
                      {t.locationValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connects */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  letterSpacing: '0.05em',
                }}
              >
                {t.socialLabel}
              </span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://github.com/prajwalA775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prajwal-amagi-271aa9354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/callme.as_prajwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="reveal-hidden" ref={reveal}>
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '1.5rem',
                }}
              >
                {t.sendMessageTitle}
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t.namePlaceholder}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {t.emailLabelInput}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t.emailPlaceholder}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      marginBottom: '0.5rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder={t.messagePlaceholder}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    gap: '0.6rem',
                    padding: '0.85rem',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? (
                    t.btnSending
                  ) : (
                    <>
                      {t.btnSend} <Send size={16} />
                    </>
                  )}
                </button>
              </form>

              {/* Toast Success Message */}
              {submitStatus === 'success' && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    border: '1px solid rgba(20, 184, 166, 0.3)',
                    color: 'var(--color-accent)',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    fontWeight: 500,
                    animation: 'fadeIn 0.3s ease-out',
                  }}
                >
                  {t.successMsg}
                </div>
              )}

              {/* Toast Error Message */}
              {submitStatus === 'error' && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    fontWeight: 500,
                    animation: 'fadeIn 0.3s ease-out',
                  }}
                >
                  {t.errorMsg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
