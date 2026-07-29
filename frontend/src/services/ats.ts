export interface ATSResult {
  score: number;
  skills: string[];
  missingKeywords: string[];
  suggestions: string[];
}

const skillKeywords = [
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
  "scikit",
  "pandas",
  "numpy",
  "machine learning",
  "deep learning",
];

export function analyzeResume(
  resumeText: string
): ATSResult {

  const text = resumeText.toLowerCase();

  let score = 0;

  const foundSkills: string[] = [];

  const missingKeywords: string[] = [];

  skillKeywords.forEach((skill) => {

    if (text.includes(skill)) {

      foundSkills.push(skill);

      score += 2;

    } else {

      missingKeywords.push(skill);

    }

  });

  if (text.includes("github")) score += 8;

  if (text.includes("linkedin")) score += 8;

  if (text.includes("project")) score += 10;

  if (text.includes("experience")) score += 10;

  if (text.includes("education")) score += 8;

  if (text.includes("certification")) score += 6;

  if (text.length > 2500) score += 8;

  if (score > 100) score = 100;

  const suggestions: string[] = [];

  if (!text.includes("github"))
    suggestions.push("Add your GitHub profile.");

  if (!text.includes("linkedin"))
    suggestions.push("Add your LinkedIn profile.");

  if (!text.includes("project"))
    suggestions.push("Include 2-3 strong projects.");

  if (!text.includes("experience"))
    suggestions.push("Mention internships or experience.");

  if (foundSkills.length < 10)
    suggestions.push("Add more relevant technical skills.");

  return {
    score,
    skills: foundSkills,
    missingKeywords,
    suggestions,
  };
}