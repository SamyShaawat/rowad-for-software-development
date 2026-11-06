import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  CloudArrowUpIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
  SwatchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { CTASection } from '@/components/sections/CTASection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PageHero } from '@/components/ui/PageHero';
import { RouteConstants } from '@constants';
import { getDictionary, localePath, type Locale } from '@/i18n';

// One icon per capability, in the order of the dictionary list (same icons as the service cards).
const capabilityIcons = [
  ComputerDesktopIcon, // websites and web apps
  DevicePhoneMobileIcon, // mobile apps
  Squares2X2Icon, // ERP
  CpuChipIcon, // AI agents and automation
  ChatBubbleLeftRightIcon, // chatbots
  CloudArrowUpIcon, // hosting, CI/CD, DevOps
  SwatchIcon, // UI/UX design
  CheckBadgeIcon, // QA and test automation
  WrenchScrewdriverIcon, // maintenance and support
];

/** About page body, shared by the English route (/about) and the Arabic route (/ar/about). */
export function AboutPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.aboutPage;

  return (
    <>
      <PageHero title={p.title}>{p.intro}</PageHero>

      <section className="border-b border-slate-200 dark:border-white/10">
        <dl className="container-custom mx-auto grid grid-cols-2 gap-4 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-4 lg:gap-6 lg:px-8">
          {t.stats.map((s) => {
            // "50+" -> number 50, suffix + ; "24/7" -> number 24, suffix /7 (the suffix is the accent)
            const [, number, suffix] = s.value.match(/^(\d+)(.*)$/) ?? [, s.value, ''];
            return (
              <div
                key={s.label}
                className="relative flex flex-col-reverse justify-end gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 pb-7 pt-9 dark:border-white/10 dark:bg-white/[0.03] sm:px-8"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-orange-500" />
                <dt className="text-sm leading-snug text-slate-600 dark:text-slate-400">
                  {s.label}
                </dt>
                <dd className="text-5xl font-light leading-none tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                  <bdi dir="ltr">
                    {number}
                    <span className="text-orange-500">{suffix}</span>
                  </bdi>
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
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
        <div className="container-custom mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-light leading-tight text-slate-900 dark:text-white sm:text-4xl">
              {p.expertiseTitle}
            </h2>
            <Link href={localePath(locale, RouteConstants.SERVICES)} className="btn-ghost">
              {p.seeServices} <span className="inline-block rtl:rotate-180">→</span>
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.capabilities.map((c, i) => {
              const Icon = capabilityIcons[i];
              return (
                <li
                  key={c}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-orange-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-orange-400/60"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-base font-medium leading-snug text-slate-800 dark:text-slate-200">
                    {c}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
