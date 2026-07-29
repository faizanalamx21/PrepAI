import { supabase } from "../lib/supabase";



const HISTORY_URL =

  "http://127.0.0.1:8000/api/interview/history";








// =========================
// Get Authentication Header
// =========================


async function getAuthHeaders(){



  const {

    data

  } = await supabase.auth.getSession();





  const token =

    data.session?.access_token;







  if(!token){


    throw new Error(

      "User not authenticated"

    );


  }







  return {


    Authorization:

      `Bearer ${token}`


  };


}











// =========================
// Interview History
// =========================


export async function getInterviewHistory(){





  const headers =

    await getAuthHeaders();







  const response = await fetch(


    HISTORY_URL,


    {


      method:"GET",


      headers,


    }


  );








  if(!response.ok){



    const error =

      await response.text();




    throw new Error(


      error || "Failed to fetch interview history"


    );


  }








  return await response.json();



}