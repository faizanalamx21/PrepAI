export default function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          See Your{" "}
          <span className="text-cyan-400">
            AI Interview Dashboard
          </span>
        </h2>

        <p className="mt-4 text-slate-400">
          Everything you need to prepare for your dream job in one place.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-slate-800 p-6">
            <p className="text-slate-400">
              Resume Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              92%
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6">
            <p className="text-slate-400">
              AI Interviews
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              12
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6">
            <p className="text-slate-400">
              Coding Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              88%
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6">
            <p className="text-slate-400">
              Readiness
            </p>

            <h3 className="mt-3 text-4xl font-bold text-green-400">
              Excellent
            </h3>
          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-slate-800 p-8">

          <h3 className="text-2xl font-semibold">
            AI Feedback
          </h3>

          <p className="mt-4 text-slate-400">
            Your communication skills have improved by
            <span className="font-semibold text-cyan-400">
              {" "}18%
            </span>
            {" "}this week.
          </p>

          <div className="mt-6 h-3 rounded-full bg-slate-700">
            <div className="h-3 w-4/5 rounded-full bg-cyan-400"></div>
          </div>

        </div>

      </div>

    </section>
  );
}