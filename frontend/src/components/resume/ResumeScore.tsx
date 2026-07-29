interface ResumeScoreProps {
  score: number;
}

export default function ResumeScore({
  score,
}: ResumeScoreProps) {

  const percentage = Math.min(score, 100);

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-8">

      <h2 className="text-2xl font-bold text-white">
        ATS Score
      </h2>

      <div className="mt-8">

        <div className="h-4 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <div className="mt-6 text-center">

          <p className="text-6xl font-extrabold text-cyan-400">

            {score}

          </p>

          <p className="mt-2 text-slate-400">
            out of 100
          </p>

        </div>

      </div>

    </div>
  );
}