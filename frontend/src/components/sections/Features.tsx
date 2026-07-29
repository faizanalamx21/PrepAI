import {
  BrainCircuit,
  Code2,
  FileText,
  Mic,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Mock Interviews",
    description:
      "Practice realistic AI-powered interviews tailored to your target role.",
    color: "text-cyan-400",
  },
  {
    icon: Code2,
    title: "Coding Challenges",
    description:
      "Solve DSA and coding problems with instant evaluation and feedback.",
    color: "text-blue-400",
  },
  {
    icon: FileText,
    title: "Resume Analyzer",
    description:
      "Get ATS score, keyword suggestions, and actionable resume improvements.",
    color: "text-violet-400",
  },
  {
    icon: Mic,
    title: "Speech Analysis",
    description:
      "Improve confidence, clarity, and communication with AI voice analysis.",
    color: "text-green-400",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track progress with detailed reports and personalized recommendations.",
    color: "text-yellow-400",
  },
  {
    icon: ShieldCheck,
    title: "Interview Readiness",
    description:
      "Measure your readiness score before applying to top companies.",
    color: "text-red-400",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Everything You Need to Ace Interviews
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            PrepAI combines AI, coding practice, resume analysis, and interview
            simulations into one powerful platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
              >

                <div
                  className={`mb-6 inline-flex rounded-2xl bg-slate-800 p-4 ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}