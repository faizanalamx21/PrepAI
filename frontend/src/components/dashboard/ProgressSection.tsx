import { useEffect, useState } from "react";

import {
  getInterviewHistory,
  type InterviewHistory,
} from "../../services/interviewApi";



interface ProgressProps {
  resumeScore: number;
  interviewScore: number;
}



export default function ProgressSection({
  resumeScore,
  interviewScore,
}: ProgressProps) {

  const [interviews, setInterviews] = useState<InterviewHistory[]>([]);



  useEffect(() => {

    async function loadInterviewHistory() {

      try {

        const data = await getInterviewHistory();

        setInterviews(data);

      } catch (error) {

        console.error(
          "ProgressSection history error:",
          error
        );

      }

    }



    loadInterviewHistory();

  }, []);



  const completedInterviews = interviews.length;



  return (

    <div className="grid gap-6 lg:grid-cols-2">


      {/* =========================
          Resume Score
      ========================= */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h3 className="text-xl font-semibold text-white">
          Resume Score
        </h3>


        <div className="mt-8">

          <div className="mb-3 flex justify-between">

            <span className="text-slate-400">
              ATS Compatibility
            </span>

            <span className="font-semibold text-cyan-400">
              {resumeScore}%
            </span>

          </div>


          <div className="h-3 rounded-full bg-slate-800">

            <div
              className="h-3 rounded-full bg-cyan-500 transition-all duration-500"
              style={{
                width: `${Math.min(
                  Math.max(resumeScore, 0),
                  100
                )}%`,
              }}
            />

          </div>

        </div>

      </div>



      {/* =========================
          Interview Readiness
      ========================= */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h3 className="text-xl font-semibold text-white">
          Interview Readiness
        </h3>


        <div className="mt-8">

          <div className="mb-3 flex justify-between">

            <span className="text-slate-400">
              Overall Progress
            </span>

            <span className="font-semibold text-green-400">
              {interviewScore}%
            </span>

          </div>


          <div className="h-3 rounded-full bg-slate-800">

            <div
              className="h-3 rounded-full bg-green-500 transition-all duration-500"
              style={{
                width: `${Math.min(
                  Math.max(interviewScore, 0),
                  100
                )}%`,
              }}
            />

          </div>


          <p className="mt-4 text-sm text-slate-500">

            {completedInterviews === 0
              ? "No AI interviews completed yet."
              : `${completedInterviews} AI interview${
                  completedInterviews === 1 ? "" : "s"
                } completed.`}

          </p>

        </div>

      </div>


    </div>

  );

}