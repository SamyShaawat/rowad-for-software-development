'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RouteConstants, NavigationConstants } from '@constants';
import { ThemeToggle } from './ThemeToggle';
import { useScrollPosition } from '@hooks';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/80 dark:bg-[#0a0a0f]/90 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.06] shadow-sm dark:shadow-dark-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* ── Logo ── */}
          <Link href={RouteConstants.HOME} className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden glow-sm">
                <Image
                  priority
                  src="/images/RowadLogo/Rowad_Icon_Round.png"
                  alt="Rowad Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="flex items-baseline">
                <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white transition-colors">
                  R
                </span>
                <span className="font-heading font-bold text-2xl gradient-text">O</span>
                <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white transition-colors">
                  WAD
                </span>
              </div>
            </motion.div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setActiveHover(item.name)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={cn(
                    'relative px-4 py-2 font-medium transition-colors duration-200 text-sm',
                    active
                      ? 'text-orange-500 dark:text-orange-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
                  )}
                >
                  {item.name}
                  {/* Active indicator — always show for current page */}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                    />
                  )}
                  {/* Hover indicator — only show when not active */}
                  {!active && activeHover === item.name && (
                    <motion.span
                      layoutId="nav-hover-underline"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-orange-500/50 to-amber-400/50 rounded-full"
                    />
                  )}
                </Link>
              );
            })}

            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={RouteConstants.CONTACT} className="btn-primary text-sm py-2.5 px-6">
                  {NavigationConstants.GET_STARTED}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ── Mobile toggle ── */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            className="md:hidden bg-[#0d0d1a]/95 backdrop-blur-2xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="container-custom mx-auto px-4 py-4 space-y-1">
              {navigation.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 font-medium transition-all duration-200 text-sm rounded-xl',
                        active
                          ? 'text-orange-500 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-500/5'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/[0.06]',
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {active && (
                        <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-orange-500" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-3 pb-2">
                <Link
                  href={RouteConstants.CONTACT}
                  className="block w-full text-center btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {NavigationConstants.GET_STARTED}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
