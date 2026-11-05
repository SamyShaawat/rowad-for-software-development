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
        <ul className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-4 sm:grid-cols-4">
          {clients.map((c) => (
            <li
              key={c}
              className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4"
            >
              <Image
                src={`/images/clientsImages/${c}.png`}
                alt={c}
                width={200}
                height={80}
                className="max-h-16 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
