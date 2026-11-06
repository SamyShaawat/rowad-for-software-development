import Link from 'next/link';
import { RouteConstants } from '@constants';
import {
  AgentsIcon,
  ChatbotIcon,
  CloudIcon,
  ErpIcon,
  MobileIcon,
  WebIcon,
} from '@/components/ui/icons';
import { getDictionary, localePath, type Locale } from '@/i18n';
import { serviceTheme } from './service-theme';

const icons = {
  web: WebIcon,
  mobile: MobileIcon,
  erp: ErpIcon,
  agents: AgentsIcon,
  chatbot: ChatbotIcon,
  cloud: CloudIcon,
} as const;

/** Carbon tile grid: 1px gaps, whole tile is the link, arrow bottom-right. */
export function ServicesSection({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const ids = Object.keys(icons) as (keyof typeof icons)[];
  return (
    <section
      className="section-padding bg-white dark:bg-[#161616]"
      aria-labelledby="services-title"
    >
      <div className="container-custom mx-auto">
        <div className="mb-12">
          <h2
            id="services-title"
            className="text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {t.home.services.title}
          </h2>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3">
          {ids.map((id) => {
            const Icon = icons[id];
            const { name, text } = t.serviceItems[id];
            return (
              <li key={id} className="bg-white dark:bg-[#161616]">
                <Link
                  href={`${localePath(locale, RouteConstants.SERVICES)}#${id}`}
                  className="group relative flex min-h-[240px] flex-col items-center p-8 text-center transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-full ${serviceTheme[id].icon}`}
                  >
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-8 text-xl text-slate-900 dark:text-white">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
