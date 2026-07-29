import { useEffect, useState } from "react";

import { apiFetch } from "../../services/api";




interface Activity {

  title: string;

  status: string;

  type: string;

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

            No activity yet.

          </p>



        </div>



      )}












      {!loading && activities.length > 0 && (



        <div className="space-y-4">







          {activities.map((activity,index)=>(





            <div

              key={index}

              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"

            >





              <div>



                <p className="font-medium text-white">

                  {activity.title}

                </p>





                <p className="mt-1 text-xs text-slate-500">

                  {activity.type}

                </p>



              </div>









              <span

                className={

                  activity.type === "Resume"

                  ? "text-cyan-400"

                  : "text-green-400"

                }

              >

                {activity.status}

              </span>







            </div>





          ))}







        </div>



      )}











    </div>



  );



}