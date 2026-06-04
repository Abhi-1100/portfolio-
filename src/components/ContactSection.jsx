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
            <Mail size={18} strokeWidth={2} />
            SEND EMAIL
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn--outline"
            aria-label="GitHub profile"
          >
            <GitFork size={18} strokeWidth={2} />
            GITHUB
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn--outline"
            aria-label="LinkedIn profile"
          >
            <Link2 size={18} strokeWidth={2} />
            LINKEDIN
          </a>
        </div>

        {/* Footer line */}
        <p className="contact-footer">
          © 2025 Abhi Kakadiya — Built with creative grit.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
