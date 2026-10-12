import React from "react";

export interface LogoDefinition {
  name: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
  color?: string;
}

// 01: Nexus Labs (Geometric interconnected nodes)
const NexusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 3L27.2583 9.5V22.5L16 29L4.74167 22.5V9.5L16 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="16" r="4" fill="currentColor" />
    <path d="M16 3V12M27.2583 22.5L19.4641 18M4.74167 22.5L12.5359 18" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

// 02: Vortex AI (Dual curved cyclone blades)
const VortexIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 4C9.37258 4 4 9.37258 4 16C4 20.4183 6.3817 24.2807 9.9 26.35"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M16 28C22.6274 28 28 22.6274 28 16C28 11.5817 25.6183 7.7193 22.1 5.65"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="3" fill="currentColor" />
  </svg>
);

// 03: Prism Studio (Geometric optical refraction triangle)
const PrismIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 5L27 24H5L16 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M16 5V24M5 24L20 15" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

// 04: Aura Health (Concentric organic arches)
const AuraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
  </svg>
);

// 05: Krypton (Isometric cube stack)
const KryptonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 4L26 9.8V21.4L16 27.2L6 21.4V9.8L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 4V15.5M26 9.8L16 15.5M6 9.8L16 15.5M16 15.5V27.2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

// 06: Pulse Robotics (High-frequency signal wave)
const PulseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="4" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2" />
    <path
      d="M7 16H11L13.5 10L18.5 22L21 16H25"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 07: Hyperion Cloud (Modern minimalist loop)
const HyperionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 20C7.79086 20 6 18.2091 6 16C6 13.9099 7.60444 12.1947 9.65487 12.0205C10.4286 8.58882 13.5042 6 17.2 6C21.4526 6 24.9 9.44741 24.9 13.7C25.5492 13.9189 26 14.5348 26 15.25C26 16.2165 25.2165 17 24.25 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M12 24L20 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// 08: Solace Space (Modern architectural emblem)
const SolaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" />
    <path d="M16 5V27M5 16H27" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="4" fill="currentColor" />
  </svg>
);

export const LOGOS: LogoDefinition[] = [
  { name: "Nexus Labs", Icon: NexusIcon, color: "#101010" },
  { name: "Vortex AI", Icon: VortexIcon, color: "#D5360C" },
  { name: "Prism Studio", Icon: PrismIcon, color: "#101010" },
  { name: "Aura Health", Icon: AuraIcon, color: "#101010" },
  { name: "Krypton SaaS", Icon: KryptonIcon, color: "#D5360C" },
  { name: "Pulse Robotics", Icon: PulseIcon, color: "#101010" },
  { name: "Hyperion Cloud", Icon: HyperionIcon, color: "#101010" },
  { name: "Solace Living", Icon: SolaceIcon, color: "#D5360C" },
];
