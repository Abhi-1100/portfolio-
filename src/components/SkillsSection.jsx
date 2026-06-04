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

        {/* RIGHT COLUMN: Coding Profiles */}
        <div className="skills-col-right">
          <div className="profiles-header">
            <div>
              <p className="skills-eyebrow">DEVELOPER METRICS</p>
              <h2 className="skills-heading">
                CODING<br />
                <span className="skills-heading--outline">STATS</span>
              </h2>
            </div>
            <p className="skills-sub">
              Live updates of algorithm challenges solved and open-source contributions.
            </p>
          </div>

          <div className="profiles-list">
            {/* LeetCode Card */}
            <div className="profile-card">
              <div className="profile-card-header">
                <div className="profile-card-title-wrap">
                  <Trophy size={18} className="profile-card-icon" strokeWidth={1.8} />
                  <span className="profile-card-title">LeetCode Stats</span>
                </div>
                <a 
                  href="https://leetcode.com/u/KniZV1f5JT/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="profile-card-link"
                >
                  KniZV1f5JT
                </a>
              </div>
              <div className="profile-card-body">
                <img 
                  src="https://leetcard.jacoblin.cool/KniZV1f5JT?theme=light&font=Karma&ext=heatmap" 
                  alt="LeetCode Streak Stats" 
                  className="profile-stats-img" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* GitHub Card */}
            <div className="profile-card">
              <div className="profile-card-header">
                <div className="profile-card-title-wrap">
                  <GitFork size={18} className="profile-card-icon" strokeWidth={1.8} />
                  <span className="profile-card-title">GitHub Activity</span>
                </div>
                <a 
                  href="https://github.com/Abhi-1100" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="profile-card-link"
                >
                  Abhi-1100
                </a>
              </div>
              <div className="profile-card-body">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=Abhi-1100&show_icons=true&title_color=b7102a&icon_color=b7102a&text_color=5b403f&bg_color=f5f3ee&border_color=1b1c19&border_radius=0&hide_border=true" 
                  alt="GitHub Profile Stats" 
                  className="profile-stats-img" 
                  loading="lazy"
                />
              </div>
            </div>
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

