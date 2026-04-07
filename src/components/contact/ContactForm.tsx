'use client';

import { useState, FormEvent } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { toast, Toaster } from 'react-hot-toast';
import { FormConstants } from '@/constants';
import { ServiceType } from '@/enums';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(FormConstants.SUCCESS_MESSAGE);
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <><Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">{FormConstants.NAME_LABEL} *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-colors" placeholder={FormConstants.NAME_PLACEHOLDER} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">{FormConstants.EMAIL_LABEL} *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-colors" placeholder={FormConstants.EMAIL_PLACEHOLDER} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">{FormConstants.COMPANY_LABEL}</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-colors" placeholder={FormConstants.COMPANY_PLACEHOLDER} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">{FormConstants.PHONE_LABEL}</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-colors" placeholder={FormConstants.PHONE_PLACEHOLDER} />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">{FormConstants.SERVICE_LABEL}</label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-colors appearance-none">
            <option value="">{FormConstants.SERVICE_SELECT}</option>
            <option value={ServiceType.DEVELOPMENT}>Website Development</option>
            <option value={ServiceType.HOSTING}>Web Hosting</option>
            <option value={ServiceType.DEPLOYMENT}>Deployment Services</option>
            <option value={ServiceType.CONSULTING}>Technical Consulting</option>
            <option value={ServiceType.OTHER}>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">{FormConstants.MESSAGE_LABEL} *</label>
          <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-colors resize-none" placeholder={FormConstants.MESSAGE_PLACEHOLDER} />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-50">
          <PaperAirplaneIcon className="h-5 w-5" /><span>{isSubmitting ? FormConstants.SUBMITTING : FormConstants.SUBMIT_BUTTON}</span>
        </button>
      </form>
    </>
  );
}
