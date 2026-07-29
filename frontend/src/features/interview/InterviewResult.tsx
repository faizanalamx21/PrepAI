import { useNavigate } from "react-router-dom";

import ScoreCard from "../../components/interview/ScoreCard";
import SkillCard from "../../components/interview/SkillCard";



interface QuestionAnalysis {

  questionId:number;

  question:string;

  answer:string;

  score:number;

  technical:number;

  communication:number;

  confidence:number;

  problemSolving:number;

  feedback:string[];

  strengths:string[];

  improvements:string[];

  betterAnswer:string;

}




interface ResultType {


  score:number;

  technical:number;

  communication:number;

  confidence:number;

  problemSolving:number;



  feedback:string[];

  strengths:string[];

  improvements:string[];

  betterAnswer:string;



  questionAnalysis:QuestionAnalysis[];

}




interface Props {

  result:ResultType;

}






export default function InterviewResult({

  result,

}:Props){



  const navigate = useNavigate();





  function getPerformanceLabel(score:number){


    if(score >= 85)

      return "Excellent Performance";


    if(score >= 70)

      return "Good Performance";


    if(score >= 50)

      return "Average Performance";


    return "Needs Improvement";


  }








  return (



    <div className="mx-auto max-w-6xl space-y-8">






      {/* Header */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">


        <h1 className="text-4xl font-bold text-white">

          Interview Performance Report

        </h1>


        <p className="mt-3 text-slate-400">

          AI powered analysis of your technical interview.

        </p>


      </div>









      {/* Overall Score */}


      <div className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-10 text-center">



        <p className="text-slate-400">

          Overall Score

        </p>





        <div className="mx-auto mt-6 flex h-52 w-52 items-center justify-center rounded-full border-8 border-cyan-400">


          <span className="text-6xl font-bold text-cyan-400">

            {result.score}%

          </span>


        </div>






        <h2 className="mt-6 text-3xl font-bold text-white">

          {getPerformanceLabel(result.score)}

        </h2>


      </div>









      {/* Skill Analysis */}



      <div className="grid gap-6 md:grid-cols-4">


        <ScoreCard

          title="Technical"

          score={result.technical}

        />



        <ScoreCard

          title="Communication"

          score={result.communication}

        />



        <ScoreCard

          title="Confidence"

          score={result.confidence}

        />



        <ScoreCard

          title="Problem Solving"

          score={result.problemSolving}

        />


      </div>









      {/* AI Feedback */}



      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">


        <h2 className="text-2xl font-bold text-white">

          AI Feedback

        </h2>




        <ul className="mt-5 space-y-3 text-slate-300">


          {result.feedback.map((item,index)=>(

            <li

              key={index}

              className="rounded-xl bg-slate-950 p-4"

            >

              {item}

            </li>

          ))}


        </ul>


      </div>









      {/* Strengths */}


      <SkillCard

        title="Your Strengths"

        items={result.strengths}

      />








      {/* Improvements */}


      <SkillCard

        title="Areas To Improve"

        items={result.improvements}

      />









      {/* Better Answer */}



      <div className="rounded-3xl border border-green-500/30 bg-slate-900 p-8">


        <h2 className="text-2xl font-bold text-green-400">

          AI Suggested Better Answer

        </h2>



        <p className="mt-5 leading-8 text-slate-300 whitespace-pre-line">

          {result.betterAnswer}

        </p>


      </div>









      {/* Question Analysis */}



      {

        result.questionAnalysis &&

        result.questionAnalysis.length > 0 &&

        (

          <div className="space-y-6">


            <h2 className="text-3xl font-bold text-white">

              Question Wise Analysis

            </h2>




            {

              result.questionAnalysis.map((item,index)=>(


                <div

                  key={index}

                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8"

                >


                  <h3 className="text-xl font-bold text-cyan-400">

                    Question {index+1}

                  </h3>




                  <p className="mt-4 text-white">

                    {item.question}

                  </p>





                  <div className="mt-6">

                    <h4 className="font-semibold text-white">

                      Your Answer

                    </h4>


                    <p className="mt-2 rounded-xl bg-slate-950 p-4 text-slate-300">

                      {item.answer}

                    </p>


                  </div>








                  <div className="mt-6 grid gap-4 md:grid-cols-4">


                    <ScoreCard

                      title="Score"

                      score={item.score}

                    />


                    <ScoreCard

                      title="Technical"

                      score={item.technical}

                    />


                    <ScoreCard

                      title="Confidence"

                      score={item.confidence}

                    />


                    <ScoreCard

                      title="Problem Solving"

                      score={item.problemSolving}

                    />


                  </div>







                  <div className="mt-6">


                    <h4 className="font-semibold text-white">

                      Better Answer

                    </h4>


                    <p className="mt-2 rounded-xl border border-green-500/30 bg-slate-950 p-4 text-slate-300 whitespace-pre-line">

                      {item.betterAnswer}

                    </p>


                  </div>



                </div>


              ))

            }



          </div>

        )

      }









      {/* Actions */}



      <div className="flex justify-end gap-4">



        <button

          onClick={()=>navigate("/interview/history")}

          className="rounded-xl border border-slate-700 px-6 py-3 text-slate-300"

        >

          View History

        </button>





        <button

          onClick={()=>navigate("/dashboard")}

          className="rounded-xl border border-slate-700 px-6 py-3 text-slate-300"

        >

          Dashboard

        </button>





        <button

          onClick={()=>navigate("/interview")}

          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white"

        >

          Try Again

        </button>



      </div>





    </div>


  );
  

}