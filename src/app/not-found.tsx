import { notFound } from 'next/navigation';

// This page catches all 404 errors
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 animate-pulse">
            404
          </h1>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500/10 rounded-full blur-xl animate-ping" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-ping delay-1000" />
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          The page you&apos;re looking for seems to have been moved, renamed, or never existed.
          Don&apos;t worry, we&apos;ll help you find your way back!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="btn-primary group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go to Homepage
          </a>
          <a
            href="/contact"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Support
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Home', href: '/', icon: '🏠' },
            { label: 'Services', href: '/services', icon: '⚡' },
            { label: 'About Us', href: '/about', icon: '👥' },
            { label: 'Contact', href: '/contact', icon: '📧' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p-4 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-gray-700 hover:border-orange-500/50 dark:hover:border-orange-500/50 group"
            >
              <span className="text-2xl mb-2 block">{link.icon}</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Help Text */}
        <div className="mt-12 p-6 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-gray-700 max-w-2xl mx-auto">
          <h3 className="font-semibold text-slate-800 dark:text-white mb-3">
            💡 Still can&apos;t find what you&apos;re looking for?
          </h3>
          <ul className="text-left text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-0.5">→</span>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-0.5">→</span>
              <span>Use the navigation menu above to browse our site</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-0.5">→</span>
              <span>Contact us and we&apos;ll help you find what you need</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
