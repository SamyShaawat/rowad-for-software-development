import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants } from '@constants';
import { ServiceArt } from './illustrations';

const services = [
  {
    id: 'web',
    name: 'Websites & Web Apps',
    text: 'Fast, SEO-ready company sites, e-commerce and custom portals.',
    tech: 'Next.js · React · TypeScript',
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    text: 'iOS and Android apps from one codebase, with offline support and push.',
    tech: 'Flutter · React Native',
  },
  {
    id: 'erp',
    name: 'Odoo ERP',
    text: 'Implementation, custom modules and migration for sales, stock, accounting and HR.',
    tech: 'Odoo 17/18 · Python · PostgreSQL',
  },
  {
    id: 'agents',
    name: 'AI Agents',
    text: 'Agents that read your data, use your tools and finish real tasks, not just chat.',
    tech: 'LLMs · RAG · Tool use',
  },
  {
    id: 'chatbot',
    name: 'Chatbots',
    text: 'Arabic and English bots on WhatsApp, web and Messenger, wired to your CRM.',
    tech: 'WhatsApp · OpenAI · LangChain',
  },
  {
    id: 'cloud',
    name: 'Hosting & DevOps',
    text: 'Managed hosting, CI/CD, backups and monitoring so launches stay boring.',
    tech: 'AWS · Docker · Cloudflare',
  },
];

export function ServicesSection() {
  return (
    <section
      className="section-padding bg-white dark:bg-[#0B1220]"
      aria-labelledby="services-title"
    >
      <div className="container-custom mx-auto">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-badge mb-3">What we build</p>
            <h2
              id="services-title"
              className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
            >
              Anything you need in the tech world, built end to end.
            </h2>
          </div>
          <Link href={RouteConstants.SERVICES} className="btn-ghost shrink-0">
            All services <ArrowRightIcon className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.id}
              className="bg-white p-6 transition-colors hover:bg-slate-50 dark:bg-[#0B1220] dark:hover:bg-white/[0.03]"
            >
              <ServiceArt id={s.id} />
              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.text}
              </p>
              <p className="mt-4 font-mono text-xs text-slate-500">{s.tech}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
