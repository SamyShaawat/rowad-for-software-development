'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RouteConstants } from '@constants';
import { getDictionary, localePath, stripLocale, type Locale } from '@/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@lib/utils';

/** IBM Carbon UI Shell: 48px black bar, text-only nav, 3px active indicator. */
export function Header({ locale }: { locale: Locale }) {
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale);
  const navigation = [
    { name: t.nav.home, href: RouteConstants.HOME },
    { name: t.nav.services, href: RouteConstants.SERVICES },
    { name: t.nav.clients, href: RouteConstants.CLIENTS },
    { name: t.nav.about, href: RouteConstants.ABOUT },
    { name: t.nav.contact, href: RouteConstants.CONTACT },
  ];
  const switcherClass =
    'flex items-center px-4 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700 bg-slate-900">
      <nav className="mx-auto flex h-16 max-w-[1584px] items-stretch justify-between ps-4 sm:ps-6 lg:ps-8">
        <Link
          href={localePath(locale, RouteConstants.HOME)}
          aria-label={t.a11y.homeLabel}
          className="flex items-center pe-6"
        >
          <Logo light compact />
        </Link>

        <div className="hidden items-stretch md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={localePath(locale, item.href)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center border-b-[3px] px-4 text-sm transition-colors hover:bg-slate-800 hover:text-white',
                  active ? 'border-orange-500 text-white' : 'border-transparent text-slate-300'
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <ThemeToggle />
          <LanguageSwitcher locale={locale} className={switcherClass} />
          <Link
            href={localePath(locale, RouteConstants.CONTACT)}
            className="my-3 ms-2 me-3 flex items-center rounded-full bg-orange-500 px-6 text-sm font-medium text-slate-900 transition-colors hover:bg-orange-400"
          >
            {t.nav.getStarted}
          </Link>
        </div>

        <div className="flex items-stretch md:hidden">
          <ThemeToggle />
          <LanguageSwitcher locale={locale} className={switcherClass} />
          <button
            type="button"
            id="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            className="grid h-16 w-12 place-items-center text-white hover:bg-slate-800"
            aria-label={t.a11y.toggleMenu}
            aria-expanded={open}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-700 bg-slate-900 md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={localePath(locale, item.href)}
              onClick={() => setOpen(false)}
              className={cn(
                'block border-s-[3px] px-4 py-3.5 text-sm hover:bg-slate-800',
                pathname === item.href
                  ? 'border-orange-500 text-white'
                  : 'border-transparent text-slate-300'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={localePath(locale, RouteConstants.CONTACT)}
            onClick={() => setOpen(false)}
            className="m-4 block rounded-full bg-orange-500 px-4 py-3 text-center text-sm font-medium text-slate-900"
          >
            {t.nav.getStarted}
          </Link>
        </div>
      )}
    </header>
  );
}
