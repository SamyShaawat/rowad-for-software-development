import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { RouteConstants, CompanyConstants, FooterConstants, NavigationConstants } from '@/constants';

const navigation = {
  company: [
    { name: NavigationConstants.ABOUT_US, href: RouteConstants.ABOUT },
    { name: NavigationConstants.SERVICES, href: RouteConstants.SERVICES },
    { name: NavigationConstants.CONTACT, href: RouteConstants.CONTACT },
  ],
  services: [
    { name: 'Website Development', href: `${RouteConstants.SERVICES}#development` },
    { name: 'Web Hosting', href: `${RouteConstants.SERVICES}#hosting` },
    { name: 'Deployment', href: `${RouteConstants.SERVICES}#deployment` },
  ],
  legal: [{ name: 'Privacy Policy', href: '#' }, { name: 'Terms of Service', href: '#' }],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = FooterConstants.COPYRIGHT.replace('{year}', String(currentYear));

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href={RouteConstants.HOME} className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-400 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-heading text-xl font-bold">{CompanyConstants.NAME}</span>
            </Link>
            <p className="text-secondary-300 mb-6 max-w-sm">{FooterConstants.DESCRIPTION}</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-300">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <span>{CompanyConstants.PHONE}</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <EnvelopeIcon className="h-5 w-5 flex-shrink-0" />
                <span>{CompanyConstants.EMAIL}</span>
              </div>
              <div className="flex items-start space-x-3 text-secondary-300">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>{CompanyConstants.LOCATION}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}><Link href={item.href} className="text-secondary-300 hover:text-white transition-colors duration-200">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}><Link href={item.href} className="text-secondary-300 hover:text-white transition-colors duration-200">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">{FooterConstants.NEWSLETTER_TITLE}</h3>
            <p className="text-secondary-300 mb-4">{FooterConstants.NEWSLETTER_DESCRIPTION}</p>
            <form className="space-y-2">
              <input type="email" placeholder={FooterConstants.NEWSLETTER_PLACEHOLDER} className="w-full px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-secondary-400" />
              <button type="submit" className="w-full btn-primary bg-primary-600 hover:bg-primary-700">{FooterConstants.NEWSLETTER_BUTTON}</button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">{copyrightText}</p>
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link key={item.name} href={item.href} className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">{item.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
