import React from "react";
import create, { SetState } from "zustand";

import { capitalizeName } from "../src/utils/utilityFunctions";
import {
  updateProjectQuizOptions,
  resetProjectQuizOptions,
  findNextQuestion,
} from "../src/utils/formFunctions";
import {
  formValidator,
  emailValidationRules,
  isRequiredValidationRules,
} from "../src/utils/formValidation";

export type NextQuestionId = 11 | 0 | 1 | 2 | 4 | 5 | 7 | 10 | 9 | 8;

export interface AnswerOption {
  id: number;
  value: string;
  label: string;
  isSelected: boolean;
  nextQuestion: number;
}

export interface AnswerOptions {
  id: number;
  question: string;
  options: AnswerOption[];
}

export interface QuizRadioInputValue {
  value: string;
  nextQuestion: number;
  options: AnswerOptions;
}

export interface QuizTextInputValue {
  value: string;
  valid: boolean;
}

export interface QuizeTextInputOptions {
  initial: boolean;
  touched: boolean;
}

interface AnswerValue {
  value: string;
  valid: boolean;
}

interface AnswerInputOptions {
  initial: boolean;
  touched: boolean;
  nextQuestion: number;
}

export interface TextQuestion {
  id: number;
  question: string;
  input: AnswerValue;
  options: AnswerInputOptions;
}

type QuizFormState = {
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
  updateInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  updateInputOptions: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  resetFormInputs: () => void;
};

