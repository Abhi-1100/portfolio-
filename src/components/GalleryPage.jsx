import React, { useState, useRef, useEffect } from 'react';

// Import all images
import img1 from '../assets/blog/minimal_setup.jpg';
import img2 from '../assets/blog/trading_desk_setup.jpg';
import img3 from '../assets/blog/coding_daily_routine.png';
import img4 from '../assets/blog/leetcode_50_days.png';
import img5 from '../assets/blog/activity_contributions.png';
import img6 from '../assets/blog/cozy_workspace_desk.jpg';
import img7 from '../assets/blog/late_night_sessions.jpeg';
import img8 from '../assets/blog/hostel_room_desk_v1.jpg';
import img10 from '../assets/blog/desk_clean_up.jpg';
import img11 from '../assets/blog/dimly_lit_corner.jpg';
import img13 from '../assets/blog/afternoon_light_workspace.jpg';
import img14 from '../assets/blog/workspace_milestones.jpg';
import img15 from '../assets/blog/coding_sprint.jpg';
import img16 from '../assets/blog/spring_vibe_setup.jpg';
import img17 from '../assets/blog/workspace_references.png';
import img18 from '../assets/blog/quiet_hour_work.jpg';
import img19 from '../assets/blog/weekend_workspace.jpg';
// New image imports
import img20 from '../assets/blog/20250816_125358.jpg.jpeg';
import img21 from '../assets/blog/20251022_163429.jpg.jpeg';
import img22 from '../assets/blog/20251024_175229.jpg.jpeg';
import img23 from '../assets/blog/20251030_231725.jpg.jpeg';
import img24 from '../assets/blog/20260102_150224.jpg.jpeg';
import img25 from '../assets/blog/20260105_080316.jpg.jpeg';
import img26 from '../assets/blog/20260105_132505.jpg.jpeg';
import img27 from '../assets/blog/20260105_133846.jpg.jpeg';
import img28 from '../assets/blog/20260105_173037.jpg.jpeg';
import img29 from '../assets/blog/20260311_144714.jpg.jpeg';
import img30 from '../assets/blog/20260401_145901.jpg.jpeg';
import img31 from '../assets/blog/20260531_065438.jpg.jpeg';
import img32 from '../assets/blog/IMG-20260607-WA0002.jpg.jpeg';
import img33 from '../assets/blog/Snapchat-1387777132.jpg.jpeg';

