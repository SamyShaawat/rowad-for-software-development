import type { ReactNode } from 'react';

/** Carbon page header: gray-10 layer, small label, light display heading. */
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
    <section className="border-b border-slate-200 bg-orange-50 pt-12 dark:border-slate-700 dark:bg-[#161616]">
      <div className="container-custom mx-auto px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
        <p className="section-badge mb-6">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl leading-[1.15] text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
