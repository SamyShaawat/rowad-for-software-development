import type { Metadata } from 'next';
import { ClientsPage } from '@/components/pages/ClientsPage';
import { clientsMetadata } from './metadata';

export const metadata: Metadata = clientsMetadata;

export default function Page() {
  return <ClientsPage locale="en" />;
}
