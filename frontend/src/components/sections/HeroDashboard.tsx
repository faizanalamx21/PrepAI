import {
  LayoutDashboard,
  FileText,
  Code2,
  Brain,
  Bell,
  User,
  BarChart3,
  TrendingUp,
  Trophy,
  Clock,
} from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="mx-auto mt-24 max-w-5xl overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl shadow-cyan-500/10">

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            PrepAI Dashboard
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI Interview Readiness Platform
          </p>
        </div>

        <div className="flex items-center gap-5">

          <Bell className="h-5 w-5 cursor-pointer text-slate-400 transition hover:text-white" />

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500">
            <User className="h-5 w-5 text-white" />
          </div>

        </div>

      </div>

      <div className="grid lg:grid-cols-[230px_1fr]">

        {/* Sidebar */}

        <aside className="border-r border-slate-800 bg-slate-950/60 p-6">

          <nav className="space-y-6">

            <div className="flex items-center gap-3 rounded-xl bg-cyan-500/10 p-4 font-medium text-cyan-400">
              <LayoutDashboard size={20} />
              Dashboard
            </div>

            <div className="flex items-center gap-3 rounded-xl p-4 text-slate-400 transition hover:bg-slate-800 hover:text-white">
              <FileText size={20} />
              Resume
            </div>

            <div className="flex items-center gap-3 rounded-xl p-4 text-slate-400 transition hover:bg-slate-800 hover:text-white">
              <Code2 size={20} />
              Coding
            </div>

            <div className="flex items-center gap-3 rounded-xl p-4 text-slate-400 transition hover:bg-slate-800 hover:text-white">
              <Brain size={20} />
              AI Interview
            </div>

            <div className="flex items-center gap-3 rounded-xl p-4 text-slate-400 transition hover:bg-slate-800 hover:text-white">
              <BarChart3 size={20} />
              Analytics
            </div>

          </nav>

        </aside>

        {/* Main Content */}

        <div className="space-y-8 p-8">

          {/* Top Cards */}

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">

              <TrendingUp className="mb-4 text-cyan-400" />

              <p className="text-slate-400">
                Resume Score
              </p>

              <h3 className="mt-2 text-4xl font-bold text-cyan-400">
                92%
              </h3>

              <div className="mt-5 h-2 rounded-full bg-slate-800">
                <div className="h-2 w-[92%] rounded-full bg-cyan-400"></div>
              </div>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">

              <Code2 className="mb-4 text-blue-400" />

              <p className="text-slate-400">
                Coding Score
              </p>

              <h3 className="mt-2 text-4xl font-bold text-blue-400">
                88%
              </h3>

              <div className="mt-5 h-2 rounded-full bg-slate-800">
                <div className="h-2 w-[88%] rounded-full bg-blue-400"></div>
              </div>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10">

              <Trophy className="mb-4 text-green-400" />

              <p className="text-slate-400">
                Interview Ready
              </p>

              <h3 className="mt-2 text-4xl font-bold text-green-400">
                95%
              </h3>

              <div className="mt-5 h-2 rounded-full bg-slate-800">
                <div className="h-2 w-[95%] rounded-full bg-green-400"></div>
              </div>

            </div>

          </div>

          {/* Recent Interviews */}

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

            <div className="mb-6 flex items-center gap-3">

              <Clock className="text-cyan-400" />

              <h3 className="text-2xl font-bold text-white">
                Recent Interview Sessions
              </h3>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800">
                <span className="font-medium">
                  Google Backend Engineer
                </span>

                <span className="rounded-full bg-green-500/10 px-4 py-1 text-sm font-medium text-green-400">
                  Completed
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800">
                <span className="font-medium">
                  Amazon SDE
                </span>

                <span className="rounded-full bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-400">
                  In Progress
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800">
                <span className="font-medium">
                  Microsoft AI Engineer
                </span>

                <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
                  Scheduled
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}