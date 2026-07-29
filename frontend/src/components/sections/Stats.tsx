import {
  Users,
  BrainCircuit,
  Briefcase,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Students Trained",
    color: "text-cyan-400",
  },
  {
    icon: BrainCircuit,
    value: "500+",
    label: "AI Interview Questions",
    color: "text-blue-400",
  },
  {
    icon: Briefcase,
    value: "25+",
    label: "Job Roles",
    color: "text-violet-400",
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Success Rate",
    color: "text-emerald-400",
  },
];

export default function Stats() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Platform Statistics
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Trusted by Future Engineers
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to prepare for technical interviews.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-slate-800 p-4 ${stat.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-4xl font-bold">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}