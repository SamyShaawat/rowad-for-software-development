'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ComputerDesktopIcon, CloudArrowUpIcon, RocketLaunchIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, ServicesConstants } from '@/constants';
import type { ServiceFeature } from '@/types';

const services: ServiceFeature[] = [
  { 
    icon: 'ComputerDesktop', 
    title: 'Website Development', 
    description: 'Custom-built websites tailored to your business needs with modern technologies.', 
    features: ['Responsive Design', 'Modern Tech', 'SEO Optimized'], 
    technologies: ['Next.js', 'React', 'TypeScript'] 
  },
  { 
    icon: 'CloudArrowUp', 
    title: 'Web Hosting', 
    description: 'Reliable, secure hosting solutions with 24/7 monitoring and support.', 
    features: ['99.9% Uptime', 'SSL Included', '24/7 Support'], 
    technologies: ['AWS', 'Cloudflare', 'Docker'] 
  },
  { 
    icon: 'RocketLaunch', 
    title: 'Deployment', 
    description: 'Seamless deployment with CI/CD pipelines and zero downtime.', 
    features: ['CI/CD', 'Zero Downtime', 'Auto Scaling'], 
    technologies: ['GitHub Actions', 'Kubernetes'] 
  },
];

const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
  ComputerDesktop: ComputerDesktopIcon,
  CloudArrowUp: CloudArrowUpIcon,
  RocketLaunch: RocketLaunchIcon,
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-xs font-semibold mb-3">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            What We <span className="text-secondary-500">Offer</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {ServicesConstants.SUBTITLE}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || ComputerDesktopIcon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-secondary-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link 
                    href={RouteConstants.SERVICES} 
                    className="inline-flex items-center font-semibold text-secondary-500 hover:text-secondary-600 transition-colors duration-300 text-sm"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href={RouteConstants.CONTACT} className="btn-primary">
            {ServicesConstants.CTA}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
