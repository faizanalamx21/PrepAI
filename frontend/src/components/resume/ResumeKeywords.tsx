interface ResumeKeywordsProps {
  keywords: string[];
}

export default function ResumeKeywords({
  keywords,
}: ResumeKeywordsProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Missing Keywords
      </h2>

      {keywords.length === 0 ? (
        <p className="text-green-400">
          Excellent! No important keywords are missing.
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">

          {keywords.slice(0, 12).map((keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-red-500/10 px-4 py-2 text-red-400"
            >
              {keyword}
            </span>
          ))}

        </div>
      )}

    </div>
  );
}