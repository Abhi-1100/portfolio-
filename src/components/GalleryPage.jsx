import React, { useState } from 'react';

// Import all images
import img1 from '../assets/blog/minimal_setup.jpg';
import img2 from '../assets/blog/trading_desk_setup.jpg';
import img3 from '../assets/blog/coding_daily_routine.png';
import img4 from '../assets/blog/leetcode_50_days.png';
import img5 from '../assets/blog/activity_contributions.png';
import img6 from '../assets/blog/cozy_workspace_desk.jpg';
import img7 from '../assets/blog/late_night_sessions.jpeg';
import img8 from '../assets/blog/hostel_room_desk_v1.jpg';
import img9 from '../assets/blog/night_shift_focus.jpg';
import img10 from '../assets/blog/desk_clean_up.jpg';
import img11 from '../assets/blog/dimly_lit_corner.jpg';
import img12 from '../assets/blog/late_night_code_v2.jpg';
import img13 from '../assets/blog/afternoon_light_workspace.jpg';
import img14 from '../assets/blog/workspace_milestones.jpg';
import img15 from '../assets/blog/coding_sprint.jpg';
import img16 from '../assets/blog/spring_vibe_setup.jpg';
import img17 from '../assets/blog/workspace_references.png';
import img18 from '../assets/blog/quiet_hour_work.jpg';
import img19 from '../assets/blog/weekend_workspace.jpg';

const GALLERY_IMAGES = [
  { id: 1, src: img1, title: 'Minimal Setup', category: 'workspaces', alt: 'Minimal Workspace Setup' },
  { id: 2, src: img2, title: 'Trading Desk Setup', category: 'workspaces', alt: 'Trading Desk Setup' },
  { id: 3, src: img3, title: 'Coding Daily Routine', category: 'moments', alt: 'Coding Daily Routine' },
  { id: 4, src: img4, title: 'LeetCode 50 Days', category: 'achievements', alt: 'LeetCode 50 Days Badge' },
  { id: 5, src: img5, title: 'Activity Contributions', category: 'achievements', alt: 'Github Contributions Graph' },
  { id: 6, src: img6, title: 'Cozy Workspace Desk', category: 'workspaces', alt: 'Cozy Workspace Desk' },
  { id: 7, src: img7, title: 'Late Night Sessions', category: 'moments', alt: 'Late Night Coding Sessions' },
  { id: 8, src: img8, title: 'Hostel Room Desk v1', category: 'workspaces', alt: 'Hostel Room Desk Setup v1' },
  { id: 9, src: img9, title: 'Night Shift Focus', category: 'moments', alt: 'Night Shift Coding Focus' },
  { id: 10, src: img10, title: 'Desk Clean Up', category: 'workspaces', alt: 'Workspace Desk Clean Up' },
  { id: 11, src: img11, title: 'Dimly Lit Corner', category: 'moments', alt: 'Dimly Lit Workspace Corner' },
  { id: 12, src: img12, title: 'Late Night Code v2', category: 'moments', alt: 'Late Night Coding v2' },
  { id: 13, src: img13, title: 'Afternoon Light Workspace', category: 'workspaces', alt: 'Afternoon Light Workspace' },
  { id: 14, src: img14, title: 'Workspace Milestones', category: 'workspaces', alt: 'Workspace Milestones and Gear' },
  { id: 15, src: img15, title: 'Coding Sprint', category: 'moments', alt: 'Active Coding Sprint Session' },
  { id: 16, src: img16, title: 'Spring Vibe Setup', category: 'workspaces', alt: 'Spring Vibe Desk Setup' },
  { id: 17, src: img17, title: 'Workspace References', category: 'workspaces', alt: 'Workspace Layout and References' },
  { id: 18, src: img18, title: 'Quiet Hour Work', category: 'moments', alt: 'Quiet Hour Workspace' },
  { id: 19, src: img19, title: 'Weekend Workspace', category: 'workspaces', alt: 'Weekend Workspace Setup' },
];

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
          <div key={img.id} className="masonry-item">
            <div className="masonry-img-wrap">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
            <div className="masonry-caption">
              <span className="masonry-caption-title">{img.title}</span>
              <button className="masonry-more-btn" aria-label="More options">•••</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
