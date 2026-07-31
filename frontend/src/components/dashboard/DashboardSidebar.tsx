import {
  LayoutDashboard,
  Brain,
  FileText,
  LogOut,
} from "lucide-react";


import { useNavigate, useLocation } from "react-router-dom";


import { signOut } from "../../services/auth";





const menu = [

  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },


  {
    icon: Brain,
    label: "AI Interview",
    path: "/interview",
  },


  {
    icon: FileText,
    label: "Resume Analyzer",
    path: "/resume",
  },

];









export default function DashboardSidebar() {


  const navigate = useNavigate();


  const location = useLocation();








  async function handleLogout() {


    const { error } = await signOut();



    if (error) {

      alert(error.message);

      return;

    }



    navigate("/");

  }









  return (



    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">





      {/* Logo */}

      <div className="border-b border-slate-800 p-8">


        <h1 className="text-3xl font-bold text-white">

          Prep<span className="text-cyan-400">AI</span>

        </h1>



        <p className="mt-1 text-sm text-slate-400">

          AI Interview Assistant

        </p>



      </div>









      {/* Menu */}

      <nav className="flex-1 space-y-2 p-6">



        {menu.map((item) => (



          <button


            key={item.label}


            onClick={() => navigate(item.path)}


            className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition ${
              
              location.pathname === item.path

              ? "bg-cyan-500 text-white"

              : "text-slate-400 hover:bg-slate-800 hover:text-white"

            }`}


          >



            <item.icon size={20} />



            {item.label}



          </button>



        ))}



      </nav>









      {/* Logout */}

      <div className="border-t border-slate-800 p-6">



        <button


          onClick={handleLogout}


          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-500 hover:text-white"


        >



          <LogOut size={20} />



          Logout



        </button>



      </div>






    </aside>


  );


}