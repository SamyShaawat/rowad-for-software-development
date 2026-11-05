'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ARABIC_PUBLIC, localePath, stripLocale, type Locale } from '@/i18n';

/** Links to the same page in the other language. Renders nothing while Arabic is hidden. */
export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname();
  if (!ARABIC_PUBLIC) return null;
  const other: Locale = locale === 'en' ? 'ar' : 'en';
  return (
    <Link
      href={localePath(other, stripLocale(pathname))}
      hrefLang={other}
      lang={other}
      className={className}
    >
      {other === 'ar' ? 'العربية' : 'English'}
    </Link>
  );
}
