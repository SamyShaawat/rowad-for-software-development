'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

/**
 * Enhanced Theme Switch hook. Manages system preference
 * and user-defined light/dark toggling with hydration safety.
 */
export function useThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return { currentTheme, toggleTheme, mounted };
}
