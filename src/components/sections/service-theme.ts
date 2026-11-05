/**
 * One calm accent colour per service. Flat tints only (no gradients); each pair works in
 * light and dark mode. Full class strings so Tailwind can see them.
 */
export const serviceTheme: Record<
  string,
  { icon: string; text: string; dot: string; tint: string; tab: string }
> = {
  web: {
    icon: 'bg-blue-100 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300',
    text: 'text-blue-700 dark:text-blue-300',
    dot: 'bg-blue-600 dark:bg-blue-400',
    tint: 'bg-blue-50 dark:bg-blue-400/[0.07]',
    tab: 'hover:border-blue-500',
  },
  mobile: {
    icon: 'bg-teal-100 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300',
    text: 'text-teal-700 dark:text-teal-300',
    dot: 'bg-teal-600 dark:bg-teal-400',
    tint: 'bg-teal-50 dark:bg-teal-400/[0.07]',
    tab: 'hover:border-teal-500',
  },
  erp: {
    icon: 'bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300',
    text: 'text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-600 dark:bg-violet-400',
    tint: 'bg-violet-50 dark:bg-violet-400/[0.07]',
    tab: 'hover:border-violet-500',
  },
  agents: {
    icon: 'bg-orange-100 text-orange-700 dark:bg-orange-400/15 dark:text-orange-300',
    text: 'text-orange-700 dark:text-orange-300',
    dot: 'bg-orange-600 dark:bg-orange-400',
    tint: 'bg-orange-50 dark:bg-orange-400/[0.07]',
    tab: 'hover:border-orange-500',
  },
  chatbot: {
    icon: 'bg-green-100 text-green-700 dark:bg-green-400/15 dark:text-green-300',
    text: 'text-green-700 dark:text-green-300',
    dot: 'bg-green-600 dark:bg-green-400',
    tint: 'bg-green-50 dark:bg-green-400/[0.07]',
    tab: 'hover:border-green-500',
  },
  cloud: {
    icon: 'bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300',
    text: 'text-sky-700 dark:text-sky-300',
    dot: 'bg-sky-600 dark:bg-sky-400',
    tint: 'bg-sky-50 dark:bg-sky-400/[0.07]',
    tab: 'hover:border-sky-500',
  },
};
