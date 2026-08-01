# PrepAI - AI Interview Preparation Assistant

PrepAI is an AI-powered interview preparation platform designed to help students and professionals prepare for technical interviews through personalized mock interviews, resume analysis, performance evaluation, and progress tracking.

The platform provides a realistic interview simulation experience by generating role-based questions, analyzing user responses, and providing detailed feedback to improve technical and communication skills.

---

# Live Application

Frontend:
https://prep-ai-ochre-delta.vercel.app

Backend API:
https://prepai-backend-uqll.onrender.com

API Documentation:
https://prepai-backend-uqll.onrender.com/docs

---

# Project Overview

Traditional interview preparation requires manually searching questions, reviewing resumes, and practicing without proper feedback.

PrepAI solves this problem by providing an intelligent interview assistant that can:

- Analyze user resumes
- Generate personalized interview questions
- Conduct AI-based mock interviews
- Evaluate interview performance
- Track improvement over time


The application follows a full-stack production architecture with a React frontend, FastAPI backend, PostgreSQL database, and cloud deployment.

---

# Features

## Authentication System

- User registration and login
- Secure authentication using Supabase Auth
- JWT-based authorization
- Protected backend APIs
- Persistent user sessions


---

## Resume Analysis System

Users can upload their resume and receive AI-powered analysis.

Features:

- Resume PDF upload
- Resume content extraction
- Skill identification
- Missing keyword detection
- Resume score generation
- Strength identification
- Improvement suggestions
- Resume analysis history


---

## AI Mock Interview System

Users can create customized interview sessions.

Features:

- Role-based interview generation
- Difficulty selection
- Custom question count
- AI-generated interview questions
- Interactive interview session
- Interview history storage


Supported roles:

- AI Engineer
- Machine Learning Engineer
- Data Scientist
- Software Engineer
- Backend Developer
- Frontend Developer
- Full Stack Developer
- DevOps Engineer


Difficulty levels:

- Easy
- Medium
- Hard


---

## AI Interview Evaluation

After completing an interview, the system evaluates performance based on:

- Technical accuracy
- Communication quality
- Confidence level
- Answer completeness
- Overall performance score


The system provides:

- Detailed feedback
- Improvement suggestions
- Performance insights


---

## Dashboard Analytics

The dashboard provides:

- Interview statistics
- Recent activity
- Resume history
- Performance tracking
- User progress overview


---

# System Architecture


```
                         User

                          |

                          |

                          V


              React + TypeScript Frontend

                         |

                         |

                         V


                 FastAPI Backend

                         |

              ---------------------

              |                   |

              V                   V


        PostgreSQL Database   Supabase Auth


```

---

# Technology Stack


## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- React Router


## Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- Uvicorn


## Database

- PostgreSQL


## Authentication

- Supabase Authentication


## AI Integration

- Gemini API
- AI question generation
- Resume analysis
- Interview evaluation


## Deployment

Frontend:

- Vercel


Backend:

- Render


Version Control:

- GitHub


---

# Project Structure


```
PrepAI

│
├── backend
│
│   ├── app
│   │
│   │   ├── models
│   │   ├── routes
│   │   ├── schemas
│   │   ├── services
│   │   ├── auth.py
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── create_tables.py
│
│
├── frontend
│
│   ├── src
│   │
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   └── lib
│   │
│   └── package.json
│
│
└── README.md

```

---

# Local Installation

## Clone Repository


```bash
git clone https://github.com/faizanalamx21/PrepAI.git

cd PrepAI
```

---

# Backend Setup


Navigate to backend:

```bash
cd backend
```


Create virtual environment:

```bash
python -m venv .venv
```


Activate environment:

Windows:

```bash
.venv\Scripts\activate
```


Install dependencies:

```bash
pip install -r requirements.txt
```


Create `.env` file:


```
DATABASE_URL=your_database_url

SUPABASE_URL=your_supabase_url

SUPABASE_ANON_KEY=your_supabase_key

GEMINI_API_KEY=your_api_key

FRONTEND_URL=http://localhost:5173
```


Run backend:


```bash
uvicorn app.main:app --reload
```


Backend URL:

```
http://localhost:8000
```


---

# Frontend Setup


Navigate to frontend:


```bash
cd frontend
```


Install dependencies:


```bash
npm install
```


Create `.env` file:


```
VITE_SUPABASE_URL=your_supabase_url

VITE_SUPABASE_ANON_KEY=your_supabase_key

VITE_API_URL=http://localhost:8000
```


Start frontend:


```bash
npm run dev
```


Frontend URL:

```
http://localhost:5173
```


---

# Deployment


## Frontend Deployment

Platform:

Vercel


Environment Variables:


```
VITE_SUPABASE_URL

VITE_SUPABASE_ANON_KEY

VITE_API_URL
```


---

## Backend Deployment

Platform:

Render


Environment Variables:


```
DATABASE_URL

SUPABASE_URL

SUPABASE_ANON_KEY

GEMINI_API_KEY

FRONTEND_URL
```


---

# Security Implementation

- Environment variables for sensitive credentials
- JWT authentication
- Protected API endpoints
- CORS configuration
- Secure production deployment


---

# Screenshots

Add screenshots:

```
screenshots/

├── landing-page.png
├── login.png
├── dashboard.png
├── resume-analysis.png
├── interview-setup.png
└── evaluation.png

```

---

# Future Improvements

- Retrieval Augmented Generation (RAG) based interviews
- Vector database integration
- Resume embedding search
- Voice-based AI interviews
- Real-time speech analysis
- Advanced analytics
- Docker deployment
- CI/CD automation
- Email notifications


---

# Learning Outcomes

Through building PrepAI, the project covers:

- Full-stack application development
- REST API design
- Authentication systems
- Database management
- AI integration
- Cloud deployment
- Production environment configuration


---

# Developer

## Faizan Alam

B.Tech Computer Science Engineering Student

Areas of Interest:

- Artificial Intelligence
- Machine Learning
- Deep Learning
- Full Stack Development


GitHub:

https://github.com/faizanalamx21


---

# License

This project is developed for educational and portfolio purposes.
