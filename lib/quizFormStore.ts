import create, { SetState } from "zustand";

export type NextQuestionId = 11 | 0 | 1 | 2 | 4 | 5 | 7 | 10 | 9 | 8;

export interface AnswerOption {
  id: number;
  value: string;
  label: string;
  isSelected: boolean;
  nextQuestion: number;
}

export interface QuizRadioInputValue {
  value: string;
  nextQuestion: number;
  options: AnswerOption[];
}

export interface QuizTextInputValue {
  value: string;
  valid: boolean;
}

export interface QuizeTextInputOptions {
  initial: boolean;
  touched: boolean;
}

interface AnswerInput {
  value: string;
  valid: boolean;
}

interface AnswerInputOptions {
  initial: boolean;
  touched: boolean;
  nextQuestion: number;
}

export interface RadioQuestion {
  id: number;
  question: string;
  options: AnswerOption[];
}

export interface TextQuestion {
  id: number;
  question: string;
  input: AnswerInput;
  options: AnswerInputOptions;
}

type QuizFormStore = {
  currentQuestion: number;
  nextQuestionId: number;
  pastQuestionArray: number[];
  firstName: QuizTextInputValue;
  firstNameOptions: QuizeTextInputOptions;
  emailAddress: QuizTextInputValue;
  emailAddressOptions: QuizeTextInputOptions;
  haveWebsite: QuizRadioInputValue;
  haveTimeline: QuizRadioInputValue;
  haveBudget: QuizRadioInputValue;
  haveMarketingPlan: QuizRadioInputValue;
  numberOfProducts: QuizRadioInputValue;
  salesCopyPurpose: QuizRadioInputValue;
  additionalDetailsValue: QuizTextInputValue;
  additionalDetailsOptions: QuizeTextInputOptions;
  websiteUrlValue: QuizTextInputValue;
  websiteUrlOptions: QuizeTextInputOptions;
  idealTimeline: QuizRadioInputValue;
  primaryInterest: QuizRadioInputValue;
};
