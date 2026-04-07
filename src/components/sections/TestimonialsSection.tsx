'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { TestimonialsConstants } from '@/constants';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    content: 'Rowad transformed our online presence with a stunning website. Their technical expertise exceeded our expectations.',
    author: 'Ahmed Hassan',
    role: 'CEO, TechStart',
    rating: 5,
  },
  {
    content: 'The hosting service is impeccable. Our website has never been faster or more reliable.',
    author: 'Fatima Al-Ahmad',
    role: 'Marketing Director',
    rating: 5,
  },
  {
    content: 'Working with Rowad was a game-changer. They delivered on time and within budget, ensuring our success.',
    author: 'Mohammed Ibrahim',
    role: 'Founder, E-Commerce Plus',
    rating: 5,
  },
];

const clientLogos = [
  { name: 'Kadmar Group', src: '/images/clientsImages/KadmarGroup.png' },
  { name: 'Beit', src: '/images/clientsImages/Beit.png' },
  { name: 'EGL', src: '/images/clientsImages/EGL.png' },
  { name: 'BCME', src: '/images/clientsImages/BCME.png' },
  { name: 'IMG', src: '/images/clientsImages/IMG.png' },
  { name: 'MackeanLawFirm', src: '/images/clientsImages/MackeanLawFirm.png' },
  { name: 'NofaFloors', src: '/images/clientsImages/NofaFloors.png' },
  { name: 'SmartSystem', src: '/images/clientsImages/SmartSystem.png' },
];

export function TestimonialsSection() {
  return (
    <section className="relative section-padding bg-[#070710] overflow-hidden">
      {/* ── Background decoration ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container-custom mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {TestimonialsConstants.SUBTITLE}
          </p>
        </motion.div>

        {/* ── Testimonials Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-2xl glass-card border border-white/[0.06] hover:border-orange-500/30 transition-all duration-500 group"
            >
              {/* Quote icon mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-orange-500/[0.05] transition-colors duration-500">
                &quot;
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <StarIcon key={j} className="h-5 w-5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 italic relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/[0.06] pt-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-white text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-orange-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Trusted Clients Marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center pt-10 border-t border-white/[0.06]"
        >
          <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold mb-10">
            {TestimonialsConstants.TRUST_TEXT}
          </p>
          
          <div className="relative w-full overflow-hidden flex items-center">
            {/* Fade gradients for marquee edges */}
            <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#070710] to-transparent z-10" />
            <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#070710] to-transparent z-10" />
            
            <div className="flex w-max min-w-full animate-marquee items-center gap-10 sm:gap-16 px-8">
              {/* First set */}
              {clientLogos.map((client, idx) => (
                <div key={`client-1-${idx}`} className="w-24 sm:w-32 h-16 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, 128px"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, idx) => (
                <div key={`client-2-${idx}`} className="w-24 sm:w-32 h-16 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, 128px"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
