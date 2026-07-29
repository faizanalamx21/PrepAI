import { aiEngineerQuestions } from "./aiEngineer";
import { machineLearningQuestions } from "./machineLearning";
import { dataScientistQuestions } from "./dataScientist";
import { frontendQuestions } from "./frontend";
import { backendQuestions } from "./backend";
import { fullstackQuestions } from "./fullstack";

export function getQuestions(
  role: string,
  difficulty: string
) {

  let questions = aiEngineerQuestions;

  switch (role) {

    case "Machine Learning Engineer":
      questions = machineLearningQuestions;
      break;

    case "Data Scientist":
      questions = dataScientistQuestions;
      break;

    case "Frontend Developer":
      questions = frontendQuestions;
      break;

    case "Backend Developer":
      questions = backendQuestions;
      break;

    case "Full Stack Developer":
      questions = fullstackQuestions;
      break;

    default:
      questions = aiEngineerQuestions;

  }

  return questions.filter(
    (q) => q.difficulty === difficulty
  );

}