const GALLERY_IMAGES = [
  { id: 1, src: img1, title: 'Minimal Setup', category: 'workspaces', alt: 'Minimal Workspace Setup', aspect: 8160 / 6120 },
  { id: 2, src: img2, title: 'Trading Desk Setup', category: 'workspaces', alt: 'Trading Desk Setup', aspect: 3000 / 2381 },
  { id: 3, src: img3, title: 'Coding Daily Routine', category: 'moments', alt: 'Coding Daily Routine', aspect: 1086 / 1448 },
  { id: 20, src: img20, title: 'Workspace Vibe (Aug 2025)', category: 'workspaces', alt: 'Workspace Vibe', aspect: 4000 / 3000 },
  { id: 4, src: img4, title: 'LeetCode 50 Days', category: 'achievements', alt: 'LeetCode 50 Days Badge', aspect: 900 / 1602 },
  { id: 21, src: img21, title: 'Cozy Coding Corner', category: 'workspaces', alt: 'Cozy Coding Corner', aspect: 4000 / 3000 },
  { id: 5, src: img5, title: 'Activity Contributions', category: 'achievements', alt: 'Github Contributions Graph', aspect: 1000 / 1000 },
  { id: 22, src: img22, title: 'Late Afternoon Session', category: 'moments', alt: 'Late Afternoon Session', aspect: 4000 / 3000 },
  { id: 6, src: img6, title: 'Cozy Workspace Desk', category: 'workspaces', alt: 'Cozy Workspace Desk', aspect: 1080 / 1920 },
  { id: 23, src: img23, title: 'Late Night Focus', category: 'moments', alt: 'Late Night Focus', aspect: 4000 / 3000 },
  { id: 7, src: img7, title: 'Late Night Sessions', category: 'moments', alt: 'Late Night Coding Sessions', aspect: 900 / 1600 },
  { id: 24, src: img24, title: 'New Year Workspace', category: 'workspaces', alt: 'New Year Workspace', aspect: 4000 / 3000 },
  { id: 8, src: img8, title: 'Hostel Room Desk v1', category: 'workspaces', alt: 'Hostel Room Desk Setup v1', aspect: 4000 / 2252 },
  { id: 25, src: img25, title: 'Morning Light Setup', category: 'workspaces', alt: 'Morning Light Setup', aspect: 4000 / 2252 },
  { id: 10, src: img10, title: 'Desk Clean Up', category: 'workspaces', alt: 'Workspace Desk Clean Up', aspect: 4000 / 3000 },
  { id: 26, src: img26, title: 'Afternoon Creative Session', category: 'moments', alt: 'Afternoon Creative Session', aspect: 4000 / 3000 },
  { id: 11, src: img11, title: 'Dimly Lit Corner', category: 'moments', alt: 'Dimly Lit Workspace Corner', aspect: 4000 / 3000 },
  { id: 27, src: img27, title: 'Clean Desk Concept', category: 'workspaces', alt: 'Clean Desk Concept', aspect: 4000 / 3000 },
  { id: 13, src: img13, title: 'Afternoon Light Workspace', category: 'workspaces', alt: 'Afternoon Light Workspace', aspect: 4000 / 3000 },
  { id: 28, src: img28, title: 'Sunset Session', category: 'moments', alt: 'Sunset Session', aspect: 4000 / 3000 },
  { id: 14, src: img14, title: 'Workspace Milestones', category: 'workspaces', alt: 'Workspace Milestones and Gear', aspect: 4000 / 3000 },
  { id: 29, src: img29, title: 'Spring Desk Vibe', category: 'workspaces', alt: 'Spring Desk Vibe', aspect: 3024 / 2268 },
  { id: 15, src: img15, title: 'Coding Sprint', category: 'moments', alt: 'Active Coding Sprint Session', aspect: 4000 / 3000 },
  { id: 30, src: img30, title: 'Workspace Refresh', category: 'workspaces', alt: 'Workspace Refresh', aspect: 3024 / 2268 },
  { id: 16, src: img16, title: 'Spring Vibe Setup', category: 'workspaces', alt: 'Spring Vibe Desk Setup', aspect: 4000 / 3000 },
  { id: 31, src: img31, title: 'Early Morning Focus', category: 'moments', alt: 'Early Morning Focus', aspect: 4000 / 3000 },
  { id: 17, src: img17, title: 'Workspace References', category: 'workspaces', alt: 'Workspace Layout and References', aspect: 1087 / 1446 },
  { id: 32, src: img32, title: 'Vertical Coding Setup', category: 'workspaces', alt: 'Vertical Coding Setup', aspect: 1242 / 2208 },
  { id: 18, src: img18, title: 'Quiet Hour Work', category: 'moments', alt: 'Quiet Hour Workspace', aspect: 1080 / 1920 },
  { id: 33, src: img33, title: 'Snapshot Moment', category: 'moments', alt: 'Snapshot Moment', aspect: 1080 / 1920 },
  { id: 19, src: img19, title: 'Weekend Workspace', category: 'workspaces', alt: 'Weekend Workspace Setup', aspect: 1080 / 1920 },
];

function GalleryItem({ img }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="masonry-item">
      <div
        className={`masonry-img-wrap ${!isLoaded ? 'gallery-skeleton' : ''}`}
        style={{
          aspectRatio: !isLoaded ? img.aspect : 'auto',
          position: 'relative',
        }}
      >
        <img
          ref={imgRef}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            width: '100%',
            display: 'block',
          }}
        />
      </div>
      <div className="masonry-caption">
        <span className="masonry-caption-title">{img.title}</span>
        <button className="masonry-more-btn" aria-label="More options">•••</button>
      </div>
    </div>
  );
}

function GalleryPage({ onBack }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = activeTab === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeTab);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <div className="gallery-top-bar">
          <button className="gallery-back-btn" onClick={onBack} aria-label="Back to Portfolio">
            &larr;
          </button>
          <div className="gallery-title-container">
            <h1 className="gallery-title">My Work & Activity</h1>
            <p className="gallery-subtitle">A collection of moments, coding activity, and setups.</p>
          </div>
        </div>

        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`gallery-tab ${activeTab === 'workspaces' ? 'active' : ''}`}
            onClick={() => setActiveTab('workspaces')}
          >
            Workspaces
          </button>
          <button
            className={`gallery-tab ${activeTab === 'moments' ? 'active' : ''}`}
            onClick={() => setActiveTab('moments')}
          >
            Moments
          </button>
          <button
            className={`gallery-tab ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </div>
      </div>

      <div className="masonry-grid">
        {filteredImages.map((img) => (
          <GalleryItem key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
