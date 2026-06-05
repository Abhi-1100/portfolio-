import React from 'react';
import { ChevronDown } from 'lucide-react';

function AboutSection({ onScrollDown }) {
  return (
    <section id="section-2" className="portfolio-section about-section">

      <div className="about-inner">
        {/* Page Title */}
        <div className="heading-aligner">
          <div className="section-title-wrap">
            <h2 className="section-title">ABOUT ME</h2>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="about-grid">

          {/* ── LEFT: Text card ── */}
          <div className="about-card">
            {/* "Currently Studying" rotated badge */}
            <div className="about-badge" aria-label="Status: Currently Studying">
              Currently Studying
            </div>

            <h2 className="about-heading">Hello, I'm Abhi</h2>

            <p className="about-bio">
              A passionate full stack developer dedicated to turning real-world
              problems into scalable, data-driven solutions. I bridge the gap
              between complex hardware systems and elegant user experiences,
              specialising in high-performance web applications and automated
              IoT environments.
            </p>

            {/* Skill tags */}
            <div className="about-tags">
              <span className="about-tag">Full-Stack</span>
              <span className="about-tag">IoT Specialist</span>
              <span className="about-tag">ML Explorer</span>
            </div>
          </div>

          {/* ── RIGHT: Profile photo ── */}
          <div className="about-photo-wrap">
            {/* Decorative stipple circle — top-left of photo block */}
            <div className="about-stipple-circle" aria-hidden="true" />

            {/* Photo */}
            <img
              src="/abhi-profile.jpg"
              alt="Abhi Kakadiya — developer portrait"
              className="about-photo"
            />

            {/* "CRAFTING DIGITAL EXPERIENCES" block — bottom-right overlap */}
            <div className="about-craft-block" aria-hidden="true">
              <span>CRAFTING<br />DIGITAL<br />EXPERIENCES</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll down */}
      <button
        className="scroll-indicator about-scroll-btn"
        onClick={onScrollDown}
        aria-label="Scroll to next section"
      >
        <span>Scroll</span>
        <ChevronDown size={18} />
      </button>

    </section>
  );
}

export default AboutSection;
