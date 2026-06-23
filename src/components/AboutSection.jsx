import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

function AboutSection({ onScrollDown }) {
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'AI/ML', 'Data Analytics'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];
    const typingSpeed = 180;
    const deletingSpeed = 80;
    const delayBetweenRoles = 1500;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenRoles);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

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

            <h2 className="about-heading">
              Hello, I'm Abhi <br />
              <span className="typing-text-container">
                [<span className="typing-text">{currentText}</span><span className="typing-cursor">|</span>]
              </span>
            </h2>

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



    </section>
  );
}

export default AboutSection;
