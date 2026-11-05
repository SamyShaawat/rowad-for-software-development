'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useThemeSwitch } from '@hooks';

/** Carbon header action: 48px square, icon only, dark shell hover. */
export function ThemeToggle() {
  const { currentTheme, toggleTheme, mounted } = useThemeSwitch();

  if (!mounted) return <div className="h-12 w-12" />;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-12 w-12 place-items-center text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
