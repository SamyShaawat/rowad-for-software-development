'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, HeroConstants, StatsConstants } from '@/constants';
import type { StatItem } from '@/types';

export function HeroSection() {
  const stats: StatItem[] = StatsConstants as unknown as StatItem[];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
      <motion.div animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <motion.div animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="heading-1 text-white mb-6 leading-tight">
            {HeroConstants.TITLE_PART_1}<br />
            <span className="text-accent-300">{HeroConstants.TITLE_PART_2}</span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          {HeroConstants.SUBTITLE}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={RouteConstants.CONTACT} className="btn-primary bg-white text-primary-700 hover:bg-secondary-100">
            {HeroConstants.PRIMARY_CTA}<ArrowRightIcon className="ml-2 h-5 w-5 inline-block" />
          </Link>
          <Link href={RouteConstants.SERVICES} className="btn-secondary border-white text-white hover:bg-white/10">
            {HeroConstants.SECONDARY_CTA}
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
