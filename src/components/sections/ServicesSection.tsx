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
    description: 'Custom-built websites tailored to your business needs with modern technologies and responsive design.', 
    features: ['Responsive Design', 'Modern Tech Stack', 'SEO Optimized'], 
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] 
  },
  { 
    icon: 'CloudArrowUp', 
    title: 'Web Hosting', 
    description: 'Reliable, secure, and scalable hosting solutions with 24/7 monitoring and support.', 
    features: ['99.9% Uptime', 'SSL Certificates', '24/7 Support'], 
    technologies: ['AWS', 'Cloudflare', 'Docker', 'Kubernetes'] 
  },
  { 
    icon: 'RocketLaunch', 
    title: 'Deployment Services', 
    description: 'Seamless deployment and continuous integration with zero downtime deployments.', 
    features: ['CI/CD Pipeline', 'Zero Downtime', 'Auto Scaling'], 
    technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'] 
  },
];

const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
  ComputerDesktop: ComputerDesktopIcon,
  CloudArrowUp: CloudArrowUpIcon,
  RocketLaunch: RocketLaunchIcon,
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="heading-2 text-primary-900 mb-4">
            What We <span className="text-secondary-500">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {ServicesConstants.SUBTITLE}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover"
              >
                {/* Orange accent bar on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-secondary-500" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-3 text-primary-900 mb-4 group-hover:text-secondary-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link 
                    href={RouteConstants.SERVICES} 
                    className="inline-flex items-center font-semibold text-secondary-500 group-hover:text-secondary-600 transition-colors duration-300"
                  >
                    {ServicesConstants.CTA.split(' ')[0]} {ServicesConstants.CTA.split(' ')[1]} {ServicesConstants.CTA.split(' ')[2]}
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
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
          className="text-center mt-16"
        >
          <Link href={RouteConstants.CONTACT} className="btn-primary">
            {ServicesConstants.CTA}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
