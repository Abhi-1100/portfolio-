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
    title: '"Where code meets the market."',
    date: '2026-05-17',
    image: blogImg1,
    desc: 'A snapshot from my internship at Fincept Corporation — working with live BTC/USDT data on the Fincept Terminal. As a C++ Intern, I contributed to the open-source terminal that powers professional trading and financial research. One month, real contributions, real markets.'
  },
  {
    id: '3',
    title: '"Growth tracked in two ways — LeetCode streaks & a little plant."',
    date: '2026-04-24',
    image: blogImg3,
    desc: 'My hostel desk setup where consistency was built — daily DSA practice on LeetCode, a Google Cloud sticker on the laptop, and a sprouting plant as a daily reminder that small steps compound. 132 problems. 90 active days. Still going.'
  },
  {
    id: '4',
    title: '"Comfort over aesthetics — this desk built it all."',
    date: '2026-06-06',
    image: blogImg4,
    desc: "Late evenings, dim light, React code on screen and Marvel figures keeping watch. My hostel setup was humble but powerful — a reminder that great work doesn't need a perfect environment, just a determined mind."
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
