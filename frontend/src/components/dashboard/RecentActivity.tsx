import { useEffect, useState } from "react";

import { 
  FileText,
  Brain
} from "lucide-react";


import { apiFetch } from "../../services/api";





interface Activity {


  title: string;


  status: string;


  type: string;


  created_at: string;


}








export default function RecentActivity() {



  const [activities, setActivities] =

    useState<Activity[]>([]);



  const [loading, setLoading] =

    useState(true);









  useEffect(() => {



    async function fetchActivity() {



      try {



        const response = await apiFetch(

          "/api/dashboard/activity"

        );







        if (!response.ok) {


          throw new Error(

            "Failed to load activity"

          );


        }






        const data = await response.json();





        console.log(

          "Dashboard Activity:",

          data

        );







        setActivities(

          data.slice(0,5)

        );







      }

      catch(error){



        console.error(

          "Activity error:",

          error

        );



        setActivities([]);




      }

      finally{



        setLoading(false);



      }



    }







    fetchActivity();





  }, []);









  function formatDate(date:string){



    return new Date(date).toLocaleDateString(

      "en-IN",

      {

        day:"2-digit",

        month:"short",

        year:"numeric"

      }

    );



  }









  return (



    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">






      <div className="mb-6">



        <h2 className="text-2xl font-bold text-white">


          Recent Activity


        </h2>





        <p className="mt-1 text-sm text-slate-500">


          Your latest preparation progress


        </p>



      </div>









      {loading && (



        <p className="text-cyan-400">


          Loading activity...


        </p>



      )}









      {!loading && activities.length === 0 && (



        <div className="rounded-xl bg-slate-950 p-6 text-center">


          <p className="text-slate-400">


            No activity yet. Complete an interview or upload a resume.


          </p>


        </div>



      )}









      {!loading && activities.length > 0 && (



        <div className="space-y-4">







          {activities.map((activity,index)=>{





            const Icon =

              activity.type === "Resume"

              ? FileText

              : Brain;







            return (





              <div



                key={`${activity.type}-${index}`}



                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"

              >







                <div className="flex items-center gap-4">






                  <div className="rounded-xl bg-cyan-500/10 p-3">


                    <Icon

                      size={22}

                      className="text-cyan-400"

                    />


                  </div>








                  <div>



                    <p className="font-medium text-white">


                      {activity.title}


                    </p>






                    <p className="mt-1 text-xs text-slate-500">


                      {activity.type} • {formatDate(activity.created_at)}


                    </p>



                  </div>







                </div>









                <span

                  className={

                    activity.type === "Resume"

                    ? "text-cyan-400 font-semibold"

                    : "text-green-400 font-semibold"

                  }

                >


                  {activity.status}


                </span>







              </div>





            );





          })}







        </div>



      )}








    </div>



  );

}