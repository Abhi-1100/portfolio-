import React from 'react';
import { ChevronDown, Code2, Layout, Server, Database, Wrench, BookOpen } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    Icon: Code2,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL']
  },
  {
    title: 'Frontend',
    Icon: Layout,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux', 'Material UI']
  },
  {
    title: 'Backend & Data',
    Icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.io']
  },
  {
    title: 'Databases',
    Icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Prisma']
  },
  {
    title: 'Tools & Practices',
    Icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Vercel', 'Linux']
  },
  {
    title: 'CS Concepts',
    Icon: BookOpen,
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Agile/Scrum']
  }
];

function SkillsSection({ onScrollDown }) {
  return (
    <section id="section-4" className="portfolio-section skills-section">
      <div className="heading-aligner">
        <div className="section-title-wrap">
          <h2 className="section-title">SKILLS & TOOLS</h2>
        </div>
      </div>

      <div className="skills-container-layout">
        <div className="skills-col-left" style={{ width: '100%' }}>
          <p className="skills-sub" style={{ alignSelf: 'flex-start', maxWidth: '600px', marginBottom: '1rem', marginTop: '-2rem', fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#49473e' }}>
            From frontend frameworks to backend systems, I leverage modern tools to build scalable and maintainable solutions.
          </p>

          <div className="skills-category-grid">
            {SKILL_CATEGORIES.map(({ title, Icon, skills }) => (
              <div className="skills-category-card" key={title}>
                <div className="skills-category-header">
                  <Icon size={24} className="skills-category-icon" strokeWidth={2.5} />
                  <h3 className="skills-category-title">{title}</h3>
                </div>
                <div className="skills-pill-container">
                  {skills.map(skill => (
                    <span key={skill} className="skills-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default SkillsSection;

