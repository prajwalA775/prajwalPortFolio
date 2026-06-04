# Prajwal Amagi - Professional Developer Portfolio

A modern, premium, glassmorphic, and fully responsive developer portfolio built using **React.js**, **Vanilla CSS**, and **Vite**.

This portfolio showcases the skills, projects, achievements, and academic credentials of **Prajwal Amagi**, a Computer Science Engineering student and Full-Stack Developer.

---

## ✨ Key Features

- 🌌 **Premium Obsidian Theme**: obsidian background layered with dynamic, floating gradient glow spheres.
- 🖱️ **Interactive Mouse-Tracking Glow**: Real-time CSS radial gradient that moves with the user's cursor.
- ✍️ **React-Driven Typewriter Effect**: Animates professional titles in the Hero section without external package overhead.
- 📊 **Reading Progress Indicator**: Top navigation bar maps the vertical page scroll percentage.
- 🗂️ **Projects Filter & Details Modal**: Category filtering of technical projects with custom keyframes and responsive layout cards.
- 🏆 **Achievements & Certifications**: Grid of credentials (Infosys, Cisco, MongoDB) featuring clickable cards, external redirect links (`target="_blank" rel="noopener noreferrer"`), and hover indicator glows.
- 🏫 **Academic Journey Timeline**: A custom-designed vertical alternating roadmap tracking your progression from High School, through Pre-University, to Engineering. Highlights coursework via interactive hoverable chips.
- ✉️ **Production Contact Form**: Connected to **Web3Forms** for free, serverless contact submissions sent straight to your email. Includes environment configuration templates and local fallback simulators.
- 📱 **Premium Glassmorphic Drawer**: Mobile menu features a right-sliding sidebar drawer with backdrop blur overlays, animated gradient panel fills, close button animations, active page glow markers, and body scroll locking.
- 🌐 **Clean SVG Asset Integration**: Lightweight custom-styled vector components for GitHub, LinkedIn, and Instagram.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), HTML5
- **Styling**: Vanilla CSS3 (CSS Variables, Backdrop Filters, Keyframe Animations, Flexbox, Grid)
- **Icons**: Lucide React
- **Build System**: Vite
- **Form Forwarder**: Web3Forms API

---

## 📁 Repository Structure

```text
PortFolio/
├── public/                 # Static assets (favicons)
├── src/
│   ├── assets/             # Bundled binary assets (profile image, resume PDF)
│   ├── components/         # Modular layout sections
│   │   ├── Navbar.jsx      # Navigation header with glassmorphic mobile drawer
│   │   ├── Hero.jsx        # Landing hero with typewriter & centered socials
│   │   ├── About.jsx       # Academic summary & pillars
│   │   ├── Skills.jsx      # Skill lists with interactive marquee track
│   │   ├── Projects.jsx    # Projects catalog with details modal
│   │   ├── Achievements.jsx# Certifications panel with clickable links
│   │   ├── Education.jsx   # Alternating journey timeline & coursework chips
│   │   ├── Contact.jsx     # Web3Forms contact form & copy-to-clipboard metrics
│   │   └── Footer.jsx      # Copyright & social handles
│   ├── hooks/
│   │   └── useScrollReveal.js # IntersectionObserver entrance animations
│   ├── App.jsx             # Core assembly and mouse glow handler
│   ├── index.css           # Global design tokens and animations
│   └── main.jsx            # React root injection
├── index.html              # HTML shell & SEO meta setups
├── package.json            # Script mappings and exact dependencies
├── .env.example            # Environment variables configuration template
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

2. Configure Environment Variables:
   - Create a copy of the template:
     ```bash
     cp .env.example .env
     ```
   - Insert your Web3Forms Access Key (obtained from [web3forms.com](https://web3forms.com/)):
     ```env
     VITE_WEB3FORMS_ACCESS_KEY=your_key_here
     ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local address displayed (usually `http://localhost:5173`).

### Production Build

To compile the application into static files ready for web deployment (e.g., Vercel, Netlify, Render, GitHub Pages):

```bash
npm run build
```

The compiled assets will be located in the `/dist` directory.
