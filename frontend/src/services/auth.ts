import { supabase } from "../lib/supabase";


export async function signUp(
  fullName: string,
  email: string,
  password: string
) {

  const {data,error} = await supabase.auth.signUp({

    email,

    password,

    options:{
      data:{
        full_name:fullName
      }
    }

  });


  return {data,error};

}






export async function signIn(
  email:string,
  password:string
){

  const {data,error} =
    await supabase.auth.signInWithPassword({

      email,

      password,

    });



  if(data.session){


    localStorage.setItem(

      "token",

      data.session.access_token

    );


  }


  return {data,error};

}






export async function signOut(){


  localStorage.removeItem("token");


  return await supabase.auth.signOut();

}