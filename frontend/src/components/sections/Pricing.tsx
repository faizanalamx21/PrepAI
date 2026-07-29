import { Check } from "lucide-react";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for getting started.",
    features: [
      "5 AI Mock Interviews",
      "Basic Resume Analysis",
      "Coding Challenges",
      "Community Support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "₹499/mo",
    description: "Everything you need to ace interviews.",
    features: [
      "Unlimited AI Interviews",
      "Advanced Resume Analyzer",
      "Detailed Analytics",
      "Voice Feedback",
      "Priority Support",
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Choose Your Plan
          </h2>

          <p className="mt-3 text-slate-400">
            Start free and upgrade whenever you're ready.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-cyan-500 bg-slate-900 shadow-lg shadow-cyan-500/10"
                  : "border-slate-800 bg-slate-900/70"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {plan.description}
              </p>

              <div className="mt-5 text-4xl font-extrabold">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-3">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={16}
                      className="text-cyan-400"
                    />

                    {feature}
                  </li>
                ))}

              </ul>

              <Button
                className={`mt-6 w-full ${
                  plan.featured
                    ? "bg-cyan-500 hover:bg-cyan-400"
                    : ""
                }`}
              >
                Get Started
              </Button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}