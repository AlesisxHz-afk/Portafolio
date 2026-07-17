import React, { useState, useEffect, useRef } from 'react';
import { translations } from './translations';

// Import Icons
import { 
  FaJava, FaAngular, FaReact, FaVuejs, FaLaravel, 
  FaDocker, FaWindows, FaLinux, FaGithub, FaLinkedin, 
  FaChevronLeft, FaChevronRight, FaFilePdf, FaExternalLinkAlt,
  FaChartBar, FaBars, FaTimes, FaWhatsapp 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiPython, SiPhp, 
  SiSpringboot, SiNestjs, SiFastapi, SiFlask, 
  SiPostgresql, SiMysql, SiMongodb, 
  SiGit, SiAndroidstudio, SiVirtualbox, SiKalilinux 
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';

function App() {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('cyberpunk');
  const [controlsOpen, setControlsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Carousel States
  const [expIndex, setExpIndex] = useState(0);
  const [projIndex, setProjIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);

  const t = translations[language];

  // Set theme on html tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setControlsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Skill definitions grouped by category
  const skillCategories = [
    {
      key: 'languages',
      title: language === 'es' ? 'Lenguajes' : 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, tooltip: 'Java' },
        { name: 'TypeScript', icon: <SiTypescript />, tooltip: 'TypeScript' },
        { name: 'JavaScript', icon: <SiJavascript />, tooltip: 'JavaScript' },
        { name: 'Python', icon: <SiPython />, tooltip: 'Python' },
        { name: 'PHP', icon: <SiPhp />, tooltip: 'PHP' },
      ]
    },
    {
      key: 'frontend',
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: <FaAngular />, tooltip: 'Angular' },
        { name: 'React', icon: <FaReact />, tooltip: 'React' },
        { name: 'Vue', icon: <FaVuejs />, tooltip: 'Vue' },
      ]
    },
    {
      key: 'backend',
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot />, tooltip: 'Spring Boot' },
        { name: 'NestJS', icon: <SiNestjs />, tooltip: 'NestJS' },
        { name: 'FastAPI', icon: <SiFastapi />, tooltip: 'FastAPI' },
        { name: 'Laravel', icon: <FaLaravel />, tooltip: 'Laravel' },
        { name: 'Flask', icon: <SiFlask />, tooltip: 'Flask' },
      ]
    },
    {
      key: 'databases',
      title: language === 'es' ? 'Bases de Datos' : 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, tooltip: 'PostgreSQL' },
        { name: 'MySQL', icon: <SiMysql />, tooltip: 'MySQL' },
        { name: 'SQL Server', icon: <DiDatabase />, tooltip: 'SQL Server' },
        { name: 'MongoDB', icon: <SiMongodb />, tooltip: 'MongoDB' },
      ]
    },
    {
      key: 'tools',
      title: language === 'es' ? 'Herramientas' : 'Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker />, tooltip: 'Docker' },
        { name: 'Git', icon: <SiGit />, tooltip: 'Git' },
        { name: 'GitHub', icon: <FaGithub />, tooltip: 'GitHub' },
        { name: 'Power BI', icon: <FaChartBar />, tooltip: 'Power BI' },
        { name: 'Android Studio', icon: <SiAndroidstudio />, tooltip: 'Android Studio' },
        { name: 'VirtualBox', icon: <SiVirtualbox />, tooltip: 'VirtualBox' },
      ]
    },
    {
      key: 'os',
      title: language === 'es' ? 'Sistemas Operativos' : 'Operating Systems',
      skills: [
        { name: 'Windows', icon: <FaWindows />, tooltip: 'Windows' },
        { name: 'Linux', icon: <FaLinux />, tooltip: 'Linux' },
        { name: 'Kali Linux', icon: <SiKalilinux />, tooltip: 'Kali Linux' },
      ]
    }
  ];

  // Carousel handlers
  const handlePrev = (length, currentIndex, setIndex) => {
    setIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const handleNext = (length, currentIndex, setIndex) => {
    setIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="portfolio">
      <div className="bg-glow"></div>
      
      {/* Sticky Header Navbar */}
      <nav className="navbar">
        {/* Left Side: Hamburger Menu & Dropdown */}
        <div className="nav-left" ref={dropdownRef}>
          <button 
            className="hamburger-btn" 
            onClick={() => setControlsOpen(!controlsOpen)}
            aria-label="Toggle settings"
          >
            {controlsOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <div className={`controls-dropdown ${controlsOpen ? 'open' : ''}`}>
            <div className="dropdown-section">
              <span className="dropdown-section-title">{language === 'es' ? 'Idioma' : 'Language'}</span>
              <button 
                className="lang-btn-dropdown" 
                onClick={() => {
                  setLanguage(language === 'es' ? 'en' : 'es');
                  setControlsOpen(false);
                }}
              >
                <span>{language === 'es' ? '🇬🇧 English' : '🇪🇸 Español'}</span>
              </button>
            </div>
            
            <div className="dropdown-section">
              <span className="dropdown-section-title">{language === 'es' ? 'Temas' : 'Themes'}</span>
              <div className="theme-selector-dropdown">
                <button 
                  className={`theme-dot ${theme === 'cyberpunk' ? 'active' : ''}`} 
                  style={{ backgroundColor: '#ff007f' }} 
                  onClick={() => { setTheme('cyberpunk'); setControlsOpen(false); }}
                  title={t.themes.cyberpunk}
                />
                <button 
                  className={`theme-dot ${theme === 'emerald' ? 'active' : ''}`} 
                  style={{ backgroundColor: '#10b981' }} 
                  onClick={() => { setTheme('emerald'); setControlsOpen(false); }}
                  title={t.themes.emerald}
                />
                <button 
                  className={`theme-dot ${theme === 'ocean' ? 'active' : ''}`} 
                  style={{ backgroundColor: '#00d2ff' }} 
                  onClick={() => { setTheme('ocean'); setControlsOpen(false); }}
                  title={t.themes.ocean}
                />
                <button 
                  className={`theme-dot ${theme === 'sunset' ? 'active' : ''}`} 
                  style={{ backgroundColor: '#ff6b35' }} 
                  onClick={() => { setTheme('sunset'); setControlsOpen(false); }}
                  title={t.themes.sunset}
                />
                <button 
                  className={`theme-dot ${theme === 'light' ? 'active' : ''}`} 
                  style={{ backgroundColor: '#6366f1' }} 
                  onClick={() => { setTheme('light'); setControlsOpen(false); }}
                  title={t.themes.light}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Navigation Links */}
        <div className="nav-middle">
          <a href="#home" className="nav-link">{t.nav.home}</a>
          <a href="#skills" className="nav-link">{t.nav.skills}</a>
          <a href="#experience" className="nav-link">{t.nav.experience}</a>
          <a href="#projects" className="nav-link">{t.nav.projects}</a>
          <a href="#certificates" className="nav-link">{t.nav.certificates}</a>
        </div>

        {/* Right Side Socials (GitHub, LinkedIn, WhatsApp) */}
        <div className="nav-right">
          <a 
            href="https://github.com/AlesisxHz-afk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/alejandro-purizaca-salazar-bb4422392/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://wa.me/51951960260" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-social-icon"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>

      {/* Main Layout Container */}
      <div className="container">
        
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="avatar-wrapper">
            <img 
              src="/img/icono.png" 
              alt="Alejandro Purizaca Avatar" 
              className="avatar-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200";
              }}
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-name">Alejandro Purizaca</h1>
            <h2 className="hero-role">{t.hero.role}</h2>
            <p className="hero-desc">{t.hero.experience}</p>
          </div>
        </section>

        {/* Skills Section (Consolidated dashboard card to save scroll space) */}
        <section id="skills" className="skills">
          <h2 className="section-title">{t.sections.skills}</h2>
          <div className="skills-dashboard">
            {skillCategories.map((category) => (
              <div key={category.key} className="skills-category">
                <h3 className="skills-category-title">{category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="skill-card" 
                      data-tooltip={skill.tooltip}
                      aria-label={skill.name}
                    >
                      {skill.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section (Carousel) */}
        <section id="experience" className="experience">
          <h2 className="section-title">{t.sections.experience}</h2>
          <div className="carousel-wrapper">
            <button 
              className="carousel-nav-btn prev" 
              onClick={() => handlePrev(t.experience.length, expIndex, setExpIndex)}
              aria-label="Previous Experience"
            >
              <FaChevronLeft />
            </button>
            
            <div className="carousel-content-box">
              {t.experience.map((exp, index) => {
                if (index !== expIndex) return null;
                return (
                  <div key={index} className="carousel-slide">
                    <div className="exp-header">
                      <div className="exp-title-box">
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                      </div>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                    <ul className="exp-bullets">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="tech-badges">
                      {exp.tech.map((badge) => (
                        <span key={badge} className="tech-badge">{badge}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              className="carousel-nav-btn next" 
              onClick={() => handleNext(t.experience.length, expIndex, setExpIndex)}
              aria-label="Next Experience"
            >
              <FaChevronRight />
            </button>

            <div className="carousel-indicators">
              {t.experience.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`carousel-dot ${idx === expIndex ? 'active' : ''}`}
                  onClick={() => setExpIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section (Carousel with top-right GitHub button) */}
        <section id="projects" className="projects">
          <h2 className="section-title">{t.sections.projects}</h2>
          <div className="carousel-wrapper">
            <button 
              className="carousel-nav-btn prev" 
              onClick={() => handlePrev(t.projects.length, projIndex, setProjIndex)}
              aria-label="Previous Project"
            >
              <FaChevronLeft />
            </button>

            <div className="carousel-content-box">
              {t.projects.map((proj, index) => {
                if (index !== projIndex) return null;
                return (
                  <div key={index} className="carousel-slide proj-slide-relative">
                    <h3 className="proj-title">{proj.title}</h3>
                    <h4 className="proj-company">{proj.company}</h4>
                    <p className="proj-desc">{proj.description}</p>
                    
                    <h4 className="proj-features-title">{proj.featuresTitle}</h4>
                    <ul className="proj-features-list">
                      {proj.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="proj-tech-title">{proj.techTitle}</h4>
                    <p className="proj-tech-details">{proj.techDetails}</p>

                    <div className="proj-github-btn-absolute">
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary"
                      >
                        <FaGithub /> {proj.codeButton}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              className="carousel-nav-btn next" 
              onClick={() => handleNext(t.projects.length, projIndex, setProjIndex)}
              aria-label="Next Project"
            >
              <FaChevronRight />
            </button>

            <div className="carousel-indicators">
              {t.projects.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`carousel-dot ${idx === projIndex ? 'active' : ''}`}
                  onClick={() => setProjIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section (Carousel) */}
        <section id="certificates" className="certificates">
          <h2 className="section-title">{t.sections.certificates}</h2>
          <div className="carousel-wrapper">
            <button 
              className="carousel-nav-btn prev" 
              onClick={() => handlePrev(t.certificates.length, certIndex, setCertIndex)}
              aria-label="Previous Certificate"
            >
              <FaChevronLeft />
            </button>

            <div className="carousel-content-box">
              {t.certificates.map((cert, index) => {
                if (index !== certIndex) return null;
                return (
                  <div key={index} className="carousel-slide cert-card">
                    <div className="cert-icon">
                      <FaFilePdf />
                    </div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <h4 className="cert-issuer">{cert.issuer}</h4>
                    
                    <div className="cert-meta">
                      <span className="cert-date">{cert.date}</span>
                      <span className="cert-hours">{cert.hours}</span>
                      <span className="cert-grade">{cert.grade}</span>
                    </div>

                    <a 
                      href={cert.fileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary"
                    >
                      <FaExternalLinkAlt /> {cert.viewButton}
                    </a>
                  </div>
                );
              })}
            </div>

            <button 
              className="carousel-nav-btn next" 
              onClick={() => handleNext(t.certificates.length, certIndex, setCertIndex)}
              aria-label="Next Certificate"
            >
              <FaChevronRight />
            </button>

            <div className="carousel-indicators">
              {t.certificates.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`carousel-dot ${idx === certIndex ? 'active' : ''}`}
                  onClick={() => setCertIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Alejandro Purizaca. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
