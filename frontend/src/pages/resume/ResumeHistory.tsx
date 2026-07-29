import { useEffect, useState } from "react";

import {
  getResumeHistory
} from "../../services/resume";



export default function ResumeHistory(){


  const [history,setHistory] =

    useState<any[]>([]);



  const [loading,setLoading] =

    useState(true);





  useEffect(()=>{


    async function loadHistory(){


      try{


        const data = await getResumeHistory();


        setHistory(data);



      }

      catch(error){


        console.error(

          "Resume history error",

          error

        );


      }

      finally{


        setLoading(false);


      }


    }



    loadHistory();


  },[]);







  if(loading){


    return (

      <div className="p-10 text-white">

        Loading resume history...

      </div>

    );


  }








  return (


    <div className="mx-auto max-w-6xl p-8">


      <h1 className="text-4xl font-bold text-white">

        Resume History

      </h1>



      <p className="mt-3 text-slate-400">

        View your previous resume analysis reports.

      </p>








      <div className="mt-8 grid gap-6">


        {

          history.length === 0 ?


          (

            <p className="text-slate-400">

              No resume analysis found.

            </p>

          )


          :


          history.map((item)=>(



            <div

              key={item.id}

              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"

            >


              <div className="flex justify-between">


                <div>


                  <h2 className="text-xl font-bold text-white">

                    {item.filename}

                  </h2>


                  <p className="mt-2 text-slate-400">

                    {item.created_at}

                  </p>


                </div>




                <div className="rounded-xl bg-cyan-500/10 px-5 py-3">


                  <span className="text-2xl font-bold text-cyan-400">

                    {item.score}%

                  </span>


                </div>


              </div>





              <div className="mt-6">


                <h3 className="font-semibold text-white">

                  Skills

                </h3>


                <p className="mt-2 text-slate-400">

                  {item.skills}

                </p>


              </div>







              <div className="mt-5">


                <h3 className="font-semibold text-white">

                  Suggestions

                </h3>


                <p className="mt-2 text-slate-400">

                  {item.suggestions}

                </p>


              </div>



            </div>


          ))

        }


      </div>


    </div>


  );

}