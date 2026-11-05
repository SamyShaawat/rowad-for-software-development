import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, CompanyConstants } from '@constants';
import { getDictionary, localePath, type Locale } from '@/i18n';

export function CTASection({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).cta;
  return (
    <section
      className="border-t border-transparent bg-slate-900 px-4 dark:border-white/15 py-20 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="cta-title"
    >
      <div className="container-custom mx-auto flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-bold text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-slate-300">{t.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={localePath(locale, RouteConstants.CONTACT)}
            className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-orange-400"
          >
            {t.primary} <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Link>
          <a
            href={CompanyConstants.WHATSAPP}
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            {t.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
