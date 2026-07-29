import {
  Upload,
  BrainCircuit,
  Mic,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Resume",
    description:
      "Upload your resume and choose the role you're preparing for.",
  },
  {
    icon: BrainCircuit,
    title: "AI Generates Interview",
    description:
      "PrepAI creates personalized interview questions based on your profile.",
  },
  {
    icon: Mic,
    title: "Practice & Receive Feedback",
    description:
      "Answer questions through voice or text and receive instant AI feedback.",
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description:
      "View analytics, strengths, weaknesses, and improve with every session.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Prepare in Four Simple Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            From uploading your resume to mastering interviews,
            PrepAI guides you through every stage.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-slate-700 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col items-start gap-8 md:flex-row ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >

                  {/* Content */}
                  <div className="w-full md:w-1/2">

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">

                      <h3 className="text-2xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* Icon */}
                  <div className="absolute left-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-cyan-500 text-white md:left-1/2">
                    <Icon size={22} />
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}