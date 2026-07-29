import os
import json
import re

from dotenv import load_dotenv
import google.generativeai as genai



load_dotenv()



api_key = os.getenv("GEMINI_API_KEY")



if not api_key:

    raise Exception(
        "GEMINI_API_KEY not found"
    )





genai.configure(
    api_key=api_key
)





model = genai.GenerativeModel(
    "gemini-flash-latest"
)








def evaluate_answer(

    role: str,

    difficulty: str,

    question: str,

    answer: str

):


    prompt = f"""

You are a senior technical interviewer.


Evaluate the candidate answer.



Role:

{role}



Difficulty:

{difficulty}



Question:

{question}



Candidate Answer:

{answer}




Give scores between 0-100 for:



- Technical correctness

- Communication

- Confidence

- Problem solving





Also provide:

- Feedback

- Strengths

- Improvements

- Better ideal answer





Return ONLY JSON.

No markdown.

No extra text.



JSON FORMAT:



{{

"score":0,

"technical":0,

"communication":0,

"confidence":0,

"problemSolving":0,


"feedback":[

"feedback point"

],


"strengths":[

"strength point"

],


"improvements":[

"improvement point"

],


"betterAnswer":

"ideal improved answer"

}}



"""



    try:


        response = model.generate_content(
            prompt
        )



        text = response.text.strip()



        print(
            "GEMINI RAW RESPONSE:",
            text
        )




        # remove markdown

        text = (

            text

            .replace("```json","")

            .replace("```","")

            .strip()

        )






        # extract json

        match = re.search(

            r"\{.*\}",

            text,

            re.DOTALL

        )



        if match:

            text = match.group(0)






        result = json.loads(text)





        return {


            "score":
                result.get("score",0),



            "technical":
                result.get("technical",0),



            "communication":
                result.get("communication",0),



            "confidence":
                result.get("confidence",0),



            "problemSolving":
                result.get("problemSolving",0),




            "feedback":
                result.get(
                    "feedback",
                    []
                ),




            "strengths":
                result.get(
                    "strengths",
                    []
                ),




            "improvements":
                result.get(
                    "improvements",
                    []
                ),




            "betterAnswer":
                result.get(
                    "betterAnswer",
                    "No better answer generated"
                )

        }





    except Exception as e:



        print(
            "FULL GEMINI ERROR:",
            repr(e)
        )



        return {


            "score":0,


            "technical":0,


            "communication":0,


            "confidence":0,


            "problemSolving":0,



            "feedback":[

                "Gemini evaluation failed"

            ],



            "strengths":[],



            "improvements":[

                str(e)

            ],



            "betterAnswer":

                "No answer generated"

        }