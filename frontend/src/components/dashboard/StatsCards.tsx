import {
  Brain,
  FileText,
  Trophy,
  Code2,
  Award,
  UploadCloud
} from "lucide-react";



interface StatsProps {


  interviews: number;


  resumeScore: number;


  codingScore: number;


  rank: number;


  bestScore: number;


  resumeCount: number;


}





export default function StatsCards({


  interviews,

  resumeScore,

  codingScore,

  rank,

  bestScore,

  resumeCount,


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

      title: "Global Rank",

      value: `#${rank}`,

      icon: Trophy,


    },



    {

      title: "Best Interview",

      value: `${bestScore}%`,

      icon: Award,


    },



    {

      title: "Resume Uploads",

      value: resumeCount.toString(),

      icon: UploadCloud,


    },


  ];







  return (



    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">





      {stats.map((stat)=>{



        const Icon = stat.icon;




        return (



          <div


            key={stat.title}


            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"


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

                  size={24}

                  className="text-cyan-400"

                />



              </div>





            </div>



          </div>



        );



      })}





    </div>



  );

}