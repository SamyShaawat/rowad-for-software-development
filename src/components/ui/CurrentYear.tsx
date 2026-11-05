'use client';

import { useEffect, useState } from 'react';

/**
 * The site is a static export, so a year computed at render time is frozen at build time.
 * Start with the build-time year (correct HTML for crawlers, no hydration mismatch), then switch
 * to the visitor's current year in the browser so it rolls over by itself every January.
 */
export function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
}
