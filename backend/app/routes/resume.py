from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
    Depends,
)

from sqlalchemy.orm import Session

import shutil
import os
import uuid


from app.services.resume_parser import extract_resume_text
from app.services.resume_analyzer import analyze_resume

from app.database import SessionLocal

from app.models.resume import ResumeResult

from app.auth import get_current_user





router = APIRouter()





UPLOAD_FOLDER = "uploads"


os.makedirs(

    UPLOAD_FOLDER,

    exist_ok=True

)






# =========================
# Database Dependency
# =========================

def get_db():


    db = SessionLocal()


    try:

        yield db


    finally:

        db.close()







# =========================
# Analyze Resume
# =========================


@router.post("/analyze")
async def analyze_resume_file(


    file: UploadFile = File(...),


    db: Session = Depends(get_db),


    current_user = Depends(get_current_user)


):


    extension = (

        file.filename

        .split(".")

        [-1]

        .lower()

    )




    if extension not in [

        "pdf",

        "docx"

    ]:


        raise HTTPException(

            status_code=400,

            detail="Only PDF and DOCX files are supported"

        )







    file_id = str(uuid.uuid4())



    file_path = (

        f"{UPLOAD_FOLDER}/"

        f"{file_id}_{file.filename}"

    )





    try:



        with open(

            file_path,

            "wb"

        ) as buffer:


            shutil.copyfileobj(

                file.file,

                buffer

            )







        text = extract_resume_text(

            file_path

        )






        if not text.strip():


            raise HTTPException(

                status_code=400,

                detail="Unable to extract resume text"

            )







        result = analyze_resume(

            text

        )








        # Save Resume With User ID

        resume_result = ResumeResult(


            user_id=current_user["id"],


            filename=file.filename,


            score=result["score"],


            skills=", ".join(

                result["skills"]

            ),


            missing_keywords=", ".join(

                result["missingKeywords"]

            ),


            strengths=", ".join(

                result["strengths"]

            ),


            suggestions=", ".join(

                result["suggestions"]

            )


        )






        db.add(resume_result)


        db.commit()


        db.refresh(resume_result)







        return {


            "id":

                resume_result.id,


            "filename":

                resume_result.filename,


            "score":

                resume_result.score,


            "skills":

                result["skills"],


            "missingKeywords":

                result["missingKeywords"],


            "strengths":

                result["strengths"],


            "suggestions":

                result["suggestions"],


            "created_at":

                resume_result.created_at


        }







    except HTTPException:

        raise



    except Exception as error:


        db.rollback()


        raise HTTPException(

            status_code=500,

            detail=str(error)

        )







    finally:


        if os.path.exists(file_path):

            os.remove(file_path)









# =========================
# Resume History
# =========================


@router.get("/history")
def resume_history(


    db: Session = Depends(get_db),


    current_user = Depends(get_current_user)


):


    results = (


        db.query(ResumeResult)


        .filter(

            ResumeResult.user_id == current_user["id"]

        )


        .order_by(

            ResumeResult.created_at.desc()

        )


        .all()


    )







    return [



        {


            "id":

                item.id,



            "filename":

                item.filename,



            "score":

                item.score,



            "skills":

                item.skills.split(", ")

                if item.skills

                else [],



            "missingKeywords":

                item.missing_keywords.split(", ")

                if item.missing_keywords

                else [],



            "strengths":

                item.strengths.split(", ")

                if item.strengths

                else [],



            "suggestions":

                item.suggestions.split(", ")

                if item.suggestions

                else [],



            "created_at":

                item.created_at



        }



        for item in results



    ]