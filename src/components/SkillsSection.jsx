import React from 'react';
import { ChevronDown, Code2, Server, Terminal, Cpu, Database, Cloud, Layers, Palette, GitFork, Trophy } from 'lucide-react';

const SKILLS = [
  { Icon: Code2,     label: 'React.js & Next.js',      tag: 'Frontend' },
  { Icon: Server,    label: 'Node.js / Express',        tag: 'Backend' },
  { Icon: Terminal,  label: 'Python & Flask',           tag: 'Scripting' },
  { Icon: Cpu,       label: 'IoT & Arduino',            tag: 'Hardware' },
  { Icon: Database,  label: 'PostgreSQL & MongoDB',     tag: 'Databases' },
  { Icon: Cloud,     label: 'AWS & Docker',             tag: 'DevOps' },
  { Icon: Layers,    label: 'System Design',            tag: 'Architecture' },
  { Icon: Palette,   label: 'UI / UX Design',           tag: 'Design' },
];

function SkillsSection({ onScrollDown }) {
  return (
    <section id="section-4" className="portfolio-section skills-section">
      <div className="skills-container-layout">
        {/* LEFT COLUMN: Skills & Tools */}
        <div className="skills-col-left">
          <div className="skills-header">
            <div>
              <p className="skills-eyebrow">WHAT I WORK WITH</p>
              <h2 className="skills-heading">
                SKILLS<br />
                <span className="skills-heading--outline">&amp; TOOLS</span>
              </h2>
            </div>
            <p className="skills-sub">
              The engine behind production-grade platforms, IoT systems and AI experiences.
            </p>
          </div>

          <div className="skills-grid">
            {SKILLS.map(({ Icon, label, tag }) => (
              <div className="skill-card" key={label}>
                <Icon size={26} className="skill-icon" strokeWidth={1.5} />
                <span className="skill-label">{label}</span>
                <span className="skill-tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>


      </div>

      <button className="about-scroll-btn" onClick={onScrollDown} aria-label="Scroll to next section">
        <span>Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}

export default SkillsSection;

