import { z } from 'zod';

/**
 * Server-side validation schema for contact form submissions.
 * Ensures all inputs are properly validated before processing.
 */
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' })
    .regex(/^[a-zA-Z0-9\s\-'.]+$/, { message: 'Name contains invalid characters' })
    .transform((val) => val.trim()),

  email: z
    .string()
    .email({ message: 'Invalid email address format' })
    .max(254, { message: 'Email address is too long' })
    .transform((val) => val.toLowerCase().trim()),

  company: z
    .string()
    .max(100, { message: 'Company name must be less than 100 characters' })
    .optional()
    .or(z.literal(''))
    .transform((val) => val?.trim() || ''),

  phone: z
    .string()
    .max(20, { message: 'Phone number is too long' })
    .regex(/^[\d\s\-\+\(\)]*$/, { message: 'Phone number contains invalid characters' })
    .optional()
    .or(z.literal(''))
    .transform((val) => val?.trim() || ''),

  service: z
    .string()
    .max(50, { message: 'Service name is too long' })
    .optional()
    .or(z.literal(''))
    .transform((val) => val?.trim() || ''),

  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(2000, { message: 'Message must be less than 2000 characters' })
    .transform((val) => val.trim()),

  recaptchaToken: z.string().min(1, { message: 'reCAPTCHA token is required' }),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
