import type { Metadata } from 'next';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { CTASection } from '@/components/sections/CTASection';
import { PageHero } from '@/components/ui/PageHero';
import { clientsMetadata } from './metadata';

export const metadata: Metadata = clientsMetadata;

export default function ClientsPage() {
  return (
    <>
      <PageHero eyebrow="Clients" title="Companies that run on our software.">
        Logistics, maritime, healthcare, law and more. Here are some of the organisations we have
        built for.
      </PageHero>
      <ClientsSection />
      <CTASection />
    </>
  );
}
