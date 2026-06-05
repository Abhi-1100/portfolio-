import React from 'react';
import { Mail, GitFork, Link2 } from 'lucide-react';

function ContactSection() {
  return (
    <section id="section-6" className="portfolio-section contact-section">

      {/* Stipple decoration */}
      <div className="contact-stipple" aria-hidden="true" />

      <div className="contact-inner">
        <p className="contact-eyebrow">GET IN TOUCH</p>

        <h2 className="contact-heading">
          LET'S BUILD<br />
          <span className="contact-heading--red">SOMETHING</span><br />
          GREAT
        </h2>

        <p className="contact-sub">
          Have a project in mind? I'm open to freelance work, collaborations, and full-time roles.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:abhikakadiya@email.com"
            className="contact-btn contact-btn--primary"
            aria-label="Send email"
          >
            <Mail size={16} strokeWidth={2.5} />
            SEND EMAIL
          </a>
          <a
            href="https://github.com/Abhi-1100"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn--outline"
            aria-label="GitHub profile"
          >
            <GitFork size={16} strokeWidth={2.5} />
            GITHUB
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn--outline"
            aria-label="LinkedIn profile"
          >
            <Link2 size={16} strokeWidth={2.5} />
            LINKEDIN
          </a>
        </div>

        {/* Footer line */}
        <p className="contact-footer" style={{ marginTop: '4rem', fontSize: '13px', color: '#8f6f6e', fontFamily: "'Inter', sans-serif" }}>
          © 2025 Abhi Kakadiya — Built with creative grit.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
