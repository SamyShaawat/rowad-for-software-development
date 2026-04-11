'use client';

import * as React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useThemeSwitch } from '@hooks';

export function ThemeToggle() {
  const { currentTheme, toggleTheme, mounted } = useThemeSwitch();

  if (!mounted) {
    return <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08]" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-orange-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-slate-700" />
      )}
    </motion.button>
  );
}
