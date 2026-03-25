'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, HeroConstants, StatsConstants } from '@/constants';
import type { StatItem } from '@/types';

export function HeroSection() {
  const stats: StatItem[] = StatsConstants as unknown as StatItem[];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-500">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
      </div>
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary-600/15 rounded-full blur-3xl"
      />

      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-secondary-500/20 backdrop-blur-sm border border-secondary-500/30 rounded-full px-6 py-3 mb-8"
          >
            <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
            <span className="text-secondary-300 font-medium">Transforming Ideas into Reality</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-1 text-white mb-8 leading-tight"
          >
            {HeroConstants.TITLE_PART_1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-600">
              {HeroConstants.TITLE_PART_2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {HeroConstants.SUBTITLE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href={RouteConstants.CONTACT} className="btn-primary group">
              {HeroConstants.PRIMARY_CTA}
              <ArrowRightIcon className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href={RouteConstants.SERVICES} className="btn-secondary border-white/30 text-white hover:bg-white/10">
              {HeroConstants.SECONDARY_CTA}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center p-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center pt-3"
        >
          <motion.div className="w-2 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
