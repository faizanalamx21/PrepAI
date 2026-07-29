import {
  Bell,
  Search,
  LogOut,
} from "lucide-react";


import {
  useAuth,
} from "../../context/AuthContext";






export default function DashboardNavbar() {



  const {
    user,
    logout,
  } = useAuth();







  const name =

    user?.user_metadata?.full_name ||

    user?.email?.split("@")[0] ||

    "User";







  const email =

    user?.email ||

    "user@example.com";







  const initials = name

    .split(" ")

    .filter(Boolean)

    .map(

      (word:string)=>

        word.charAt(0)

    )

    .join("")

    .slice(0,2)

    .toUpperCase();









  async function handleLogout(){


    try{


      await logout();



      window.location.href = "/login";


    }


    catch(error){


      console.error(

        "Logout failed:",

        error

      );


    }


  }









  return (



    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">








      {/* Left */}



      <div>



        <h2 className="text-2xl font-bold text-white">


          Dashboard


        </h2>




        <p className="text-slate-400">


          Welcome back, {name} 👋


        </p>



      </div>









      {/* Right */}



      <div className="flex items-center gap-5">







        {/* Search */}



        <div className="hidden items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 md:flex">


          <Search


            size={18}


            className="text-slate-400"


          />




          <input


            placeholder="Search..."


            className="w-40 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"


          />


        </div>









        {/* Notification */}



        <button


          className="rounded-xl p-2 transition hover:bg-slate-900"


        >


          <Bell


            size={22}


            className="text-slate-400"


          />


        </button>









        {/* Profile */}



        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2">





          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">


            {initials}


          </div>







          <div className="hidden md:block">


            <p className="text-sm font-semibold text-white">


              {name}


            </p>



            <p className="text-xs text-slate-400">


              {email}


            </p>


          </div>









          <button



            onClick={handleLogout}



            className="ml-2 rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"



            title="Logout"



          >


            <LogOut size={18}/>


          </button>







        </div>








      </div>







    </header>


  );

}