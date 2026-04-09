'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormConstants } from '@constants';
import { ServiceType } from '@enums';
import { useContact } from '@hooks';
import { cn } from '@lib/utils';
import type { ContactFormData } from '@types';

export default function ContactForm() {
  const { isSubmitting, recaptchaToken, setRecaptchaToken, submitContact } = useContact();
  const [formData, setFormData] = useState<ContactFormData>({ 
    name: '', email: '', company: '', phone: '', service: '', message: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContact(formData);
    if (success) {
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }
  };

  return (
    <><Toaster position="top-right" />
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{FormConstants.NAME_LABEL} *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-all" placeholder={FormConstants.NAME_PLACEHOLDER} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{FormConstants.EMAIL_LABEL} *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-all" placeholder={FormConstants.EMAIL_PLACEHOLDER} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{FormConstants.COMPANY_LABEL}</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-all" placeholder={FormConstants.COMPANY_PLACEHOLDER} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{FormConstants.PHONE_LABEL}</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-all" placeholder={FormConstants.PHONE_PLACEHOLDER} />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{FormConstants.SERVICE_LABEL}</label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-all appearance-none">
            <option value="">{FormConstants.SERVICE_SELECT}</option>
            <option value={ServiceType.DEVELOPMENT}>Website Development</option>
            <option value={ServiceType.HOSTING}>Web Hosting</option>
            <option value={ServiceType.DEPLOYMENT}>Deployment Services</option>
            <option value={ServiceType.CONSULTING}>Technical Consulting</option>
            <option value={ServiceType.OTHER}>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{FormConstants.MESSAGE_LABEL} *</label>
          <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-all resize-none" placeholder={FormConstants.MESSAGE_PLACEHOLDER} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-start">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
              onChange={setRecaptchaToken}
              theme="dark"
            />
          </div>
          <button type="submit" disabled={isSubmitting || !recaptchaToken} className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-50">
            <PaperAirplaneIcon className="h-5 w-5" /><span>{isSubmitting ? FormConstants.SUBMITTING : FormConstants.SUBMIT_BUTTON}</span>
          </button>
        </div>
      </form>
    </>
  );
}
