import Image from 'next/image';

const clients = [
  'BCME',
  'Beit',
  'CSI',
  'EGL',
  'EgyptMedical',
  'KadmarGroup',
  'ProkenChemicals',
  'SmartSystem',
];

export function TrustStrip() {
  return (
    <section
      className="border-b border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-[#0B1220]"
      aria-label="Clients"
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Trusted by teams across Egypt and the Gulf
        </p>
        <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <li
              key={c}
              className="flex h-16 items-center justify-center rounded-lg border border-slate-200 bg-white p-2"
            >
              <Image
                src={`/images/clientsImages/${c}.png`}
                alt={c}
                width={120}
                height={48}
                className="max-h-11 w-auto object-contain grayscale transition hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
