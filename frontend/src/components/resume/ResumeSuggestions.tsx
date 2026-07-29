interface ResumeSuggestionsProps {
  suggestions: string[];
}

export default function ResumeSuggestions({
  suggestions,
}: ResumeSuggestionsProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        AI Suggestions
      </h2>

      <ul className="space-y-3">

        {suggestions.map((tip) => (
          <li
            key={tip}
            className="flex items-start gap-3 text-slate-300"
          >
            <span className="mt-1 text-cyan-400">
              •
            </span>

            <span>{tip}</span>

          </li>
        ))}

      </ul>

    </div>
  );
}