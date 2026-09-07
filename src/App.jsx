import React, { useState, useEffect } from 'react';
import { translations } from './translations';

// Import Icons
import { 
  FaJava, FaAngular, FaReact, FaVuejs, FaLaravel, 
  FaGithub, FaLinkedin, FaWhatsapp, FaCode,
  FaHtml5, FaCss3Alt, FaAndroid,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiPython, SiPhp, 
  SiSpringboot, SiNestjs, SiFastapi, SiFlask,
  SiPostgresql, SiMysql, SiScikitlearn, SiAndroidstudio
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { TbApi } from 'react-icons/tb';

// Flag of Spain SVG Component (Flag on the left side)
function SpainFlag({ className = "flag-icon" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 640 480" 
      width="22" 
      height="16" 
      aria-hidden="true"
    >
      <rect width="640" height="480" fill="#aa151b" rx="40" />
      <rect y="120" width="640" height="240" fill="#f1bf00" />
      <g transform="translate(160, 240) scale(0.85)">
        <path d="M-22 -42 h44 v48 c0 26 -22 38 -22 38 s-22 -12 -22 -38 z" fill="#aa151b"/>
        <path d="M-17 -37 h34 v42 c0 22 -17 32 -17 32 s-17 -10 -17 -32 z" fill="#f1bf00"/>
        <circle cx="0" cy="-4" r="9" fill="#aa151b"/>
        <rect x="-32" y="-45" width="6" height="90" rx="3" fill="#aa151b"/>
        <rect x="26" y="-45" width="6" height="90" rx="3" fill="#aa151b"/>
      </g>
    </svg>
  );
}

// Flag of United States SVG Component (Flag on the left side)
function USAFlag({ className = "flag-icon" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 640 480" 
      width="22" 
      height="16" 
      aria-hidden="true"
    >
      <clipPath id="us-rounded-flag">
        <rect width="640" height="480" rx="40" />
      </clipPath>
      <g clipPath="url(#us-rounded-flag)">
        <rect width="640" height="480" fill="#b22234" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 276.9h640M0 350.8h640M0 424.6h640" />
        <rect width="260" height="258.5" fill="#3c3b6e" />
        <g fill="#fff" opacity="0.95">
          <circle cx="36" cy="32" r="9"/>
          <circle cx="98" cy="32" r="9"/>
          <circle cx="160" cy="32" r="9"/>
          <circle cx="222" cy="32" r="9"/>
          <circle cx="67" cy="68" r="9"/>
          <circle cx="129" cy="68" r="9"/>
          <circle cx="191" cy="68" r="9"/>
          <circle cx="36" cy="104" r="9"/>
          <circle cx="98" cy="104" r="9"/>
          <circle cx="160" cy="104" r="9"/>
          <circle cx="222" cy="104" r="9"/>
          <circle cx="67" cy="140" r="9"/>
          <circle cx="129" cy="140" r="9"/>
          <circle cx="191" cy="140" r="9"/>
          <circle cx="36" cy="176" r="9"/>
          <circle cx="98" cy="176" r="9"/>
          <circle cx="160" cy="176" r="9"/>
          <circle cx="222" cy="176" r="9"/>
          <circle cx="67" cy="212" r="9"/>
          <circle cx="129" cy="212" r="9"/>
          <circle cx="191" cy="212" r="9"/>
        </g>
      </g>
    </svg>
  );
}

function App() {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('cyberpunk');
  const [projIndex, setProjIndex] = useState(0);

  const t = translations[language];

  // Carousel handlers for projects
  const handlePrevProject = () => {
    setProjIndex((prev) => (prev === 0 ? t.projects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setProjIndex((prev) => (prev === t.projects.length - 1 ? 0 : prev + 1));
  };

  // Set theme on html tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Specific skills requested by user
  const skillCategories = [
    {
      key: 'languages',
      title: language === 'es' ? 'Lenguajes' : 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'PHP', icon: <SiPhp /> },
      ]
    },
    {
      key: 'frameworks',
      title: language === 'es' ? 'Frameworks & Librerías' : 'Frameworks & Libraries',
      skills: [
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'NestJS', icon: <SiNestjs /> },
        { name: 'Laravel', icon: <FaLaravel /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'Angular', icon: <FaAngular /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Vue', icon: <FaVuejs /> },
      ]
    },
    {
      key: 'databases',
      title: language === 'es' ? 'Bases de Datos' : 'Databases',
      skills: [
        { name: 'SQL Server', icon: <DiDatabase /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ]
    }
  ];

  // Tech badges with icons for Partner Tech experience
  const partnerTechSkills = [
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'REST APIs', icon: <TbApi /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'SQL', icon: <DiDatabase /> }
  ];

  // Tech badges with icons for Project 1
  const project1Techs = [
    { name: 'Python', icon: <SiPython /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <SiJavascript /> }
  ];

  // Tech badges with icons for Project 2
  const project2Techs = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Android', icon: <FaAndroid /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Android Studio', icon: <SiAndroidstudio /> }
  ];

  // Tech badges with icons for Project 3 (Anime Quiz)
  const project3Techs = [
    { name: 'Android Studio', icon: <SiAndroidstudio /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> }
  ];

  const allProjectTechs = [project1Techs, project2Techs, project3Techs];

  return (
    <div className="portfolio">
      {/* Dynamic Animated Ambient Background */}
      <div className="bg-glow"></div>
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      <div className="ambient-orb orb-3"></div>
      <div className="bg-grid-overlay"></div>
      
      {/* Sticky Header Navbar */}
      <nav className="navbar">
        {/* Left Side: Language Toggle with Flag on Left */}
        <div className="nav-left">
          <button
            className="lang-quick-toggle"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            title={language === 'es' ? 'Cambiar a English' : 'Cambiar a Español'}
            aria-label="Toggle language"
          >
            <span className="quick-flag-wrapper">
              {language === 'es' ? <SpainFlag className="flag-icon" /> : <USAFlag className="flag-icon" />}
            </span>
            <span className="quick-lang-code">{language === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>

        {/* Middle Navigation Links */}
        <div className="nav-middle">
          <a href="#home" className="nav-link">{t.nav.home}</a>
          <a href="#about-skills" className="nav-link">{t.nav.about} & {t.nav.skills}</a>
          <a href="#experience" className="nav-link">{t.nav.experience}</a>
          <a href="#projects" className="nav-link">{t.nav.projects}</a>
        </div>

        {/* Right Side: Theme Dots (Social icons moved to hero profile) */}
        <div className="nav-right">
          <div className="theme-selector-navbar" aria-label="Color themes">
            <button 
              className={`theme-dot ${theme === 'cyberpunk' ? 'active' : ''}`} 
              style={{ backgroundColor: '#ff007f' }} 
              onClick={() => setTheme('cyberpunk')}
              title={t.themes.cyberpunk}
              aria-label={t.themes.cyberpunk}
            />
            <button 
              className={`theme-dot ${theme === 'emerald' ? 'active' : ''}`} 
              style={{ backgroundColor: '#10b981' }} 
              onClick={() => setTheme('emerald')}
              title={t.themes.emerald}
              aria-label={t.themes.emerald}
            />
            <button 
              className={`theme-dot ${theme === 'ocean' ? 'active' : ''}`} 
              style={{ backgroundColor: '#00d2ff' }} 
              onClick={() => setTheme('ocean')}
              title={t.themes.ocean}
              aria-label={t.themes.ocean}
            />
            <button 
              className={`theme-dot ${theme === 'sunset' ? 'active' : ''}`} 
              style={{ backgroundColor: '#ff6b35' }} 
              onClick={() => setTheme('sunset')}
              title={t.themes.sunset}
              aria-label={t.themes.sunset}
            />
            <button 
              className={`theme-dot ${theme === 'light' ? 'active' : ''}`} 
              style={{ backgroundColor: '#6366f1' }} 
              onClick={() => setTheme('light')}
              title={t.themes.light}
              aria-label={t.themes.light}
            />
          </div>
        </div>
      </nav>

      {/* Main Layout Container */}
      <div className="container">
        
        {/* Hero Section: Text on Left, Icon on Right with Socials Below Icon */}
        <section id="home" className="hero-section">
          <div className="hero-text-content">
            <h1 className="hero-name">{t.hero.greeting}</h1>
            <h2 className="hero-role">{t.hero.role}</h2>
            <p className="hero-desc">{t.hero.experience}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <FaCode /> {t.nav.projects}
              </a>
              <a href="#about-skills" className="btn-secondary">
                {t.nav.about}
              </a>
            </div>
          </div>

          <div className="hero-avatar-side">
            <div className="avatar-wrapper">
              <div className="avatar-aura-ring outer"></div>
              <div className="avatar-aura-ring inner"></div>
              <img 
                src="/img/icono.png" 
                alt="Alejandro Purizaca Avatar" 
                className="avatar-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250";
                }}
              />
            </div>

            {/* Social Icons positioned directly below the profile icon */}
            <div className="hero-socials-below">
              <a 
                href="https://github.com/AlesisxHz-afk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-pill"
                aria-label="GitHub"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/alejandro-purizaca-salazar-bb4422392/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-pill"
                aria-label="LinkedIn"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/51951960260" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-pill"
                aria-label="WhatsApp"
              >
                <FaWhatsapp /> <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section: Sobre mí y Habilidades (Un Solo Div Unificado) */}
        <section id="about-skills" className="about-skills-section">
          <div className="about-skills-unified-card">
            <div className="about-skills-inner-grid">
              
              {/* Left Part: Sobre Mí */}
              <div className="about-unified-col">
                <div className="about-header">
                  <h3 className="card-section-title">{t.about.title}</h3>
                  <span className="accent-pill">Full Stack</span>
                </div>
                <div className="about-body">
                  <p className="about-text">{t.about.description}</p>
                  <div className="about-highlights">
                    {(t.about.highlights || [
                      "Bachiller en Ing. de Sistemas y Computación",
                      "Especializado en Spring Boot, Angular, APIs REST & SQL",
                      "Enfoque en soluciones eficientes y alto rendimiento"
                    ]).map((highlight, idx) => (
                      <div key={idx} className="highlight-item">
                        <span className="highlight-dot">✦</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Part: Habilidades (Sin tooltip abajo al hacer hover) */}
              <div className="skills-unified-col">
                <h3 className="card-section-title">{t.sections.skills}</h3>
                <div className="skills-categories-wrapper">
                  {skillCategories.map((category) => (
                    <div key={category.key} className="skill-cat-group">
                      <h4 className="skill-cat-title">{category.title}</h4>
                      <div className="skill-chips-row">
                        {category.skills.map((skill) => (
                          <div 
                            key={skill.name} 
                            className="skill-chip" 
                            aria-label={skill.name}
                          >
                            <span className="skill-chip-icon">{skill.icon}</span>
                            <span className="skill-chip-name">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Experience Section (Partner Tech only) */}
        <section id="experience" className="experience-section">
          <h2 className="section-title">{t.sections.experience}</h2>
          <div className="experience-card">
            <div className="exp-card-header">
              <div className="exp-main-title">
                <h3>{t.experience.role}</h3>
                <h4>{t.experience.company}</h4>
              </div>
              <span className="exp-period-badge">{t.experience.period}</span>
            </div>

            <ul className="exp-points-list">
              {t.experience.bullets.map((bullet, idx) => (
                <li key={idx} className="exp-point-item">
                  <span className="point-bullet-icon">✦</span>
                  <span className="point-text">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="exp-tech-container">
              <span className="exp-tech-label">{t.experience.technologiesTitle}</span>
              <div className="exp-tech-chips">
                {partnerTechSkills.map((tech) => (
                  <div key={tech.name} className="tech-badge-with-icon">
                    <span className="tech-badge-icon">{tech.icon}</span>
                    <span className="tech-badge-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section as a Carousel */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">{t.sections.projects}</h2>
          
          <div className="projects-carousel-wrapper">
            <button 
              className="carousel-nav-btn prev" 
              onClick={handlePrevProject}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>

            <div className="projects-carousel-slide-box">
              {t.projects.map((proj, idx) => {
                if (idx !== projIndex) return null;
                const techs = allProjectTechs[idx] || project1Techs;

                return (
                  <div key={proj.id || idx} className="project-feature-card carousel-slide">
                    {/* Background Image Layer */}
                    <div className="project-card-bg">
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        className="project-bg-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200";
                        }}
                      />
                    <div className="project-bg-overlay"></div>
                    <div className="project-bg-mesh"></div>
                  </div>

                    {/* Top Right Code Button(s) */}
                    {proj.githubLinks && proj.githubLinks.length > 0 ? (
                      <div className="btn-code-group-top-right">
                        {proj.githubLinks.map((link, lIdx) => (
                          <a 
                            key={lIdx}
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-code-top-right"
                            title={link.label}
                          >
                            <FaGithub /> {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-code-top-right"
                        title={proj.codeButton}
                      >
                        <FaGithub /> {proj.codeButton}
                      </a>
                    )}

                    {/* Content on top of Background */}
                    <div className="project-content-layer">
                      <div className="project-title-group">
                        <span className="project-company-tag">{proj.company}</span>
                        <h3 className="project-title">{proj.title}</h3>
                      </div>

                      <p className="project-desc">{proj.description}</p>
                      
                      <h4 className="project-subhead">{proj.featuresTitle}</h4>
                      <ul className="project-features-list">
                        {proj.features.map((feature, fIdx) => (
                          <li key={fIdx}>{feature}</li>
                        ))}
                      </ul>

                      <h4 className="project-subhead">{proj.techTitle}</h4>
                      <div className="project-tech-chips">
                        {techs.map((tech) => (
                          <div key={tech.name} className="tech-badge-with-icon">
                            <span className="tech-badge-icon">{tech.icon}</span>
                            <span className="tech-badge-name">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              className="carousel-nav-btn next" 
              onClick={handleNextProject}
              aria-label="Next project"
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

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Alejandro Purizaca. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
