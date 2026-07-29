interface ResumeSkillsProps {
  skills: string[];
}

export default function ResumeSkills({
  skills,
}: ResumeSkillsProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        Skills Found
      </h2>

      {skills.length === 0 ? (
        <p className="text-slate-400">
          No technical skills detected.
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400"
            >
              {skill}
            </span>
          ))}

        </div>
      )}

    </div>
  );
}