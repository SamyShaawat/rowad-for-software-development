'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RouteConstants, NavigationConstants } from '@/constants';
import type { NavigationItem } from '@/types';

const navigation: NavigationItem[] = [
  { name: NavigationConstants.HOME, href: RouteConstants.HOME },
  { name: NavigationConstants.SERVICES, href: RouteConstants.SERVICES },
  { name: NavigationConstants.ABOUT_US, href: RouteConstants.ABOUT },
  { name: NavigationConstants.CONTACT, href: RouteConstants.CONTACT },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-secondary-900' : 'text-white';
  const bgColor = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}>
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={RouteConstants.HOME} className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}`}>
                {item.name}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={RouteConstants.CONTACT} className="btn-primary">{NavigationConstants.GET_STARTED}</Link>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${textColor}`}>
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white border-t border-secondary-200 overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href={RouteConstants.CONTACT} className="block w-full text-center btn-primary" onClick={() => setMobileMenuOpen(false)}>{NavigationConstants.GET_STARTED}</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
