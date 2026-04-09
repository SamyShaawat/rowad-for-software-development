'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, ServicesConstants } from '@constants';

const services = [
  {
    id: 'web-dev',
    name: 'Website Development',
    tagline: 'Custom-built for growth',
    description: 'We create modern, responsive websites that are fast, beautiful, and optimized for conversions.',
    features: ['Responsive Design', 'SEO Optimized', 'E-Commerce', 'API Integration'],
    technologies: ['Next.js', 'React', 'TypeScript'],
    icon: '/images/servicesImages/WebDevelopment.png',
    gradient: 'from-orange-500/20 to-amber-500/10',
    accentColor: 'text-orange-500',
    borderColor: 'border-slate-200 dark:border-orange-500/20 hover:border-orange-500/50',
    glowColor: 'hover:shadow-xl shadow-slate-200/50 dark:hover:shadow-[0_20px_60px_-10px_rgba(249,115,22,0.25)]',
    comingSoon: false,
  },
  {
    id: 'hosting',
    name: 'Web Hosting',
    tagline: 'Reliable & always online',
    description: 'Premium hosting solutions with 99.9% uptime, SSL certificates, and round-the-clock support.',
    features: ['99.9% Uptime', 'Free SSL', 'DDoS Protection', '24/7 Monitoring'],
    technologies: ['AWS', 'Cloudflare', 'Docker'],
    icon: '/images/servicesImages/WebHosting.png',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accentColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-slate-200 dark:border-blue-500/20 hover:border-blue-500/50',
    glowColor: 'hover:shadow-xl shadow-slate-200/50 dark:hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.2)]',
    comingSoon: false,
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    tagline: 'iOS & Android apps',
    description: 'Cross-platform mobile applications that deliver seamless user experiences on every device.',
    features: ['iOS & Android', 'Offline Support', 'Push Notifications', 'Analytics'],
    technologies: ['React Native', 'Flutter', 'Expo'],
    icon: '/images/servicesImages/MobileDevelopment1.png',
    gradient: 'from-violet-500/20 to-purple-500/10',
    accentColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-slate-200 dark:border-violet-500/20 hover:border-violet-500/50',
    glowColor: 'hover:shadow-xl shadow-slate-200/50 dark:hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.2)]',
    comingSoon: false,
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    tagline: 'Grow your audience',
    description: 'Data-driven marketing strategies to boost your online presence and drive qualified traffic.',
    features: ['SEO', 'Social Media', 'PPC Ads', 'Analytics'],
    technologies: ['Google Ads', 'Facebook Ads', 'SEMrush'],
    icon: '/images/servicesImages/DigitalMarketing.png',
    gradient: 'from-pink-500/20 to-rose-500/10',
    accentColor: 'text-pink-600 dark:text-pink-400',
    borderColor: 'border-slate-200 dark:border-pink-500/20 hover:border-pink-500/50',
    glowColor: 'hover:shadow-xl shadow-slate-200/50 dark:hover:shadow-[0_20px_60px_-10px_rgba(236,72,153,0.2)]',
    comingSoon: true,
  },
  {
    id: 'ai-chatbots',
    name: 'AI Chat Bots',
    tagline: 'Automate conversations',
    description: 'Intelligent AI-powered chatbots that engage customers and automate support around the clock.',
    features: ['NLP', '24/7 Availability', 'CRM Integration', 'Analytics'],
    technologies: ['OpenAI', 'LangChain', 'Python'],
    icon: '/images/servicesImages/AIChatBot.png',
    gradient: 'from-green-500/20 to-emerald-500/10',
    accentColor: 'text-green-600 dark:text-green-400',
    borderColor: 'border-slate-200 dark:border-green-500/20 hover:border-green-500/50',
    glowColor: 'hover:shadow-xl shadow-slate-200/50 dark:hover:shadow-[0_20px_60px_-10px_rgba(34,197,94,0.2)]',
    comingSoon: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: 'easeOut' } },
};

export function ServicesSection() {
  return (
    <section className="relative section-padding bg-white dark:bg-[#0d0d1a] overflow-hidden transition-colors">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed transition-colors">
            {ServicesConstants.SUBTITLE}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`relative group rounded-2xl border bg-slate-50 dark:bg-white/[0.03] backdrop-blur-sm
                          \${service.borderColor} \${service.glowColor}
                          transition-all duration-500 overflow-hidden
                          \${service.comingSoon ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {/* Coming soon ribbon */}
              {service.comingSoon && (
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  Coming Soon
                </div>
              )}

              {/* Card inner gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 sm:p-7">
                {/* Icon */}
                <div className="mb-5 w-16 h-16 rounded-2xl bg-white dark:bg-white/[0.06] border border-slate-100 dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-sm">
                  <Image 
                    src={service.icon}
                    alt={service.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Title + tagline */}
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${service.accentColor}`}>
                  {service.tagline}
                </p>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:gradient-text transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 transition-colors">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full \${service.accentColor.replace('text-', 'bg-').split(' ')[0]} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-slate-200/50 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 text-[10px] font-medium transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                {!service.comingSoon && (
                  <Link
                    href={RouteConstants.SERVICES}
                    className={`btn-ghost text-sm font-semibold ${service.accentColor}`}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15, delay: 0.02 }}
          className="text-center mt-14"
        >
          <Link href={RouteConstants.CONTACT} className="btn-primary">
            {ServicesConstants.CTA}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
