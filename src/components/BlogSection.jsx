import React from 'react';
import blogImg1 from '../assets/20260517_113918.jpg.jpeg';
import blogImg2 from '../assets/WhatsApp Image 2026-04-23 at 2.47.28 PM.jpeg';
import blogImg3 from '../assets/file_00000000ad3c7207882d3155a4e326ce.png';
import blogImg4 from '../assets/Snapchat-706739872.jpg.jpeg';
import cornerImg from '../assets/background-assets/backimg9-removebg-preview.png';

const BLOG_POSTS = [
  { id: '1', title: 'Late Night Work', date: '2026-04-23', image: blogImg2 },
  { id: '2', title: 'Trading Setup', date: '2026-05-17', image: blogImg1 },
  { id: '3', title: 'One Day At A Time', date: '2026-04-24', image: blogImg3 },
  { id: '4', title: 'Cozy Workspace', date: '2026-06-06', image: blogImg4 },
];

function BlogCard({ post, index }) {
  return (
    <article className={`project-card blog-card blog-card-${index}`}>
      <div className="window-header">
        <div className="window-dots">
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
          Officia sit numquam fugiat sint molestiae id. Est modi est at debitis
          dolorem. Ut voluptate quod rem dolores sint molestiae maiores.
        </p>
        <div className="project-card__actions">
          <a href="#" className="project-btn blog-btn">View project</a>
        </div>
      </div>
    </article>
  );
}

function BlogSection() {
  return (
    <section id="section-blog" className="portfolio-section blog-section">
      <img src={cornerImg} alt="" className="blog-corner-img" />
      <div className="blog-inner">
        <div className="blog-header-container">
          <h2 className="section-title">From the blog</h2>
          <a href="#" className="blog-view-all">View all blog posts</a>
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
