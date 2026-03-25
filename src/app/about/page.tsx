import type { Metadata } from 'next';
import Link from 'next/link';
import { LightBulbIcon, ShieldCheckIcon, UserGroupIcon, TrophyIcon, HeartIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { RouteConstants, AboutConstants, CompanyConstants, StatsConstants, CommonConstants, HeroConstants } from '@/constants';

export const metadata: Metadata = { title: `About Us | ${CompanyConstants.FULL_NAME}`, description: `Learn about ${CompanyConstants.NAME} - your trusted partner in digital transformation.` };

const values = [
  { name: 'Innovation', description: 'We embrace cutting-edge technologies.', icon: LightBulbIcon },
  { name: 'Quality', description: 'Excellence is non-negotiable.', icon: ShieldCheckIcon },
  { name: 'Collaboration', description: 'Your success is our success.', icon: UserGroupIcon },
  { name: 'Integrity', description: 'Honesty and transparency guide us.', icon: HeartIcon },
];

const whatWeOffer = ['Custom Software Development', 'Web & Mobile Applications', 'Cloud Infrastructure', 'UI/UX Design', 'QA & Testing', 'Maintenance & Support', 'Technical Consulting', 'Digital Strategy', 'Team Training'];

export default function AboutPage() {
  const stats = StatsConstants as unknown as typeof StatsConstants;

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 py-20 md:py-32 overflow-hidden">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">About {CompanyConstants.NAME}</h1>
            <p className="text-xl text-white/90 mb-8">We&apos;re your strategic partner in digital transformation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={RouteConstants.CONTACT} className="btn-primary bg-white text-primary-700 hover:bg-secondary-100">Work With Us</Link>
              <Link href={RouteConstants.SERVICES} className="btn-secondary border-white text-white hover:bg-white/10">{HeroConstants.SECONDARY_CTA}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="heading-2 text-secondary-900 mb-6">{AboutConstants.OUR_STORY_TITLE}</h2>
              <div className="space-y-4 text-secondary-700">
                <p>Founded to bridge the gap between businesses and digital technology, {CompanyConstants.NAME} has grown to a trusted partner across the Middle East.</p>
                <p>We believe technology should empower businesses, not complicate them.</p>
                <p>We&apos;ve worked with startups, SMEs, and enterprises across various industries.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <SparklesIcon className="h-48 w-48 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-10 text-white shadow-xl">
              <TrophyIcon className="h-12 w-12 mb-6 text-white/80" />
              <h3 className="heading-3 mb-4">{AboutConstants.MISSION_TITLE}</h3>
              <p className="text-white/90">To empower businesses with innovative digital solutions that drive growth and competitive advantage.</p>
            </div>
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl p-8 md:p-10 text-white shadow-xl">
              <SparklesIcon className="h-12 w-12 mb-6 text-white/80" />
              <h3 className="heading-3 mb-4">{AboutConstants.VISION_TITLE}</h3>
              <p className="text-white/90">To be the leading digital transformation partner recognized for technical excellence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-secondary-900 mb-4">{AboutConstants.CORE_VALUES_TITLE}</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">These principles guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="heading-3 text-secondary-900 mb-3">{value.name}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-secondary-900 mb-4">{AboutConstants.WHAT_WE_OFFER_TITLE}</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">Beyond code, we deliver comprehensive solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((item) => (
              <div key={item} className="flex items-center space-x-3 p-4 bg-secondary-50 rounded-lg">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <span className="text-secondary-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-700 to-accent-600">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Let&apos;s Build Something Great Together</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Ready to start your digital transformation journey?</p>
          <Link href={RouteConstants.CONTACT} className="btn-primary bg-white text-primary-700 hover:bg-secondary-100">{CommonConstants.LEARN_MORE}</Link>
        </div>
      </section>
    </div>
  );
}
