from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from sqlalchemy import func, desc

from app.database import SessionLocal

from app.models.interview import InterviewResult

from app.models.resume import ResumeResult

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
# Dashboard Statistics
# =========================

@router.get("/stats")
def dashboard_stats(

    db: Session = Depends(get_db),

    current_user = Depends(get_current_user)

):


    user_id = current_user["id"]



    # -------------------------
    # Total Interviews
    # -------------------------

    interview_count = (

        db.query(InterviewResult)

        .filter(

            InterviewResult.user_id == user_id

        )

        .count()

    )



    # -------------------------
    # Average Resume Score
    # -------------------------

    avg_resume_score = (

        db.query(

            func.avg(ResumeResult.score)

        )

        .filter(

            ResumeResult.user_id == user_id

        )

        .scalar()

    )



    # -------------------------
    # Average Interview Score
    # -------------------------

    avg_interview_score = (

        db.query(

            func.avg(InterviewResult.score)

        )

        .filter(

            InterviewResult.user_id == user_id

        )

        .scalar()

    )



    # -------------------------
    # Best Interview Score
    # -------------------------

    best_score = (

        db.query(

            func.max(InterviewResult.score)

        )

        .filter(

            InterviewResult.user_id == user_id

        )

        .scalar()

    )



    # -------------------------
    # Resume Count
    # -------------------------

    resume_count = (

        db.query(ResumeResult)

        .filter(

            ResumeResult.user_id == user_id

        )

        .count()

    )



    # -------------------------
    # Rank Calculation
    # -------------------------

    rank = 1000


    if avg_interview_score:


        better_users = (

            db.query(

                InterviewResult.user_id

            )

            .group_by(

                InterviewResult.user_id

            )

            .having(

                func.avg(InterviewResult.score) > avg_interview_score

            )

            .count()

        )


        rank = better_users + 1



    return {


        "interviews":

            interview_count,


        "resumeScore":

            round(avg_resume_score, 2)

            if avg_resume_score

            else 0,


        "codingScore":

            round(avg_interview_score, 2)

            if avg_interview_score

            else 0,


        "rank":

            rank,


        "bestScore":

            best_score

            if best_score

            else 0,


        "resumeCount":

            resume_count

    }



# =========================
# Dashboard Activity
# =========================

@router.get("/activity")
def dashboard_activity(

    db: Session = Depends(get_db),

    current_user = Depends(get_current_user)

):


    user_id = current_user["id"]


    activities = []



    # -------------------------
    # Interview Activity
    # -------------------------

    interviews = (

        db.query(InterviewResult)

        .filter(

            InterviewResult.user_id == user_id

        )

        .order_by(

            desc(InterviewResult.created_at)

        )

        .limit(5)

        .all()

    )



    for item in interviews:


        activities.append({


            "title":

                f"{item.role} Interview",


            "status":

                f"Score {item.score}%",


            "type":

                "Interview",


            "created_at":

                item.created_at


        })



    # -------------------------
    # Resume Activity
    # -------------------------

    resumes = (

        db.query(ResumeResult)

        .filter(

            ResumeResult.user_id == user_id

        )

        .order_by(

            desc(ResumeResult.created_at)

        )

        .limit(5)

        .all()

    )



    for item in resumes:


        activities.append({


            "title":

                "Resume Analysis",


            "status":

                f"ATS Score {item.score}%",


            "type":

                "Resume",


            "created_at":

                item.created_at


        })



    # -------------------------
    # Latest First
    # -------------------------

    activities.sort(

        key=lambda x: x["created_at"],

        reverse=True

    )


    return activities[:5]