const initalFormState = {
  currentQuestion: 0,
  nextQuestionId: 1,
  pastQuestionArray: [],
  firstName: {
    value: "",
    valid: false,
  },
  firstNameOptions: {
    initial: true,
    touched: false,
  },
  emailAddress: {
    value: "",
    valid: false,
  },
  emailAddressOptions: {
    initial: true,
    touched: false,
  },
  haveWebsite: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 0,
      question: "Do you have a website?",
      options: [
        {
          id: 0,
          value: "yes",
          label: "Yes I do",
          isSelected: false,
          nextQuestion: 9,
        },
        {
          id: 1,
          value: "no",
          label: "No I don't",
          isSelected: false,
          nextQuestion: 1,
        },
      ],
    },
  } as QuizRadioInputValue,
  haveTimeline: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 1,
      question: "Do you have a timeline?",
      options: [
        {
          id: 0,
          value: "yes",
          label: "Yes I have a timeline",
          isSelected: false,
          nextQuestion: 10,
        },
        {
          id: 1,
          value: "no",
          label: "No nothing strict",
          isSelected: false,
          nextQuestion: 10,
        },
      ],
    },
  },
  haveBudget: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 2,
      question: "Do you have a budget?",
      options: [
        {
          id: 0,
          value: "yes",
          label: "Yes I have a budget",
          isSelected: false,
          nextQuestion: 4,
        },
        {
          id: 1,
          value: "no",
          label: "No not yet",
          isSelected: false,
          nextQuestion: 4,
        },
      ],
    },
  },
  haveMarketingPlan: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 4,
      question: "Do you have a plan for how to use your website?",
      options: [
        {
          id: 0,
          value: "yes",
          label: "Yes I have a marketing plan",
          isSelected: false,
          nextQuestion: 8,
        },
        {
          id: 1,
          value: "no",
          label: "No I have not thought of that yet",
          isSelected: false,
          nextQuestion: 8,
        },
      ],
    },
  },
  numberOfProducts: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 5,
      question: "How many products or services are you going to sell?",
      options: [
        {
          id: 0,
          value: "1 to 10",
          label: "About 1 to 10",
          isSelected: false,
          nextQuestion: 0,
        },
        {
          id: 1,
          value: "11 to 50",
          label: "About 11 to 20",
          isSelected: false,
          nextQuestion: 0,
        },
        {
          id: 2,
          value: "51 to 100",
          label: "51 to 100",
          isSelected: false,
          nextQuestion: 0,
        },
        {
          id: 3,
          value: "Over 101 products",
          label: "Move 100 for sure",
          isSelected: false,
          nextQuestion: 0,
        },
      ],
    },
  },
  salesCopyPurpose: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 7,
      question: "What is the sales copy for?",
      options: [
        {
          id: 0,
          value: "Website rewrite",
          label: "A website re-write",
          isSelected: false,
          nextQuestion: 8,
        },
        {
          id: 1,
          value: "Emails",
          label: "Emails or email campaigns",
          isSelected: false,
          nextQuestion: 8,
        },
        {
          id: 2,
          value: "E-comm product copy",
          label: "E-commmerce product page copy",
          isSelected: false,
          nextQuestion: 8,
        },
        {
          id: 3,
          value: "Sales page / landing page copy",
          label: "Sales page or landing page copy",
          isSelected: false,
          nextQuestion: 8,
        },
      ],
    },
  },
  additionalDetailsValue: {
    value: "",
    valid: false,
  },
  additionalDetailsOptions: {
    initial: true,
    touched: false,
  },
  websiteUrlValue: {
    value: "",
    valid: false,
  },
  websiteUrlOptions: {
    initial: true,
    touched: false,
  },
  idealTimeline: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 10,
      question: "When would you like to have your website live?",
      options: [
        {
          id: 0,
          value: "2 weeks",
          label: "About 2 week or less",
          isSelected: false,
          nextQuestion: 2,
        },
        {
          id: 1,
          value: "3 weeks",
          label: "3 weeks or less",
          isSelected: false,
          nextQuestion: 2,
        },
        {
          id: 2,
          value: "No more than 4 weeks",
          label: "No more than 4 weeks",
          isSelected: false,
          nextQuestion: 2,
        },
        {
          id: 3,
          value: "I need it NOW!",
          label: "I'm in a crunch I need it now",
          isSelected: false,
          nextQuestion: 2,
        },
      ],
    },
  },
  primaryInterest: {
    value: "",
    nextQuestion: 0,
    options: {
      id: 11,
      question: "What is your primary interest?",
      options: [
        {
          id: 0,
          value: "website",
          label: "A new website or rebuild",
          isSelected: false,
          nextQuestion: 0,
        },
        {
          id: 1,
          value: "e-commerce website",
          label: "An e-commerce based website",
          isSelected: false,
          nextQuestion: 5,
        },
        {
          id: 2,
          value: "landing pages",
          label: "A landing page for a service or prodcut",
          isSelected: false,
          nextQuestion: 9,
        },
        {
          id: 3,
          value: "copywriting",
          label: "Copywriting to convert better",
          isSelected: false,
          nextQuestion: 9,
        },
        {
          id: 4,
          value: "seo and marketing",
          label: "Get my website found",
          isSelected: false,
          nextQuestion: 9,
        },
      ],
    },
  },
};

