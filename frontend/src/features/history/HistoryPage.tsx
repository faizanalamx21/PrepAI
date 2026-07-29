import { useEffect, useState } from "react";

import {
  getInterviewHistory
} from "../../services/historyApi";

import {
  getResumeHistory,
  type ResumeHistoryItem
} from "../../services/resume";


import HistoryCard from "./HistoryCard";





interface InterviewHistory {


  id: number;

  role: string;

  difficulty: string;

  score: number;

  technical: number;

  communication: number;

  confidence: number;

  problem_solving: number;

  feedback: string;

  strengths: string;

  improvements: string;

  created_at: string;


}








export default function HistoryPage(){



  const [interviews,setInterviews] =

    useState<InterviewHistory[]>([]);




  const [resumes,setResumes] =

    useState<ResumeHistoryItem[]>([]);




  const [loading,setLoading] =

    useState(true);



  const [error,setError] =

    useState("");







  useEffect(()=>{


    async function fetchHistory(){


      try{



        const [

          interviewData,

          resumeData

        ] = await Promise.all([



          getInterviewHistory(),



          getResumeHistory()



        ]);





        setInterviews(interviewData);



        setResumes(resumeData);



      }



      catch(err){



        console.error(

          "History error:",

          err

        );



        setError(

          "Unable to load history."

        );



      }


      finally{


        setLoading(false);


      }



    }





    fetchHistory();



  },[]);









  if(loading){


    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-950">


        <p className="text-xl text-cyan-400">

          Loading history...

        </p>


      </div>

    );


  }









  if(error){


    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-950">


        <p className="text-red-400">

          {error}

        </p>


      </div>

    );


  }









  return (



    <div className="min-h-screen bg-slate-950 p-10">



      <div className="mx-auto max-w-6xl">





        <h1 className="text-4xl font-bold text-white">

          Preparation History

        </h1>





        <p className="mt-2 text-slate-400">

          Track your interviews and resume improvements

        </p>









        {/* Resume History */}



        <section className="mt-10">



          <h2 className="text-2xl font-bold text-white">

            Resume Analysis

          </h2>





          {

            resumes.length === 0 ?



            (

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">


                <p className="text-slate-400">

                  No resume analysis yet.

                </p>


              </div>

            )



            :



            (

              <div className="mt-5 grid gap-5">



                {

                  resumes.map((resume)=>(


                    <div

                      key={resume.id}

                      className="rounded-2xl border border-slate-800 bg-slate-900 p-6"

                    >


                      <div className="flex justify-between">


                        <h3 className="font-semibold text-white">

                          {resume.filename}

                        </h3>



                        <span className="text-cyan-400">

                          ATS {resume.score}%

                        </span>



                      </div>



                      <p className="mt-3 text-sm text-slate-400">

                        Skills:

                        {" "}

                        {resume.skills}

                      </p>



                    </div>



                  ))

                }



              </div>

            )

          }



        </section>









        {/* Interview History */}



        <section className="mt-12">



          <h2 className="text-2xl font-bold text-white">

            Mock Interviews

          </h2>





          {

            interviews.length === 0 ?



            (

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">


                <p className="text-slate-400">

                  No interviews completed yet.

                </p>


              </div>

            )



            :



            (

              <div className="mt-5 grid gap-6">


                {

                  interviews.map((item)=>(


                    <HistoryCard

                      key={item.id}

                      interview={item}

                    />


                  ))

                }


              </div>

            )

          }



        </section>







      </div>



    </div>


  );

}