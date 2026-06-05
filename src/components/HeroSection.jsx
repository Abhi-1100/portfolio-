import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

// Inline SVG doodles to replicate the hand-drawn illustration style from the reference
function DoodleCanvas() {
  return (
    <svg
      className="hero-doodle-svg"
      viewBox="0 0 1000 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── LEFT SIDE DOODLES ─────────────────────────────── */}

      {/* Fan / rotating blades */}
      <g transform="translate(62, 72)">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <line key={i} x1="0" y1="0"
            x2={Math.cos((a * Math.PI) / 180) * 34}
            y2={Math.sin((a * Math.PI) / 180) * 34}
            stroke="#1a1a1a" strokeWidth="1.5" />
        ))}
        {/* Stand */}
        <line x1="0" y1="38" x2="0" y2="80" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="-20" y1="80" x2="20" y2="80" stroke="#1a1a1a" strokeWidth="2" />
      </g>

      {/* Retro camera / projector */}
      <g transform="translate(30, 180)">
        <rect x="0" y="0" width="90" height="60" rx="6" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        <rect x="8" y="8" width="24" height="20" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <rect x="40" y="8" width="16" height="12" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="65" cy="30" r="12" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="65" cy="30" r="5" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <line x1="0" y1="60" x2="0" y2="80" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="90" y1="60" x2="90" y2="80" stroke="#1a1a1a" strokeWidth="2" />
        {/* Film reel bumps */}
        {[10, 25, 40, 55, 70, 85].map((x, i) => (
          <rect key={i} x={x} y={-6} width="6" height="8" rx="1" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
        ))}
      </g>

      {/* Winding road / tape line */}
      <path d="M 90 255 Q 160 230 200 265 Q 240 300 310 280"
        fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Small scattered cards / frames on table */}
      <g transform="translate(155, 295)">
        {/* Card 1 - fish sketch */}
        <rect x="0" y="0" width="72" height="52" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 12 26 Q 24 16 36 26 Q 24 36 12 26 Z" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
        <path d="M 36 26 L 48 18 L 46 26 L 48 34 Z" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
        <circle cx="18" cy="24" r="2" fill="#1a1a1a" />
      </g>

      <g transform="translate(240, 280)">
        {/* Card 2 - mountain sketch */}
        <rect x="0" y="0" width="68" height="50" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <polyline points="10,38 28,14 46,38" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
        <polyline points="22,38 34,22 46,38" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
      </g>

      <g transform="translate(318, 290)">
        {/* Card 3 - leaf / plant */}
        <rect x="0" y="0" width="58" height="48" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 29 40 Q 10 28 18 12 Q 29 20 29 40 Z" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
        <path d="M 29 40 Q 48 28 40 12 Q 29 20 29 40 Z" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
      </g>

      {/* Coffee cup */}
      <g transform="translate(20, 340)">
        <path d="M 0 0 L 5 36 L 35 36 L 40 0 Z" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 40 8 Q 52 8 52 18 Q 52 28 40 28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="40" y2="0" stroke="#1a1a1a" strokeWidth="1.5" />
        <text x="8" y="22" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">COF</text>
      </g>

      {/* ── RIGHT SIDE DOODLES ─────────────────────────────── */}

      {/* Rainbow arc */}
      <g transform="translate(830, 40)">
        {[0, 14, 28, 42].map((r, i) => (
          <path key={i}
            d={`M ${-r} 120 A ${120 + r} ${120 + r} 0 0 1 ${240 + r} 120`}
            fill="none" stroke="#1a1a1a" strokeWidth="2" />
        ))}
      </g>

      {/* Bubbles near rainbow */}
      <circle cx="920" cy="72" r="7" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="938" cy="55" r="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="950" cy="70" r="5.5" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Character outline (dog/fox sitting at desk) */}
      <g transform="translate(750, 195)">
        {/* Body */}
        <ellipse cx="80" cy="130" rx="55" ry="60" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        {/* Head */}
        <circle cx="80" cy="62" r="46" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        {/* Ears */}
        <path d="M 46 32 Q 34 8 52 18" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M 114 32 Q 126 8 108 18" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        {/* Eyes */}
        <path d="M 60 60 Q 66 55 72 60" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M 88 60 Q 94 55 100 60" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        {/* Nose */}
        <ellipse cx="80" cy="75" rx="7" ry="4" fill="#1a1a1a" />
        {/* Whiskers */}
        <line x1="40" y1="72" x2="68" y2="76" stroke="#1a1a1a" strokeWidth="1.2" />
        <line x1="40" y1="80" x2="68" y2="80" stroke="#1a1a1a" strokeWidth="1.2" />
        <line x1="92" y1="76" x2="120" y2="72" stroke="#1a1a1a" strokeWidth="1.2" />
        <line x1="92" y1="80" x2="120" y2="80" stroke="#1a1a1a" strokeWidth="1.2" />
        {/* Arm holding pen */}
        <path d="M 36 110 Q 20 130 30 155" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="30" y1="155" x2="22" y2="175" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
        {/* Desk */}
        <rect x="-30" y="175" width="220" height="8" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Papers on desk */}
        <rect x="-10" y="148" width="50" height="32" rx="3" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" />
        <text x="0" y="160" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">UNIQ</text>
        <text x="0" y="170" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">STUDIO</text>
        {/* Pencil/pen holder */}
        <rect x="140" y="140" width="20" height="38" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <line x1="145" y1="140" x2="143" y2="126" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="150" y1="140" x2="150" y2="124" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="155" y1="140" x2="157" y2="126" stroke="#1a1a1a" strokeWidth="2" />
        {/* Cactus */}
        <rect x="110" y="138" width="18" height="40" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 119 152 Q 104 152 104 142 Q 104 138 110 138" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 119 160 Q 134 160 134 150 Q 134 146 128 146" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* Eye on paper */}
        <ellipse cx="490" cy="285" rx="20" ry="14" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="490" cy="285" r="6" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="492" cy="283" r="2" fill="#1a1a1a" />
      </g>

      {/* Window frame top-right */}
      <g transform="translate(890, 115)">
        <rect x="0" y="0" width="80" height="90" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <line x1="40" y1="0" x2="40" y2="90" stroke="#1a1a1a" strokeWidth="1.2" />
        <line x1="0" y1="45" x2="80" y2="45" stroke="#1a1a1a" strokeWidth="1.2" />
        {/* Sun in window */}
        <circle cx="20" cy="22" r="8" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
        {/* Wavy lines in bottom half */}
        {[0,1,2].map(i => (
          <path key={i} d={`M 6 ${56 + i * 9} Q 20 ${52 + i * 9} 34 ${56 + i * 9} Q 48 ${60 + i * 9} 62 ${56 + i * 9} Q 74 ${52 + i * 9} 78 ${56 + i * 9}`}
            fill="none" stroke="#1a1a1a" strokeWidth="1" />
        ))}
      </g>

      {/* Eye / sticker floating left-center */}
      <g transform="translate(395, 270)">
        <ellipse cx="30" cy="18" rx="28" ry="18" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="30" cy="18" r="8" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="32" cy="16" r="3" fill="#1a1a1a" />
        {/* Lashes */}
        {[-20, -10, 0, 10, 20].map((x, i) => (
          <line key={i} x1={30 + x} y1={0} x2={30 + x * 0.8} y2={-6} stroke="#1a1a1a" strokeWidth="1.2" />
        ))}
      </g>

      {/* Small decorative dots scattered */}
      {[
        [480, 255], [505, 240], [500, 270],
        [128, 75], [138, 88], [120, 90],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#1a1a1a" opacity="0.5" />
      ))}
    </svg>
  );
}

function HeroSection({ onScrollDown }) {
  const heroRef = useRef(null);

  return (
    <section id="section-1" className="hero-section" ref={heroRef}>

      {/* Background image is handled by CSS on .hero-section */}

      {/* Scroll indicator */}
      <button
        className="hero-scroll-btn"
        onClick={onScrollDown}
        aria-label="Scroll to next section"
      >
        <span>Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}

export default HeroSection;
