import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { aboutMetadata } from './metadata';

export const metadata: Metadata = aboutMetadata;

export default function Page() {
  return <AboutPage locale="en" />;
}
