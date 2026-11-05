const steps = [
  [
    '01',
    'Discover',
    'A working session to pin down the problem, users and budget. You get a scoped plan within a week.',
  ],
  ['02', 'Design', 'Clickable prototypes you can test before any code is written.'],
  ['03', 'Build', 'Short sprints, a demo every two weeks, code you own from day one.'],
  ['04', 'Launch & support', 'Deployment, training, monitoring and a team on call afterwards.'],
];

export function ProcessSection() {
  return (
    <section
      className="section-padding border-y border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]"
      aria-labelledby="process-title"
    >
      <div className="container-custom mx-auto">
        <p className="section-badge mb-3">How we work</p>
        <h2
          id="process-title"
          className="max-w-2xl text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
        >
          From first call to live product in four steps.
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <li key={n} className="border-t-2 border-slate-900 pt-5 dark:border-orange-500">
              <span className="font-mono text-sm text-orange-700 dark:text-orange-400">{n}</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
