import React, { useState } from 'react';
import careerViewXImg from '../assets/careerviewx_preview.png';
import veloxParkImg from '../assets/veloxpark_preview.png';

const PROJECTS = [
  {
    id: 'careerviewx',
    category: 'Featured',
    title: 'CareerViewX',
    description: 'AI-powered career transformation platform providing personalized mentorship paths and automated resume optimization.',
    stack: ['React', 'Node.js', 'OpenAI'],
    demo: 'https://careerviewx.vercel.app/',
    code: null,
    image: careerViewXImg,
    tagClass: 'tag-careerviewx'
  },
  {
    id: 'veloxpark',
    category: '',
    title: 'VeloxPark',
    description: 'IoT-integrated smart parking solution using real-time sensor data to optimize city-wide parking availability.',
    stack: ['IoT Hub', 'Flutter', 'NoSQL'],
    demo: 'https://velox-park.vercel.app/',
    code: null,
    image: veloxParkImg,
    tagClass: 'tag-veloxpark'
  }
];

function ProjectsSection() {
  return (
    <section id="section-3" className="portfolio-section stitch-projects-section">
      <div className="stitch-projects-inner">
        {/* Page Title */}
        <section className="stitch-title-section">
          <div className="stitch-title-wrap">
            <h2 className="stitch-title">PROJECTS</h2>
          </div>
        </section>

        {/* Project Grid */}
        <div className="stitch-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="stitch-card">
              <div className="stitch-card-img-wrap">
                <img src={project.image} alt={`${project.title} Image`} className="stitch-card-img" />
                {project.category && (
                  <div className="stitch-featured-badge">
                    <span>{project.category}</span>
                  </div>
                )}
              </div>
              <div className="stitch-card-body">
                <h3 className="stitch-card-title">{project.title}</h3>
                <p className="stitch-card-desc">{project.description}</p>
                <div className="stitch-tags">
                  {project.stack.map(tech => (
                    <span key={tech} className={`stitch-tag ${project.tagClass}`}>{tech}</span>
                  ))}
                </div>
                <div className="stitch-card-actions">
                  <button className="stitch-btn stitch-btn-demo">Demo</button>
                  <button className="stitch-btn stitch-btn-code">Code</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Chips Section */}
        <section className="stitch-stats">
          <h4 className="stitch-stats-title">Platform Impact</h4>
          <div className="stitch-stats-grid">
            <div className="stitch-stat stitch-stat-1">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>inventory_2</span>
              <span className="stitch-stat-text">12K+ SKUs</span>
            </div>
            <div className="stitch-stat stitch-stat-2">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>verified</span>
              <span className="stitch-stat-text">99.9% Accuracy</span>
            </div>
            <div className="stitch-stat stitch-stat-3">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bolt</span>
              <span className="stitch-stat-text">40% Faster</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProjectsSection;
