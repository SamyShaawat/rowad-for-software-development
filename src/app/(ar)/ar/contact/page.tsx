import type { Metadata } from 'next';
import { arabicPage } from '@/i18n/seo';
import { ContactPage } from '@/components/pages/ContactPage';

// Written for Arabic search, not translated word for word.
export const metadata: Metadata = arabicPage({
  path: '/contact',
  title: 'تواصل معنا: احجز استشارة مجانية',
  description:
    'تواصل مع رواد لتطوير البرمجيات في الإسكندرية عبر واتساب أو البريد الإلكتروني، واحجز استشارة مجانية لموقعك أو تطبيقك أو نظام ERP أو وكيل الذكاء الاصطناعي أو الشات بوت.',
});

export default function Page() {
  return <ContactPage locale="ar" />;
}
