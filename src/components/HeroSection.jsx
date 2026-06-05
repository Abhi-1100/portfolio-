import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function HeroSection({ onScrollDown }) {
  const heroRef = useRef(null);

  return (
    <section id="section-1" className="hero-section" ref={heroRef}>

      {/* Geometric lines matching the loading screen */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.8 }}>
        <g stroke="rgba(0, 0, 0, 0.08)" strokeWidth="1" fill="none">
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


    </section>
  );
}

export default HeroSection;
