import { supabase } from "../lib/supabase";


// =========================
// Backend API URL
// =========================

const API_BASE_URL =
  import.meta.env.VITE_API_URL;



if(!API_BASE_URL){

  console.error(
    "VITE_API_URL is missing in .env"
  );

}





// =========================
// Common API Fetch Wrapper
// =========================

export async function apiFetch(

  url:string,

  options:RequestInit = {}

){



  const {
    data:{
      session
    }

  } = await supabase.auth.getSession();





  const headers = new Headers(

    options.headers

  );






  // Add JSON header only when body exists

  if(options.body && !(options.body instanceof FormData)){


    headers.set(

      "Content-Type",

      "application/json"

    );


  }







  // Attach Supabase JWT

  if(session?.access_token){


    headers.set(

      "Authorization",

      `Bearer ${session.access_token}`

    );


  }

  else{


    console.warn(

      "No Supabase access token found"

    );


  }








  return fetch(

    `${API_BASE_URL}${url}`,

    {

      ...options,

      headers,

    }

  );


}