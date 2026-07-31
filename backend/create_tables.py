from app.database import Base, engine

from app.models.interview import InterviewResult
from app.models.resume import ResumeResult


print("Creating tables...")


Base.metadata.create_all(bind=engine)


print("Tables created successfully")