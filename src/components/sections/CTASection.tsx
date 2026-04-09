'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RouteConstants, HeroConstants, CompanyConstants } from '@constants';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export function CTASection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden bg-[#0a0a0f]">
      {/* ── Outer container ── */}
      <div className="relative max-w-6xl mx-auto rounded-[3rem] p-1 glass-card glow-orange bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10">
        
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-500/30 rounded-tl-[3rem]" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-orange-500/30 rounded-br-[3rem]" />

        {/* ── Inner content container ── */}
        <div className="relative rounded-[calc(3rem-4px)] bg-[#0d0d1a] px-6 py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center">

          {/* Background effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[80%] bg-gradient-to-b from-orange-500/15 via-orange-500/5 to-transparent blur-3xl rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.15 }}
            className="relative z-10 text-center max-w-3xl mx-auto"
          >
            <span className="section-badge mb-6">{CompanyConstants.NAME}</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Start Your <br/>
              <span className="gradient-text italic pr-2">Digital Journey?</span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s collaborate to create innovative digital solutions that drive your business forward, enhance user engagement, and boost your revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href={RouteConstants.CONTACT}
                className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-4 group"
              >
                Get Started Now
                <ArrowRightIcon className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href={RouteConstants.SERVICES}
                className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-4"
              >
                {HeroConstants.SECONDARY_CTA}
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-slate-500">
              No credit card required. Free initial consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
