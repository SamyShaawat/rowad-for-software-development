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

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="leading-none">
        <span
          className={cn(
            'block text-xl font-extrabold tracking-tight',
            light ? 'text-white' : 'text-slate-900 dark:text-white'
          )}
        >
          R<span className="text-orange-500">O</span>WAD
        </span>
        <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
          Software Development
        </span>
      </span>
    </span>
  );
}
