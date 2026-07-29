import json
import random


with open(
    "app/data/questions.json",
    "r",
    encoding="utf-8"
) as file:

    QUESTIONS = json.load(file)



def get_questions(
    role: str,
    difficulty: str,
    count: int
):

    role_questions = QUESTIONS.get(role)


    if not role_questions:
        return []


    difficulty_questions = role_questions.get(
        difficulty
    )


    if not difficulty_questions:
        return []


    if count > len(difficulty_questions):

        count = len(difficulty_questions)



    selected_questions = random.sample(
        difficulty_questions,
        count
    )


    return selected_questions