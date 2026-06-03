# Prajwal Amagi - Professional Developer Portfolio

A modern, premium, glassmorphic, and fully responsive developer portfolio built using **React.js**, **Vanilla CSS**, and **Vite**. 

This portfolio showcases the skills, projects, achievements, and academic credentials of **Prajwal Amagi**, a Computer Science Engineering student and Full-Stack Developer.

---

## ✨ Key Features

- 🌌 **Premium Dark Theme**: Obsidian background layered with dynamic, floating gradient glow spheres.
- 🖱️ **Interactive Mouse-Tracking Glow**: Real-time CSS radial gradient that moves with the user's cursor.
- ✍️ **React-Driven Typewriter Effect**: Animates professional titles in the Hero section without external overhead.
- 📊 **Reading Progress Indicator**: Top navigation bar maps the vertical page scroll percentage.
- 🛠️ **Skills & Projects Filters**: Responsive categorization filtering of technical competencies and accomplishments.
- 🏆 **Achievements Timeline**: Clean timeline representing certified specializations (Infosys, Cisco, MongoDB).
- 📋 **One-Click Copier**: Copy contact details (Email, Phone) instantly with visual status indicators.
- 📱 **Mobile-First Layout**: Fully adaptable across all viewports (mobile, tablet, desktop).
- 🚀 **Performant Scroll Reveal**: Built-in hook leveraging the `IntersectionObserver` API for lightweight entrance animations.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), HTML5
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, Grid, Backdrop Filters, Keyframe Animations)
- **Icons**: Lucide React
- **Build System**: Vite

---

## 📁 Repository Structure

```text
PortFolio/
├── public/                 # Static assets (favicons, resume PDF)
├── src/
│   ├── components/         # Modular layout sections
│   │   ├── Navbar.jsx      # Navigation header with scroll progress
│   │   ├── Hero.jsx        # Landing hero with typewriter animations
│   │   ├── About.jsx       # Academic summary & pillars
│   │   ├── Skills.jsx      # Skill lists and interactive levels
│   │   ├── Projects.jsx    # Projects catalog with details modal
│   │   ├── Achievements.jsx# Timeline certifications panel
│   │   ├── Education.jsx   # Degree coursework timeline
│   │   ├── Contact.jsx     # Interactive contact form & metrics
│   │   └── Footer.jsx      # Copyright information & back-to-top CTA
│   ├── hooks/
│   │   └── useScrollReveal.js # IntersectionObserver animation triggers
│   ├── App.jsx             # Core assembly and mouse glow handler
│   ├── index.css           # Global design tokens and animations
│   └── main.jsx            # React root injection
├── index.html              # HTML shell & SEO meta setups
├── package.json            # Script mappings and dependencies
└── vite.config.js          # Vite configurations
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Run the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local address displayed (usually `http://localhost:5173`).

### Production Build

To compile the application into static files ready for web deployment (e.g., Vercel, Netlify, GitHub Pages):

```bash
npm run build
```

The compiled assets will be located in the `/dist` directory.
