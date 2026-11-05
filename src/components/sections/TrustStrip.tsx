import Image from 'next/image';
import { ClientsConstants } from '@constants';

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden || undefined}>
      {ClientsConstants.map((c) => (
        <li
          key={c.id}
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white p-5"
        >
          <Image
            src={c.logo}
            alt={hidden ? '' : c.name}
            width={120}
            height={64}
            className="max-h-14 w-auto max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

/** All clients in a continuous marquee. Pauses on hover; static + scrollable if motion is reduced. */
export function TrustStrip() {
  return (
    <section
      className="border-b border-slate-200 bg-white py-12 dark:border-slate-700 dark:bg-[#161616]"
      aria-label="Clients"
    >
      <p className="mb-8 px-4 text-center text-sm text-slate-600 dark:text-slate-300">
        Trusted by teams across Egypt and the Gulf
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: '50s' }}
        >
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
