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

/** IBM Carbon UI Shell: 48px black bar, text-only nav, 3px active indicator. */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700 bg-slate-900">
      <nav className="mx-auto flex h-12 max-w-[1584px] items-stretch justify-between pl-4 sm:pl-6 lg:pl-8">
        <Link href={RouteConstants.HOME} aria-label="Rowad home" className="flex items-center pr-6">
          <Logo light compact />
        </Link>

        <div className="hidden items-stretch md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
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
          <Link
            href={RouteConstants.CONTACT}
            className="my-1.5 ml-2 mr-3 flex items-center rounded-full bg-orange-500 px-6 text-sm font-medium text-slate-900 transition-colors hover:bg-orange-400"
          >
            {NavigationConstants.GET_STARTED}
          </Link>
        </div>

        <div className="flex items-stretch md:hidden">
          <ThemeToggle />
          <button
            type="button"
            id="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            className="grid h-12 w-12 place-items-center text-white hover:bg-slate-800"
            aria-label="Toggle navigation menu"
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
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block border-l-[3px] px-4 py-3.5 text-sm hover:bg-slate-800',
                pathname === item.href
                  ? 'border-orange-500 text-white'
                  : 'border-transparent text-slate-300'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={RouteConstants.CONTACT}
            onClick={() => setOpen(false)}
            className="m-4 block rounded-full bg-orange-500 px-4 py-3 text-center text-sm font-medium text-slate-900"
          >
            {NavigationConstants.GET_STARTED}
          </Link>
        </div>
      )}
    </header>
  );
}
