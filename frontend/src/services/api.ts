import { supabase } from "../lib/supabase";


const API_BASE_URL =
  "http://127.0.0.1:8000";



export async function apiFetch(
  url: string,
  options: RequestInit = {}
) {


  // Get current Supabase session
  const {
    data: {
      session
    }
  } = await supabase.auth.getSession();



  const token =
    session?.access_token;



  const headers = new Headers(
    options.headers
  );



  headers.set(
    "Content-Type",
    "application/json"
  );



  if(token){

    headers.set(
      "Authorization",
      `Bearer ${token}`
    );

  }
  else{

    console.error(
      "No Supabase token found"
    );

  }




  return fetch(

    `${API_BASE_URL}${url}`,

    {

      ...options,

      headers

    }

  );

}