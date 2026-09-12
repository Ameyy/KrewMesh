import GlobalCanvas from "@/components/GlobalCanvas";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { GridFeatures } from "@/components/ui/grid-features";
import { IntegrationsGrid } from "@/components/ui/integrations-4-2";
import Portfolio from "@/components/Portfolio";
import Why from "@/components/Why";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";

export default function Home() {
  return (
    <>
      <GlobalCanvas />
      <Header />
      
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
        
        <div id="about" className="scroll-mt-24">
          <Why />
        </div>
        
        <CTAWithVerticalMarquee />
      </div>
    </>
  );
}
