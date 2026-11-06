import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ProjectIcon, SupportIcon, TeamIcon } from '@/components/ui/icons';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceIllustration } from '@/components/sections/illustrations';
import { serviceTheme } from '@/components/sections/service-theme';
import { PageHero } from '@/components/ui/PageHero';
import { RouteConstants } from '@constants';
import { getDictionary, localePath, type Locale } from '@/i18n';

const ids = ['web', 'mobile', 'erp', 'agents', 'chatbot', 'cloud'] as const;

// One icon per way of working, in the order of the dictionary: fixed project, dedicated team, support.
const engageIcons = [ProjectIcon, TeamIcon, SupportIcon];

/** Services page body, shared by the English route (/services) and the Arabic route (/ar/services). */
export function ServicesPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.servicesPage;

  return (
    <>
      <PageHero title={p.title}>{p.intro}</PageHero>

      {/* Carbon content switcher: sticky anchor tabs */}
      <nav
        aria-label={p.navLabel}
        className="sticky top-16 z-40 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-[#161616]"
      >
        <ul className="container-custom mx-auto flex overflow-x-auto px-4 sm:px-6 lg:px-8">
          {ids.map((id) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                className={`block border-b-2 border-transparent px-4 py-3.5 text-sm text-slate-600 transition-colors ${serviceTheme[id].tab} hover:text-slate-900 dark:text-slate-300 dark:hover:text-white`}
              >
                {t.serviceItems[id].name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {ids.map((id, i) => {
        const d = p.details[id];
        return (
          <section
            key={id}
            id={id}
            className={`scroll-mt-36 border-b border-slate-200 px-4 py-16 dark:border-slate-700 sm:px-6 lg:px-8 lg:py-24 ${
              i % 2 === 0 ? 'bg-white dark:bg-[#161616]' : serviceTheme[id].tint
            }`}
          >
            <div className="container-custom mx-auto">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="mt-3 text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl">
                    {t.serviceItems[id].name}
                  </h2>
                  <p className="mt-4 text-xl text-slate-900 dark:text-slate-100">{d.lead}</p>
                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                    {d.text}
                  </p>
                  <Link
                    href={localePath(locale, RouteConstants.CONTACT)}
                    className="btn-primary mt-8"
                  >
                    {p.startProject}
                    <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </div>
                <ServiceIllustration
                  id={id}
                  locale={locale}
                  className={i % 2 === 1 ? 'lg:order-1' : ''}
                />
              </div>

              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-700 md:grid-cols-2">
                <div className="bg-white p-6 dark:bg-[#161616]">
                  <h3 className="text-sm text-slate-600 dark:text-slate-300">{p.whatWeBuild}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-900 dark:text-slate-100">
                    {d.projects.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 dark:bg-[#161616]">
                  <h3 className="text-sm text-slate-600 dark:text-slate-300">{p.howWeDeliver}</h3>
                  <ol className="mt-4 space-y-3 text-sm text-slate-900 dark:text-slate-100">
                    {d.steps.map((step, n) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-mono text-orange-600 dark:text-orange-400">
                          {n + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section
        className="section-padding bg-slate-50 dark:bg-white/[0.02]"
        aria-labelledby="engage-title"
      >
        <div className="container-custom mx-auto">
          <h2
            id="engage-title"
            className="max-w-2xl text-3xl font-light leading-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {p.engage.title}
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
            {p.engage.items.map((item, i) => {
              const Icon = engageIcons[i];
              return (
                <li
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-colors hover:border-orange-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-orange-400/60 sm:p-8"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-medium text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-start scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100 rtl:origin-right"
                  />
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
