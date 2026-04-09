/**
 * Navigation Types
 */
export interface NavigationItem {
  name: string;
  href: string;
  type?: 'link' | 'button';
}
