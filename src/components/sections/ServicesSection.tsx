'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ComputerDesktopIcon, CloudArrowUpIcon, RocketLaunchIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, ServicesConstants, CommonConstants } from '@/constants';
import type { ServiceFeature } from '@/types';

const services: ServiceFeature[] = [
  { icon: 'ComputerDesktop', title: 'Website Development', description: 'Custom-built websites tailored to your business needs.', features: ['Responsive Design', 'Modern Technologies', 'SEO Optimized'], technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { icon: 'CloudArrowUp', title: 'Web Hosting', description: 'Reliable, secure, and scalable hosting solutions.', features: ['99.9% Uptime', 'SSL Certificates', '24/7 Monitoring'], technologies: ['AWS', 'Cloudflare', 'Docker', 'Kubernetes'] },
  { icon: 'RocketLaunch', title: 'Deployment Services', description: 'Seamless deployment and continuous integration.', features: ['CI/CD Pipeline', 'Zero Downtime', 'Auto Scaling'], technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'] },
];

const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
  ComputerDesktop: ComputerDesktopIcon,
  CloudArrowUp: CloudArrowUpIcon,
  RocketLaunch: RocketLaunchIcon,
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="heading-2 text-secondary-900 mb-4">Our <span className="text-primary-600">Services</span></h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">{ServicesConstants.SUBTITLE}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || ComputerDesktopIcon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="heading-3 text-secondary-900 mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-secondary-600 mb-6 flex-grow group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-secondary-700 group-hover:text-white/90 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />{feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={RouteConstants.SERVICES} className="inline-flex items-center font-semibold text-primary-600 group-hover:text-white transition-colors duration-300">
                    {CommonConstants.LEARN_MORE}<ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-16">
          <Link href={RouteConstants.CONTACT} className="btn-primary">{ServicesConstants.CTA}</Link>
        </motion.div>
      </div>
    </section>
  );
}
