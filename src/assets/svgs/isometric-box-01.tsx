import * as React from "react";

export function IsometricBox01({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="iso-grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#888888" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="iso-grad-left" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#111111" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="iso-grad-right" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#222222" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#080808" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="glow-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ff4d4d" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff8080" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow-box" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Floating ambient glow */}
      <ellipse cx="200" cy="290" rx="140" ry="30" fill="rgba(255,255,255,0.03)" filter="blur(15px)" />
      
      {/* Outer subtle wireframe ring */}
      <polygon
        points="200,40 330,115 330,235 200,310 70,235 70,115"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Isometric Cube Faces */}
      {/* Top Face */}
      <polygon
        points="200,70 310,133 200,196 90,133"
        fill="url(#iso-grad-top)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />

      {/* Left Face */}
      <polygon
        points="90,133 200,196 200,300 90,237"
        fill="url(#iso-grad-left)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.5"
      />

      {/* Right Face */}
      <polygon
        points="200,196 310,133 310,237 200,300"
        fill="url(#iso-grad-right)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.5"
      />

      {/* Internal Grid Lines on Top Face */}
      <line x1="145" y1="102" x2="255" y2="165" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <line x1="255" y1="102" x2="145" y2="165" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      
      {/* Center node indicator on Top Face */}
      <circle cx="200" cy="133" r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #fff)" />

      {/* Circuit lines on Left Face */}
      <path
        d="M 125,170 L 165,193 L 165,245"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="125" cy="170" r="2.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="165" cy="245" r="2.5" fill="rgba(255,255,255,0.6)" />

      {/* Neon glowing line accent */}
      <path
        d="M 200,196 L 310,133 L 310,170"
        stroke="url(#glow-line-1)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow-box)"
      />

      {/* Tech corner tick marks */}
      <line x1="85" y1="125" x2="90" y2="128" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <line x1="315" y1="125" x2="310" y2="128" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <line x1="200" y1="62" x2="200" y2="68" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    </svg>
  );
}

export default IsometricBox01;
