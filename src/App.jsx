import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

const SECTIONS = [
  { id: 'section-1', title: 'Home' },
  { id: 'section-2', title: 'About' },
  { id: 'section-3', title: 'Projects' },
  { id: 'section-4', title: 'Skills' },
  { id: 'section-5', title: 'Achievements' },
  { id: 'section-6', title: 'Contact' },
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
      {/* Floating right-side navigation dots — only navigation, no header */}
      <nav className="nav-dots" aria-label="Section Navigation">
        {SECTIONS.map((sec) => (
          <div key={sec.id} className="nav-dot-wrapper">
            <span className="nav-dot-label">{sec.title}</span>
            <button
              onClick={() => scrollTo(sec.id)}
              className={`nav-dot ${activeSection === sec.id ? 'active' : ''}`}
              aria-label={`Go to ${sec.title}`}
              title={sec.title}
            />
          </div>
        ))}
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
