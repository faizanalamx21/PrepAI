export default function Features() {
  const features = [
    {
      icon: "📄",
      title: "Resume Intelligence",
      description:
        "Upload your resume and receive ATS scoring, skill extraction, and personalized improvement suggestions.",
    },
    {
      icon: "🎤",
      title: "AI Interview Engine",
      description:
        "Practice HR, Technical, AI/ML, and DSA interviews with realistic AI-generated questions.",
    },
    {
      icon: "💻",
      title: "Coding Interview",
      description:
        "Solve coding problems, run test cases, receive AI hints, and analyze time complexity.",
    },
    {
      icon: "🎙",
      title: "Voice Interview",
      description:
        "Speak naturally with an AI interviewer using speech-to-text and real-time conversation.",
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description:
        "Track communication, technical skills, confidence, and hiring readiness over time.",
    },
    {
      icon: "👤",
      title: "Personal Dashboard",
      description:
        "Manage interviews, resumes, progress, and achievements from one modern dashboard.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Why Choose <span className="text-cyan-400">PrepAI</span>?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Everything you need to prepare for interviews, improve your
            communication, and land your dream job.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
            >
              <div className="mb-6 text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}