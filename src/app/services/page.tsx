import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import {
  RouteConstants,
  ServicesConstants,
  CompanyConstants,
} from '@constants';
import { ServiceType } from '@enums';

const detailedServices = [
  {
    id: ServiceType.DEVELOPMENT,
    name: 'Website Development',
    tagline: 'Custom-built for growth',
    description: 'We create modern, responsive, and blazing-fast standalone websites and entire web applications. Whether it’s an immersive landing page or a complex SaaS platform, we prioritize performance, seamless UX, and robust architecture.',
    icon: '/images/servicesImages/WebDevelopment.png',
    features: [
      'Responsive & Mobile-First Design',
      'E-Commerce & Payment Integrations',
      'Headless CMS & Content Strategy',
      'Progressive Web Apps (PWA)',
      'Legacy System Modernization',
      'SEO & Conversion Optimization',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'TailwindCSS'],
    gradient: 'from-orange-500/20 to-amber-500/10',
    borderColor: 'border-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    id: ServiceType.HOSTING,
    name: 'Web Hosting & Cloud',
    tagline: 'Reliable & secure infrastructure',
    description: 'Stop worrying about downtime. We provide premium, managed hosting solutions powered by industry-leading cloud providers. We handle scaling, security patches, and monitoring so you can focus on building your business.',
    icon: '/images/servicesImages/WebHosting.png',
    features: [
      '99.9% Uptime Guarantee',
      'Automated Daily Backups',
      'Free SSL Certificates',
      'DDoS Protection & WAF',
      'Global CDN for Fast Load Times',
      '24/7 Proactive Monitoring',
    ],
    technologies: ['AWS', 'DigitalOcean', 'Cloudflare', 'Linux', 'Vercel'],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    id: ServiceType.DEPLOYMENT,
    name: 'Deployment & DevOps',
    tagline: 'Ship faster, break nothing',
    description: 'Continuous Integration and Deployment (CI/CD) isn’t just a buzzword—it’s the backbone of modern software. We build robust deployment pipelines that enable your team to release updates securely, automatically, and with zero downtime.',
    icon: '/images/servicesImages/MobileDevelopment1.png',
    features: [
      'Automated CI/CD Pipelines',
      'Zero Downtime Deployments',
      'Automated Testing Workflows',
      'Infrastructure as Code (IaC)',
      'Multi-Environment Setup (Staging/Prod)',
      'Automated Rollbacks on Error',
    ],
    technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    gradient: 'from-violet-500/20 to-purple-500/10',
    borderColor: 'border-violet-500/20',
    iconColor: 'text-violet-400',
  },
];

export const metadata: Metadata = {
  title: `Our Services | ${CompanyConstants.FULL_NAME}`,
  description: ServicesConstants.SUBTITLE,
};

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-[#0a0a0f]">
      {/* ── Header Section ── */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-white/[0.06]">
        {/* Abstract background blur */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-amber-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container-custom mx-auto px-4 relative z-10 text-center">
          <span className="section-badge mb-6 tracking-widest text-orange-400 border-orange-500/20 bg-orange-500/10">
            Our Offerings
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
            Comprehensive <br className="hidden sm:block" />
            <span className="gradient-text italic">Digital Solutions</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {ServicesConstants.SUBTITLE}
          </p>
        </div>
      </section>

      {/* ── Services Detail List ── */}
      <div className="bg-[#0d0d1a]">
        {detailedServices.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding border-b border-white/[0.04] ${
              index % 2 !== 0 ? 'bg-white/[0.02]' : ''
            }`}
          >
            <div className="container-custom mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* Visual Side */}
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className={`relative aspect-[4/3] sm:aspect-square w-full rounded-[3rem] p-1 bg-gradient-to-br ${service.gradient} shadow-2xl overflow-hidden glass-card border ${service.borderColor} group`}>
                    <div className="absolute inset-0 bg-[#0d0d1a] m-[6px] rounded-[calc(3rem-6px)] z-0" />
                    <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
                      
                      {/* Decorative rings */}
                      <div className="absolute w-[80%] h-[80%] rounded-full border border-white/[0.03] animate-spin-slow pointer-events-none" />
                      <div className="absolute w-[60%] h-[60%] rounded-full border border-white/[0.05] animate-[spin_15s_linear_reverse_infinite] pointer-events-none" />
                      
                      <div className={`w-36 h-36 md:w-48 md:h-48 rounded-3xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2`}>
                        <Image 
                          src={service.icon}
                          alt={service.name}
                          width={120}
                          height={120}
                          className="object-contain p-4 drop-shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <span className={`inline-flex items-center text-xs font-bold uppercase tracking-widest ${service.iconColor} mb-4`}>
                    {service.tagline}
                  </span>
                  
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    {service.name}
                  </h2>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
                    {service.description}
                  </p>

                  <div className="mb-10">
                    <h3 className="text-white font-heading font-bold text-xl mb-6 flex items-center border-b border-white/[0.08] pb-3">
                      Key Capabilities
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircleIcon className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-300 text-sm leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-heading font-bold text-lg mb-4">
                      Powered By
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] text-slate-300 rounded-full text-xs font-semibold hover:bg-white/[0.08] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <section className="section-padding relative overflow-hidden text-center bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-hero-gradient opacity-30 pointer-events-none" />
        <div className="container-custom mx-auto relative z-10 py-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Let&apos;s discuss your project and architect the perfect digital solution for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href={RouteConstants.CONTACT} className="btn-primary group">
              Contact Us Today
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={RouteConstants.ABOUT} className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
