from fastapi import APIRouter, Depends
from pydantic import BaseModel

from sqlalchemy.orm import Session


from app.services.ai_evaluator import evaluate_answer
from app.services.question_service import get_questions

from app.database import SessionLocal

from app.models.interview import InterviewResult

from app.auth import get_current_user





router = APIRouter()







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
# AI Answer Evaluation
# =========================


class InterviewRequest(BaseModel):

    question: str

    answer: str

    role: str

    difficulty: str






@router.post("/evaluate")
def evaluate(

    data: InterviewRequest

):


    result = evaluate_answer(

        role=data.role,

        difficulty=data.difficulty,

        question=data.question,

        answer=data.answer

    )


    return result













# =========================
# Question Bank Generation
# =========================


class QuestionRequest(BaseModel):

    role: str

    difficulty: str

    count: int







@router.post("/questions")
def create_questions(

    data: QuestionRequest

):


    questions = get_questions(

        role=data.role,

        difficulty=data.difficulty,

        count=data.count

    )


    return {

        "questions": questions

    }













# =========================
# Save Interview Result
# =========================


class SaveResultRequest(BaseModel):

    role: str

    difficulty: str

    score: float

    technical: float

    communication: float

    confidence: float

    problemSolving: float

    feedback: str

    strengths: str

    improvements: str







@router.post("/save-result")
def save_result(


    data: SaveResultRequest,


    db: Session = Depends(get_db),


    current_user = Depends(get_current_user)


):


    interview_result = InterviewResult(



        user_id=current_user["id"],



        role=data.role,


        difficulty=data.difficulty,


        score=data.score,


        technical=data.technical,


        communication=data.communication,


        confidence=data.confidence,


        problem_solving=data.problemSolving,


        feedback=data.feedback,


        strengths=data.strengths,


        improvements=data.improvements


    )






    db.add(interview_result)


    db.commit()


    db.refresh(interview_result)







    return {


        "message":

            "Interview result saved successfully",


        "id":

            interview_result.id


    }














# =========================
# Interview History
# =========================


@router.get("/history")
def get_interview_history(


    db: Session = Depends(get_db),


    current_user = Depends(get_current_user)


):



    results = (


        db.query(InterviewResult)


        .filter(


            InterviewResult.user_id == current_user["id"]

        )


        .order_by(


            InterviewResult.created_at.desc()

        )


        .all()


    )







    return [



        {


            "id":

                result.id,


            "role":

                result.role,


            "difficulty":

                result.difficulty,


            "score":

                result.score,


            "technical":

                result.technical,


            "communication":

                result.communication,


            "confidence":

                result.confidence,


            "problem_solving":

                result.problem_solving,


            "feedback":

                result.feedback,


            "strengths":

                result.strengths,


            "improvements":

                result.improvements,


            "created_at":

                result.created_at



        }



        for result in results



    ]













# =========================
# Dashboard Statistics
# =========================


@router.get("/stats")
def get_dashboard_stats(


    db: Session = Depends(get_db),


    current_user = Depends(get_current_user)


):


    results = (


        db.query(InterviewResult)


        .filter(


            InterviewResult.user_id == current_user["id"]

        )


        .order_by(


            InterviewResult.created_at.desc()

        )


        .all()


    )






    total = len(results)






    if total == 0:


        return {


            "total": 0,


            "averageScore": 0,


            "bestScore": 0,


            "recent": []

        }









    average_score = sum(


        item.score


        for item in results


    ) / total







    best_score = max(


        item.score


        for item in results


    )









    recent = [



        {


            "id":

                item.id,


            "role":

                item.role,


            "difficulty":

                item.difficulty,


            "score":

                item.score,


            "date":

                item.created_at



        }



        for item in results[:5]



    ]








    return {


        "total":

            total,


        "averageScore":

            round(average_score),


        "bestScore":

            best_score,


        "recent":

            recent



    }













# =========================
# Router Test
# =========================


@router.get("/test")
def test_route():


    return {


        "message":

            "Interview router working"


    }