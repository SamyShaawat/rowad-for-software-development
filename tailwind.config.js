/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Carbon gray ramp (gray 10 -> gray 100) mapped onto slate so every existing class follows
        slate: {
          50: '#f4f4f4', 100: '#e8e8e8', 200: '#e0e0e0', 300: '#c6c6c6', 400: '#a8a8a8',
          500: '#6f6f6f', 600: '#525252', 700: '#393939', 800: '#262626', 900: '#161616', 950: '#0d0d0d',
        },
        primary: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        secondary: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#3f3f46',
          700: '#27272a',
          800: '#18181b',
          900: '#141414',
          950: '#09090b',
        },
        dark: {
          50:  '#1a1a2e',
          100: '#16213e',
          200: '#0f3460',
          300: '#0d0d1a',
          400: '#0a0a0f',
          500: '#07070d',
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        orange: {
          50: '#fff2e8', 100: '#ffe3cc', 200: '#ffc799', 300: '#ffa766', 400: '#ff9a4d',
          500: '#ff832b', 600: '#ba4e00', 700: '#8a3800', 800: '#5e2900', 900: '#3e1a00',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        sans:    ['var(--font-plex)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plex)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-plex-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      // IBM Carbon: square corners, light/regular/semibold weights
      borderRadius: {
        DEFAULT: '0', sm: '0', md: '0', lg: '0', xl: '0', '2xl': '0', '3xl': '0',
      },
      fontWeight: { bold: '600', extrabold: '600', black: '600' },
      fontSize: {
        'heading-1': ['3.5rem',  { lineHeight: '1.1', fontWeight: '800' }],
        'heading-2': ['2.5rem',  { lineHeight: '1.2', fontWeight: '700' }],
        'heading-3': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-4': ['1.375rem',{ lineHeight: '1.4', fontWeight: '600' }],
      },
      animation: {
        'fade-in':      'fadeIn 0.5s ease-in-out',
        'fade-up':      'fadeUp 0.6s ease-out',
        'slide-in-left':'slideInLeft 0.5s ease-out',
        'bounce-slow':  'bounceSlow 3s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'marquee':      'marquee 35s linear infinite',
      },
      keyframes: {
        fadeIn:      { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp:      { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-24px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        bounceSlow:  { '0%, 100%': { transform: 'translateY(-6%)' }, '50%': { transform: 'translateY(6%)' } },
        marquee:     { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      backgroundImage: {
        'hero-gradient':    'radial-gradient(ellipse 100% 80% at 50% -20%, rgba(249,115,22,0.15) 0%, transparent 60%)',
        'card-gradient':    'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'orange-glow':      'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)',
      },
      boxShadow: {
        'orange-sm':  '0 4px 20px rgba(249,115,22,0.15)',
        'orange-md':  '0 8px 32px rgba(249,115,22,0.2)',
        'orange-lg':  '0 20px 60px rgba(249,115,22,0.25)',
        'dark-sm':    '0 4px 20px rgba(0,0,0,0.4)',
        'dark-md':    '0 8px 32px rgba(0,0,0,0.5)',
        'dark-lg':    '0 20px 60px rgba(0,0,0,0.6)',
        'glass':      'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: { xl: '24px', '2xl': '40px' },
    },
  },
  plugins: [],
};
