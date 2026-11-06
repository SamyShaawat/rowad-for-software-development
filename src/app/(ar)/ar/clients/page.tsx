import type { Metadata } from 'next';
import { arabicPage } from '@/i18n/seo';
import { ClientsPage } from '@/components/pages/ClientsPage';

// Written for Arabic search, not translated word for word.
export const metadata: Metadata = arabicPage({
  path: '/clients',
  title: 'عملاؤنا: شركات تثق في رواد',
  description:
    'تعرّف على الشركات التي تعمل ببرمجيات رواد لتطوير البرمجيات في مصر والشرق الأوسط، من الخدمات اللوجستية والبحرية إلى القانون والعقارات والصناعة والرعاية الصحية.',
});

export default function Page() {
  return <ClientsPage locale="ar" />;
}
