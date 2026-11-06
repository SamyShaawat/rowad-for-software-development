import type { Metadata } from 'next';
import { arabicPage } from '@/i18n/seo';
import { ServicesPage } from '@/components/pages/ServicesPage';

// Written for Arabic search, not translated word for word.
export const metadata: Metadata = arabicPage({
  path: '/services',
  title: 'خدماتنا: ويب وموبايل وERP وذكاء اصطناعي وأتمتة',
  description:
    'خدمات رواد لتطوير البرمجيات في الإسكندرية: تطوير مواقع وتطبيقات موبايل وأنظمة ERP ووكلاء ذكاء اصطناعي وشات بوت واستضافة وDevOps، من الفكرة حتى التشغيل.',
});

export default function Page() {
  return <ServicesPage locale="ar" />;
}
