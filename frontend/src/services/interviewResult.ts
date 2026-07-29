import type {
  UserAnswer,
  QuestionEvaluation,
} from "../types/interview";


export interface InterviewResult {

  overallScore: number;

  technical: number;

  communication: number;

  confidence: number;

  problemSolving: number;

  feedback: string;

  strengths: string[];

  improvements: string[];

  questionAnalysis: QuestionEvaluation[];

}



export function evaluateInterview(
  answers: UserAnswer[]
): InterviewResult {


  let totalScore = 0;


  const questionAnalysis: QuestionEvaluation[] = [];



  answers.forEach((item) => {


    const answer =
      item.answer.toLowerCase();



    let score = 0;



    // Answer length evaluation
    if (answer.length > 150) {

      score += 40;

    } 
    else if (answer.length > 80) {

      score += 30;

    } 
    else if (answer.length > 30) {

      score += 20;

    }



    // Technical keywords
    const keywords = [

      "data",
      "model",
      "algorithm",
      "training",
      "testing",
      "machine learning",
      "neural network",
      "deep learning",
      "optimization",
      "accuracy",
      "feature",
      "database",
      "api",
      "system"

    ];



    let keywordCount = 0;



    keywords.forEach((word) => {

      if (answer.includes(word)) {

        keywordCount++;

      }

    });



    score += keywordCount * 5;



    const finalQuestionScore =
      Math.min(score, 100);



    totalScore += finalQuestionScore;



    // Individual question analysis
    questionAnalysis.push({

      questionId: item.questionId,

      question: item.question,

      answer: item.answer,

      score: finalQuestionScore,


      feedback:

        finalQuestionScore >= 80

        ? "Strong answer with good technical explanation."

        :

        finalQuestionScore >= 50

        ? "Good attempt but add more depth and examples."

        :

        "Answer needs more explanation and technical details.",



      strengths:

        keywordCount > 2

        ? [

            "Used relevant technical concepts",

            "Shows understanding of the topic"

          ]

        :

          [

            "Attempted the question"

          ],



      improvements:

        [

          "Add real-world examples",

          "Explain concepts step-by-step"

        ]

    });


  });



  const finalScore = answers.length

    ? Math.round(totalScore / answers.length)

    : 0;




  return {


    overallScore: finalScore,


    technical: Math.min(finalScore + 5, 100),


    communication: Math.min(finalScore + 10, 100),


    confidence: finalScore,


    problemSolving: Math.max(finalScore - 5, 0),



    feedback:

      finalScore >= 80

      ?

      "Excellent answers. You demonstrated strong technical understanding."

      :

      finalScore >= 50

      ?

      "Good attempt. Add more technical details and real-world examples."

      :

      "Your answers need more explanation and technical depth.",



    strengths:[

      "Attempted all questions",

      "Good interview participation"

    ],



    improvements:[

      "Add practical examples",

      "Explain concepts with more depth"

    ],



    questionAnalysis

  };

}