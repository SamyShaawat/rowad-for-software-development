import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';

// Written for Arabic search, not translated word for word.
export const metadata: Metadata = {
  title: { absolute: 'رواد لتطوير البرمجيات | شركة برمجة في الإسكندرية' },
  description:
    'رواد شركة برمجة في الإسكندرية، مصر. نصمم ونبني ونشغّل مواقع وتطبيقات موبايل وأنظمة ERP ووكلاء ذكاء اصطناعي وشات بوت لشركتك، من الفكرة حتى التشغيل.',
};

export default function Page() {
  return <HomePage locale="ar" />;
}
