'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import {
  RouteConstants,
  CompanyConstants,
  FooterConstants,
  NavigationConstants,
} from '@/constants';

const navLinks = {
  company: [
    { name: NavigationConstants.HOME,     href: RouteConstants.HOME },
    { name: NavigationConstants.ABOUT_US, href: RouteConstants.ABOUT },
    { name: NavigationConstants.SERVICES, href: RouteConstants.SERVICES },
    { name: NavigationConstants.CONTACT,  href: RouteConstants.CONTACT },
  ],
  services: [
    { name: 'Website Development', href: `${RouteConstants.SERVICES}#development` },
    { name: 'Web Hosting',         href: `${RouteConstants.SERVICES}#hosting` },
    { name: 'Mobile Development',  href: `${RouteConstants.SERVICES}#mobile` },
    { name: 'Digital Marketing',   href: `${RouteConstants.SERVICES}#marketing` },
  ],
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rowad-for-software-development',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/rowad',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/201091539396',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070710] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <Link href={RouteConstants.HOME} className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/images/RowadLogo/Rowad_Icon_Round.png"
                  alt="Rowad Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="flex items-baseline">
                <span className="font-heading font-bold text-2xl text-white">R</span>
                <span className="font-heading font-bold text-2xl text-orange-500">O</span>
                <span className="font-heading font-bold text-2xl text-white">WAD</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {FooterConstants.DESCRIPTION}
            </p>

            {/* Contact snippets */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <PhoneIcon className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href={`tel:${CompanyConstants.PHONE}`} className="hover:text-orange-400 transition-colors">
                  {CompanyConstants.PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <EnvelopeIcon className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href={`mailto:${CompanyConstants.EMAIL}`} className="hover:text-orange-400 transition-colors">
                  {CompanyConstants.EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPinIcon className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{CompanyConstants.LOCATION}</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-orange-400 hover:bg-orange-500/15 hover:border-orange-500/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Company links ── */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3">
              {navLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500/0 group-hover:bg-orange-500 transition-all duration-200 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services links ── */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-3">
              {navLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500/0 group-hover:bg-orange-500 transition-all duration-200 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              {FooterConstants.NEWSLETTER_TITLE}
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {FooterConstants.NEWSLETTER_DESCRIPTION}
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                id="footer-email"
                placeholder={FooterConstants.NEWSLETTER_PLACEHOLDER}
                className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30 transition-all"
              />
              <button
                type="submit"
                className="w-full btn-primary text-sm py-2.5"
              >
                {FooterConstants.NEWSLETTER_BUTTON}
              </button>
            </form>
          </div>
        </div>

        {/* ── Divider + bottom bar ── */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} {CompanyConstants.FULL_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-500 hover:text-orange-400 text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-500 hover:text-orange-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
