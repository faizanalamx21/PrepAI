import InterviewResult from "../../features/interview/InterviewResult";
import { useInterview } from "../../context/InterviewContext";


export default function InterviewResultPage() {


  const {
    interviewResult,
  } = useInterview();




  if(!interviewResult){


    return (

      <div className="min-h-screen bg-slate-950 flex items-center justify-center">

        <p className="text-white text-xl">
          No result generated.
        </p>

      </div>

    );

  }






  return (

    <div className="min-h-screen bg-slate-950 px-6 py-10">

      <InterviewResult
        result={interviewResult}
      />

    </div>

  );


}