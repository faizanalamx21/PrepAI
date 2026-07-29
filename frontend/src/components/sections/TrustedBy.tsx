export default function TrustedBy() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Netflix",
    "Adobe",
  ];

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm uppercase tracking-[0.3em] text-slate-500">
          Trusted by students preparing for
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-12">

          {companies.map((company) => (
            <span
              key={company}
              className="text-2xl font-semibold text-slate-500 transition duration-300 hover:text-white"
            >
              {company}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}