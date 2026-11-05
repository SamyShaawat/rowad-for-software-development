import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { RouteConstants, ContactConstants, CompanyConstants } from '@constants';
import ContactForm from '@/features/contact/components/ContactForm';
import { contactMetadata } from './metadata';

export const metadata: Metadata = contactMetadata;

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: CompanyConstants.PHONE,
    subtext: CompanyConstants.WORKING_HOURS,
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: CompanyConstants.EMAIL,
    subtext: 'We reply within 24 hours',
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    content: CompanyConstants.LOCATION,
    subtext: 'Available for in-person meetings by appointment',
  },
  {
    icon: ClockIcon,
    title: 'Working Hours',
    content: CompanyConstants.WORKING_HOURS,
    subtext: CompanyConstants.WEEKEND,
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Standard websites take 2–6 weeks. Mobile apps, Odoo implementations and AI agents usually take 6–12 weeks depending on scope and integrations. You get a firm estimate after the first call.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'Because every project is unique, we provide custom quotes based on your specific requirements, timeline, and requested features. Contact us to schedule a free initial consultation.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes! We offer flexible maintenance packages for routine updates and backups, and 24/7 priority support for clients on our managed hosting plans.',
  },
  {
    q: 'Can you work alongside our existing team?',
    a: 'Absolutely! We regularly collaborate with in-house developers, designers, and marketing teams to augment your capabilities and accelerate project delivery.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you want to build.">
        {ContactConstants.SUBTITLE}
      </PageHero>

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {ContactConstants.FORM_TITLE}
            </h2>
            <p className="mb-8 mt-2 text-slate-600 dark:text-slate-400">
              {ContactConstants.FORM_SUBTITLE}
            </p>
            <div className="rounded-xl border border-slate-200 p-6 dark:border-white/10 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {ContactConstants.CONTACT_INFO_TITLE}
            </h2>
            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
              {contactInfo.map((item) => (
                <li key={item.title} className="flex gap-4 py-5">
                  <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-orange-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-slate-700 dark:text-slate-300">{item.content}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{item.subtext}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`tel:${CompanyConstants.PHONE_HREF}`} className="btn-primary">
                {ContactConstants.CTA_BUTTON}
              </Link>
              <Link
                href={CompanyConstants.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </Link>
            </div>
            <a
              href={CompanyConstants.MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-custom mx-auto">
          <p className="section-badge mb-3">FAQ</p>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            {ContactConstants.FAQ_TITLE}
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-slate-300 pt-5 dark:border-white/15">
                <dt className="font-bold text-slate-900 dark:text-white">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
