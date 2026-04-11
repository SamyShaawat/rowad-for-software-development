'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, CompanyConstants, FooterConstants, NavigationConstants } from '@constants';

const navLinks = {
  company: [
    { name: NavigationConstants.HOME, href: RouteConstants.HOME },
    { name: NavigationConstants.ABOUT_US, href: RouteConstants.ABOUT },
    { name: NavigationConstants.SERVICES, href: RouteConstants.SERVICES },
    { name: NavigationConstants.CONTACT, href: RouteConstants.CONTACT },
  ],
  services: [
    { name: 'Website Development', href: `${RouteConstants.SERVICES}#development` },
    { name: 'Web Hosting', href: `${RouteConstants.SERVICES}#hosting` },
    { name: 'Mobile Development', href: `${RouteConstants.SERVICES}#mobile` },
    { name: 'Digital Marketing', href: `${RouteConstants.SERVICES}#marketing` },
  ],
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: CompanyConstants.LINKEDIN,
    color: 'hover:text-[#0077b5] hover:bg-[#0077b5]/10',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: CompanyConstants.FACEBOOK,
    color: 'hover:text-[#1877f2] hover:bg-[#1877f2]/10',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: CompanyConstants.WHATSAPP,
    color: 'hover:text-[#25d366] hover:bg-[#25d366]/10',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#070710] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors pt-20">
      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* ── Brand & Description ── */}
          <div className="lg:col-span-1 space-y-8">
            <Link href={RouteConstants.HOME} className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Image
                  priority
                  src="/images/RowadLogo/Rowad_Icon_Round.png"
                  alt="Rowad Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-baseline tracking-tighter">
                <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                  R
                </span>
                <span className="font-heading font-bold text-2xl text-orange-500">O</span>
                <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                  WAD
                </span>
              </div>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
              {FooterConstants.DESCRIPTION}
            </p>

            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 ${s.color} transition-all duration-300 hover:scale-110 shadow-sm`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Exploration Links ── */}
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-6 text-xs uppercase tracking-[0.2em]">
              Explore
            </h3>
            <ul className="space-y-4">
              {navLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-orange-500 text-sm font-medium transition-all flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-[0.2em]">
              Stay Updated
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Subscribe to our newsletter for latest tech insights and company news.
            </p>
            <form
              className="relative group"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-4 pr-12 py-3 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* ── Reach Us ── */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-[0.2em]">
              Reach Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-sm">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                  <PhoneIcon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    Call Center
                  </span>
                  <a
                    href={`tel:${CompanyConstants.PHONE_HREF}`}
                    className="hover:text-orange-500 font-bold transition-colors"
                  >
                    {CompanyConstants.PHONE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    Inquiries
                  </span>
                  <a
                    href={`mailto:${CompanyConstants.EMAIL}`}
                    className="hover:text-orange-500 font-bold transition-colors truncate max-w-[180px]"
                  >
                    {CompanyConstants.EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-sm">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <MapPinIcon className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    Main Office
                  </span>
                  <a
                    href={CompanyConstants.MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500 font-bold transition-colors"
                  >
                    {CompanyConstants.LOCATION}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Final Credits ── */}
        <div className="border-t border-slate-200 dark:border-white/[0.06] pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-widest text-center md:text-left">
                © {currentYear} {CompanyConstants.FULL_NAME}
              </p>
              <p className="text-slate-400 text-[10px] mt-1">Handcrafted with passion globally</p>
            </div>

            <div className="flex gap-8">
              <Link
                href="#"
                className="text-slate-500 hover:text-orange-500 text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-orange-500 text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-orange-500 text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                Support
              </Link>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                System Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 opacity-20" />
    </footer>
  );
}
