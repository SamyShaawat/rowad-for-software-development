'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { RouteConstants, HeroConstants, StatsConstants } from '@constants';
import type { StatItem } from '@types';

export function HeroSection() {
  const stats: StatItem[] = StatsConstants as unknown as StatItem[];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0f] pt-20 transition-colors">
      {/* ── Multi-layer background ── */}
      <div className="absolute inset-0">
        {/* Radial hero glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(249,115,22,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(249,115,22,0.12)_0%,transparent_70%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Animated background orbs ── */}
      <motion.div
        animate={{ y: [0, -24, 0], x: [0, 8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-[8%] w-80 h-80 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 0.21, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-24 right-[6%] w-96 h-96 bg-orange-600/8 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      {/* ── Content ── */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 section-badge mb-8"
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              Transforming Ideas into Reality
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.02 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-slate-900 dark:text-white mb-6 transition-colors"
            >
              {HeroConstants.TITLE_PART_1}
              <br />
              <span className="gradient-text">{HeroConstants.TITLE_PART_2}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.02 }}
              className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl transition-colors"
            >
              {HeroConstants.SUBTITLE}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.02 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link href={RouteConstants.CONTACT} className="btn-primary group">
                {HeroConstants.PRIMARY_CTA}
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href={RouteConstants.SERVICES} className="btn-secondary">
                {HeroConstants.SECONDARY_CTA}
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.02 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200 dark:border-white/[0.06] pt-8 transition-colors"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: 0.02 + i * 0.08 }}
                  className="text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.02 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Outer ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-orange-500/10 animate-spin-slow" />
            <div className="absolute w-[340px] h-[340px] rounded-full border border-orange-500/15 animate-[spin_12s_linear_reverse_infinite]" />

            {/* Logo card */}
            <div className="relative z-10 w-72 h-72 rounded-[2.5rem] overflow-hidden glass-card glow-orange flex items-center justify-center border-slate-200 dark:border-white/[0.08] shadow-2xl shadow-orange-500/10 dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
              <Image
                src="/images/RowadLogo/Rowad_Logo_Main.png"
                alt="Rowad For Software Development"
                width={280}
                height={280}
                className="object-contain relative z-10 p-8 drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating badge cards */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 -left-8 glass-card px-4 py-3 flex items-center gap-2.5 glow-sm shadow-xl shadow-slate-200/50 dark:shadow-none bg-white/80 dark:bg-white/[0.04]"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white text-xs font-semibold">Fast Delivery</p>
                <p className="text-slate-500 text-[10px]">2–6 week projects</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.02 }}
              className="absolute bottom-8 -right-6 glass-card px-4 py-3 flex items-center gap-2.5 glow-sm shadow-xl shadow-slate-200/50 dark:shadow-none bg-white/80 dark:bg-white/[0.04]"
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white text-xs font-semibold">99.9% Uptime</p>
                <p className="text-slate-500 text-[10px]">Guaranteed hosting</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-8 glass-card px-4 py-3 flex items-center gap-2.5 glow-sm shadow-xl shadow-slate-200/50 dark:shadow-none bg-white/80 dark:bg-white/[0.04]"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white text-xs font-semibold">50+ Clients</p>
                <p className="text-slate-500 text-[10px]">Trusted globally</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-slate-300 dark:border-white/20 rounded-full flex justify-center pt-1.5 transition-colors"
        >
          <motion.div className="w-1 h-1.5 bg-orange-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
