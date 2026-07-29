import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button";

import type { UserAnswer } from "../../types/interview";

import { useInterview } from "../../context/InterviewContext";

import {
  evaluateAnswer,
  saveInterviewResult,
} from "../../services/interviewApi";


export default function InterviewPage() {

  const navigate = useNavigate();

  const {
    settings,
    questions,
    answers,
    setAnswers,
    setInterviewResult,
  } = useInterview();


  const [current, setCurrent] = useState(0);

  const [answer, setAnswer] = useState("");

  const [submitting, setSubmitting] = useState(false);


  const question = questions[current];


  async function nextQuestion() {

    if (!question || submitting) {
      return;
    }


    // ==========================================
    // Create current answer
    // ==========================================

    const currentAnswer: UserAnswer = {

      questionId: question.id,

      question: question.question,

      answer: answer.trim(),

    };


    // ==========================================
    // Add current answer to existing answers
    // ==========================================

    const updatedAnswers = [
      ...answers,
      currentAnswer,
    ];


    setAnswers(updatedAnswers);


    // ==========================================
    // Move to next question
    // ==========================================

    if (current < questions.length - 1) {

      setCurrent(
        (prev) => prev + 1
      );

      setAnswer("");

      return;
    }


    // ==========================================
    // Final question
    // ==========================================

    if (updatedAnswers.length === 0) {

      alert(
        "Please answer at least one question."
      );

      return;
    }


    try {

      setSubmitting(true);


      // ========================================
      // Totals
      // ========================================

      let totalScore = 0;

      let totalTechnical = 0;

      let totalCommunication = 0;

      let totalConfidence = 0;

      let totalProblemSolving = 0;


      // ========================================
      // Feedback collections
      // ========================================

      const feedback: string[] = [];

      const strengths: string[] = [];

      const improvements: string[] = [];


      const questionAnalysis: any[] = [];


      let betterAnswer = "";


      // ========================================
      // Evaluate every answer
      // ========================================

      for (const ans of updatedAnswers) {

        console.log(
          "Evaluating question:",
          ans.questionId
        );


        const result = await evaluateAnswer({

          role: settings.role,

          difficulty: settings.difficulty,

          question: ans.question,

          answer: ans.answer,

        });


        console.log(
          "AI RESPONSE:",
          result
        );


        const score =
          Number(result.score) || 0;


        const technical =
          Number(result.technical) || 0;


        const communication =
          Number(result.communication) || 0;


        const confidence =
          Number(result.confidence) || 0;


        const problemSolving =
          Number(result.problemSolving) || 0;


        totalScore += score;

        totalTechnical += technical;

        totalCommunication += communication;

        totalConfidence += confidence;

        totalProblemSolving += problemSolving;


        feedback.push(
          ...(result.feedback || [])
        );


        strengths.push(
          ...(result.strengths || [])
        );


        improvements.push(
          ...(result.improvements || [])
        );


        betterAnswer =
          result.betterAnswer ||
          "No better answer generated";


        questionAnalysis.push({

          questionId:
            ans.questionId,

          question:
            ans.question,

          answer:
            ans.answer,

          score,

          technical,

          communication,

          confidence,

          problemSolving,

          feedback:
            result.feedback || [],

          strengths:
            result.strengths || [],

          improvements:
            result.improvements || [],

          betterAnswer,

        });

      }


      // ==========================================
      // Calculate final averages
      // ==========================================

      const count =
        updatedAnswers.length;


      const finalResult = {

        score:
          Math.round(
            totalScore / count
          ),


        technical:
          Math.round(
            totalTechnical / count
          ),


        communication:
          Math.round(
            totalCommunication / count
          ),


        confidence:
          Math.round(
            totalConfidence / count
          ),


        problemSolving:
          Math.round(
            totalProblemSolving / count
          ),


        feedback,

        strengths,

        improvements,

        betterAnswer,

        questionAnalysis,

      };


      console.log(
        "================================="
      );

      console.log(
        "FINAL INTERVIEW RESULT"
      );

      console.log(
        finalResult
      );

      console.log(
        "================================="
      );


      // ==========================================
      // Save to backend
      // ==========================================

      const savedResult =
        await saveInterviewResult({

          role:
            settings.role,

          difficulty:
            settings.difficulty,


          score:
            finalResult.score,


          technical:
            finalResult.technical,


          communication:
            finalResult.communication,


          confidence:
            finalResult.confidence,


          problemSolving:
            finalResult.problemSolving,


          feedback:
            finalResult.feedback.join("\n"),


          strengths:
            finalResult.strengths.join("\n"),


          improvements:
            finalResult.improvements.join("\n"),

        });


      console.log(
        "INTERVIEW RESULT SAVED:",
        savedResult
      );


      // ==========================================
      // Store result in React context
      // ==========================================

      setInterviewResult(
        finalResult
      );


      // ==========================================
      // Go to result page
      // ==========================================

      navigate(
        "/interview/result"
      );


    } catch (error) {

      console.error(
        "FINAL INTERVIEW ERROR:",
        error
      );


      alert(
        error instanceof Error
          ? error.message
          : "Interview evaluation failed."
      );


    } finally {

      setSubmitting(false);

    }

  }


  // ==========================================
  // No questions
  // ==========================================

  if (!questions.length) {

    return (

      <div className="p-10 text-white">

        No questions available.

      </div>

    );

  }


  // ==========================================
  // UI
  // ==========================================

  return (

    <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-10">


      {/* Header */}

      <h1 className="text-4xl font-bold text-white">

        AI Mock Interview

      </h1>


      {/* Interview Info */}

      <div className="mt-5 grid grid-cols-3 gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-5">


        <div>

          <p className="text-sm text-slate-500">

            Role

          </p>

          <p className="text-cyan-400">

            {settings.role}

          </p>

        </div>


        <div>

          <p className="text-sm text-slate-500">

            Difficulty

          </p>

          <p className="text-cyan-400">

            {settings.difficulty}

          </p>

        </div>


        <div>

          <p className="text-sm text-slate-500">

            Progress

          </p>

          <p className="text-cyan-400">

            {current + 1} / {questions.length}

          </p>

        </div>

      </div>


      {/* Question */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-950 p-8">

        <p className="mb-3 text-sm text-slate-500">

          Question {current + 1}

        </p>

        <h2 className="text-2xl font-semibold text-white">

          {question.question}

        </h2>

      </div>


      {/* Answer */}

      <textarea

        rows={8}

        value={answer}

        onChange={(e) =>
          setAnswer(e.target.value)
        }

        placeholder="Type your answer here..."

        disabled={submitting}

        className="mt-8 w-full rounded-2xl border border-slate-700 bg-slate-950 p-5 text-white outline-none transition focus:border-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"

      />


      {/* Button */}

      <div className="mt-8 flex justify-end">

        <Button

          onClick={nextQuestion}

          disabled={submitting}

          className="bg-cyan-500 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"

        >

          {submitting

            ? "Evaluating Interview..."

            : current === questions.length - 1

              ? "Finish Interview"

              : "Next Question →"

          }

        </Button>

      </div>


    </div>

  );

}