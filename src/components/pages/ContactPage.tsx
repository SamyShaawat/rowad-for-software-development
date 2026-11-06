import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { CTASection } from '@/components/sections/CTASection';
import { PageHero } from '@/components/ui/PageHero';
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
      <PageHero eyebrow={p.eyebrow} title={p.title}>
        {p.intro}
      </PageHero>

      <section className="section-padding bg-white dark:bg-[#161616]">
        <div className="container-custom mx-auto grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {p.messageTitle}
            </h2>
            <p className="mb-8 mt-2 text-slate-600 dark:text-slate-400">{p.messageBody}</p>
            <div className="flex flex-wrap gap-3 rounded-xl border border-slate-200 p-6 dark:border-white/10 sm:p-8">
              <a
                href={CompanyConstants.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {p.whatsapp}
              </a>
              <a href={`mailto:${CompanyConstants.EMAIL}`} className="btn-secondary">
                <bdi dir="ltr">{CompanyConstants.EMAIL}</bdi>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{p.infoTitle}</h2>
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
            </div>
            <a
              href={CompanyConstants.MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6"
            >
              {p.openMaps} <span className="inline-block rtl:rotate-180">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-custom mx-auto">
          <p className="section-badge mb-3">{p.faqBadge}</p>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            {p.faqTitle}
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {p.faqs.map((f) => (
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
      <CTASection locale={locale} />
    </>
  );
}
