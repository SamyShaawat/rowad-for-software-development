'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { RouteConstants, AboutConstants, StatsConstants } from '@constants';

const features = [
  {
    name: 'Innovation First',
    description: 'We leverage cutting-edge technologies and modern approaches to future-proof your digital presence.',
    icon: LightBulbIcon,
    color: 'from-orange-500/20 to-amber-500/10 border-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    name: 'Quality Assured',
    description: 'Rigorous testing and code review ensures flawless, production-ready delivery every time.',
    icon: ShieldCheckIcon,
    color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    name: 'Client Focused',
    description: 'Your goals drive our process — transparent communication from kickoff to launch and beyond.',
    icon: UserGroupIcon,
    color: 'from-violet-500/20 to-purple-500/10 border-violet-500/20',
    iconColor: 'text-violet-400',
  },
];

export function AboutSection() {
  const stats = StatsConstants as unknown as typeof StatsConstants;

  return (
    <section className="relative section-padding bg-[#0a0a0f] overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.15 }}
          >
            <span className="section-badge mb-6">Why Choose Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {AboutConstants.TITLE}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
              {AboutConstants.SUBTITLE}
            </p>

            {/* Feature cards */}
            <div className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: i * 0.02 }}
                  className={`flex items-start gap-4 p-4 sm:p-5 rounded-2xl border bg-gradient-to-br ${feature.color} backdrop-blur-sm transition-all duration-300 hover:scale-[1.01]`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center ${feature.iconColor}`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{feature.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href={RouteConstants.ABOUT} className="btn-primary">
                {AboutConstants.CTA}
              </Link>
              <Link href={RouteConstants.CONTACT} className="btn-secondary">
                Schedule a Call
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Stats grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.15 }}
            className="relative"
          >
            {/* Decorative glow behind stat grid */}
            <div className="absolute inset-0 bg-orange-500/[0.06] rounded-3xl blur-3xl" />

            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: i * 0.02 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="relative rounded-2xl p-6 sm:p-8 glass-card border overflow-hidden transition-all duration-400"
                >
                  {/* Inner gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-40 ${
                      i === 0 ? 'from-orange-500/15 to-transparent' :
                      i === 1 ? 'from-blue-500/15 to-transparent' :
                      i === 2 ? 'from-violet-500/15 to-transparent' :
                      'from-green-500/15 to-transparent'
                    }`}
                  />
                  <div className="relative">
                    <div className="font-heading text-4xl sm:text-5xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Logo watermark */}
            <div className="relative mt-6 rounded-2xl glass-card p-6 flex items-center gap-5 border border-white/[0.08]">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image priority
                  src="/images/RowadLogo/Rowad_Icon_Round.png"
                  alt="Rowad"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg">Rowad Tech</p>
                <p className="text-slate-400 text-sm">Your trusted digital partner since day one</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