export const quizFormStore = create<QuizFormState>(
  (set: SetState<QuizFormState>) => ({
    ...initalFormState,
    updateInputValue: (event) =>
      set((state) => {
        const name = event.target.name;
        const value = event.target.value;

        switch (name) {
          case "firstName": {
            const name = capitalizeName(value);
            const valid = formValidator(value, isRequiredValidationRules);
            return {
              ...state,
              firstName: {
                value: name,
                valid: valid,
              },
            };
          }
          case "emailAddress": {
            const email = value.trim();
            const valid = formValidator(value, emailValidationRules);
            return {
              ...state,
              emailAddress: {
                value: email,
                valid: valid,
              },
            };
          }
          case "haveWebsite": {
            const questionId = state.haveWebsite.options.id;
            const newOptions = updateProjectQuizOptions(
              state.haveWebsite.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              haveWebsite: {
                ...state.haveWebsite,
                value: value,
                options: {
                  ...state.haveWebsite.options,
                  options: newOptions,
                },
              },
            };
          }
          case "haveTimeline": {
            const questionId = state.haveTimeline.options.id;
            const newOptions = updateProjectQuizOptions(
              state.haveTimeline.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              haveTimeline: {
                ...state.haveTimeline,
                value: value,
                options: {
                  ...state.haveTimeline.options,
                  options: newOptions,
                },
              },
            };
          }
          case "haveBudget": {
            const questionId = state.haveBudget.options.id;
            const newOptions = updateProjectQuizOptions(
              state.haveBudget.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              haveBudget: {
                ...state.haveBudget,
                value: value,
                options: {
                  ...state.haveBudget.options,
                  options: newOptions,
                },
              },
            };
          }
          case "haveMarketingPlan": {
            const questionId = state.haveMarketingPlan.options.id;
            const newOptions = updateProjectQuizOptions(
              state.haveMarketingPlan.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              haveMarketingPlan: {
                ...state.haveMarketingPlan,
                value: value,
                options: {
                  ...state.haveMarketingPlan.options,
                  options: newOptions,
                },
              },
            };
          }
          case "numberOFProducts": {
            const questionId = state.numberOfProducts.options.id;
            const newOptions = updateProjectQuizOptions(
              state.numberOfProducts.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              numberOfProducts: {
                ...state.numberOfProducts,
                value: value,
                options: {
                  ...state.numberOfProducts.options,
                  options: newOptions,
                },
              },
            };
          }
          case "salesCopyPurpose": {
            const questionId = state.salesCopyPurpose.options.id;
            const newOptions = updateProjectQuizOptions(
              state.salesCopyPurpose.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              salesCopyPurpose: {
                ...state.salesCopyPurpose,
                value: value,
                options: {
                  ...state.salesCopyPurpose.options,
                  options: newOptions,
                },
              },
            };
          }
          case "additionalDetails": {
            return {
              ...state,
              additionalDetailsValue: {
                value: value,
                valid: true,
              },
            };
          }
          case "websiteUrl": {
            const valid = value.length > 3;
            return {
              ...state,
              websiteUrlValue: {
                value: value,
                valid: valid,
              },
            };
          }
          case "idealTimeline": {
            const questionId = state.idealTimeline.options.id;
            const newOptions = updateProjectQuizOptions(
              state.idealTimeline.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              idealTimeline: {
                ...state.idealTimeline,
                value: value,
                options: {
                  ...state.idealTimeline.options,
                  options: newOptions,
                },
              },
            };
          }
          case "primaryInterest": {
            const questionId = state.primaryInterest.options.id;
            const newOptions = updateProjectQuizOptions(
              state.primaryInterest.options.options,
              value
            );
            const nextQuestionId = findNextQuestion(newOptions);
            return {
              ...state,
              currentQuestion: state.currentQuestion++,
              pastQuestionArray: [...state.pastQuestionArray, questionId],
              nextQuestionId: nextQuestionId,
              primaryInterest: {
                ...state.primaryInterest,
                value: value,
                options: {
                  ...state.primaryInterest.options,
                  options: newOptions,
                },
              },
            };
          }
          default: {
            throw new Error(
              "You did not handle all possible inputs you used in your form."
            );
          }
        }
      }),
    updateInputOptions: (event) =>
      set((state) => {
        const name = event.target.name;

        switch (name) {
          case "firstName": {
            return {
              ...state,
              firstNameOptions: {
                initial: false,
                touched: !state.firstNameOptions.touched,
              },
            };
          }
          case "emailAddress": {
            return {
              ...state,
              emailAddressOptions: {
                initial: false,
                touched: !state.emailAddressOptions.touched,
              },
            };
          }
          case "additionalDetails": {
            return {
              ...state,
              additionalDetailsOptions: {
                initial: false,
                touched: !state.additionalDetailsOptions.touched,
              },
            };
          }
          case "websiteUrl": {
            return {
              ...state,
              websiteUrlOptions: {
                initial: false,
                touched: !state.websiteUrlOptions.touched,
              },
            };
          }
          default: {
            throw new Error(
              "You have an input that has options you're not handling. Find out and fix it."
            );
          }
        }
      }),
    resetFormInputs: () =>
      set((state) => {
        return {
          ...state,
          ...initalFormState,
        };
      }),
  })
);
