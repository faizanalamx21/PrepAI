import { useState } from "react";


import ResumeDropzone from "../../components/resume/ResumeDropzone";

import ResumeScore from "../../components/resume/ResumeScore";

import ResumeSkills from "../../components/resume/ResumeSkills";

import ResumeKeywords from "../../components/resume/ResumeKeywords";

import ResumeSuggestions from "../../components/resume/ResumeSuggestions";

import SkillCard from "../../components/interview/SkillCard";


import {
  analyzeResume,
  type ResumeAnalysis,
} from "../../services/resume";







export default function ResumeUpload() {



  const [selectedFile, setSelectedFile] =

    useState<File | null>(null);




  const [loading, setLoading] =

    useState(false);




  const [analysis, setAnalysis] =

    useState<ResumeAnalysis | null>(null);




  const [success, setSuccess] =

    useState("");








  async function handleFile(file: File) {



    setSelectedFile(file);

    setLoading(true);

    setAnalysis(null);

    setSuccess("");





    try {



      const result = await analyzeResume(file);



      setAnalysis(result);



      setSuccess(

        "Resume analyzed and saved successfully."

      );





    }

    catch(error){



      console.error(

        "Resume Analysis Error:",

        error

      );



      alert(

        "Unable to analyze resume."

      );



    }

    finally {



      setLoading(false);



    }


  }









  return (



    <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-10">







      {/* Heading */}



      <h1 className="text-4xl font-bold text-white">

        Resume Analyzer

      </h1>





      <p className="mt-3 text-slate-400">

        Upload your resume to get ATS score,

        skill analysis and AI-powered suggestions.

      </p>









      {/* Upload */}



      <div className="mt-8">


        <ResumeDropzone

          onFileSelect={handleFile}

        />


      </div>









      {/* Success */}



      {success && (


        <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4">


          <p className="text-green-400">

            {success}

          </p>


        </div>


      )}









      {/* Selected File */}



      {selectedFile && (


        <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-slate-950 p-6">



          <p className="text-sm text-slate-400">

            Uploaded Resume

          </p>





          <h3 className="mt-2 text-lg font-semibold text-cyan-400">

            {selectedFile.name}

          </h3>





          <p className="mt-1 text-sm text-slate-500">

            {(selectedFile.size / 1024).toFixed(2)} KB

          </p>



        </div>


      )}









      {/* Loading */}



      {loading && (



        <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-slate-950 p-6">


          <p className="text-cyan-400">

            AI is analyzing your resume...

          </p>


          <p className="mt-2 text-sm text-slate-500">

            Extracting skills, calculating ATS score,

            and generating suggestions.

          </p>


        </div>


      )}









      {/* Result */}



      {analysis && (



        <div className="mt-10 space-y-8">









          {/* ATS Score */}



          <ResumeScore

            score={analysis.score}

          />









          {/* Skills + Missing Keywords */}



          <div className="grid gap-6 lg:grid-cols-2">



            <ResumeSkills

              skills={analysis.skills}

            />





            <ResumeKeywords

              keywords={analysis.missingKeywords}

            />



          </div>









          {/* Strengths */}



          <SkillCard

            title="Resume Strengths"

            items={analysis.strengths}

          />









          {/* Suggestions */}



          <ResumeSuggestions

            suggestions={analysis.suggestions}

          />









        </div>


      )}







    </div>


  );

}