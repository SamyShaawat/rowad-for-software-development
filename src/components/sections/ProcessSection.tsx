const steps = [
  {
    title: 'Discover',
    text: 'A working session to pin down the problem, the users and the budget.',
    gets: 'A scoped plan within a week',
  },
  {
    title: 'Design',
    text: 'Clickable prototypes you can test before any code is written.',
    gets: 'A prototype you can click',
  },
  {
    title: 'Build',
    text: 'Short sprints with a demo every two weeks. You own the code from day one.',
    gets: 'A demo every two weeks',
  },
  {
    title: 'Launch & support',
    text: 'Deployment, training and monitoring, with a team on call afterwards.',
    gets: 'A live product and support',
  },
];

/** Editorial split: sticky intro on the left, a ruled list of stages on the right. */
export function ProcessSection() {
  return (
    <section
      className="section-padding border-y border-blue-100 bg-blue-50 dark:border-slate-700 dark:bg-blue-400/[0.06]"
      aria-labelledby="process-title"
    >
      <div className="container-custom mx-auto grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-badge mb-4">How we work</p>
          <h2
            id="process-title"
            className="text-3xl leading-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            From first call to a product people use.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-600 dark:text-slate-300">
            You see progress every two weeks and decide what happens next. No long silences, no
            surprises on the invoice.
          </p>
        </div>

        <ol className="border-t border-blue-200 dark:border-slate-700">
          {steps.map((s) => (
            <li
              key={s.title}
              className="grid gap-4 border-b border-blue-200 py-8 dark:border-slate-700 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
            >
              <div>
                <h3 className="text-2xl font-light text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {s.text}
                </p>
              </div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs text-blue-800 dark:bg-slate-800 dark:text-blue-200">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                  aria-hidden="true"
                />
                {s.gets}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
