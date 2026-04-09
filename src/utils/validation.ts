/**
 * Utility functions for common string and data validation.
 * Use these to ensure input quality and prevent malicious inputs.
 */

export const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Matches various formats: +123, (123) 456, 123-456, 123456789
  const re = /^[\d\s\-\+\(\)]{8,}$/;
  return re.test(phone);
};

export const sanitizeString = (str: string): string => {
  return str.trim().replace(/[<>]/g, ''); // Simple script tag removal
};
