import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button";
import { useInterview } from "../../context/InterviewContext";

import { apiFetch } from "../../services/api";



export default function InterviewSetup() {


  const navigate = useNavigate();


  const {
    setSettings,
    setQuestions,
    setAnswers,
  } = useInterview();




  const [role, setRole] =
    useState("AI Engineer");


  const [difficulty, setDifficulty] =
    useState("Medium");


  const [questionCount, setQuestionCount] =
    useState(10);



  const [loading, setLoading] =
    useState(false);





  async function handleStartInterview() {


    try {


      setLoading(true);




      const response = await apiFetch(

        "/api/interview/questions",

        {

          method:"POST",

          body:JSON.stringify({

            role,

            difficulty,

            count:questionCount,

          }),

        }

      );






      if(!response.ok){


        const errorData =
          await response.json()
          .catch(()=>null);



        console.error(
          "Backend error:",
          errorData
        );



        throw new Error(
          "Backend request failed"
        );


      }






      const data =
        await response.json();





      console.log(

        "BACKEND QUESTIONS:",

        data.questions

      );






      if(

        !data.questions ||

        data.questions.length === 0

      ){


        throw new Error(
          "No questions received"
        );


      }








      setSettings({

        role,

        difficulty,

        questions:questionCount,

      });







      setQuestions(

        data.questions

      );







      setAnswers([]);







      navigate(

        "/interview/session"

      );




    }


    catch(error){


      console.error(

        "INTERVIEW START ERROR:",

        error

      );



      alert(

        "Unable to start interview"

      );


    }



    finally{


      setLoading(false);


    }


  }








  return (


    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-10">



      <h1 className="text-4xl font-bold text-white">

        AI Mock Interview

      </h1>




      <p className="mt-3 text-slate-400">

        Configure your interview before starting.

      </p>






      <div className="mt-8 space-y-6">





        <div>


          <label className="mb-2 block text-slate-300">

            Job Role

          </label>



          <select

            value={role}

            onChange={(e)=>
              setRole(e.target.value)
            }

            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"

          >


            <option>AI Engineer</option>

            <option>ML Engineer</option>

            <option>Data Scientist</option>

            <option>Frontend Developer</option>

            <option>Backend Developer</option>

            <option>Full Stack Developer</option>

            <option>Data Analyst</option>

            <option>DevOps Engineer</option>

            <option>Software Engineer</option>


          </select>


        </div>







        <div>


          <label className="mb-2 block text-slate-300">

            Difficulty

          </label>



          <select

            value={difficulty}

            onChange={(e)=>
              setDifficulty(e.target.value)
            }


            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"


          >


            <option>Easy</option>

            <option>Medium</option>

            <option>Hard</option>



          </select>


        </div>







        <div>


          <label className="mb-2 block text-slate-300">

            Number of Questions

          </label>



          <input


            type="number"


            min={5}


            max={30}


            value={questionCount}


            onChange={(e)=>

              setQuestionCount(

                Number(e.target.value)

              )

            }



            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"


          />


        </div>







        <Button


          type="button"


          disabled={loading}


          onClick={handleStartInterview}


          className="w-full bg-cyan-500 hover:bg-cyan-400"


        >


          {

            loading

            ?

            "Generating Interview..."

            :

            "Start Interview"

          }



        </Button>





      </div>


    </div>


  );


}