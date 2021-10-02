import React, { useState, useEffect } from "react";

import {
  haveBudgetQuestion,
  haveImagesQuestion,
  haveMarketingPlanQuestion,
  haveTimelineQuestion,
  haveWebsiteQuestion,
  howManyProductsQuestion,
  primaryInterestQuestion,
  salesCopyPurposeQuestion,
  timelineQuestion,
} from "./projectQuizData";
import { ProjectQuizFormInput } from "../../types/forms";
import {
  updateProjectQuizOptions,
  findNextQuestion,
} from "../../utils/formFunctions";

export interface AnswerOption {
  id: number;
  value: string;
  isSelected: boolean;
  nextQuestion: number;
}

interface QuizRadioInputValue {
  value: string;
  nextQuestion: number;
  options: AnswerOption[];
}

interface QuizTextInputValue {
  value: string;
  valid: boolean;
}

interface QuizeTextInputOptions {
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

export const questions: (RadioQuestion | TextQuestion)[] = [
  {
    id: 0,
    question: "Do you have a website?",
    options: [
      {
        id: 0,
        value: "yes",
        isSelected: false,
        nextQuestion: 9,
      },
      {
        id: 1,
        value: "no",
        isSelected: false,
        nextQuestion: 1,
      },
    ],
  },
  {
    id: 1,
    question: "Do you have a timeline?",
    options: [
      {
        id: 0,
        value: "yes",
        isSelected: false,
        nextQuestion: 10,
      },
      {
        id: 1,
        value: "no",
        isSelected: false,
        nextQuestion: 10,
      },
    ],
  },
  {
    id: 2,
    question: "Do you have a budget?",
    options: [
      {
        id: 0,
        value: "yes",
        isSelected: false,
        nextQuestion: 3,
      },
      {
        id: 1,
        value: "no",
        isSelected: false,
        nextQuestion: 3,
      },
    ],
  },
  {
    id: 3,
    question: "Do you have images for your website?",
    options: [
      {
        id: 0,
        value: "yes",
        isSelected: false,
        nextQuestion: 4,
      },
      {
        id: 1,
        value: "no",
        isSelected: false,
        nextQuestion: 4,
      },
    ],
  },
  {
    id: 4,
    question: "Do you have a plan for how to use your website?",
    options: [
      {
        id: 0,
        value: "yes",
        isSelected: false,
        nextQuestion: 8,
      },
      {
        id: 1,
        value: "no",
        isSelected: false,
        nextQuestion: 8,
      },
    ],
  },
  {
    id: 5,
    question: "How many products or services are you going to sell?",
    options: [
      {
        id: 0,
        value: "1 to 10",
        isSelected: false,
        nextQuestion: 0,
      },
      {
        id: 1,
        value: "11 to 50",
        isSelected: false,
        nextQuestion: 0,
      },
      {
        id: 2,
        value: "51 to 100",
        isSelected: false,
        nextQuestion: 0,
      },
      {
        id: 3,
        value: "Over 101 products",
        isSelected: false,
        nextQuestion: 0,
      },
    ],
  },
  {
    id: 7,
    question: "What is the sales copy for?",
    options: [
      {
        id: 0,
        value: "Website rewrite",
        isSelected: false,
        nextQuestion: 8,
      },
      {
        id: 1,
        value: "Emails",
        isSelected: false,
        nextQuestion: 8,
      },
      {
        id: 2,
        value: "E-comm product copy",
        isSelected: false,
        nextQuestion: 8,
      },
      {
        id: 3,
        value: "Sales page / landing page copy",
        isSelected: false,
        nextQuestion: 8,
      },
    ],
  },
  {
    id: 8,
    question: "Optional: Add more initial details...",
    input: {
      value: "",
      valid: false,
    },
    options: {
      initial: true,
      touched: false,
      nextQuestion: 99,
    },
  },
  {
    id: 9,
    question: "What is the address (url)?",
    input: {
      value: "",
      valid: false,
    },
    options: {
      initial: true,
      touched: false,
      nextQuestion: 1,
    },
  },
  {
    id: 10,
    question: "When would you like to have your website live?",
    options: [
      {
        id: 0,
        value: "2 weeks",
        isSelected: false,
        nextQuestion: 2,
      },
      {
        id: 0,
        value: "3 weeks",
        isSelected: false,
        nextQuestion: 2,
      },
      {
        id: 0,
        value: "No more than 4 weeks",
        isSelected: false,
        nextQuestion: 2,
      },
      {
        id: 0,
        value: "I need it NOW!",
        isSelected: false,
        nextQuestion: 2,
      },
    ],
  },
  {
    id: 11,
    question: "What are you primarily interested in?",
    options: [
      {
        id: 0,
        value: "New website or redesign",
        isSelected: false,
        nextQuestion: 0,
      },
      {
        id: 1,
        value: "E-commerce Website",
        isSelected: false,
        nextQuestion: 5,
      },
      {
        id: 2,
        value: "A targeted landing page",
        isSelected: false,
        nextQuestion: 9,
      },
      {
        id: 3,
        value: "Copywriting help",
        isSelected: false,
        nextQuestion: 9,
      },
      {
        id: 4,
        value: "SEO and marketing",
        isSelected: false,
        nextQuestion: 9,
      },
    ],
  },
];

export const useProjectQuizForm = () => {
  const [haveWebsite, setHaveWebsite] = useState<QuizRadioInputValue>({
    value: "",
    nextQuestion: 0,
    options: haveWebsiteQuestion.options,
  });

  const [haveTimeline, setHaveTimeline] = useState<QuizRadioInputValue>({
    value: "",
    nextQuestion: 0,
    options: haveTimelineQuestion.options,
  });

  const [haveBudget, setHaveBudget] = useState<QuizRadioInputValue>({
    value: "",
    nextQuestion: 0,
    options: haveBudgetQuestion.options,
  });

  const [haveImages, setHaveImages] = useState<QuizRadioInputValue>({
    value: "",
    nextQuestion: 0,
    options: haveImagesQuestion.options,
  });

  const [haveMarketingPlan, setHaveMarketingPlan] =
    useState<QuizRadioInputValue>({
      value: "",
      nextQuestion: 0,
      options: haveMarketingPlanQuestion.options,
    });

  const [numberOfProducts, setNumberOfProducts] = useState<QuizRadioInputValue>(
    {
      value: "",
      nextQuestion: 0,
      options: howManyProductsQuestion.options,
    }
  );

  const [salesCopyPurpose, setSalesCopyPurpose] = useState<QuizRadioInputValue>(
    {
      value: "",
      nextQuestion: 0,
      options: salesCopyPurposeQuestion.options,
    }
  );

  const [additionalDetailsValue, setAdditionalDetailsValue] =
    useState<QuizTextInputValue>({
      value: "",
      valid: false,
    });

  const [additionalDetailsOptions, setAdditionalDetailsOptions] =
    useState<QuizeTextInputOptions>({
      initial: true,
      touched: false,
    });

  const [websiteUrlValue, setWebsiteUrlValue] = useState<QuizTextInputValue>({
    value: "",
    valid: false,
  });

  const [websiteUrlOptions, setWebsiteUrlOptions] =
    useState<QuizeTextInputOptions>({
      initial: true,
      touched: false,
    });

  const [idealTimeline, setIdealTimeline] = useState<QuizRadioInputValue>({
    value: "",
    nextQuestion: 0,
    options: timelineQuestion.options,
  });

  const [primaryInterest, setPrimaryInterest] = useState<QuizRadioInputValue>({
    value: "",
    nextQuestion: 0,
    options: primaryInterestQuestion.options,
  });

  const updateInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const inputName = event.target.name as ProjectQuizFormInput;

    switch (inputName) {
      case "haveWebsite": {
        const newOptions = updateProjectQuizOptions(
          haveWebsiteQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setHaveWebsite({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "haveTimeline": {
        const newOptions = updateProjectQuizOptions(
          haveTimelineQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setHaveTimeline({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "haveBudget": {
        const newOptions = updateProjectQuizOptions(
          haveBudgetQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setHaveBudget({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "haveImages": {
        const newOptions = updateProjectQuizOptions(
          haveImagesQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setHaveImages({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "haveMarketingPlan": {
        const newOptions = updateProjectQuizOptions(
          haveMarketingPlanQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setHaveMarketingPlan({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "howManyProducts": {
        const newOptions = updateProjectQuizOptions(
          howManyProductsQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setNumberOfProducts({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "salesCopyPurpose": {
        const newOptions = updateProjectQuizOptions(
          salesCopyPurposeQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setSalesCopyPurpose({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "moreDetails": {
        setAdditionalDetailsValue({
          value: value,
          valid: true,
        });
        break;
      }
      case "websiteUrl": {
        const valid = value.length > 4;
        setWebsiteUrlValue({
          value: value,
          valid: valid,
        });
        break;
      }
      case "idealTimeline": {
        const newOptions = updateProjectQuizOptions(
          timelineQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setIdealTimeline({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "primaryInterest": {
        const newOptions = updateProjectQuizOptions(
          primaryInterestQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPrimaryInterest({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      default: {
        throw new Error(
          "You did not handle all possible inputs in the Project Quiz form hook."
        );
      }
    }
  };

  const updateInputOptions = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputName = event.target.name as ProjectQuizFormInput;

    switch (inputName) {
      case "haveWebsite": {
        break;
      }
      case "haveTimeline": {
        break;
      }
      case "haveBudget": {
        break;
      }
      case "haveImages": {
        break;
      }
      case "haveMarketingPlan": {
        break;
      }
      case "howManyProducts": {
        break;
      }
      case "salesCopyPurpose": {
        break;
      }
      case "moreDetails": {
        setAdditionalDetailsOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
        break;
      }
      case "websiteUrl": {
        setWebsiteUrlOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
        break;
      }
      case "idealTimeline": {
        break;
      }
      case "primaryInterest": {
        break;
      }
      default: {
        throw new Error(
          "You did not handle all possible inputs in the Project Quiz form hook."
        );
      }
    }
  };

  return {
    haveWebsite,
    haveTimeline,
    haveBudget,
    haveImages,
    haveMarketingPlan,
    numberOfProducts,
    salesCopyPurpose,
    additionalDetailsValue,
    additionalDetailsOptions,
    websiteUrlValue,
    websiteUrlOptions,
    idealTimeline,
    primaryInterest,
    updateInputValue,
    updateInputOptions,
  };
};
