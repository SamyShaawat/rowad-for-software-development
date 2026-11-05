import { getDictionary, type Locale } from '@/i18n';
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';

const stopStyles = [
  {
    Icon: MagnifyingGlassIcon,
    color: 'bg-blue-600 dark:bg-blue-400 dark:text-slate-900',
  },
  {
    Icon: SwatchIcon,
    color: 'bg-violet-600 dark:bg-violet-400 dark:text-slate-900',
  },
  {
    Icon: CodeBracketIcon,
    color: 'bg-teal-600 dark:bg-teal-400 dark:text-slate-900',
  },
  {
    Icon: RocketLaunchIcon,
    color: 'bg-orange-600 dark:bg-orange-400 dark:text-slate-900',
  },
];

/**
 * A route with four stops, like a transit line. The line runs behind the stops; each stop's ring
 * uses the section colour so the line looks cut around it.
 */
export function ProcessSection({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).home.process;
  return (
    <section
      className="section-padding border-y border-blue-100 bg-blue-50 dark:border-slate-700 dark:bg-[#171b22]"
      aria-labelledby="process-title"
    >
      <div className="container-custom mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-badge mb-4">{t.badge}</p>
          <h2
            id="process-title"
            className="text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {t.title}
          </h2>
        </div>

        <ol className="relative mx-auto mt-16 grid max-w-5xl gap-2 md:grid-cols-4 md:gap-6">
          {/* the route (desktop) */}
          <span
            aria-hidden="true"
            className="absolute start-[12.5%] end-[12.5%] top-9 hidden h-1.5 rounded-full bg-blue-200 dark:bg-slate-600 md:block"
          />
          {stopStyles.map(({ Icon, color }, i) => {
            const { title, text } = t.stops[i];
            return (
              <li
                key={title}
                className="relative flex flex-col items-center text-center after:mx-auto after:mt-6 after:block after:h-8 after:w-1.5 after:rounded-full after:bg-blue-200 last:after:hidden dark:after:bg-slate-600 md:after:hidden"
              >
                <span
                  className={`relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full text-white ring-8 ring-blue-50 dark:ring-[#171b22] ${color}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl font-normal text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
