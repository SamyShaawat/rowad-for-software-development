import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = { alternates: { canonical: 'https://rowad.com' } };

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
