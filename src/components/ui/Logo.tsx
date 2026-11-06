import Image from 'next/image';
import { cn } from '@lib/utils';
import { getDictionary, type Locale } from '@/i18n';

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/icon-96.png"
      alt=""
      width={96}
      height={96}
      className={className}
      priority
    />
  );
}

export function Logo({
  className,
  light,
  compact,
  locale = 'en',
}: {
  className?: string;
  light?: boolean;
  compact?: boolean;
  locale?: Locale;
}) {
  const arabic = locale === 'ar';
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <LogoMark className={cn('shrink-0', compact ? 'h-10 w-10' : 'h-10 w-10')} />
      <span className="leading-none">
        <span
          className={cn(
            'block font-semibold tracking-wide rtl:tracking-normal',
            compact ? 'text-xl rtl:text-2xl' : 'text-xl rtl:text-2xl',
            light ? 'text-white' : 'text-slate-900 dark:text-white'
          )}
        >
          {arabic ? (
            // Arabic wordmark: the orange letter is و with a shadda (ّ) above it. No letter-spacing,
            // or the Arabic letters would no longer join.
            <>
              ر<span className="text-orange-500">وّ</span>اد
            </>
          ) : (
            <>
              R<span className="text-orange-500">O</span>WAD
            </>
          )}
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[11px] tracking-[0.32px] text-slate-600 rtl:tracking-normal dark:text-slate-300 sm:block">
            {getDictionary(locale).brand.subtitle}
          </span>
        )}
      </span>
    </span>
  );
}
