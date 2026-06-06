import React from 'react';
import { ChevronDown, Trophy, BadgeCheck, GraduationCap } from 'lucide-react';
import starsImg from '../assets/background-assets/backimg8-removebg-preview.png';

const ACHIEVEMENTS = [
  {
    Icon: Trophy,
    accent: '#b7102a',
    title: 'LeetCode Pro',
    desc: 'Solved 122+ algorithmic problems with focus on optimization, data structures and dynamic programming.',
  },
  {
    Icon: BadgeCheck,
    accent: '#1b1c19',
    title: 'Google Certified',
    desc: 'Completed the Google Career Certificate in Data Analytics and Professional IT Support Automation.',
  },
  {
    Icon: GraduationCap,
    accent: '#b7102a',
    title: 'B.Tech — Currently Studying',
    desc: 'Pursuing a Bachelor of Technology degree with a focus on software engineering and intelligent systems.',
  },
];

function AchievementsSection({ onScrollDown }) {
  return (
    <section id="section-5" className="portfolio-section achieve-section">
      <img src={starsImg} alt="" className="achieve-corner-img" />

      <div className="heading-aligner">
        <div className="section-title-wrap">
          <h2 className="section-title">ACHIEVEMENTS</h2>
        </div>
      </div>

      <div className="achieve-inner">

        <div className="achieve-grid">
          {ACHIEVEMENTS.map(({ Icon, accent, title, desc }) => (
            <div className="achieve-card" key={title}>
              <div className="achieve-icon-wrap" style={{ backgroundColor: accent }}>
                <Icon size={28} color="#fff" strokeWidth={1.8} />
              </div>
              <div className="achieve-text">
                <h3 className="achieve-title">{title}</h3>
                <p className="achieve-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}

export default AchievementsSection;
