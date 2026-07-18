export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-3xl font-bold text-cyan-400">98%</h2>
          <p className="mt-2 text-slate-400">
            Interview Success
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-3xl font-bold text-cyan-400">500+</h2>
          <p className="mt-2 text-slate-400">
            AI Questions
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-3xl font-bold text-cyan-400">25+</h2>
          <p className="mt-2 text-slate-400">
            Job Roles
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-3xl font-bold text-cyan-400">24×7</h2>
          <p className="mt-2 text-slate-400">
            AI Interviewer
          </p>
        </div>

      </div>
    </section>
  );
}