from typing import List




# =========================
# Technical Skills Database
# =========================

SKILLS = [

    "python",

    "java",

    "c++",

    "javascript",

    "typescript",

    "react",

    "node",

    "express",

    "next",

    "html",

    "css",

    "tailwind",

    "mongodb",

    "mysql",

    "postgresql",

    "docker",

    "kubernetes",

    "aws",

    "azure",

    "git",

    "github",

    "fastapi",

    "flask",

    "django",

    "tensorflow",

    "pytorch",

    "scikit-learn",

    "pandas",

    "numpy",

    "machine learning",

    "deep learning",

]








# =========================
# Analyze Resume
# =========================

def analyze_resume(

    resume_text: str

):


    text = resume_text.lower()



    score = 0



    found_skills: List[str] = []

    missing_keywords: List[str] = []




    # Skill Analysis

    for skill in SKILLS:


        if skill in text:


            found_skills.append(skill)

            score += 2



        else:


            missing_keywords.append(skill)







    # Resume Sections


    if "github" in text:


        score += 8



    if "linkedin" in text:


        score += 8



    if "project" in text:


        score += 10



    if "experience" in text:


        score += 10



    if "education" in text:


        score += 8



    if "certification" in text:


        score += 6





    # Resume Length

    if len(text) > 2500:


        score += 8





    if score > 100:


        score = 100









    # Suggestions


    suggestions = []



    if "github" not in text:


        suggestions.append(

            "Add your GitHub profile link."

        )




    if "linkedin" not in text:


        suggestions.append(

            "Add your LinkedIn profile."

        )




    if "project" not in text:


        suggestions.append(

            "Include 2-3 strong technical projects."

        )




    if "experience" not in text:


        suggestions.append(

            "Mention internships or practical experience."

        )




    if len(found_skills) < 10:


        suggestions.append(

            "Add more job-relevant technical skills."

        )







    # Strengths


    strengths = []



    if len(found_skills) >= 10:


        strengths.append(

            "Strong technical skill coverage."

        )



    if "project" in text:


        strengths.append(

            "Projects section is present."

        )



    if "experience" in text:


        strengths.append(

            "Professional experience mentioned."

        )







    return {


        "score": score,


        "skills": found_skills,


        "missingKeywords": missing_keywords,


        "strengths": strengths,


        "suggestions": suggestions,


    }