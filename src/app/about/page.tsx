import type { Metadata } from 'next';
import Link from 'next/link';
import { RouteConstants, CompanyConstants, StatsConstants } from '@constants';
import { CTASection } from '@/components/sections/CTASection';
import { PageHero } from '@/components/ui/PageHero';
import { aboutMetadata } from './metadata';

export const metadata: Metadata = aboutMetadata;

const values = [
  ['Plain talk', 'Honest estimates, clear pricing and no jargon in status updates.'],
  ['Built to last', 'Tested, documented code that your next developer can pick up.'],
  ['Your team, extended', 'We work inside your process and tools, not around them.'],
  ['Accountable', 'We stay after launch. If something breaks, we fix it.'],
];

const capabilities = [
  'Websites and web apps',
  'Mobile apps (iOS and Android)',
  'ERP implementation and custom modules',
  'AI agents and automation',
  'Chatbots on WhatsApp and web',
  'Cloud hosting and DevOps',
  'UI/UX design and prototyping',
  'QA and test automation',
  'Maintenance and 24/7 support',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${CompanyConstants.NAME}`}
        title="A software team that stays for the long run."
      >
        We are engineers and designers in Alexandria, Egypt. We build and run software for companies
        across the region, from first website to full ERP.
      </PageHero>

      <section className="border-b border-slate-200 dark:border-white/10">
        <dl className="container-custom mx-auto grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 dark:bg-white/10 lg:grid-cols-4">
          {StatsConstants.map((s) => (
            <div key={s.label} className="bg-white px-6 py-10 dark:bg-[#161616]">
              <dd className="text-4xl font-extrabold text-slate-900 dark:text-white">{s.value}</dd>
              <dt className="mt-1 text-sm text-slate-500">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-badge mb-3">Our story</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              We started with websites and kept growing with our clients.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              {CompanyConstants.NAME} began by building and hosting websites. As clients grew, they
              asked for apps, then for systems to run their operations, then for automation. We
              learned each one and now cover all of it.
            </p>
            <p>
              Our mission is simple: give businesses software that works, delivered by people who
              pick up the phone. We want to be known for quality, reliability and a customer-first
              approach across the region.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-custom mx-auto max-w-5xl">
          <h2 className="mb-12 text-sm text-slate-600 dark:text-slate-300">How we work</h2>
          <div className="space-y-10">
            {values.map(([t, d]) => (
              <p
                key={t}
                className="text-2xl font-light leading-snug text-slate-500 dark:text-slate-400 sm:text-3xl"
              >
                <strong className="font-normal text-slate-900 dark:text-white">{t}.</strong> {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-badge mb-3">Expertise</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Everything in one place
            </h2>
            <Link href={RouteConstants.SERVICES} className="btn-ghost mt-6">
              See all services →
            </Link>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
            {capabilities.map((c) => (
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
      <CTASection />
    </>
  );
}
