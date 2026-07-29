import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is PrepAI?",
    answer:
      "PrepAI is an AI-powered interview preparation platform that helps you practice mock interviews, improve your resume, solve coding problems, and track your progress.",
  },
  {
    question: "Is PrepAI free to use?",
    answer:
      "Yes. You can start with the free plan and upgrade to Pro for unlimited AI interviews and advanced analytics.",
  },
  {
    question: "Can I practice coding interviews?",
    answer:
      "Absolutely. PrepAI provides coding challenges, DSA practice, and AI feedback to help you improve.",
  },
  {
    question: "Does it analyze my resume?",
    answer:
      "Yes. Our AI resume analyzer provides an ATS score, identifies missing keywords, and suggests improvements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-14 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to know about PrepAI.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-800 bg-slate-900/70"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}