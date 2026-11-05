import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, StatsConstants } from '@constants';
import { HeroVisual } from './illustrations';

const stack = ['Websites', 'Mobile Apps', 'Odoo ERP', 'AI Agents', 'Chatbots'];

export function HeroSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 pt-16 dark:border-white/10 dark:bg-[#0B1220]">
      <div className="container-custom mx-auto grid items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:py-24">
        <div>
          <p className="section-badge mb-5">Software company · Alexandria, Egypt</p>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-slate-900 dark:text-white sm:text-5xl lg:text-[3.5rem]">
            One team for every piece of your software.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Tell us the problem. We build the website, the mobile app, the Odoo ERP behind it, and
            the AI agent that answers your customers — and we keep it running.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="What we build">
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={RouteConstants.CONTACT} className="btn-primary group">
              Book a free consultation
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href={RouteConstants.SERVICES} className="btn-secondary">
              See what we build
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-4 gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
            {StatsConstants.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {s.value}
                </dd>
                <dd className="text-xs text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
