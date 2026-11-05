import Image from 'next/image';
import { cn } from '@lib/utils';

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
}: {
  className?: string;
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <LogoMark className={cn('shrink-0', compact ? 'h-10 w-10' : 'h-10 w-10')} />
      <span className="leading-none">
        <span
          className={cn(
            'block font-semibold tracking-wide',
            compact ? 'text-xl' : 'text-xl',
            light ? 'text-white' : 'text-slate-900 dark:text-white'
          )}
        >
          R<span className="text-orange-500">O</span>WAD
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[11px] tracking-[0.32px] text-slate-600 dark:text-slate-300 sm:block">
            Software Development
          </span>
        )}
      </span>
    </span>
  );
}
