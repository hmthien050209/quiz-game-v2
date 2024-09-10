export type Quiz = {
  question: string;
  keyword: string;
  keyIndex: number;
  answers: Array<Answer>;
};

export type Answer = {
  answer: string;
  correct?: boolean;
};

export const grandTotalCharLength = 18;

export const secret = "";

export const rules: string[] = [];

export const quizzes: Array<Quiz> = [];
