import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { GridFeatures } from "@/components/ui/grid-features";
import { IntegrationsGrid } from "@/components/ui/integrations-4-2";
import Portfolio from "@/components/Portfolio";
import WebBuildsPricing from "@/components/WebBuildsPricing";
import Why from "@/components/Why";

export const metadata: Metadata = {
  title: "KREW / MESH | Creative Technology Studio — Branding, UI/UX, Web & AI",
  description:
    "Krew / Mesh is an independent creative-technology studio specializing in Brand Identity, UI/UX Design, High-Performance Web Development, 3D Experiences, AI Solutions, and SaaS Platforms.",
  keywords: [
    "creative technology studio",
    "branding agency",
    "UI UX design studio",
    "web development agency",
    "Next.js web development",
    "3D web experiences",
    "AI automation solutions",
    "SaaS platform development",
    "Krew Mesh"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KREW / MESH | Creative Technology Studio",
    description:
      "Transforming ambitious ideas into digital experiences. Brand identity, intuitive UI/UX, ultra-fast web development, 3D experiences, and AI platforms.",
    url: "https://krewmesh.agency",
    siteName: "KREW / MESH",
    locale: "en_US",
    type: "website",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://krewmesh.agency/#website",
      "url": "https://krewmesh.agency",
      "name": "Krew / Mesh",
      "description": "Independent creative-technology studio specializing in Brand Identity, UI/UX Design, High-Performance Web Development, 3D Experiences, AI Solutions, and SaaS Platforms.",
      "publisher": {
        "@id": "https://krewmesh.agency/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://krewmesh.agency"
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        
        {/* Services section */}
        <div id="services" className="scroll-mt-24">
          <GridFeatures />
        </div>
        
        {/* Replaced old MeshNetwork/Process with IntegrationsGrid */}
        <IntegrationsGrid />
        
        <div id="work" className="scroll-mt-24">
          <Portfolio />
        </div>
        
        {/* Web Builds Packages & Pricing Section */}
        <div className="scroll-mt-24">
          <WebBuildsPricing />
        </div>

        <div id="about" className="scroll-mt-24">
          <Why />
        </div>
      </div>
    </>
  );
}
