import type { Locale } from './config';
import { en } from './dictionaries/en';
import { ar } from './dictionaries/ar';

export * from './config';

const dictionaries = { en, ar } satisfies Record<Locale, typeof en>;

export const getDictionary = (locale: Locale) => dictionaries[locale];
