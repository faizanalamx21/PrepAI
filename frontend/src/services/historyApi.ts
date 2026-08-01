import { apiFetch } from "./api";


// =========================
// Interview History API
// =========================

export async function getInterviewHistory() {


  try {


    const response = await apiFetch(

      "/api/interview/history",

      {
        method: "GET",
      }

    );




    if (!response.ok) {


      const errorText =
        await response.text();



      console.error(
        "Interview history API error:",
        errorText
      );



      throw new Error(
        errorText ||
        "Failed to fetch interview history"
      );


    }





    const data =
      await response.json();





    if(Array.isArray(data)){

      return data;

    }





    if(data.history && Array.isArray(data.history)){

      return data.history;

    }





    return [];



  }

  catch(error){


    console.error(
      "getInterviewHistory failed:",
      error
    );


    throw error;


  }


}