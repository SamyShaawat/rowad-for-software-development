import { HomePage } from '@/components/pages/HomePage';

export const metadata = { alternates: { canonical: 'https://rowad.com' } };

export default function Page() {
  return <HomePage locale="en" />;
}
