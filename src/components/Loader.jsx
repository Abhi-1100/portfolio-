import React, { useEffect, useState } from 'react';

function Loader({ onComplete }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // The animation takes 3 seconds. Give it a tiny bit of buffer before fading out.
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500); // 500ms fade out transition
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`intro-loader ${!isAnimating ? 'fade-out' : ''}`}>
      {/* Background Geometric Lines */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}>
        <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" fill="none">
          {/* Crosshair matching the central box */}
          <line x1="0" y1="45%" x2="100%" y2="45%" className="loader-bg-path" pathLength="100" />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="loader-bg-path" pathLength="100" />
          
          {/* Box Extensions */}
          <line x1="calc(50% - 160px)" y1="0" x2="calc(50% - 160px)" y2="100%" className="loader-bg-path" pathLength="100" />
          <line x1="calc(50% + 160px)" y1="0" x2="calc(50% + 160px)" y2="100%" className="loader-bg-path" pathLength="100" />
          <line x1="0" y1="calc(45% - 210px)" x2="100%" y2="calc(45% - 210px)" className="loader-bg-path" pathLength="100" />
          <line x1="0" y1="calc(45% + 210px)" x2="100%" y2="calc(45% + 210px)" className="loader-bg-path" pathLength="100" />

          {/* Large Concentric Circles */}
          <circle cx="50%" cy="45%" r="350" className="loader-bg-path" pathLength="100" />
          <circle cx="50%" cy="45%" r="550" className="loader-bg-path" pathLength="100" />
          <circle cx="50%" cy="45%" r="800" className="loader-bg-path" pathLength="100" />

          {/* Intersection Circles */}
          <circle cx="calc(50% - 160px)" cy="calc(45% - 210px)" r="320" className="loader-bg-path" pathLength="100" />
          <circle cx="calc(50% + 160px)" cy="calc(45% + 210px)" r="320" className="loader-bg-path" pathLength="100" />

          {/* Golden Ratio Nested Squares - Top Left */}
          <rect x="calc(50% - 320px)" y="calc(45% - 210px)" width="160" height="160" className="loader-bg-path" pathLength="100" />
          <rect x="calc(50% - 240px)" y="calc(45% - 210px)" width="80" height="80" className="loader-bg-path" pathLength="100" />
          <rect x="calc(50% - 200px)" y="calc(45% - 210px)" width="40" height="40" className="loader-bg-path" pathLength="100" />
          <rect x="calc(50% - 180px)" y="calc(45% - 210px)" width="20" height="20" className="loader-bg-path" pathLength="100" />

          {/* Golden Ratio Nested Squares - Bottom Right */}
          <rect x="calc(50% + 160px)" y="calc(45% + 50px)" width="160" height="160" className="loader-bg-path" pathLength="100" />
          <rect x="calc(50% + 160px)" y="calc(45% + 130px)" width="80" height="80" className="loader-bg-path" pathLength="100" />
          <rect x="calc(50% + 160px)" y="calc(45% + 170px)" width="40" height="40" className="loader-bg-path" pathLength="100" />
          <rect x="calc(50% + 160px)" y="calc(45% + 190px)" width="20" height="20" className="loader-bg-path" pathLength="100" />
        </g>
      </svg>

      <div className="loader-container">
        
        {/* Animated Rectangle */}
        <svg className="loader-svg" width="320" height="420" viewBox="0 0 320 420">
          <rect 
            x="2" 
            y="2" 
            width="316" 
            height="416" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="1" 
            className="loader-rect" 
          />
        </svg>

        {/* Text inside the box */}
        <div className="loader-text-wrap">
          <div className="sidebar-brand" style={{ color: '#ffffff', opacity: 0.9 }}>
            <span>The</span>
            <span>Abhi's</span>
            <span>Workstation</span>
          </div>
          <div className="sidebar-subtitle" style={{ color: '#ffffff', opacity: 0.5, marginTop: '1.5rem', borderColor: 'rgba(255,255,255,0.2)' }}>
            FULL STACK & AI DEVELOPMENT
          </div>
        </div>

      </div>
    </div>
  );
}

export default Loader;
