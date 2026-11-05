import Image from 'next/image';
import Link from 'next/link';
import { ClientsConstants } from '@constants';

/** Client ids to keep out of the home strip (they still appear on the Clients page). */
const HIDDEN_IDS: number[] = [];

const clients = ClientsConstants.filter((c) => !HIDDEN_IDS.includes(c.id));

/**
 * One copy of the list. It is at least one viewport wide (+8rem) so the second copy, which makes
 * the loop seamless, is never on screen at the same time: a logo cannot appear twice in one view.
 */
function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex min-w-[calc(100vw+8rem)] shrink-0 items-center justify-around gap-4 pe-4"
      aria-hidden={hidden || undefined}
    >
      {clients.map((c) => (
        <li key={c.id}>
          <Link
            href={`/clients#client-${c.id}`}
            tabIndex={hidden ? -1 : undefined}
            aria-label={hidden ? undefined : `${c.name}: view client`}
            title={c.name}
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#ffffff] p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-orange-500 hover:shadow-md"
          >
            <Image
              src={c.logo}
              alt={hidden ? '' : c.name}
              width={120}
              height={64}
              className="max-h-14 w-auto max-w-full object-contain"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Clients in a continuous marquee. Pauses on hover; static and scrollable if motion is reduced. */
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
          style={{ animationDuration: '60s' }}
        >
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
