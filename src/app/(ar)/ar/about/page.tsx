import type { Metadata } from 'next';
import { arabicPage } from '@/i18n/seo';
import { AboutPage } from '@/components/pages/AboutPage';

// Written for Arabic search, not translated word for word.
export const metadata: Metadata = arabicPage({
  path: '/about',
  title: 'من نحن: فريق برمجة في الإسكندرية، مصر',
  description:
    'تعرّف على رواد لتطوير البرمجيات، فريق برمجة في الإسكندرية، مصر. نصمم ونبني ونشغّل برمجيات مخصصة لشركات في المنطقة، من المواقع إلى أنظمة ERP والذكاء الاصطناعي.',
});

export default function Page() {
  return <AboutPage locale="ar" />;
}
