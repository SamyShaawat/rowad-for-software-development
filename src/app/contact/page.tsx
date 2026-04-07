import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import {
  RouteConstants,
  ContactConstants,
  CompanyConstants,
} from '@constants';
import ContactForm from '@/features/contact/components/ContactForm';

export const metadata: Metadata = {
  title: `Contact Us | ${CompanyConstants.FULL_NAME}`,
  description: ContactConstants.SUBTITLE,
};

const contactInfo = [
  { icon: PhoneIcon, title: 'Phone', content: CompanyConstants.PHONE, subtext: CompanyConstants.WORKING_HOURS },
  { icon: EnvelopeIcon, title: 'Email', content: CompanyConstants.EMAIL, subtext: 'We reply within 24 hours' },
  { icon: MapPinIcon, title: 'Office', content: CompanyConstants.LOCATION, subtext: 'Available for in-person meetings by appointment' },
  { icon: ClockIcon, title: 'Working Hours', content: CompanyConstants.WORKING_HOURS, subtext: CompanyConstants.WEEKEND },
];

const faqs = [
  { q: 'How long does a typical website project take?', a: 'Most standard websites take 2–6 weeks from kickoff to launch. More complex applications or e-commerce platforms typically require 6–12 weeks depending on features and integrations.' },
  { q: 'What is your pricing structure?', a: 'Because every project is unique, we provide custom quotes based on your specific requirements, timeline, and requested features. Contact us to schedule a free initial consultation.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! We offer flexible maintenance packages for routine updates and backups, and 24/7 priority support for clients on our managed hosting plans.' },
  { q: 'Can you work alongside our existing team?', a: 'Absolutely! We regularly collaborate with in-house developers, designers, and marketing teams to augment your capabilities and accelerate project delivery.' },
];

export default function ContactPage() {
  return (
    <div className="pt-20 bg-[#0a0a0f]">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/[0.06]">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/5 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="container-custom mx-auto px-4 relative z-10 text-center">
          <span className="section-badge mb-6 tracking-widest text-orange-400 border-orange-500/20 bg-orange-500/10">
            Let&apos;s Talk
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
            Get in <span className="gradient-text italic">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {ContactConstants.SUBTITLE}
          </p>
        </div>
      </section>

      {/* ── Contact Layout ── */}
      <section className="section-padding bg-[#0d0d1a]">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                  {ContactConstants.FORM_TITLE}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {ContactConstants.FORM_SUBTITLE}
                </p>
              </div>

              {/* Form Component inside Glass Card */}
              <div className="glass-card p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12 lg:pt-2">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-3">
                  {ContactConstants.CONTACT_INFO_TITLE}
                </h2>
                <p className="text-slate-400">
                  {ContactConstants.CONTACT_INFO_SUBTITLE}
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-[1.25rem] glass-card border border-white/[0.06] hover:bg-white/[0.04] hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex flex-shrink-0 items-center justify-center">
                      <item.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white mb-1.5">{item.title}</h3>
                      <p className="text-orange-400 font-medium text-sm mb-1">{item.content}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal Map Box */}
              <div className="relative h-48 md:h-56 w-full rounded-[1.5rem] bg-[#141424] border border-white/[0.06] flex items-center justify-center overflow-hidden group">
                {/* Simulated map grid overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="text-center relative z-10 px-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <MapPinIcon className="h-7 w-7 text-white" />
                  </div>
                  <p className="font-heading font-bold text-white tracking-wide text-sm">{CompanyConstants.LOCATION}</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section-padding bg-[#0a0a0f] border-t border-white/[0.06]">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="section-badge mb-4">Support</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {ContactConstants.FAQ_TITLE}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {ContactConstants.FAQ_SUBTITLE}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-card border border-white/[0.06] hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 font-heading font-black text-2xl leading-none mt-1 opacity-70">
                    Q.
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white mb-4 leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/[0.1] pl-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-padding relative overflow-hidden text-center bg-[#070710] border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0,transparent_50%)] pointer-events-none" />
        <div className="container-custom mx-auto relative z-10 py-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {ContactConstants.CTA_TITLE}
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            {ContactConstants.CTA_SUBTITLE}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`tel:${CompanyConstants.PHONE_HREF}`}
              className="btn-primary"
            >
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
        </div>
      </section>
    </div>
  );
}
