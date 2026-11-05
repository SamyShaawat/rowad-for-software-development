import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, StatsConstants } from '@constants';
import { HeroVisual } from './illustrations';

export function HeroSection() {
  return (
    <section className="border-b border-slate-200 bg-orange-50 pt-12 dark:border-slate-700 dark:bg-[#161616]">
      <div className="container-custom mx-auto grid items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24">
        <div>
          <h1 className="text-5xl leading-[1.1] text-slate-900 dark:text-white lg:text-6xl">
            One team for every piece of your software.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Websites, mobile apps, ERP systems, AI agents and chatbots. We design, build and run
            them, so you deal with one partner from idea to production.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={RouteConstants.CONTACT} className="btn-primary">
              Book a free consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href={RouteConstants.SERVICES} className="btn-secondary">
              Explore services
            </Link>
          </div>
          <dl className="mt-14 grid max-w-xl grid-cols-4 gap-4 border-t border-slate-300 pt-6 dark:border-slate-700">
            {StatsConstants.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-light text-slate-900 dark:text-white">{s.value}</dd>
                <dt className="mt-1 text-xs text-slate-600 dark:text-slate-300">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
