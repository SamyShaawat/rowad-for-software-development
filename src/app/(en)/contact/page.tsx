import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { contactMetadata } from './metadata';

export const metadata: Metadata = contactMetadata;

export default function Page() {
  return <ContactPage locale="en" />;
}
