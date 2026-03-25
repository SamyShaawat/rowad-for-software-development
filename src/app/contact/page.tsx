import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { RouteConstants, CompanyConstants, ContactConstants } from '@/constants';
import ContactForm from '@components/contact/ContactForm';

export const metadata: Metadata = { title: `Contact Us | ${CompanyConstants.FULL_NAME}`, description: ContactConstants.SUBTITLE };

const contactInfo = [
  { icon: PhoneIcon, title: 'Phone', content: CompanyConstants.PHONE, subtext: CompanyConstants.WORKING_HOURS },
  { icon: EnvelopeIcon, title: 'Email', content: CompanyConstants.EMAIL, subtext: 'We will reply within 24 hours' },
  { icon: MapPinIcon, title: 'Office', content: CompanyConstants.LOCATION, subtext: 'Visit us by appointment' },
  { icon: ClockIcon, title: 'Working Hours', content: CompanyConstants.WORKING_HOURS, subtext: CompanyConstants.WEEKEND },
];

const faqs = [
  { q: 'How long does a typical website project take?', a: 'Most websites take 2-6 weeks. E-commerce sites may take 6-12 weeks.' },
  { q: 'What is your pricing structure?', a: 'We offer custom quotes based on requirements. Contact us for a free consultation.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! We offer maintenance packages and 24/7 support for hosting clients.' },
  { q: 'Can you work with our existing team?', a: 'Absolutely! We regularly collaborate with in-house teams.' },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 py-20 md:py-32 overflow-hidden">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">{ContactConstants.TITLE}</h1>
            <p className="text-xl text-white/90">{ContactConstants.SUBTITLE}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-2 text-secondary-900 mb-2">{ContactConstants.FORM_TITLE}</h2>
              <p className="text-secondary-600 mb-8">{ContactConstants.FORM_SUBTITLE}</p>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="heading-2 text-secondary-900 mb-2">{ContactConstants.CONTACT_INFO_TITLE}</h2>
                <p className="text-secondary-600">{ContactConstants.CONTACT_INFO_SUBTITLE}</p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                      <p className="text-primary-600 font-medium">{item.content}</p>
                      <p className="text-sm text-secondary-600 mt-1">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-secondary-100 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center text-secondary-500">
                  <MapPinIcon className="h-12 w-12 mx-auto mb-2" />
                  <p>{CompanyConstants.LOCATION}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-secondary-900 mb-4">{ContactConstants.FAQ_TITLE}</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">{ContactConstants.FAQ_SUBTITLE}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-3">{faq.q}</h3>
                <p className="text-secondary-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-700 to-accent-600">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">{ContactConstants.CTA_TITLE}</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{ContactConstants.CTA_SUBTITLE}</p>
          <Link href="tel:+963XXXXXXXXX" className="btn-primary bg-white text-primary-700 hover:bg-secondary-100">{ContactConstants.CTA_BUTTON}</Link>
        </div>
      </section>
    </div>
  );
}
