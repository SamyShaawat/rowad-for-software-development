import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { servicesMetadata } from './metadata';

export const metadata: Metadata = servicesMetadata;

export default function Page() {
  return <ServicesPage locale="en" />;
}
