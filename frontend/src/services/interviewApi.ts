import { apiFetch } from "./api";


// =====================================================
// Types
// =====================================================

export interface InterviewRequest {
  question: string;
  answer: string;
  role: string;
  difficulty: string;
}


export interface InterviewResponse {
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


export interface SaveInterviewResultRequest {
  role: string;
  difficulty: string;
  score: number;
  technical: number;
  communication: number;
  confidence: number;
  problemSolving: number;
  feedback: string;
  strengths: string;
  improvements: string;
}


export interface InterviewHistory {
  id: number;
  role: string;
  difficulty: string;
  score: number;
  technical: number;
  communication: number;
  confidence: number;
  problem_solving: number;
  feedback: string;
  strengths: string;
  improvements: string;
  created_at: string;
}


// =====================================================
// Evaluate Answer
// =====================================================

export async function evaluateAnswer(
  data: InterviewRequest
): Promise<InterviewResponse> {

  const response = await apiFetch(
    "/api/interview/evaluate",
    {
      method: "POST",

      body: JSON.stringify(data),
    }
  );


  if (!response.ok) {

    const errorText = await response.text();

    console.error(
      "Interview evaluation failed:",
      errorText
    );

    throw new Error(
      errorText ||
      "Failed to evaluate interview answer."
    );
  }


  const result = await response.json();


  return {

    score:
      Number(result.score) || 0,

    technical:
      Number(result.technical) || 0,

    communication:
      Number(result.communication) || 0,

    confidence:
      Number(result.confidence) || 0,

    problemSolving:
      Number(result.problemSolving) ||
      Number(result.problem_solving) ||
      0,

    feedback:
      Array.isArray(result.feedback)
        ? result.feedback
        : result.feedback
          ? [String(result.feedback)]
          : [],

    strengths:
      Array.isArray(result.strengths)
        ? result.strengths
        : result.strengths
          ? [String(result.strengths)]
          : [],

    improvements:
      Array.isArray(result.improvements)
        ? result.improvements
        : result.improvements
          ? [String(result.improvements)]
          : [],

    betterAnswer:
      result.betterAnswer ||
      result.better_answer ||
      "No better answer generated",
  };
}


// =====================================================
// Save Interview Result
// =====================================================

export async function saveInterviewResult(
  data: SaveInterviewResultRequest
) {

  const response = await apiFetch(
    "/api/interview/save-result",
    {
      method: "POST",

      body: JSON.stringify(data),
    }
  );


  if (!response.ok) {

    const errorText = await response.text();

    console.error(
      "Save interview result failed:",
      errorText
    );

    throw new Error(
      errorText ||
      "Failed to save interview result."
    );
  }


  return await response.json();
}


// =====================================================
// Get Interview History
// =====================================================

export async function getInterviewHistory():
  Promise<InterviewHistory[]> {

  const response = await apiFetch(
    "/api/interview/history"
  );


  if (!response.ok) {

    const errorText = await response.text();

    console.error(
      "Interview history failed:",
      errorText
    );

    throw new Error(
      errorText ||
      "Failed to fetch interview history."
    );
  }


  const result = await response.json();


  return Array.isArray(result)
    ? result
    : [];
}


// =====================================================
// Get Interview Statistics
// =====================================================

export interface InterviewStats {

  total: number;

  averageScore: number;

  bestScore: number;

  recent: {
    id: number;
    role: string;
    difficulty: string;
    score: number;
    date: string;
  }[];
}


export async function getInterviewStats():
  Promise<InterviewStats> {

  const response = await apiFetch(
    "/api/interview/stats"
  );


  if (!response.ok) {

    const errorText = await response.text();

    console.error(
      "Interview stats failed:",
      errorText
    );

    throw new Error(
      errorText ||
      "Failed to fetch interview statistics."
    );
  }


  return await response.json();
}