import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, CompanyConstants } from '@constants';

export function CTASection() {
  return (
    <section
      className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="cta-title"
    >
      <div className="container-custom mx-auto flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-bold text-white sm:text-4xl">
            Have an idea or a messy process? Let&apos;s talk.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            A 30-minute call is free. You leave with a clear next step, whether you work with us or
            not.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={RouteConstants.CONTACT}
            className="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-orange-400"
          >
            Book a free consultation <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
          <a
            href={CompanyConstants.WHATSAPP}
            className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
