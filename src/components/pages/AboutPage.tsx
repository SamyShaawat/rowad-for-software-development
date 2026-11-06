import Link from 'next/link';
import { CTASection } from '@/components/sections/CTASection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PageHero } from '@/components/ui/PageHero';
import { RouteConstants } from '@constants';
import { getDictionary, localePath, type Locale } from '@/i18n';

/** About page body, shared by the English route (/about) and the Arabic route (/ar/about). */
export function AboutPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.aboutPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title}>
        {p.intro}
      </PageHero>

      <section className="border-b border-slate-200 dark:border-white/10">
        <dl className="container-custom mx-auto grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 dark:bg-white/10 lg:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-10 dark:bg-[#161616]">
              <dd className="text-4xl font-extrabold text-slate-900 dark:text-white">
                <bdi dir="ltr">{s.value}</bdi>
              </dd>
              <dt className="mt-1 text-sm text-slate-500">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-badge mb-3">{p.storyBadge}</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              {p.storyTitle}
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {p.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection locale={locale} />

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-badge mb-3">{p.expertiseBadge}</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              {p.expertiseTitle}
            </h2>
            <Link href={localePath(locale, RouteConstants.SERVICES)} className="btn-ghost mt-6">
              {p.seeServices} <span className="inline-block rtl:rotate-180">→</span>
            </Link>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
            {p.capabilities.map((c) => (
              <li
                key={c}
                className="bg-white px-5 py-4 text-sm font-medium text-slate-800 dark:bg-[#161616] dark:text-slate-200"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
