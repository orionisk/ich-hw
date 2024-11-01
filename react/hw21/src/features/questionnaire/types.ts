export interface Answer {
  questionId: number;
  value: boolean;
}

export interface Question {
  id: number;
  text: string;
}

export interface QuestionnaireState {
  questions: Question[];
  answers: Answer[];
  isSubmitted: boolean;
  score: number;
}
