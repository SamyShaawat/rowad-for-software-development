'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RouteConstants, NavigationConstants } from '@constants';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@lib/utils';
import type { NavigationItem } from '@types';

const navigation: NavigationItem[] = [
  { name: NavigationConstants.HOME, href: RouteConstants.HOME },
  { name: NavigationConstants.SERVICES, href: RouteConstants.SERVICES },
  { name: NavigationConstants.CLIENTS, href: RouteConstants.CLIENTS },
  { name: NavigationConstants.ABOUT_US, href: RouteConstants.ABOUT },
  { name: NavigationConstants.CONTACT, href: RouteConstants.CONTACT },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#0B1220]/95">
      <nav className="container-custom mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={RouteConstants.HOME} aria-label="Rowad home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="mx-auto mt-0.5 block h-0.5 w-4 rounded bg-orange-600" />
              )}
            </Link>
          ))}
          <ThemeToggle />
          <Link href={RouteConstants.CONTACT} className="btn-primary ml-2 !py-2.5">
            {NavigationConstants.GET_STARTED}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            id="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#0B1220] md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block rounded-md px-3 py-3 text-sm font-medium',
                pathname === item.href
                  ? 'bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white'
                  : 'text-slate-600 dark:text-slate-300'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={RouteConstants.CONTACT}
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            {NavigationConstants.GET_STARTED}
          </Link>
        </div>
      )}
    </header>
  );
}
