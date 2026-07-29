import { Button } from "../../components/ui/button";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Hero Content */}
        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-400">
            🚀 AI-Powered Interview Preparation Platform
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">

            Crack Your Dream Job

            <span className="mt-4 block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              With AI Interview Practice
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practice realistic AI interviews, analyze your resume,
            improve coding skills, receive personalized AI feedback,
            and confidently land your dream job.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button
              size="lg"
              className="bg-cyan-500 px-8 py-5 text-base font-semibold hover:bg-cyan-400"
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-cyan-500 px-8 py-5 text-base font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              Live Demo
            </Button>

          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-3 text-slate-400">

            <span className="text-base text-yellow-400">
              ★★★★★
            </span>

            <span className="text-sm md:text-base">
              Trusted by{" "}
              <span className="font-semibold text-white">
                5,000+
              </span>{" "}
              students preparing for top tech companies
            </span>

          </div>

        </div>

        {/* Dashboard */}
        <div className="mt-16">
          <HeroDashboard />
        </div>

      </div>

    </section>
  );
}