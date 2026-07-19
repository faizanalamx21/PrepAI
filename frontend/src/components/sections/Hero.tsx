import { Button } from "../../components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 pt-28 text-center">

        {/* Badge */}
        <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
          🚀 AI-Powered Interview Preparation Platform
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-8xl">
          Crack Your Dream Job

          <span className="mt-4 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            With AI Interview Practice
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Practice realistic AI interviews, receive personalized feedback,
          improve your coding skills, analyze your resume, and land your
          dream job with confidence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Button
            size="lg"
            className="bg-cyan-500 px-8 hover:bg-cyan-400"
          >
            Get Started
          </Button>

          <Button
            size="lg"
            className="bg-cyan-500 px-8 hover:bg-cyan-400"
          >
            Learn More
          </Button>

        </div>

        {/* Trust Badge */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-slate-400">

          <span className="text-xl text-yellow-400">
            ★★★★★
          </span>

          <span>
            Trusted by{" "}
            <span className="font-semibold text-white">
              5,000+
            </span>{" "}
            students preparing for top companies
          </span>

        </div>

      </div>
    </section>
  );
}