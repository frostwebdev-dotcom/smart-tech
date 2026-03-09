import { Hero } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust-section";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
