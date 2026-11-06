import { ClientsSection } from '@/components/sections/ClientsSection';
import { CTASection } from '@/components/sections/CTASection';
import { PageHero } from '@/components/ui/PageHero';
import { getDictionary, type Locale } from '@/i18n';

/** Clients page body, shared by the English route (/clients) and the Arabic route (/ar/clients). */
export function ClientsPage({ locale }: { locale: Locale }) {
  const p = getDictionary(locale).clientsPage;
  return (
    <>
      <PageHero title={p.title}>{p.intro}</PageHero>
      <ClientsSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
