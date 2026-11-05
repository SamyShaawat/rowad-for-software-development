import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants } from '@constants';
import { getDictionary, localePath, type Locale } from '@/i18n';
import { HeroVisual } from './illustrations';

export function HeroSection({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const h = t.home.hero;
  return (
    <section className="border-b border-slate-200 bg-orange-50 pt-16 dark:border-slate-700 dark:bg-[#161616]">
      <div className="container-custom mx-auto grid items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24">
        <div>
          <h1 className="text-5xl leading-[1.1] text-slate-900 dark:text-white lg:text-6xl">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {h.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={localePath(locale, RouteConstants.CONTACT)} className="btn-primary">
              {h.primary}
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link href={localePath(locale, RouteConstants.SERVICES)} className="btn-secondary">
              {h.secondary}
            </Link>
          </div>
          <dl className="mt-14 grid max-w-xl grid-cols-4 gap-4 border-t border-slate-300 pt-6 dark:border-slate-700">
            {t.stats.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-light text-slate-900 dark:text-white">
                  <bdi dir="ltr">{s.value}</bdi>
                </dd>
                <dt className="mt-1 text-xs text-slate-600 dark:text-slate-300">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <HeroVisual locale={locale} />
      </div>
    </section>
  );
}
