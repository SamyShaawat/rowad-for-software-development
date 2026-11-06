'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import {
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { ClientsConstants } from '@constants';
import { cn } from '@lib/utils';
import { getDictionary, type Locale } from '@/i18n';

const ITEMS_PER_PAGE = 6;

const pageBtn =
  'grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 disabled:opacity-30 dark:border-white/15 dark:text-slate-300 dark:hover:border-white';

export function ClientsSection({ locale = 'en' }: { locale?: Locale }) {
  const p = getDictionary(locale).clientsPage;
  // Names stay as on the logos; category and description come from the Arabic dictionary when present.
  const clients = useMemo(
    () =>
      ClientsConstants.map((c) => ({
        ...c,
        category: p.categories[c.category] ?? c.category,
        description: p.descriptions[c.id] ?? c.description,
      })),
    [p]
  );
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [focusedId, setFocusedId] = useState<number | null>(null);

  // Deep link from the home strip: /clients#client-<id> opens the right page, scrolls to the card
  // and highlights it for a moment.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const openFromHash = () => {
      const match = window.location.hash.match(/^#client-(\d+)$/);
      if (!match) return;
      const id = Number(match[1]);
      const index = ClientsConstants.findIndex((c) => c.id === id);
      if (index < 0) return;
      setQuery('');
      setPage(Math.floor(index / ITEMS_PER_PAGE) + 1);
      setFocusedId(id);
      timer = setTimeout(() => {
        document
          .getElementById(`client-${id}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 80);
      setTimeout(() => setFocusedId(null), 3000);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', openFromHash);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return clients.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [query, clients]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <section className="section-padding bg-white dark:bg-[#161616]" aria-label={p.listLabel}>
      <div className="container-custom mx-auto">
        <div className="relative mb-12 max-w-xl">
          <MagnifyingGlassIcon className="pointer-events-none absolute start-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            aria-label={p.searchLabel}
            placeholder={p.searchPlaceholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-lg border border-slate-300 bg-white py-3 ps-11 pe-4 text-slate-900 placeholder:text-slate-400 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-white"
          />
        </div>

        {visible.length > 0 ? (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <li
                key={c.id}
                id={`client-${c.id}`}
                className={cn(
                  'glass-card flex scroll-mt-28 flex-col p-6 text-center transition-shadow sm:text-start',
                  focusedId === c.id && 'ring-2 ring-orange-500'
                )}
              >
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-slate-200 bg-[#ffffff] p-6">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={160}
                    height={72}
                    className="max-h-20 w-auto max-w-full object-contain"
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] rtl:tracking-normal text-orange-700 dark:text-orange-400">
                  {c.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{c.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {c.description}
                </p>
                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-5 text-sm"
                  >
                    {p.visit}
                    <ArrowTopRightOnSquareIcon className="ms-1.5 h-4 w-4" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-16 text-center text-slate-500">{p.empty}</p>
        )}

        {totalPages > 1 && (
          <nav className="mt-12 flex items-center gap-2" aria-label={p.paginationLabel}>
            <button
              type="button"
              aria-label={p.previous}
              className={pageBtn}
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeftIcon className="h-5 w-5 rtl:rotate-180" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-current={page === i + 1 ? 'page' : undefined}
                onClick={() => setPage(i + 1)}
                className={cn(
                  pageBtn,
                  page === i + 1 &&
                    '!border-slate-900 bg-slate-900 text-white dark:!border-orange-500 dark:bg-orange-500 dark:text-slate-950'
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              aria-label={p.next}
              className={pageBtn}
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              <ChevronRightIcon className="h-5 w-5 rtl:rotate-180" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
