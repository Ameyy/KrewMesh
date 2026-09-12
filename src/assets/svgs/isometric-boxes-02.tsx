import * as React from "react";

export function IsometricBoxes02({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="box-grad-top-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#888888" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="box-grad-left-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#282828" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#141414" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="box-grad-right-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1e1e" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.98" />
        </linearGradient>
        <linearGradient id="cyan-glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Layer 1: Base Platform Slab */}
      <g opacity="0.6">
        <polygon
          points="250,160 410,230 250,300 90,230"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <polygon
          points="90,230 250,300 250,312 90,242"
          fill="#111"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
        <polygon
          points="250,300 410,230 410,242 250,312"
          fill="#0a0a0a"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      </g>

      {/* Block 1 (Left Base Block) */}
      <g transform="translate(-40, 20)">
        <polygon
          points="180,110 240,140 180,170 120,140"
          fill="url(#box-grad-top-1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
        />
        <polygon
          points="120,140 180,170 180,225 120,195"
          fill="url(#box-grad-left-1)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.2"
        />
        <polygon
          points="180,170 240,140 240,195 180,225"
          fill="url(#box-grad-right-1)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.2"
        />
      </g>

      {/* Block 2 (Right Mid Block) */}
      <g transform="translate(60, 10)">
        <polygon
          points="260,100 330,135 260,170 190,135"
          fill="url(#box-grad-top-1)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.2"
        />
        <polygon
          points="190,135 260,170 260,235 190,200"
          fill="url(#box-grad-left-1)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.2"
        />
        <polygon
          points="260,170 330,135 330,200 260,235"
          fill="url(#box-grad-right-1)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.2"
        />
      </g>

      {/* Block 3 (Center Top Tower - Highest Elevation) */}
      <g transform="translate(10, -35)">
        <polygon
          points="220,50 290,85 220,120 150,85"
          fill="url(#box-grad-top-1)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        <polygon
          points="150,85 220,120 220,200 150,165"
          fill="url(#box-grad-left-1)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
        />
        <polygon
          points="220,120 290,85 290,165 220,200"
          fill="url(#box-grad-right-1)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
        />

        {/* Server rack / layered grooves */}
        <line x1="150" y1="110" x2="220" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="220" y1="145" x2="290" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="150" y1="135" x2="220" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="220" y1="170" x2="290" y2="135" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Floating pulse light on top */}
        <circle cx="220" cy="85" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 8px #6366f1)" />
        
        {/* Glowing edge indicator */}
        <path
          d="M 220,50 L 290,85 L 220,120"
          stroke="url(#cyan-glow-line)"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* Connecting Isometric Vector Lines */}
      <path
        d="M 170,130 L 230,100 L 320,145"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

export default IsometricBoxes02;
