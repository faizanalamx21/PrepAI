import type { ResumeHistoryItem } from "../../services/resume";



interface Props {

  resume: ResumeHistoryItem;

}





export default function ResumeHistoryCard({

  resume

}: Props) {



  const score = Number(resume.score) || 0;





  return (



    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/40">







      {/* Header */}



      <div className="flex items-center justify-between">



        <div>



          <h3 className="text-lg font-semibold text-white">

            {resume.filename}

          </h3>




          <p className="mt-1 text-sm text-slate-500">

            Resume Analysis

          </p>



        </div>







        {/* Score */}



        <div className="text-right">



          <p className="text-3xl font-bold text-cyan-400">

            {score}%

          </p>



          <p className="text-xs text-slate-500">

            ATS Score

          </p>



        </div>



      </div>









      {/* Progress Bar */}



      <div className="mt-6">



        <div className="mb-2 flex justify-between text-sm">



          <span className="text-slate-400">

            Resume Strength

          </span>



          <span className="text-cyan-400">

            {score}/100

          </span>



        </div>





        <div className="h-3 rounded-full bg-slate-800">



          <div

            className="h-3 rounded-full bg-cyan-500"

            style={{

              width: `${score}%`

            }}

          />



        </div>



      </div>









      {/* Skills */}



      <div className="mt-6">



        <h4 className="font-semibold text-white">

          Skills Detected

        </h4>




        <p className="mt-2 text-sm leading-6 text-slate-400">

          {

            resume.skills.length > 0

            ? resume.skills.join(", ")

            : "No skills detected"

          }

        </p>



      </div>









      {/* Missing Keywords */}



      <div className="mt-5">



        <h4 className="font-semibold text-white">

          Missing Keywords

        </h4>





        <p className="mt-2 text-sm leading-6 text-slate-400">

          {

            resume.missingKeywords.length > 0

            ? resume.missingKeywords.join(", ")

            : "No missing keywords"

          }

        </p>



      </div>









      {/* Strengths */}



      <div className="mt-5">



        <h4 className="font-semibold text-white">

          Strengths

        </h4>





        <p className="mt-2 text-sm leading-6 text-slate-400">

          {

            resume.strengths.length > 0

            ? resume.strengths.join(", ")

            : "No strengths detected"

          }

        </p>



      </div>









      {/* Suggestions */}



      <div className="mt-5">



        <h4 className="font-semibold text-white">

          Suggestions

        </h4>





        <p className="mt-2 text-sm leading-6 text-slate-400">

          {

            resume.suggestions.length > 0

            ? resume.suggestions.join(", ")

            : "No suggestions available"

          }

        </p>



      </div>









      {/* Date */}



      <div className="mt-6 border-t border-slate-800 pt-4">



        <p className="text-xs text-slate-500">

          Analyzed on:{" "}

          {

            resume.created_at

            ? new Date(resume.created_at).toLocaleDateString()

            : "Unknown"

          }

        </p>



      </div>







    </div>


  );

}