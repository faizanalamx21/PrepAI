import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

import { useInterview } from "../../context/InterviewContext";


export default function InterviewSession() {


  const navigate = useNavigate();


  const {
    questions,
    setAnswers,
  } = useInterview();




  const [currentIndex, setCurrentIndex] =
    useState(0);



  const [answerText, setAnswerText] =
    useState("");




  useEffect(() => {


    console.log(
      "SESSION RECEIVED QUESTIONS:",
      questions
    );


    setCurrentIndex(0);


  }, [questions]);





  const currentQuestion =
    questions[currentIndex];





  useEffect(() => {


    console.log(
      "CURRENT QUESTION:",
      currentQuestion
    );


    setAnswerText("");


  }, [currentIndex]);







  function handleSubmit() {


    if (!answerText.trim()) {


      alert(
        "Please enter your answer"
      );


      return;


    }




    if (!currentQuestion) {


      console.error(
        "No current question found"
      );


      return;


    }






    const newAnswer = {


      questionId:
        currentQuestion.id,



      question:
        currentQuestion.question,



      answer:
        answerText,


    };






    setAnswers(
      (previousAnswers) => [

        ...previousAnswers,

        newAnswer,

      ]
    );





    setAnswerText("");






    if (
      currentIndex + 1 < questions.length
    ) {


      setCurrentIndex(
        (previous) => previous + 1
      );


    } 
    else {


      navigate(
        "/interview/result"
      );


    }


  }







  if (!questions.length) {


    return (

      <div className="flex h-screen items-center justify-center text-white">


        <div className="text-center">


          <h2 className="text-2xl font-bold">

            No Questions Found

          </h2>


          <p className="mt-2 text-slate-400">

            Please restart interview.

          </p>


        </div>


      </div>

    );


  }







  if (!currentQuestion) {


    return (

      <div className="flex h-screen items-center justify-center text-white">

        Loading question...

      </div>

    );


  }







  return (


    <div className="mx-auto flex h-screen max-w-5xl flex-col">



      {/* Header */}


      <div className="border-b border-slate-800 p-6">


        <h1 className="text-3xl font-bold text-white">

          AI Interview

        </h1>




        <p className="mt-2 text-slate-400">


          Question {currentIndex + 1}
          {" / "}
          {questions.length}


        </p>


      </div>







      {/* Question */}


      <div className="flex-1 overflow-y-auto p-8">


        <div className="max-w-3xl rounded-2xl bg-slate-900 p-6">


          <p className="font-semibold text-cyan-400">

            AI Interviewer

          </p>




          <p className="mt-4 text-lg text-slate-300">


            {currentQuestion.question}


          </p>



        </div>


      </div>








      {/* Answer */}


      <div className="border-t border-slate-800 p-6">


        <textarea


          rows={5}


          value={answerText}



          onChange={(e)=>
            setAnswerText(
              e.target.value
            )
          }



          placeholder="Type your answer..."



          className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white outline-none focus:border-cyan-400"


        />






        <div className="mt-4 flex justify-end">



          <Button


            onClick={handleSubmit}


            className="bg-cyan-500 hover:bg-cyan-400"


          >


            {

              currentIndex + 1 === questions.length

              ?

              "Finish Interview"

              :

              "Next Question"

            }



          </Button>



        </div>



      </div>



    </div>


  );

}