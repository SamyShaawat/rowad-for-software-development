import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { CTASection } from '@/components/sections/CTASection';
import { PageHero } from '@/components/ui/PageHero';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { CompanyConstants } from '@constants';
import { getDictionary, type Locale } from '@/i18n';

/** Contact page body, shared by the English route (/contact) and the Arabic route (/ar/contact). */
export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.contactPage;

  // Phone and email stay left-to-right inside Arabic text (bdi), so + and @ do not jump around.
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: p.cards.phone.title,
      content: <bdi dir="ltr">{CompanyConstants.PHONE}</bdi>,
      subtext: t.company.workingHours,
    },
    {
      icon: EnvelopeIcon,
      title: p.cards.email.title,
      content: <bdi dir="ltr">{CompanyConstants.EMAIL}</bdi>,
      subtext: p.cards.email.note,
    },
    {
      icon: MapPinIcon,
      title: p.cards.office.title,
      content: t.company.location,
      subtext: p.cards.office.note,
    },
    {
      icon: ClockIcon,
      title: p.cards.hours.title,
      content: t.company.workingHours,
      subtext: t.company.weekend,
    },
  ];

  return (
    <>
      <PageHero title={p.title}>{p.intro}</PageHero>

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Message card: solid ink panel, one orange bar, two large actions */}
          <div className="self-start lg:sticky lg:top-28 lg:order-2 lg:col-span-5">
            <div className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-900 p-8 text-white dark:bg-white/[0.05] dark:ring-1 dark:ring-white/10 sm:p-10">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-orange-500" />
              <h2 className="mt-2 text-3xl font-light leading-tight sm:text-4xl">
                {p.messageTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{p.messageBody}</p>
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={CompanyConstants.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-orange-500 px-6 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-orange-400"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {p.whatsapp}
                </a>
                <a
                  href={`mailto:${CompanyConstants.EMAIL}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-6 py-4 text-base font-semibold text-white transition-colors hover:border-white"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  <bdi dir="ltr">{CompanyConstants.EMAIL}</bdi>
                </a>
              </div>
            </div>
          </div>

          {/* Details: four tiles, then the quick actions */}
          <div className="lg:order-1 lg:col-span-7">
            <h2 className="text-3xl font-light text-slate-900 dark:text-white sm:text-4xl">
              {p.infoTitle}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-sm text-slate-500 dark:text-slate-400">{item.title}</h3>
                  <p className="mt-1 text-balance text-lg font-medium leading-snug text-slate-900 dark:text-white">
                    {item.content}
                  </p>
                  <p className="mt-2 text-balance text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.subtext}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href={`tel:${CompanyConstants.PHONE_HREF}`} className="btn-primary">
                {p.callNow}
              </Link>
              <Link
                href={CompanyConstants.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {p.whatsapp}
              </Link>
              <a
                href={CompanyConstants.MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {p.openMaps} <span className="inline-block rtl:rotate-180">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-custom mx-auto grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-3xl font-light leading-tight text-slate-900 dark:text-white sm:text-4xl lg:col-span-4">
            {p.faqTitle}
          </h2>
          {/* Native <details>: no JavaScript, keyboard and screen-reader friendly, answers stay in the HTML */}
          <div className="space-y-3 lg:col-span-8">
            {p.faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-2xl border border-slate-200 bg-white transition-colors open:border-orange-400 dark:border-white/10 dark:bg-white/[0.03] dark:open:border-orange-400/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-lg font-medium text-slate-900 marker:hidden dark:text-white [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-100 text-orange-600 transition-transform duration-200 group-open:rotate-45 dark:bg-orange-500/15 dark:text-orange-400">
                    <PlusIcon className="h-5 w-5" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
