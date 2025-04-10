
export interface QuizQuestion {
  id: number;
  question: string;
  type: 'multiple-choice' | 'open-ended';
  options?: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What do you enjoy doing in your free time?",
    type: "multiple-choice",
    options: [
      "Solving puzzles or logical problems",
      "Designing or creating visual content",
      "Building things or working with my hands",
      "Writing or communicating ideas",
      "Analyzing data or finding patterns"
    ]
  },
  {
    id: 2,
    question: "Which of these work environments appeals to you most?",
    type: "multiple-choice",
    options: [
      "Fast-paced startup with diverse responsibilities",
      "Stable corporate environment with clear structure",
      "Creative agency with collaborative projects",
      "Research-focused organization with complex problems",
      "Remote work with flexible hours"
    ]
  },
  {
    id: 3,
    question: "What type of problems do you enjoy solving?",
    type: "multiple-choice",
    options: [
      "Visual design challenges",
      "Complex technical problems",
      "People and communication issues",
      "Data analysis and pattern recognition",
      "Strategic and business problems"
    ]
  },
  {
    id: 4,
    question: "How do you feel about coding and programming?",
    type: "multiple-choice",
    options: [
      "I love it and want it to be a central part of my career",
      "I'm interested but have limited experience",
      "I'd prefer to focus on design or visual aspects",
      "I'm comfortable with it but prefer other skills",
      "I'd rather focus on strategy or business aspects"
    ]
  },
  {
    id: 5,
    question: "Tell me about a project you enjoyed working on, and why you found it engaging.",
    type: "open-ended"
  }
];
