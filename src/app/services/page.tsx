import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceIllustration } from '@/components/sections/illustrations';
import { PageHero } from '@/components/ui/PageHero';
import { RouteConstants } from '@constants';
import { serviceTheme } from '@/components/sections/service-theme';
import { servicesMetadata } from './metadata';

export const metadata: Metadata = servicesMetadata;

const services = [
  {
    id: 'web',
    name: 'Websites & web apps',
    lead: 'A site that loads fast, ranks well and turns visitors into customers.',
    text: 'Company websites, online stores, customer portals and SaaS dashboards. We start from your goals and users, then build a fast, accessible, search-friendly product you can update yourself.',
    projects: [
      'Corporate and marketing websites',
      'E-commerce with local and international payments',
      'Customer and partner portals',
      'Internal dashboards and SaaS products',
    ],
    steps: [
      'Plan content, structure and wireframes',
      'Design system and build in short sprints',
      'Launch, measure and improve',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
  },
  {
    id: 'mobile',
    name: 'Mobile apps',
    lead: 'One codebase, two stores, a real native feel.',
    text: 'iOS and Android apps for customers, field teams and partners. We prototype first so you can test the idea, then build, release and maintain the app.',
    projects: [
      'Customer ordering and loyalty apps',
      'Field-staff and delivery apps',
      'Booking and on-demand services',
      'Companion apps for your ERP',
    ],
    steps: [
      'Clickable prototype and user testing',
      'Build with Flutter or React Native',
      'Store release, analytics and updates',
    ],
    stack: ['Flutter', 'React Native', 'Expo', 'Firebase', 'REST / GraphQL'],
  },
  {
    id: 'erp',
    name: 'Odoo ERP',
    lead: 'Every department on one system and one source of truth.',
    text: 'We implement, customise and support Odoo so sales, inventory, accounting, HR and manufacturing work together instead of in separate spreadsheets.',
    projects: [
      'Odoo implementation and data migration',
      'Custom modules and workflows',
      'Integrations with e-commerce, payments and shipping',
      'Reports, dashboards and user training',
    ],
    steps: [
      'Map your processes and pick the modules',
      'Configure, customise and test with your data',
      'Migrate, train your team and go live',
    ],
    stack: ['Odoo 17/18', 'Python', 'PostgreSQL', 'QWeb', 'REST APIs'],
  },
  {
    id: 'agents',
    name: 'AI agents',
    lead: 'Software that does the work, not just answers questions.',
    text: 'Agents read your documents and systems, decide what to do, call your tools and finish tasks like triage, quoting and reporting. People stay in control with approval steps and full logs.',
    projects: [
      'Question answering over your own documents',
      'Sales and support triage',
      'Back-office automation: quotes, invoices, reports',
      'Agents connected to Odoo and your CRM',
    ],
    steps: [
      'Choose one workflow worth automating',
      'Prototype on your data and measure accuracy',
      'Deploy with guardrails and monitoring',
    ],
    stack: ['LLMs', 'RAG', 'LangChain', 'Python', 'Vector databases'],
  },
  {
    id: 'chatbot',
    name: 'Chatbots',
    lead: 'Answer customers instantly in Arabic and English, then hand over to a person.',
    text: 'Bots on WhatsApp, Messenger and your website that handle common questions, capture leads and book appointments, then pass the conversation to your team when it matters.',
    projects: [
      'WhatsApp customer support',
      'Lead capture and appointment booking',
      'Order status and FAQ bots',
      'Human handover with full context',
    ],
    steps: [
      'Collect real questions and design flows',
      'Build, connect to CRM and test in both languages',
      'Launch and improve from conversation data',
    ],
    stack: ['WhatsApp Business API', 'OpenAI', 'Dialogflow', 'Node.js'],
  },
  {
    id: 'cloud',
    name: 'Hosting & DevOps',
    lead: 'Releases that are routine and downtime that is rare.',
    text: 'Managed hosting, automated pipelines and monitoring for the systems we build and the ones you already run.',
    projects: [
      'Managed hosting with SSL and daily backups',
      'CI/CD pipelines and zero-downtime releases',
      'Disaster recovery and rollbacks',
      'Monitoring and on-call support',
    ],
    steps: [
      'Audit your current setup',
      'Automate build, test and deploy',
      'Monitor, back up and improve',
    ],
    stack: ['AWS', 'Cloudflare', 'Docker', 'GitHub Actions', 'Linux'],
  },
];

const engagements = [
  [
    'Fixed-scope project',
    'A defined outcome, timeline and price. Best for a new website, app or Odoo rollout.',
  ],
  ['Dedicated team', 'Developers and a designer working as part of your team month to month.'],
  [
    'Support retainer',
    'Monitoring, updates and a fast response for software already in production.',
  ],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Web, mobile, ERP and AI from one team.">
        Pick one service or combine them. Each section shows what we build, how we deliver it and
        the tools we use.
      </PageHero>

      {/* Carbon content switcher: sticky anchor tabs */}
      <nav
        aria-label="Services"
        className="sticky top-12 z-40 border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-[#161616]"
      >
        <ul className="container-custom mx-auto flex overflow-x-auto px-4 sm:px-6 lg:px-8">
          {services.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className={`block border-b-2 border-transparent px-4 py-3.5 text-sm text-slate-600 transition-colors ${serviceTheme[s.id].tab} hover:text-slate-900 dark:text-slate-300 dark:hover:text-white`}
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-28 border-b border-slate-200 px-4 py-16 dark:border-slate-700 sm:px-6 lg:px-8 lg:py-24 ${
            i % 2 === 0 ? 'bg-white dark:bg-[#161616]' : serviceTheme[s.id].tint
          }`}
        >
          <div className="container-custom mx-auto">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className={`font-mono text-sm ${serviceTheme[s.id].text}`}>
                  {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl">
                  {s.name}
                </h2>
                <p className="mt-4 text-xl text-slate-900 dark:text-slate-100">{s.lead}</p>
                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{s.text}</p>
                <Link href={RouteConstants.CONTACT} className="btn-primary mt-8">
                  Start a project
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <ServiceIllustration id={s.id} className={i % 2 === 1 ? 'lg:order-1' : ''} />
            </div>

            <div className="mt-14 grid gap-px bg-slate-200 dark:bg-slate-700 md:grid-cols-3">
              <div className="bg-white p-6 dark:bg-[#161616]">
                <h3 className="text-sm text-slate-600 dark:text-slate-300">What we build</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-900 dark:text-slate-100">
                  {s.projects.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange-500"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 dark:bg-[#161616]">
                <h3 className="text-sm text-slate-600 dark:text-slate-300">How we deliver</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-900 dark:text-slate-100">
                  {s.steps.map((st, n) => (
                    <li key={st} className="flex gap-3">
                      <span className="font-mono text-orange-600 dark:text-orange-400">
                        {n + 1}
                      </span>
                      {st}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white p-6 dark:bg-[#161616]">
                <h3 className="text-sm text-slate-600 dark:text-slate-300">Built with</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        className="section-padding bg-white dark:bg-[#161616]"
        aria-labelledby="engage-title"
      >
        <div className="container-custom mx-auto">
          <h2
            id="engage-title"
            className="max-w-2xl text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Ways to work with us
          </h2>
          <ul className="mt-10 grid gap-px bg-slate-200 dark:bg-slate-700 md:grid-cols-3">
            {engagements.map(([t, d]) => (
              <li key={t} className="bg-slate-50 p-6 dark:bg-slate-800">
                <h3 className="text-xl font-normal text-slate-900 dark:text-white">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
