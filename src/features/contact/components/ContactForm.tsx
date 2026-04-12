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

const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const { isSubmitting, recaptchaToken, setRecaptchaToken, submitContact } = useContact();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContact(formData);
    if (success) {
      setFormData({ ...INITIAL_FORM_STATE });
    }
  };

  // Graceful fallback when reCAPTCHA is not configured — avoids throwing during render
  if (!recaptchaSiteKey) {
    return (
      <div className="rounded-lg bg-amber-50 p-6 text-center dark:bg-amber-900/20">
        <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
          Contact form is currently unavailable.
        </p>
        <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
          Please email us directly at{' '}
          <a
            href="mailto:info@rowad.com"
            className="font-medium text-amber-700 underline dark:text-amber-300"
          >
            info@rowad.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700 transition-colors dark:text-slate-300"
            >
              {FormConstants.NAME_LABEL} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white/[0.04] focus:outline-none transition-all dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-500"
              placeholder={FormConstants.NAME_PLACEHOLDER}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700 transition-colors dark:text-slate-300"
            >
              {FormConstants.EMAIL_LABEL} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white/[0.04] focus:outline-none transition-all dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-500"
              placeholder={FormConstants.EMAIL_PLACEHOLDER}
            />
          </div>
        </div>

        {/* Company & Phone */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-slate-700 transition-colors dark:text-slate-300"
            >
              {FormConstants.COMPANY_LABEL}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white/[0.04] focus:outline-none transition-all dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-500"
              placeholder={FormConstants.COMPANY_PLACEHOLDER}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700 transition-colors dark:text-slate-300"
            >
              {FormConstants.PHONE_LABEL}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white/[0.04] focus:outline-none transition-all dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-500"
              placeholder={FormConstants.PHONE_PLACEHOLDER}
            />
          </div>
        </div>

        {/* Service Select */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-slate-700 transition-colors dark:text-slate-300"
          >
            {FormConstants.SERVICE_LABEL}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white/[0.04] focus:outline-none transition-all dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-500"
          >
            <option value="">{FormConstants.SERVICE_SELECT}</option>
            <option value={ServiceType.DEVELOPMENT}>Website Development</option>
            <option value={ServiceType.HOSTING}>Web Hosting</option>
            <option value={ServiceType.DEPLOYMENT}>Deployment Services</option>
            <option value={ServiceType.CONSULTING}>Technical Consulting</option>
            <option value={ServiceType.OTHER}>Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-700 transition-colors dark:text-slate-300"
          >
            {FormConstants.MESSAGE_LABEL} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange-500/50 focus:bg-white/[0.04] focus:outline-none transition-all resize-none dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white dark:placeholder:text-slate-500"
            placeholder={FormConstants.MESSAGE_PLACEHOLDER}
          />
        </div>

        {/* reCAPTCHA & Submit */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-start">
            <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={setRecaptchaToken} theme="dark" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !recaptchaToken}
            className="btn-primary flex w-full items-center justify-center space-x-2 disabled:opacity-50 md:w-auto"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
            <span>{isSubmitting ? FormConstants.SUBMITTING : FormConstants.SUBMIT_BUTTON}</span>
          </button>
        </div>
      </form>
    </>
  );
}
