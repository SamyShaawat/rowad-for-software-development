'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { TestimonialsConstants } from '@/constants';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  { content: 'Rowad transformed our online presence with a stunning website. Their technical expertise exceeded our expectations.', author: 'Ahmed Hassan', role: 'CEO, TechStart', rating: 5 },
  { content: 'The hosting service is impeccable. Our website has never been faster or more reliable.', author: 'Fatima Al-Ahmad', role: 'Marketing Director', rating: 5 },
  { content: 'Working with Rowad was a game-changer. They delivered on time and within budget.', author: 'Mohammed Ibrahim', role: 'Founder, E-Commerce Plus', rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="heading-2 text-secondary-900 mb-4">What Our <span className="text-primary-600">Clients</span> Say</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">{TestimonialsConstants.SUBTITLE}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.author} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (<StarIcon key={i} className="h-5 w-5 text-yellow-400" />))}
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">{testimonial.author.charAt(0)}</div>
                <div>
                  <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                  <div className="text-sm text-secondary-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 text-center">
          <p className="text-secondary-600 mb-8">{TestimonialsConstants.TRUST_TEXT}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Startup', 'Enterprise', 'E-Commerce', 'Healthcare', 'Finance'].map((industry) => (
              <motion.div key={industry} whileHover={{ scale: 1.1 }} className="text-secondary-400 font-semibold text-lg">{industry}</motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
