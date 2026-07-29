from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware



# =========================
# Database
# =========================

from app.database import engine, Base





# =========================
# Import Models
# Register SQLAlchemy tables
# =========================

from app.models import interview
from app.models import resume





# =========================
# Import Routers
# =========================

from app.routes.interview import router as interview_router
from app.routes.resume import router as resume_router
from app.routes.dashboard import router as dashboard_router







# =========================
# Create Database Tables
# =========================

Base.metadata.create_all(

    bind=engine

)








# =========================
# FastAPI Application
# =========================

app = FastAPI(

    title="PrepAI Backend",

    version="1.0.0",

    description="AI Interview Preparation Assistant Backend"

)









# =========================
# CORS Configuration
# =========================

app.add_middleware(

    CORSMiddleware,


    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173"

    ],


    allow_credentials=True,


    allow_methods=[

        "GET",

        "POST",

        "PUT",

        "DELETE",

        "PATCH",

        "OPTIONS"

    ],


    allow_headers=[

        "*"

    ],

)









# =========================
# Interview API Routes
# =========================

app.include_router(

    interview_router,

    prefix="/api/interview",

    tags=[

        "Interview"

    ]

)









# =========================
# Resume API Routes
# =========================

app.include_router(

    resume_router,

    prefix="/api/resume",

    tags=[

        "Resume"

    ]

)









# =========================
# Dashboard API Routes
# =========================

app.include_router(

    dashboard_router,

    prefix="/api/dashboard",

    tags=[

        "Dashboard"

    ]

)









# =========================
# Health Check
# =========================

@app.get("/")

def home():

    return {


        "status": "success",


        "message": "PrepAI Backend Running 🚀"


    }