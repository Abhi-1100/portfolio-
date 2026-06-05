import React, { useState, useEffect } from 'react';

function ActivitySection() {
  const [stats, setStats] = useState({
    solvedProblem: 157,
    easySolved: 69,
    mediumSolved: 72,
    hardSolved: 16,
    loading: true
  });

  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/KniZV1f5JT/solved')
      .then(res => res.json())
      .then(data => {
        setStats({
          solvedProblem: data.solvedProblem || 157,
          easySolved: data.easySolved || 69,
          mediumSolved: data.mediumSolved || 72,
          hardSolved: data.hardSolved || 16,
          loading: false
        });
      })
      .catch(err => {
        console.error('Failed to fetch LeetCode stats:', err);
        setStats(prev => ({ ...prev, loading: false }));
      });
  }, []);

  const total = 157; // baseline total used for progress percentages

  return (
    <section id="section-activity" className="portfolio-section stitch-projects-section">
      <div className="stitch-projects-inner activity-inner">
        {/* Page Title */}
        <section className="stitch-title-section flex-between">
          <div className="stitch-title-wrap">
            <h2 className="stitch-title">CODING ACTIVITY</h2>
          </div>
          
          <div className="activity-links">
            <a href="https://github.com/Abhi-1100" target="_blank" rel="noopener noreferrer" className="stitch-btn stitch-btn-code">
              <span className="material-symbols-outlined">code</span>
              GITHUB
            </a>
            <a href="https://leetcode.com/u/KniZV1f5JT/" target="_blank" rel="noopener noreferrer" className="stitch-btn stitch-btn-demo">
              <span className="material-symbols-outlined">terminal</span>
              LEETCODE
            </a>
          </div>
        </section>

        {/* Activity Grid */}
        <div className="activity-grid">
          
          {/* Consistency (GitHub) */}
          <article className="stitch-card activity-card-github">
            <div className="activity-card-header">
              <span className="activity-eyebrow">2025 CONTRIBUTIONS</span>
              <h3 className="stitch-card-title">Consistency</h3>
              <a href="https://github.com/Abhi-1100" target="_blank" rel="noopener noreferrer" className="activity-icon-btn">
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
            <div className="github-chart-container">
              <img 
                src="https://ghchart.rshah.org/104af0/Abhi-1100" 
                alt="Abhi-1100's Github chart" 
                className="github-chart-img"
              />
            </div>
          </article>

          {/* Problems Solved (LeetCode) */}
          <article className="stitch-card activity-card-stats text-center">
            <div className="activity-card-header justify-between">
              <span className="activity-eyebrow">PROBLEMS SOLVED</span>
              <span className="material-symbols-outlined">code_blocks</span>
            </div>
            <div className="leetcode-big-number">
              {stats.solvedProblem}
            </div>
            <div className="leetcode-badge">
              TOP 10%
            </div>
          </article>

          {/* Focus Areas (LeetCode Breakdown) */}
          <article className="stitch-card activity-card-focus">
            <div className="activity-card-header justify-between mb-4">
              <h3 className="stitch-card-title">Focus Areas</h3>
            </div>
            
            <div className="progress-list">
              <div className="progress-item">
                <span className="progress-label">EASY</span>
                <div className="progress-bar-container">
                  <div className="progress-bar progress-easy" style={{ width: `${Math.max(5, (stats.easySolved / total) * 100)}%` }}>{stats.easySolved}</div>
                </div>
              </div>

              <div className="progress-item">
                <span className="progress-label">MEDIUM</span>
                <div className="progress-bar-container">
                  <div className="progress-bar progress-medium" style={{ width: `${Math.max(5, (stats.mediumSolved / total) * 100)}%` }}>{stats.mediumSolved}</div>
                </div>
              </div>

              <div className="progress-item">
                <span className="progress-label">HARD</span>
                <div className="progress-bar-container">
                  <div className="progress-bar progress-hard" style={{ width: `${Math.max(5, (stats.hardSolved / total) * 100)}%` }}>{stats.hardSolved}</div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default ActivitySection;
