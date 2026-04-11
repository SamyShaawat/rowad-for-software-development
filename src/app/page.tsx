import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';

// Lazy load below-the-fold components
const ServicesSection = dynamic(() =>
  import('@/components/sections/ServicesSection').then((mod) => mod.ServicesSection)
);
const AboutSection = dynamic(() =>
  import('@/components/sections/AboutSection').then((mod) => mod.AboutSection)
);
const TestimonialsSection = dynamic(() =>
  import('@/components/sections/TestimonialsSection').then((mod) => mod.TestimonialsSection)
);
const CTASection = dynamic(() =>
  import('@/components/sections/CTASection').then((mod) => mod.CTASection)
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
