'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ARABIC_PUBLIC, getDictionary, localePath, stripLocale, type Locale } from '@/i18n';

/**
 * Header action next to the dark-mode button: goes to the same page in the other language.
 * Same Carbon style as ThemeToggle (64px tall, dark shell hover). Renders nothing while
 * ARABIC_PUBLIC is false.
 */
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  if (!ARABIC_PUBLIC) return null;
  const other: Locale = locale === 'en' ? 'ar' : 'en';
  return (
    <Link
      href={localePath(other, stripLocale(pathname))}
      hrefLang={other}
      lang={other}
      aria-label={getDictionary(locale).a11y.switchLanguage}
      className="flex h-16 items-center gap-1.5 px-3 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
    >
      <GlobeAltIcon className="h-5 w-5 shrink-0" />
      <span>{other === 'ar' ? 'العربية' : 'English'}</span>
    </Link>
  );
}
