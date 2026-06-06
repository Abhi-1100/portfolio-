import careerViewXImg from '../assets/careerviewx_preview.png';
import veloxParkImg from '../assets/veloxpark_preview.png';

const PROJECTS = [
  {
    id: 'careerviewx',
    category: 'Featured',
    title: 'CareerViewX',
    desc: 'AI-powered career transformation platform providing personalized mentorship paths and automated resume optimization.',
    stack: ['React', 'Node.js', 'OpenAI'],
    demoUrl: 'https://careerviewx.vercel.app/',
    codeUrl: '#',
    image: careerViewXImg
  },
  {
    id: 'veloxpark',
    category: 'IoT System',
    title: 'VeloxPark',
    desc: 'IoT-integrated smart parking solution using real-time sensor data to optimize city-wide parking availability.',
    stack: ['IoT Hub', 'Flutter', 'NoSQL'],
    demoUrl: 'https://velox-park.vercel.app/',
    codeUrl: '#',
    image: veloxParkImg
  }
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="window-header">
        <div className="window-dots">
          <span className="window-dot"></span>
          <span className="window-dot"></span>
        </div>
        <div className="window-title">2020-04-08-{project.id}.html</div>
      </div>

      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" />
      </div>

      <div className="project-card__body">
        <div>
          <h3 className="project-card__title">{project.title}</h3>
        </div>

        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__stack">
          {project.stack.map(tech => (
            <span key={tech} className="project-tag">{tech}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <a href={project.demoUrl} className="project-btn project-btn--demo">LIVE DEMO</a>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="section-3" className="portfolio-section projects-section">
      <div className="heading-aligner">
        <div className="section-title-wrap">
          <h2 className="section-title">PROJECTS</h2>
        </div>
      </div>

      <div className="projects-inner">
        <p className="projects-sub" style={{ alignSelf: 'flex-start', maxWidth: '600px', marginBottom: '2rem', marginTop: '-1rem', fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#49473e' }}>
          A curated selection of my recent full-stack applications, AI integrations, and hardware systems.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
