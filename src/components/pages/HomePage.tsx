import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';
import type { Locale } from '@/i18n';

/** Home page body, shared by the English route (/) and the Arabic route (/ar). */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />
      <TrustStrip locale={locale} />
      <ServicesSection locale={locale} />
      <ProcessSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
