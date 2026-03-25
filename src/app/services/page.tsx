import type { Metadata } from 'next';
import Link from 'next/link';
import { ComputerDesktopIcon, CloudArrowUpIcon, RocketLaunchIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { RouteConstants, ServicesConstants, CompanyConstants, CommonConstants } from '@/constants';
import { ServiceType } from '@/enums';

const services = [
  { id: ServiceType.DEVELOPMENT, name: 'Website Development', tagline: 'Crafting Digital Excellence', description: 'We build custom websites that deliver exceptional performance.', icon: ComputerDesktopIcon, features: ['Custom Design', 'Responsive', 'E-Commerce', 'CMS', 'PWA', 'API Integration'], technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'], gradient: 'from-primary-500 to-primary-600' },
  { id: ServiceType.HOSTING, name: 'Web Hosting', tagline: 'Reliable & Secure Hosting', description: 'Premium hosting with 24/7 monitoring and support.', icon: CloudArrowUpIcon, features: ['99.9% Uptime', 'Free SSL', 'Daily Backups', 'DDoS Protection', 'CDN', '24/7 Monitoring'], technologies: ['AWS', 'DigitalOcean', 'Cloudflare', 'Nginx', 'Docker'], gradient: 'from-accent-500 to-accent-600' },
  { id: ServiceType.DEPLOYMENT, name: 'Deployment Services', tagline: 'Seamless Launch & Updates', description: 'Smooth deployments with zero downtime.', icon: RocketLaunchIcon, features: ['CI/CD Pipeline', 'Automated Testing', 'Zero Downtime', 'Rollback', 'Multi-Environment', 'Monitoring'], technologies: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Docker', 'Kubernetes'], gradient: 'from-primary-600 to-primary-700' },
];

export const metadata: Metadata = { title: `Our Services | ${CompanyConstants.FULL_NAME}`, description: ServicesConstants.SUBTITLE };

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 py-20 md:py-32">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">{ServicesConstants.TITLE}</h1>
            <p className="text-xl text-white/90">{ServicesConstants.SUBTITLE}</p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}`}>
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="heading-2 text-secondary-900 mb-2">{service.name}</h2>
                <p className="text-lg text-primary-600 font-medium mb-4">{service.tagline}</p>
                <p className="text-secondary-600 mb-8">{service.description}</p>
                <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3 text-secondary-700">
                      <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" /><span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-4">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (<span key={tech} className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">{tech}</span>))}
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`aspect-square bg-gradient-to-br ${service.gradient} rounded-3xl p-8 shadow-2xl flex items-center justify-center`}>
                  <service.icon className="h-48 w-48 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gradient-to-r from-primary-700 to-accent-600">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Let&apos;s discuss your project and find the perfect solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={RouteConstants.CONTACT} className="btn-primary bg-white text-primary-700 hover:bg-secondary-100">Contact Us Today <ArrowRightIcon className="ml-2 h-5 w-5 inline-block" /></Link>
            <Link href={RouteConstants.ABOUT} className="btn-secondary border-white text-white hover:bg-white/10">Learn More About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
