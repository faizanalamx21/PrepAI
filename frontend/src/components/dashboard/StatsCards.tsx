import {
  Brain,
  FileText,
  Trophy,
  Code2,
} from "lucide-react";


interface StatsProps {

  interviews: number;

  resumeScore: number;

  codingScore: number;

  rank: number;

}





export default function StatsCards({

  interviews,

  resumeScore,

  codingScore,

  rank,

}: StatsProps) {



  const stats = [

    {
      title: "AI Interviews",
      value: interviews.toString(),
      icon: Brain,
    },


    {
      title: "Resume Score",
      value: `${resumeScore}%`,
      icon: FileText,
    },


    {
      title: "Coding Score",
      value: `${codingScore}%`,
      icon: Code2,
    },


    {
      title: "Overall Rank",
      value: `#${rank}`,
      icon: Trophy,
    },

  ];







  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">


      {stats.map((stat) => {


        const Icon = stat.icon;



        return (


          <div

            key={stat.title}

            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"

          >



            <div className="flex items-center justify-between">



              <div>


                <p className="text-sm text-slate-400">

                  {stat.title}

                </p>



                <h3 className="mt-3 text-3xl font-bold text-white">

                  {stat.value}

                </h3>



              </div>





              <div className="rounded-xl bg-cyan-500/10 p-3">


                <Icon

                  className="text-cyan-400"

                  size={24}

                />


              </div>



            </div>



          </div>


        );


      })}



    </div>

  );

}