import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';

// Written for Arabic search, not translated word for word.
export const metadata: Metadata = {
  title: 'خدماتنا: مواقع وتطبيقات موبايل وأنظمة ERP وذكاء اصطناعي',
  description:
    'خدمات رواد لتطوير البرمجيات في الإسكندرية: تطوير مواقع وتطبيقات موبايل وأنظمة ERP ووكلاء ذكاء اصطناعي وشات بوت واستضافة وDevOps، من الفكرة حتى التشغيل.',
};

export default function Page() {
  return <ServicesPage locale="ar" />;
}
