import type { ReactNode } from 'react';

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 bg-slate-50 pt-16 dark:border-white/10 dark:bg-[#0B1220]">
      <div className="container-custom mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="section-badge mb-4">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-slate-900 dark:text-white sm:text-5xl">
          {title}
        </h1>
        {children && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
