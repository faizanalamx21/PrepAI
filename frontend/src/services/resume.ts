import { supabase } from "../lib/supabase";





export interface ResumeAnalysis {

  id?: number;

  filename: string;

  score: number;

  skills: string[];

  missingKeywords: string[];

  strengths: string[];

  suggestions: string[];

  created_at?: string;

}








export interface ResumeHistoryItem {


  id: number;


  filename: string;


  score: number;


  skills: string[];


  missingKeywords: string[];


  strengths: string[];


  suggestions: string[];


  created_at: string;


}









const API_BASE_URL =

  "http://127.0.0.1:8000/api/resume";









// =========================
// Authentication Header
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
// Analyze Resume
// =========================


export async function analyzeResume(

  file: File

): Promise<ResumeAnalysis> {



  const formData = new FormData();



  formData.append(

    "file",

    file

  );








  const headers =

    await getAuthHeaders();







  const response = await fetch(


    `${API_BASE_URL}/analyze`,


    {


      method: "POST",


      headers,


      body: formData,


    }


  );








  if(!response.ok){


    const error = await response.text();



    throw new Error(

      error || "Resume analysis failed"

    );


  }








  const result = await response.json();








  return {


    id:

      result.id,



    filename:

      result.filename || "",



    score:

      Number(result.score) || 0,



    skills:

      Array.isArray(result.skills)

      ? result.skills

      : [],



    missingKeywords:


      Array.isArray(result.missingKeywords)

      ? result.missingKeywords

      : [],



    strengths:


      Array.isArray(result.strengths)

      ? result.strengths

      : [],



    suggestions:


      Array.isArray(result.suggestions)

      ? result.suggestions

      : [],



    created_at:

      result.created_at || "",



  };


}











// =========================
// Resume History
// =========================


export async function getResumeHistory()

: Promise<ResumeHistoryItem[]> {



  const headers =

    await getAuthHeaders();







  const response = await fetch(



    `${API_BASE_URL}/history`,



    {


      method:"GET",


      headers,


    }


  );








  if(!response.ok){


    const error = await response.text();



    throw new Error(

      error || "Failed to load resume history"

    );


  }








  const result = await response.json();








  return result.map(



    (item:any) => ({





      id:

        item.id,





      filename:

        item.filename || "",





      score:

        Number(item.score) || 0,





      skills:


        Array.isArray(item.skills)

        ? item.skills

        : typeof item.skills === "string"

        ? item.skills.split(",").filter(Boolean)

        : [],





      missingKeywords:


        Array.isArray(item.missingKeywords)

        ? item.missingKeywords


        : Array.isArray(item.missing_keywords)

        ? item.missing_keywords


        : typeof item.missing_keywords === "string"

        ? item.missing_keywords.split(",").filter(Boolean)


        : [],





      strengths:


        Array.isArray(item.strengths)

        ? item.strengths


        : typeof item.strengths === "string"

        ? item.strengths.split(",").filter(Boolean)


        : [],





      suggestions:


        Array.isArray(item.suggestions)

        ? item.suggestions


        : typeof item.suggestions === "string"

        ? item.suggestions.split(",").filter(Boolean)


        : [],





      created_at:

        item.created_at || "",





    })


  );


}