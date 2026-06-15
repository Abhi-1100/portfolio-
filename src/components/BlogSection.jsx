import React from 'react';
import blogImg1 from '../assets/blog/trading_desk_setup.jpg';
import blogImg2 from '../assets/blog/late_night_sessions.jpeg';
import blogImg3 from '../assets/blog/coding_daily_routine.png';
import blogImg4 from '../assets/blog/cozy_workspace_desk.jpg';
import cornerImg from '../assets/background-assets/backimg9-removebg-preview.png';
import leftTearImg from '../assets/background-assets/backimg10-removebg-preview.png';

const BLOG_POSTS = [
  {
    id: '1',
    title: '"Late nights, quiet focus — where ideas come to life."',
    date: '2026-04-23',
    image: blogImg2,
    desc: 'A glimpse into my after-hours work routine — laptop glowing in a dimly lit, cozy corner with a warm overhead light and lush green vines framing the window. This is where deep focus happens; away from distractions, grounded in the comfort of home, driven by passion for the craft.'
  },
  {
    id: '2',
    title: '"Building the tools that power real markets."',
    date: '2026-05-17',
    image: blogImg1,
    desc: 'During my internship at Fincept Corporation, this was my daily workspace — analyzing live crypto market data on the Fincept Terminal while contributing to its core development. As a C++ Intern, I worked on open-source contributions to the Fincept Terminal, a professional-grade financial research platform supporting real-time trading, algo strategies, and quantlib integration. A small desk, a focused mind, and real-world impact.'
  },
  {
    id: '3',
    title: '"One day at a time, one problem at a time."',
    date: '2026-04-24',
    image: blogImg3,
    desc: 'A morning study session from my hostel room — solving Data Structures & Algorithms on LeetCode with 132+ problems solved and a 50 Days Badge earned. The warm sunlight, a little plant growing in a glass bottle, and a consistent green heatmap tell the same story — steady growth, every single day. Just like the plant, progress is quiet but real.'
  },
  {
    id: '4',
    title: '"Where most of the magic happened."',
    date: '2026-06-06',
    image: blogImg4,
    desc: "My hostel room desk — the birthplace of most of my projects. VS Code open, terminal running, React components being built with Claude's assistance in the side panel. Surrounded by a cozy plushie, Iron Man, Captain America, and a little plant — this chaotic-yet-personal setup is where focus lived. Not the fanciest workspace, but every line of code written here was real."
  },
];

function BlogCard({ post, index }) {
  return (
    <article className={`project-card blog-card blog-card-${index}`}>
      <div className="window-header">
        <div className="window-dots">
          <span className="window-dot"></span>
          <span className="window-dot"></span>
          <span className="window-dot"></span>
        </div>
        <div className="window-title">{post.date}-blog.pdf</div>
      </div>
      <div className="project-card__image-wrap">
        <img
          src={post.image}
          alt={post.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" />
      </div>
      <div className="project-card__body">
        <div>
          <h3 className="project-card__title">{post.title}</h3>
        </div>
        <p className="project-card__desc">
          {post.desc}
        </p>

      </div>
    </article>
  );
}

function BlogSection({ onNavigate }) {
  return (
    <section id="section-blog" className="portfolio-section blog-section">
      <img src={cornerImg} alt="" className="blog-corner-img" />
      <img src={leftTearImg} alt="" className="blog-left-tear-img" />
      <div className="blog-inner">
        <div className="blog-header-container">
          <h2 className="section-title">From the blog</h2>
          <a
            href="#"
            className="blog-view-all"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate();
              }
            }}
          >
            View all blog posts
          </a>
        </div>

        <div className="blog-stack">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
