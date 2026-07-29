export interface UserAnswer {
  questionId: number;
  question: string;
  answer: string;
}


export interface QuestionEvaluation {

  questionId: number;

  question: string;

  answer: string;

  score: number;

  feedback: string;

  strengths: string[];

  improvements: string[];

}


export interface InterviewEvaluation {

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