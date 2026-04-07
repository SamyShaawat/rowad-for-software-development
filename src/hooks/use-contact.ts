'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import type { ContactFormData } from '@types';
import { validateEmail, validatePhone } from '@utils/validation';

/**
 * Encapsulated contact feature hook. Handles the state, validation, 
 * ReCaptcha, and API calls for the contact form.
 */
export function useContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const submitContact = async (formData: ContactFormData) => {
    // 1. Client-side validation
    if (!validateEmail(formData.email)) {
      toast.error('Invalid email address format.');
      return false;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      toast.error('Invalid phone number format.');
      return false;
    }

    if (!recaptchaToken) {
      toast.error('Please complete the CAPTCHA verification.');
      return false;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || 'Secure message sent successfully!');
        return true;
      } else {
        toast.error(data.error || 'Failed to submit the form.');
        return false;
      }
    } catch (error) {
      toast.error('Network error. Unable to securely submit requested message.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, recaptchaToken, setRecaptchaToken, submitContact };
}
