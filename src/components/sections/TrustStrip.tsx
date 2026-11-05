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
      className="border-b border-slate-200 bg-white py-12 dark:border-slate-700 dark:bg-[#161616]"
      aria-label="Clients"
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm text-slate-600 dark:text-slate-300">
          Trusted by teams across Egypt and the Gulf
        </p>
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4">
          {clients.map((c) => (
            <li
              key={c}
              className="flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-white p-5"
            >
              <Image
                src={`/images/clientsImages/${c}.png`}
                alt={c}
                width={120}
                height={64}
                className="max-h-14 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
