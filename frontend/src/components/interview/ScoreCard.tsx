interface Props {

  title: string;

  score: number;

}

export default function ScoreCard({
  title,
  score,
}: Props) {

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-cyan-400">
        {score}%
      </h2>

    </div>

  );

}