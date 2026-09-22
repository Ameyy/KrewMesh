import Hero from "@/components/Hero";
import { GridFeatures } from "@/components/ui/grid-features";
import { IntegrationsGrid } from "@/components/ui/integrations-4-2";
import Portfolio from "@/components/Portfolio";
import WebBuildsPricing from "@/components/WebBuildsPricing";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
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
