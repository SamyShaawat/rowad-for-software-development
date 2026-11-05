import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Clients', '/clients'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

// Catches all 404 errors
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-slate-50 px-4 pb-20 pt-28 dark:bg-[#161616]">
      <div className="container-custom mx-auto">
        <p className="font-mono text-sm text-orange-700 dark:text-orange-400">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
          It may have moved or the link may be wrong. Try one of these instead.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className={href === '/' ? 'btn-primary' : 'btn-secondary'}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
