'use client';

import { useState, useEffect } from 'react';

/**
 * Reactive hook to track the current vertical scroll position of the window.
 * Great for building floating headers, parallax effects, or appearing CTAs.
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}
