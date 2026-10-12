import React from "react";

export interface LogoDefinition {
  id: string;
  name: string;
  imageSrc: string;
  imageSrc2x?: string;
  heightClass?: string;
  color?: string;
  Icon?: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    "aria-hidden"?: boolean | "true" | "false";
  }>;
}

// Custom brand vector SVG definitions
const MuscletechIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor">
      <polygon points="12,42 28,6 38,6 23,42" />
      <polygon points="28,6 38,28 44,28 54,6 44,6 39,18 38,6" />
      <polygon points="44,28 54,6 64,6 52,42 43,42" />
    </g>
    <path
      d="M12,42 L28,6 M16,28 L34,28 M20,16 L32,36 M24,10 L30,42"
      stroke="var(--bg-contrast, #E6D5BD)"
      strokeWidth="1.2"
      opacity="0.75"
    />
  </svg>
);

const VegaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      x="50"
      y="24"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="26"
      letterSpacing="4"
      fill="currentColor"
    >
      VEGA
    </text>
  </svg>
);

const MicroscanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="18" cy="18" r="14" fill="currentColor" />
    <path
      d="M10 26 C12 18, 18 12, 26 10 M13 29 C16 20, 22 15, 29 14 M7 21 C10 14, 15 10, 22 8"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <text
      x="40"
      y="22"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="16"
      fill="currentColor"
    >
      microscan
    </text>
  </svg>
);

const SolaraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="2.2" fill="none" />
    <line x1="4" y1="15" x2="26" y2="15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <text
      x="36"
      y="21"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="700"
      fontSize="16"
      letterSpacing="4"
      fill="currentColor"
    >
      SOLARA
    </text>
  </svg>
);

const MaccareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="16" cy="10" r="3.5" fill="currentColor" />
    <path
      d="M9 19 C13 15, 19 15, 23 19 M7 24 C13 18, 19 18, 25 24"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    <text
      x="34"
      y="22"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="17"
      fill="currentColor"
    >
      maccare
    </text>
  </svg>
);

const SalesmonkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="14" cy="11" r="5" stroke="currentColor" strokeWidth="2.2" fill="none" />
    <path
      d="M7 21 C7 16, 21 16, 21 21"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    <text
      x="30"
      y="21"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="16"
      fill="currentColor"
    >
      salesmonk
    </text>
  </svg>
);

const RelataIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text
      x="50"
      y="22"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="800"
      fontSize="22"
      fill="currentColor"
    >
      relata
    </text>
  </svg>
);

export const LOGOS: LogoDefinition[] = [
  {
    id: "muscletech",
    name: "Muscletech",
    imageSrc: "/images/clients/muscletech-v2.png",
    imageSrc2x: "/images/clients/muscletech-v2@2x.png",
    Icon: MuscletechIcon,
    color: "#101010",
  },
  {
    id: "vega",
    name: "Vega beauty",
    imageSrc: "/images/clients/vega-v2.png",
    imageSrc2x: "/images/clients/vega-v2@2x.png",
    Icon: VegaIcon,
    color: "#D5360C",
  },
  {
    id: "microscan",
    name: "Microscan",
    imageSrc: "/images/clients/microscan-v2.png",
    imageSrc2x: "/images/clients/microscan-v2@2x.png",
    Icon: MicroscanIcon,
    color: "#101010",
  },
  {
    id: "solara",
    name: "Solara",
    imageSrc: "/images/clients/solara-v2.png",
    imageSrc2x: "/images/clients/solara-v2@2x.png",
    Icon: SolaraIcon,
    color: "#101010",
  },
  {
    id: "maccare",
    name: "Maccare Hospital",
    imageSrc: "/images/clients/maccare-v2.png",
    imageSrc2x: "/images/clients/maccare-v2@2x.png",
    Icon: MaccareIcon,
    color: "#101010",
  },
  {
    id: "salesmonk",
    name: "Salesmonk",
    imageSrc: "/images/clients/salesmonk-v2.png",
    imageSrc2x: "/images/clients/salesmonk-v2@2x.png",
    Icon: SalesmonkIcon,
    color: "#D5360C",
  },
  {
    id: "relata",
    name: "Relata",
    imageSrc: "/images/clients/relata-v2.png",
    imageSrc2x: "/images/clients/relata-v2@2x.png",
    Icon: RelataIcon,
    color: "#101010",
  },
];
