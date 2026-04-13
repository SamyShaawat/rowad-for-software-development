import type { Metadata } from 'next';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { CTASection } from '@/components/sections/CTASection';
import { CompanyConstants } from '@constants';
import { clientsMetadata } from './metadata';

export const metadata: Metadata = clientsMetadata;

export default function ClientsPage() {
  return (
    <main>
      <section className="pt-20 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Our {CompanyConstants.NAME} Clients
          </h1>
          <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12">
            We&apos;re proud to partner with leading organizations across industries, delivering
            exceptional software solutions that drive business growth and innovation.
          </p>
        </div>
        <ClientsSection />
      </section>
      <CTASection />
    </main>
  );
}
