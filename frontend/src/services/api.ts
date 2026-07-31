import { supabase } from "../lib/supabase";


const API_BASE_URL =
  import.meta.env.VITE_API_URL;



export async function apiFetch(
  url: string,
  options: RequestInit = {}
) {


  const {
    data:{
      session
    }
  } = await supabase.auth.getSession();



  const token =
    session?.access_token;



  const headers = new Headers(
    options.headers
  );



  if(options.body){

    headers.set(
      "Content-Type",
      "application/json"
    );

  }



  if(token){

    headers.set(
      "Authorization",
      `Bearer ${token}`
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