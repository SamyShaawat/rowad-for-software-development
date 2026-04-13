import type { Metadata } from 'next';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { CTASection } from '@/components/sections/CTASection';
import { CompanyConstants } from '@constants';
import { clientsMetadata } from './metadata';

export const metadata: Metadata = clientsMetadata;

export default function ClientsPage() {
  return (
    <div className="pt-20 bg-[#0a0a0f]">
      <ClientsSection />
    </div>
  );
}
