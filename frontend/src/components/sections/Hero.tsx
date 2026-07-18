import { Button } from "../../components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 pt-24 text-center">

        <span className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
          🚀 AI-Powered Interview Preparation Platform
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
          Crack Your Dream Job

          <span className="mt-4 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            With AI Interview Practice
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Upload your resume, practice personalized interviews,
          solve coding challenges, receive AI-powered feedback,
          and track your interview readiness — all in one platform.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <Button size="lg">
            Get Started
          </Button>

          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}