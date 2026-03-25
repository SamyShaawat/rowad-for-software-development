'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { RouteConstants, AboutConstants, StatsConstants } from '@/constants';

const features = [
  { name: 'Innovation First', description: 'We leverage cutting-edge technologies and modern approaches.', icon: LightBulbIcon },
  { name: 'Quality Assured', description: 'Rigorous testing ensures flawless delivery every time.', icon: ShieldCheckIcon },
  { name: 'Client Focused', description: 'Your success is our priority.', icon: UserGroupIcon },
];

export function AboutSection() {
  const stats = StatsConstants as unknown as typeof StatsConstants;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="heading-2 text-secondary-900 mb-6">Why Choose <span className="text-primary-600">Rowad</span>?</h2>
            <p className="text-lg text-secondary-600 mb-8">{AboutConstants.SUBTITLE}</p>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div key={feature.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-1">{feature.name}</h3>
                    <p className="text-secondary-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={RouteConstants.ABOUT} className="btn-primary">{AboutConstants.CTA}</Link>
              <Link href={RouteConstants.CONTACT} className="btn-secondary">Schedule a Call</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className={`bg-gradient-to-br rounded-2xl p-6 text-white shadow-xl ${index % 2 === 0 ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'}`}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
