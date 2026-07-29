export interface InterviewQuestion {
  id: number;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
}

export const aiEngineerQuestions: InterviewQuestion[] = [
  // Easy
  {
    id: 1,
    difficulty: "Easy",
    question: "What is Machine Learning?"
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "Difference between AI and Machine Learning?"
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "What is supervised learning?"
  },

  // Medium
  {
    id: 4,
    difficulty: "Medium",
    question: "Explain Overfitting and Underfitting."
  },
  {
    id: 5,
    difficulty: "Medium",
    question: "Difference between Bagging and Boosting?"
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "Explain Cross Validation."
  },

  // Hard
  {
    id: 7,
    difficulty: "Hard",
    question: "Explain Transformer Architecture."
  },
  {
    id: 8,
    difficulty: "Hard",
    question: "What is Self Attention?"
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "Explain Gradient Vanishing Problem."
  }
];