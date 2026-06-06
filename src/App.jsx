import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import ActivitySection from './components/ActivitySection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Loader from './components/Loader';

export const SECTIONS = [
  { id: 'section-1', title: 'Home', numeral: 'I' },
  { id: 'section-2', title: 'About', numeral: 'II' },
  { id: 'section-3', title: 'Projects', numeral: 'III' },
  { id: 'section-activity', title: 'Activity', numeral: 'IV' },
  { id: 'section-4', title: 'Skills', numeral: 'V' },
  { id: 'section-5', title: 'Achievements', numeral: 'VI' },
  { id: 'section-6', title: 'Contact', numeral: 'VII' },
];

function App() {
  const [activeSection, setActiveSection] = useState('section-1');
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          if (entry.target.id === 'section-1') {
            setIsIntroActive(true);
          }
        }
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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const handleIntroScroll = (e) => {
    if (activeSection === 'section-1' && isIntroActive) {
      if (e.deltaY > 0) {
        setIsIntroActive(false);
      }
    }
  };

  const handleIntroTouch = () => {
    if (activeSection === 'section-1' && isIntroActive) {
      setIsIntroActive(false);
    }
  };

  return (
    <>
      {isAppLoading && <Loader onComplete={() => setIsAppLoading(false)} />}

      {/* Global Hamburger Menu Button (Mobile Only) */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-menu">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`sidebar-menu-item ${activeSection === sec.id ? 'active' : ''}`}
            >
              <span className="sidebar-menu-label">{sec.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Left Sidebar Index Navigation (Desktop Only) */}
      <nav className={`sidebar-nav ${activeSection === 'section-1' && isIntroActive ? 'on-hero' : 'scrolled'}`} aria-label="Section Navigation">
        <div className="sidebar-brand">
          <span>The</span>
          <span>Abhi's</span>
          <span>Workstation</span>
        </div>
        
        <div className="sidebar-subtitle">
          FULL STACK & AI DEVELOPMENT
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
      </nav>

      {/* Scroll-snap main container */}
      <main 
        className="portfolio-container" 
        ref={containerRef}
        style={{ overflowY: (activeSection === 'section-1' && isIntroActive) ? 'hidden' : 'scroll' }}
        onWheel={handleIntroScroll}
        onTouchMove={handleIntroTouch}
      >
        <HeroSection 
          onScrollDown={() => { setIsIntroActive(false); scrollTo('section-2'); }} 
          activeSection={activeSection}
          scrollTo={scrollTo}
        />
        <AboutSection       onScrollDown={() => scrollTo('section-3')} />
        <ProjectsSection />
        <BlogSection />
        <ActivitySection />
        <SkillsSection      onScrollDown={() => scrollTo('section-5')} />
        <AchievementsSection onScrollDown={() => scrollTo('section-6')} />
        <ContactSection />

      </main>
    </>
  );
}

export default App;
