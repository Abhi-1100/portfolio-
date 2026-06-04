import React, { useState } from 'react';
import { ArrowUpRight, Code2, Globe } from 'lucide-react';
import careerViewXImg from '../assets/careerviewx_preview.png';
import veloxParkImg from '../assets/veloxpark_preview.png';

const PROJECTS = [
  {
    id: 'careerviewx',
    category: 'AI Platform',
    title: 'CareerViewX',
    description:
      'A full-stack AI-powered career guidance platform helping users explore career paths, access mentorship content, and make informed professional decisions.',
    bullets: [
      'Integrated an AI-based agent delivering personalized career recommendations and a curated mentorship video section.',
      'Secured with JWT authentication and RESTful APIs for smooth communication between React, Node.js, and MongoDB.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    demo: 'https://careerviewx.vercel.app/',
    code: null,
    image: careerViewXImg,
    accentColor: '#818cf8',
    accentGlow: 'rgba(129, 140, 248, 0.25)',
  },
  {
    id: 'veloxpark',
    category: 'IoT System',
    title: 'VeloxPark',
    description:
      'An IoT-powered smart parking system using ESP32-CAM and Plate Recognizer API for automated license plate recognition at entry/exit points.',
    bullets: [
      'Firebase Realtime Database for live slot tracking, automated fee calculation, and a cloud-synced admin dashboard.',
      'Eliminated manual vehicle logging through IoT automation, reducing human error and improving efficiency.',
    ],
    stack: ['Node.js', 'Firebase', 'ESP32-CAM', 'JavaScript'],
    demo: 'https://velox-park.vercel.app/',
    code: null,
    image: veloxParkImg,
    accentColor: '#34d399',
    accentGlow: 'rgba(52, 211, 153, 0.25)',
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`project-card ${hovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        '--card-accent': project.accentColor,
        '--card-glow': project.accentGlow,
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Project Screenshot */}
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" />
      </div>

      {/* Project Info */}
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tech Stack */}
        <div className="project-card__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="project-card__actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--demo"
              aria-label={`Live demo of ${project.title}`}
            >
              <Globe size={16} />
              Live Demo
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--code"
              aria-label={`Source code of ${project.title}`}
            >
              <Code2 size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection({ scrollToNext }) {
  return (
    <section id="section-3" className="portfolio-section projects-section">
      {/* Background ambient blobs */}
      <div className="projects-bg-blob projects-bg-blob--left" />
      <div className="projects-bg-blob projects-bg-blob--right" />

      <div className="projects-inner">
        {/* Big Bold Heading (inspired by template) */}
        <div className="projects-heading-wrap">
          <p className="projects-eyebrow">SELECTED WORK</p>
          <h2 className="projects-heading">
            <span className="projects-heading__line">FEATURED</span>
            <span className="projects-heading__line projects-heading__line--outline">PROJECTS</span>
          </h2>
          <p className="projects-sub">
            A showcase of my recent technical projects, featuring AI integrations, real-time data
            systems, and responsive interfaces.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
