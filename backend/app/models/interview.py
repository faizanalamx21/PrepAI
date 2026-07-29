from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    Text,
    DateTime
)

from datetime import datetime

from app.database import Base





class InterviewResult(Base):

    __tablename__ = "interview_results"





    id = Column(

        Integer,

        primary_key=True,

        index=True

    )





    # =========================
    # User Ownership
    # =========================

    user_id = Column(

        String,

        nullable=False,

        index=True

    )





    # =========================
    # Interview Details
    # =========================

    role = Column(

        String,

        nullable=False

    )





    difficulty = Column(

        String,

        nullable=False

    )





    # =========================
    # Scores
    # =========================

    score = Column(

        Float,

        nullable=False

    )





    technical = Column(

        Float,

        nullable=False

    )





    communication = Column(

        Float,

        nullable=False

    )





    confidence = Column(

        Float,

        nullable=False

    )





    problem_solving = Column(

        Float,

        nullable=False

    )





    # =========================
    # AI Feedback
    # =========================

    feedback = Column(

        Text,

        nullable=True

    )





    strengths = Column(

        Text,

        nullable=True

    )





    improvements = Column(

        Text,

        nullable=True

    )





    # =========================
    # Timestamp
    # =========================

    created_at = Column(

        DateTime,

        default=datetime.utcnow

    )






    # =========================
    # Debug Representation
    # =========================

    def __repr__(self):

        return (

            f"<InterviewResult "

            f"id={self.id} "

            f"user_id={self.user_id} "

            f"role={self.role} "

            f"score={self.score}>"

        )