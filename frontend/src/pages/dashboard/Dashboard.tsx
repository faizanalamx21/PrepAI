import { useEffect, useState } from "react";


import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";


import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsCards from "../../components/dashboard/StatsCards";
import ProgressSection from "../../components/dashboard/ProgressSection";
import RecentActivity from "../../components/dashboard/RecentActivity";


import { apiFetch } from "../../services/api";



interface DashboardStats {


  interviews: number;


  resumeScore: number;


  codingScore: number;


  rank: number;


  bestScore: number;


  resumeCount: number;


}





export default function Dashboard() {



  const [stats, setStats] = useState<DashboardStats>({


    interviews: 0,

    resumeScore: 0,

    codingScore: 0,

    rank: 1000,

    bestScore: 0,

    resumeCount: 0,


  });





  const [loading, setLoading] = useState(true);






  useEffect(() => {



    const controller = new AbortController();





    async function fetchDashboardStats() {



      try {


        const response = await apiFetch(

          "/api/dashboard/stats",

          {

            signal: controller.signal

          }

        );




        if (!response.ok) {


          throw new Error(

            "Dashboard API failed"

          );

        }




        const data = await response.json();





        setStats({


          interviews:

            Number(data.interviews) || 0,



          resumeScore:

            Math.round(

              Number(data.resumeScore) || 0

            ),



          codingScore:

            Math.round(

              Number(data.codingScore) || 0

            ),



          rank:

            Number(data.rank) || 1000,



          bestScore:

            Math.round(

              Number(data.bestScore) || 0

            ),



          resumeCount:

            Number(data.resumeCount) || 0


        });



      }

      catch(error:any){


        if(error.name !== "AbortError"){


          console.error(

            "Dashboard Error:",

            error

          );


        }


      }

      finally{


        setLoading(false);


      }


    }





    fetchDashboardStats();





    return () => {


      controller.abort();


    };




  }, []);







  return (


    <div className="flex min-h-screen bg-slate-950">



      <DashboardSidebar />




      <div className="flex-1">



        <DashboardNavbar />




        <main className="space-y-8 p-8">



          <WelcomeCard />





          {loading ? (



            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">


              <p className="text-cyan-400">

                Loading dashboard...

              </p>


            </div>



          ) : (



            <>



              <StatsCards

                interviews={stats.interviews}

                resumeScore={stats.resumeScore}

                codingScore={stats.codingScore}

                rank={stats.rank}

                bestScore={stats.bestScore}

                resumeCount={stats.resumeCount}

              />





              <ProgressSection

                resumeScore={stats.resumeScore}

                interviewScore={stats.codingScore}

              />



            </>



          )}






          <RecentActivity />





        </main>



      </div>



    </div>


  );

}