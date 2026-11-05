import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceArt } from '@/components/sections/illustrations';
import { PageHero } from '@/components/ui/PageHero';
import { RouteConstants } from '@constants';
import { servicesMetadata } from './metadata';

export const metadata: Metadata = servicesMetadata;

const services = [
  {
    id: 'web',
    name: 'Websites & Web Apps',
    text: 'Company sites, e-commerce stores, customer portals and SaaS platforms that load fast, rank well and convert.',
    features: [
      'Responsive, mobile-first design',
      'E-commerce and payments',
      'Headless CMS',
      'PWA and SEO',
      'Legacy modernisation',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind'],
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    text: 'iOS and Android apps from a single codebase, from first prototype to store release and updates.',
    features: [
      'iOS and Android',
      'Offline mode and sync',
      'Push notifications',
      'Payments and maps',
      'Store submission',
    ],
    tech: ['Flutter', 'React Native', 'Expo', 'Firebase'],
  },
  {
    id: 'erp',
    name: 'Odoo ERP',
    text: 'We implement and customise Odoo so sales, inventory, accounting, HR and manufacturing run in one system.',
    features: [
      'Implementation and data migration',
      'Custom modules',
      'Integrations (e-commerce, payments, APIs)',
      'Reports and dashboards',
      'User training and support',
    ],
    tech: ['Odoo 17/18', 'Python', 'PostgreSQL', 'QWeb', 'REST APIs'],
  },
  {
    id: 'agents',
    name: 'AI Agents',
    text: 'Agents that read your documents and systems, call your tools and complete real work like triage, quoting and reporting.',
    features: [
      'Retrieval over your own data',
      'Tool use and workflow automation',
      'Human approval steps',
      'Evaluation and monitoring',
      'Private deployment options',
    ],
    tech: ['LLMs', 'RAG', 'LangChain', 'Python', 'Vector DBs'],
  },
  {
    id: 'chatbot',
    name: 'Chatbots',
    text: 'Arabic and English bots that answer customers, capture leads and hand over to your team when needed.',
    features: [
      'WhatsApp, web and Messenger',
      'Arabic and English',
      'CRM and Odoo integration',
      'Live-agent handover',
      'Conversation analytics',
    ],
    tech: ['WhatsApp Business API', 'OpenAI', 'Dialogflow', 'Node.js'],
  },
  {
    id: 'cloud',
    name: 'Hosting & DevOps',
    text: 'Managed hosting, deployment pipelines and monitoring so releases are routine and downtime is rare.',
    features: [
      '99.9% uptime hosting',
      'Daily backups and SSL',
      'CI/CD pipelines',
      'Zero-downtime releases',
      '24/7 monitoring',
    ],
    tech: ['AWS', 'Cloudflare', 'Docker', 'GitHub Actions'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Web, mobile, ERP and AI from one team.">
        Pick one service or combine them. Most clients start with one and add the next as they grow.
      </PageHero>

      <div className="bg-white dark:bg-[#0B1220]">
        {services.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="border-b border-slate-200 px-4 py-16 dark:border-white/10 sm:px-6 lg:px-8 lg:py-20"
          >
            <div className="container-custom mx-auto grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                  <ServiceArt id={s.id} />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{s.text}</p>
              </div>
              <div className="lg:pt-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                  What you get
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-slate-800 dark:text-slate-200">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                      <span className="text-sm leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Built with
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-slate-300 px-3 py-1 font-mono text-xs text-slate-700 dark:border-white/15 dark:text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href={RouteConstants.CONTACT} className="btn-ghost mt-8">
                  Ask about {s.name.toLowerCase()} →
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
      <CTASection />
    </>
  );
}
