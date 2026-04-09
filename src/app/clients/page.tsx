import type { Metadata } from 'next';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { CTASection } from '@/components/sections/CTASection';
import { CompanyConstants } from '@constants';

export const metadata: Metadata = {
  title: `Our Clients | ${CompanyConstants.FULL_NAME}`,
  description: `Discover the industry leaders and businesses that trust ${CompanyConstants.NAME} for their digital transformation and software needs.`,
};

export default function ClientsPage() {
  return (
    <div className="pt-20 bg-[#0a0a0f]">
      <ClientsSection />
    </div>
  );
}
