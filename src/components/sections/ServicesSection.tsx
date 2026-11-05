import Link from 'next/link';
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CloudArrowUpIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { RouteConstants } from '@constants';

const services = [
  {
    id: 'web',
    Icon: ComputerDesktopIcon,
    name: 'Websites & web apps',
    text: 'Company sites, online stores and customer portals that load fast and rank well.',
    tech: 'Next.js · React · TypeScript',
  },
  {
    id: 'mobile',
    Icon: DevicePhoneMobileIcon,
    name: 'Mobile apps',
    text: 'iOS and Android apps from one codebase, from prototype to store release.',
    tech: 'Flutter · React Native',
  },
  {
    id: 'erp',
    Icon: Squares2X2Icon,
    name: 'Odoo ERP',
    text: 'Sales, stock, accounting, HR and manufacturing on a single system.',
    tech: 'Odoo 17/18 · Python · PostgreSQL',
  },
  {
    id: 'agents',
    Icon: CpuChipIcon,
    name: 'AI agents',
    text: 'Agents that read your data, use your tools and finish real tasks with human approval.',
    tech: 'LLMs · RAG · Tool use',
  },
  {
    id: 'chatbot',
    Icon: ChatBubbleLeftRightIcon,
    name: 'Chatbots',
    text: 'Arabic and English bots on WhatsApp and web, connected to your CRM.',
    tech: 'WhatsApp · OpenAI · LangChain',
  },
  {
    id: 'cloud',
    Icon: CloudArrowUpIcon,
    name: 'Hosting & DevOps',
    text: 'Managed hosting, CI/CD, backups and monitoring so releases stay uneventful.',
    tech: 'AWS · Docker · Cloudflare',
  },
];

/** Carbon tile grid: 1px gaps, whole tile is the link, arrow bottom-right. */
export function ServicesSection() {
  return (
    <section
      className="section-padding bg-white dark:bg-[#161616]"
      aria-labelledby="services-title"
    >
      <div className="container-custom mx-auto">
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <h2
            id="services-title"
            className="text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Anything you need in the tech world, built end to end.
          </h2>
          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300 lg:justify-self-end">
            Pick one service or combine them. Each page below shows how we deliver it.
          </p>
        </div>
        <ul className="grid gap-px bg-slate-200 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, Icon, name, text, tech }) => (
            <li key={id} className="bg-white dark:bg-[#161616]">
              <Link
                href={`${RouteConstants.SERVICES}#${id}`}
                className="group relative flex min-h-[280px] flex-col p-6 pb-16 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Icon className="h-8 w-8 text-orange-600 dark:text-orange-400" strokeWidth={1.5} />
                <h3 className="mt-8 text-xl text-slate-900 dark:text-white">{name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {text}
                </p>
                <p className="mt-4 font-mono text-xs text-slate-500">{tech}</p>
                <ArrowRightIcon className="absolute bottom-6 right-6 h-5 w-5 text-slate-900 transition-transform group-hover:translate-x-1 dark:text-white" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
