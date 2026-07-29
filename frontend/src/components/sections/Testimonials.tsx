import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Google",
    review:
      "PrepAI completely changed the way I prepared for interviews. The AI feedback was incredibly accurate.",
  },
  {
    name: "Priya Singh",
    role: "SDE @ Amazon",
    review:
      "The resume analyzer and mock interviews helped me gain confidence before my actual interviews.",
  },
  {
    name: "Arjun Patel",
    role: "AI Engineer @ Microsoft",
    review:
      "One of the best interview preparation platforms I've used. The dashboard and analytics are amazing.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Loved by Students & Professionals
          </h2>

          <p className="mt-4 text-slate-400">
            Thousands of learners trust PrepAI to prepare for interviews.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              <div className="mb-6 flex">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="leading-7 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-400">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}