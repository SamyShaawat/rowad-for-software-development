import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import {
  RouteConstants,
  AboutConstants,
  CompanyConstants,
  StatsConstants,
  CommonConstants,
  HeroConstants,
} from '@constants';
import { aboutMetadata } from './metadata';

export const metadata: Metadata = aboutMetadata;

const values = [
  {
    name: 'Innovation',
    description: 'We embrace cutting-edge technologies to craft future-proof solutions.',
    icon: LightBulbIcon,
    color: 'text-amber-400',
  },
  {
    name: 'Quality',
    description: 'Code architecture, precise design, and comprehensive testing.',
    icon: ShieldCheckIcon,
    color: 'text-blue-400',
  },
  {
    name: 'Collaboration',
    description: 'Your success is our success. We partner closely with your team.',
    icon: UserGroupIcon,
    color: 'text-green-400',
  },
  {
    name: 'Integrity',
    description: 'Honest communication, transparent pricing, and ethical practices.',
    icon: HeartIcon,
    color: 'text-rose-400',
  },
];

const whatWeOffer = [
  'Custom Software Development',
  'Web & Mobile Applications',
  'Cloud Infrastructure setup',
  'UI/UX Prototyping & Design',
  'QA Automation & Testing',
  'Maintenance & 24/7 Support',
  'Technical Architecture Consulting',
  'Digital Transformation Strategy',
  'Agile Team Training',
];

export default function AboutPage() {
  const stats = StatsConstants as unknown as typeof StatsConstants;

  return (
    <div className="pt-20 bg-white dark:bg-[#0a0a0f] transition-colors">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-[80%] bg-gradient-to-br from-orange-500/10 to-amber-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none opacity-50" />

        <div className="container-custom mx-auto px-4 relative z-10 text-center">
          <span className="section-badge mb-6 tracking-widest uppercase text-orange-400 border-orange-500/20 bg-orange-500/10 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold">
            Discover {CompanyConstants.NAME}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-8 transition-colors">
            Your Strategic Partner <br className="hidden sm:block" />
            in <span className="gradient-text">Digital Excellence</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 transition-colors">
            We exist to bridge the gap between complex business challenges and elegant, scalable
            digital technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={RouteConstants.CONTACT} className="btn-primary">
              Work With Us
            </Link>
            <Link href={RouteConstants.SERVICES} className="btn-secondary">
              {HeroConstants.SECONDARY_CTA}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="relative border-y border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#0d0d1a] transition-colors">
        <div className="container-custom mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card glow-sm border border-white/[0.08]">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="w-24 h-24 mb-6 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center relative overflow-hidden">
                    <Image
                      src="/images/RowadLogo/Rowad_Icon_Round.png"
                      alt="Icon"
                      width={64}
                      height={64}
                      className="object-contain w-16 h-16 opacity-80 mix-blend-screen"
                    />
                  </div>
                  <SparklesIcon className="w-8 h-8 text-orange-400 absolute top-8 right-8 animate-pulse" />
                  <p className="text-white/30 font-heading font-bold text-9xl absolute -bottom-10 -left-10 select-none pointer-events-none">
                    RW
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="section-badge">Our Story</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
                {AboutConstants.OUR_STORY_TITLE}
              </h2>
              <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-lg transition-colors">
                <p>
                  Founded with a vision to bridge the gap between businesses and sophisticated
                  digital technology, {CompanyConstants.NAME} has rapidly grown into a trusted
                  partner across the region.
                </p>
                <p>
                  We are a team of dedicated professionals committed to delivering top-notch digital
                  solutions. With a rich history of innovation and excellence, we have transformed
                  numerous ideas into successful projects.
                </p>
                <p>
                  We are your partner in digital growth — specializing in reliable and secure web
                  hosting, website development and deployment, and innovative digital marketing
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden group p-10 sm:p-14 rounded-[2rem] glass-card border border-orange-500/20 bg-gradient-to-br from-white to-orange-500/[0.02] dark:from-[#0d0d1a] dark:to-orange-500/[0.02] hover:border-orange-500/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              <TrophyIcon className="w-14 h-14 text-orange-500 mb-8" />
              <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                {AboutConstants.MISSION_TITLE}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md transition-colors">
                {' '}
                Our mission is to empower businesses with cutting-edge digital solutions that drive
                growth and success. We strive to deliver exceptional value through our expertise,
                innovation, and commitment to excellence.
              </p>
            </div>

            <div className="relative overflow-hidden group p-10 sm:p-14 rounded-[2rem] glass-card border border-blue-500/20 bg-gradient-to-br from-white to-blue-500/[0.02] dark:from-[#0d0d1a] dark:to-blue-500/[0.02] hover:border-blue-500/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <SparklesIcon className="w-14 h-14 text-blue-500 mb-8" />
              <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                {AboutConstants.VISION_TITLE}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md transition-colors">
                {' '}
                To be a global leader in digital solutions, recognized for innovation, quality, and
                a customer-centric approach — where every business can achieve its full potential
                through the power of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-padding relative bg-slate-50 dark:bg-[#0d0d1a] border-y border-slate-200 dark:border-white/[0.06] transition-colors">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="section-badge mb-4">Core Principles</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
              {AboutConstants.CORE_VALUES_TITLE}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl transition-colors">
              These shared values define our culture, guide our decisions, and drive how we build
              products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.name}
                className="p-8 rounded-2xl glass-card hover:bg-white/[0.06] transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] mb-6 ${v.color}`}
                >
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                  {v.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm transition-colors">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Offer Grid ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0,transparent_70%)] pointer-events-none" />
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="section-badge mb-4">Expertise</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
              {AboutConstants.WHAT_WE_OFFER_TITLE}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">
              Beyond code, we deliver comprehensive, end-to-end solutions that cover the entire
              product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
            {whatWeOffer.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 lg:p-5 rounded-xl glass-card border-l-4 border-l-orange-500/50"
              >
                <CheckCircleIcon className="w-6 h-6 text-orange-500 shrink-0" />
                <span className="text-slate-800 dark:text-slate-300 font-medium transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-padding relative bg-orange-600 overflow-hidden text-center">
        {/* Abstract pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83-54.627 54.628L0 54.628 54.627 0zm-17.5 0l.83.83-37.127 37.128L0 37.128 37.127 0zm-17.5 0l.83.83-19.627 19.628L0 19.628 19.627 0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="container-custom mx-auto relative z-10 py-10 lg:py-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
            Whether you&apos;re looking to launch a startup or scale an enterprise, we&apos;re ready
            for the challenge.
          </p>
          <div className="flex justify-center">
            <Link
              href={RouteConstants.CONTACT}
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-orange-600 font-bold py-4 px-10 rounded-full shadow-2xl transition-all transform hover:scale-105"
            >
              {CommonConstants.LEARN_MORE}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
