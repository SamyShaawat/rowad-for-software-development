import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes while handling conflicts appropriately.
 * Uses clsx for conditional classes and tailwind-merge to solve conflicts between Tailwind rules.
 *
 * @example
 * cn("px-2 py-1", isError && "bg-red-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
