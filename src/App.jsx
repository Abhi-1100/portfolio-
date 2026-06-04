import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, ChevronDown, Layout } from 'lucide-react';

const SECTIONS = [
  { 
    id: 'section-1', 
    num: '01', 
    title: 'Section 1', 
    desc: 'The beginning of your showcase. A premium, minimalist space designed to capture attention and set the tone.' 
  },
  { 
    id: 'section-2', 
    num: '02', 
    title: 'Section 2', 
    desc: 'Deepen the narrative. Perfect for presenting creative directions, concept art, or core philosophy.' 
  },
  { 
    id: 'section-3', 
    num: '03', 
    title: 'Section 3', 
    desc: 'Demonstrate capabilities. A space dedicated to detailing specific skills, systems, or case studies.' 
  },
  { 
    id: 'section-4', 
    num: '04', 
    title: 'Section 4', 
    desc: 'Evidence of impact. Use this zone for project galleries, interactive mockups, or performance metrics.' 
  },
  { 
    id: 'section-5', 
    num: '05', 
    title: 'Section 5', 
    desc: 'Showcase collaboration. Highlight client testimonies, speaking engagements, or professional history.' 
  },
  { 
    id: 'section-6', 
    num: '06', 
    title: 'Section 6', 
    desc: 'Call to action. Connect with visitors, provide download links for resources, or host contact details.' 
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('section-1');
  const [theme, setTheme] = useState('dark');
  const containerRef = useRef(null);

  // Initialize and handle theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle theme utility
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Setup Intersection Observer to monitor scroll snap section changes
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.6, // Fire when 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe each section
    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler for dot navigation
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Premium Header */}
      <header className="portfolio-header">
        <div className="logo-text">
          <Layout size={22} className="logo-icon" />
          <span>PORTFOLIO</span>
          <span className="logo-dot"></span>
        </div>
        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle visual mode"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      {/* Floating Vertical Navigation Dots */}
      <nav className="nav-dots" aria-label="Section Navigation">
        {SECTIONS.map((sec) => (
          <div key={sec.id} className="nav-dot-wrapper">
            <span className="nav-dot-label">{sec.title}</span>
            <button
              onClick={() => scrollToSection(sec.id)}
              className={`nav-dot ${activeSection === sec.id ? 'active' : ''}`}
              aria-label={`Go to ${sec.title}`}
              title={sec.title}
            />
          </div>
        ))}
      </nav>

      {/* Main Snap Container */}
      <main className="portfolio-container" ref={containerRef}>
        {SECTIONS.map((sec, idx) => (
          <section 
            key={sec.id} 
            id={sec.id} 
            className="portfolio-section"
          >
            <div className="section-content">
              <div className="section-number">{sec.num}</div>
              <h1 className="section-title">{sec.title}</h1>
              <p className="section-desc">{sec.desc}</p>
            </div>

            {/* Scroll Indicator (Only shown on non-final sections) */}
            {idx < SECTIONS.length - 1 && (
              <div 
                className="scroll-indicator" 
                onClick={() => scrollToSection(SECTIONS[idx + 1].id)}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                title="Scroll to next section"
              >
                <span>Scroll</span>
                <ChevronDown size={18} />
              </div>
            )}
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
