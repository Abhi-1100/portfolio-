import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

const SECTIONS = [
  { id: 'section-1', title: 'Home', numeral: 'I' },
  { id: 'section-2', title: 'About', numeral: 'II' },
  { id: 'section-3', title: 'Projects', numeral: 'III' },
  { id: 'section-4', title: 'Skills', numeral: 'IV' },
  { id: 'section-5', title: 'Achievements', numeral: 'V' },
  { id: 'section-6', title: 'Contact', numeral: 'VI' },
];

function App() {
  const [activeSection, setActiveSection] = useState('section-1');
  const containerRef = useRef(null);

  // Intersection observer for active nav dot
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.6,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Sidebar Index Navigation */}
      <nav className="sidebar-nav" aria-label="Section Navigation">
        <div className="sidebar-brand">
          <span>The</span>
          <span>Abhi's</span>
          <span>Workstation</span>
        </div>

        <div className="sidebar-menu">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`sidebar-menu-item ${activeSection === sec.id ? 'active' : ''}`}
              aria-label={`Go to ${sec.title}`}
            >
              <span className="sidebar-menu-label">{sec.title}</span>
              <span className="sidebar-menu-leader" />
              <span className="sidebar-menu-numeral">{sec.numeral}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <span>© Abhi Kakadiya</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </nav>

      {/* Scroll-snap main container */}
      <main className="portfolio-container" ref={containerRef}>
        <HeroSection        onScrollDown={() => scrollTo('section-2')} />
        <AboutSection       onScrollDown={() => scrollTo('section-3')} />
        <ProjectsSection />
        <SkillsSection      onScrollDown={() => scrollTo('section-5')} />
        <AchievementsSection onScrollDown={() => scrollTo('section-6')} />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
