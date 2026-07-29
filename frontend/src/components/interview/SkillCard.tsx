interface Props {

  title: string;

  items: string[];

}

export default function SkillCard({
  title,
  items,
}: Props) {

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

      <h2 className="mb-5 text-xl font-bold text-white">
        {title}
      </h2>

      <ul className="space-y-3">

        {items.map((item) => (

          <li
            key={item}
            className="text-slate-300"
          >
            • {item}
          </li>

        ))}

      </ul>

    </div>

  );

}