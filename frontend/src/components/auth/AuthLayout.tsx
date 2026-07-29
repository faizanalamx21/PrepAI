import type { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 lg:flex">

          <div className="max-w-lg px-10">

            <h1 className="text-5xl font-extrabold leading-tight text-white">
              Prep
              <span className="text-cyan-400">AI</span>
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              Prepare smarter with AI-powered mock interviews,
              resume analysis, coding practice, and personalized
              interview feedback.
            </p>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <p className="text-slate-300">
                ⭐ Trusted by
              </p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                5,000+
              </h2>

              <p className="text-slate-400">
                Students & Professionals
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6">

          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl">

            <h2 className="text-3xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-2 text-slate-400">
              {subtitle}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}