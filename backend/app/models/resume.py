from sqlalchemy import (
    Column,
    Integer,
    Float,
    String,
    Text,
    DateTime,
)

from datetime import datetime

from app.database import Base





class ResumeResult(Base):

    __tablename__ = "resume_results"





    id = Column(

        Integer,

        primary_key=True,

        index=True

    )





    # User ownership

    user_id = Column(

        String,

        nullable=False,

        index=True

    )





    filename = Column(

        String,

        nullable=False

    )





    score = Column(

        Float,

        nullable=False

    )





    skills = Column(

        Text,

        nullable=True

    )





    missing_keywords = Column(

        Text,

        nullable=True

    )





    strengths = Column(

        Text,

        nullable=True

    )





    suggestions = Column(

        Text,

        nullable=True

    )





    created_at = Column(

        DateTime,

        default=datetime.utcnow

    )








    def __repr__(self):

        return (

            f"<ResumeResult "

            f"id={self.id} "

            f"user_id={self.user_id} "

            f"filename={self.filename} "

            f"score={self.score}>"

        )