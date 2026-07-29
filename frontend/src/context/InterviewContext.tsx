import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";





export interface Question {

  id: number;

  question: string;

}





export interface InterviewSettings {

  role: string;

  difficulty: string;

  questions: number;

}





export interface UserAnswer {

  questionId: number;

  question: string;

  answer: string;

}





export interface QuestionAnalysis {

  questionId: number;

  question: string;

  answer: string;

  score: number;

  technical: number;

  communication: number;

  confidence: number;

  problemSolving: number;

  feedback: string[];

  strengths: string[];

  improvements: string[];

  betterAnswer: string;

}






export interface InterviewResult {

  score: number;

  technical: number;

  communication: number;

  confidence: number;

  problemSolving: number;


  feedback: string[];

  strengths: string[];

  improvements: string[];


  betterAnswer: string;


  questionAnalysis: QuestionAnalysis[];

}







interface InterviewContextType {


  settings: InterviewSettings;

  setSettings:
  React.Dispatch<
    React.SetStateAction<InterviewSettings>
  >;




  questions: Question[];

  setQuestions:
  React.Dispatch<
    React.SetStateAction<Question[]>
  >;




  answers: UserAnswer[];

  setAnswers:
  React.Dispatch<
    React.SetStateAction<UserAnswer[]>
  >;




  interviewResult: InterviewResult | null;

  setInterviewResult:
  React.Dispatch<
    React.SetStateAction<InterviewResult | null>
  >;



}








const InterviewContext =
  createContext<InterviewContextType | null>(null);









export function InterviewProvider(
{
  children
}:{
  children: ReactNode
}
) {





  const [settings,setSettings] =
    useState<InterviewSettings>({

      role:"AI Engineer",

      difficulty:"Medium",

      questions:10,

    });








  const [questions,setQuestions] =
    useState<Question[]>([]);








  const [answers,setAnswers] =
    useState<UserAnswer[]>([]);








  const [interviewResult,setInterviewResult] =
    useState<InterviewResult | null>(null);









  return (

    <InterviewContext.Provider

      value={{

        settings,

        setSettings,



        questions,

        setQuestions,



        answers,

        setAnswers,



        interviewResult,

        setInterviewResult,


      }}

    >

      {children}

    </InterviewContext.Provider>

  );

}









export function useInterview(){



  const context =
    useContext(InterviewContext);





  if(!context){


    throw new Error(
      "useInterview must be inside InterviewProvider"
    );


  }





  return context;


}