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
    <footer className="bg-primary-900 text-white py-12">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href={RouteConstants.HOME} className="flex items-baseline space-x-1 mb-4">
              <span className="font-bold text-3xl text-white">R</span>
              <span className="font-bold text-3xl text-secondary-500">O</span>
              <span className="font-bold text-3xl text-white">WAD</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">{FooterConstants.DESCRIPTION}</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="h-5 w-5 text-secondary-500" />
                <span className="text-sm">{CompanyConstants.PHONE}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <EnvelopeIcon className="h-5 w-5 text-secondary-500" />
                <span className="text-sm">{CompanyConstants.EMAIL}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPinIcon className="h-5 w-5 text-secondary-500" />
                <span className="text-sm">{CompanyConstants.LOCATION}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-secondary-500 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-secondary-500 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">{FooterConstants.NEWSLETTER_TITLE}</h3>
            <p className="text-gray-400 text-sm mb-4">{FooterConstants.NEWSLETTER_DESCRIPTION}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={FooterConstants.NEWSLETTER_PLACEHOLDER}
                className="w-full px-3 py-2 bg-primary-800 border border-primary-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              />
              <button type="submit" className="w-full btn-primary text-sm">
                {FooterConstants.NEWSLETTER_BUTTON}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">{copyrightText}</p>
            <div className="flex space-x-4">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-secondary-500 text-sm transition-colors"
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
