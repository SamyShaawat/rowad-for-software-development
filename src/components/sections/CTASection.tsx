'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RouteConstants, HeroConstants } from '@/constants';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="heading-2 text-white mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Let&apos;s collaborate to create innovative solutions that drive your business forward.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={RouteConstants.CONTACT} className="btn-primary bg-white text-primary-700 hover:bg-secondary-100 shadow-2xl">Get Started Now</Link>
            <Link href={RouteConstants.SERVICES} className="btn-secondary border-white text-white hover:bg-white/10">{HeroConstants.SECONDARY_CTA}</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
