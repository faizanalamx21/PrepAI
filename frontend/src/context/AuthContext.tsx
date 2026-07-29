import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


import type { User } from "@supabase/supabase-js";

import { supabase } from "../lib/supabase";





interface AuthContextType {

  user: User | null;

  loading: boolean;

  logout: () => Promise<void>;

}






const AuthContext = createContext<AuthContextType>({

  user: null,

  loading: true,

  logout: async () => {},

});








export function AuthProvider({

  children,

}: {

  children: React.ReactNode;

}) {



  const [user, setUser] = useState<User | null>(null);


  const [loading, setLoading] = useState(true);








  useEffect(() => {



    let mounted = true;





    async function loadSession() {



      try {



        const {

          data,

          error,

        } = await supabase.auth.getSession();





        if(error){

          console.error(

            "Session loading error:",

            error

          );

        }





        if(mounted){


          setUser(

            data.session?.user ?? null

          );



          // Small delay to allow Supabase restore session

          setTimeout(() => {

            setLoading(false);

          },300);



        }





      }

      catch(error){



        console.error(

          "Auth initialization error:",

          error

        );



        if(mounted){

          setUser(null);

          setLoading(false);

        }



      }



    }







    loadSession();









    const {

      data: {

        subscription

      },

    } = supabase.auth.onAuthStateChange(





      (_event, session)=>{



        if(mounted){


          setUser(

            session?.user ?? null

          );


        }



      }



    );










    return () => {



      mounted = false;


      subscription.unsubscribe();



    };






  }, []);









  async function logout(){



    await supabase.auth.signOut();



    setUser(null);



  }












  return (



    <AuthContext.Provider


      value={{


        user,


        loading,


        logout,


      }}



    >


      {children}


    </AuthContext.Provider>



  );

}









export function useAuth(){


  return useContext(AuthContext);


}