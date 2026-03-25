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
    <footer className="bg-primary-900 text-white">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={RouteConstants.HOME} className="flex items-center space-x-2 mb-6">
              <div className="flex items-baseline">
                <span className="font-display text-4xl font-bold text-white">R</span>
                <span className="font-display text-4xl font-bold text-secondary-500">O</span>
                <span className="font-display text-4xl font-bold text-white">WAD</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">{FooterConstants.DESCRIPTION}</p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-400 hover:text-secondary-500 transition-colors duration-200">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="h-5 w-5 text-secondary-500" />
                </div>
                <span className="font-medium">{CompanyConstants.PHONE}</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 hover:text-secondary-500 transition-colors duration-200">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="h-5 w-5 text-secondary-500" />
                </div>
                <span className="font-medium">{CompanyConstants.EMAIL}</span>
              </div>
              <div className="flex items-start space-x-4 text-gray-400 hover:text-secondary-500 transition-colors duration-200">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="h-5 w-5 text-secondary-500" />
                </div>
                <span className="font-medium">{CompanyConstants.LOCATION}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-secondary-500 transition-colors duration-200 font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-secondary-500 transition-colors duration-200 font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">{FooterConstants.NEWSLETTER_TITLE}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{FooterConstants.NEWSLETTER_DESCRIPTION}</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={FooterConstants.NEWSLETTER_PLACEHOLDER}
                className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 text-white placeholder-gray-500 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full btn-primary bg-secondary-500 hover:bg-secondary-600 font-semibold"
              >
                {FooterConstants.NEWSLETTER_BUTTON}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">{copyrightText}</p>
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-secondary-500 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
