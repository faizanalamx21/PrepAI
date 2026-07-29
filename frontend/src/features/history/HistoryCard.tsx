interface Props {

  interview: any;

}



export default function HistoryCard({

  interview

}: Props) {


  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">


      <div className="flex items-center justify-between">


        <h2 className="text-xl font-bold text-white">

          {interview.role}

        </h2>



        <span className="text-2xl font-bold text-cyan-400">

          {interview.score}%

        </span>


      </div>





      <p className="mt-2 text-slate-400">

        Difficulty: {interview.difficulty}

      </p>





      <div className="mt-6 grid grid-cols-2 gap-4">


        <div className="rounded-xl bg-slate-950 p-4">

          <p className="text-sm text-slate-500">

            Technical

          </p>


          <p className="text-lg text-cyan-400">

            {interview.technical}%

          </p>


        </div>





        <div className="rounded-xl bg-slate-950 p-4">

          <p className="text-sm text-slate-500">

            Communication

          </p>


          <p className="text-lg text-cyan-400">

            {interview.communication}%

          </p>


        </div>





        <div className="rounded-xl bg-slate-950 p-4">

          <p className="text-sm text-slate-500">

            Confidence

          </p>


          <p className="text-lg text-cyan-400">

            {interview.confidence}%

          </p>


        </div>





        <div className="rounded-xl bg-slate-950 p-4">

          <p className="text-sm text-slate-500">

            Problem Solving

          </p>


          <p className="text-lg text-cyan-400">

            {interview.problem_solving}%

          </p>


        </div>


      </div>





      <div className="mt-5 text-sm text-slate-500">

        {new Date(

          interview.created_at

        ).toLocaleDateString()}

      </div>


    </div>

  );


}