import { alternatesFor } from '@/i18n/seo';
import { HomePage } from '@/components/pages/HomePage';

export const metadata = { alternates: alternatesFor('/', 'en') };

export default function Page() {
  return <HomePage locale="en" />;
}
