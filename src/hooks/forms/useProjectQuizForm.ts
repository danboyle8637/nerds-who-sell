import React, { useState } from "react";

import { ProjectQuizFormInput } from "../../types/forms";
import {
  updateProjectQuizOptions,
  findNextQuestion,
} from "../../utils/formFunctions";
import { capitalizeName } from "../../utils/utilityFunctions";
import {
  formValidator,
  isRequiredValidationRules,
  emailValidationRules,
} from "../../utils/formValidation";

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

const haveWebsiteQuestion: RadioQuestion = {
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
};

const haveTimelineQuestion: RadioQuestion = {
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
};

const haveBudgetQuestion: RadioQuestion = {
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
};

const haveMarketingPlanQuestion: RadioQuestion = {
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
};

const howManyProductsQuestion: RadioQuestion = {
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
};

const salesCopyPurposeQuestion: RadioQuestion = {
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
};

const idealTimelineQuestion: RadioQuestion = {
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
};

const primaryInterestQuestion: RadioQuestion = {
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
};

export const useProjectQuizForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [nextQuestionId, setNextQuestionId] = useState<number>(11);
  const [pastQuestionArray, setPastQuestionArray] = useState<number[]>([]);

  const setNextQuestionIdWithDelay = (id: number) => {
    setTimeout(() => {
      setNextQuestionId(id);
    }, 600);
  };

  const [firstName, setFirstName] = useState<QuizTextInputValue>({
    value: "",
    valid: false,
  });

  const [firstNameOptions, setFirstNameOptions] =
    useState<QuizeTextInputOptions>({
      initial: true,
      touched: false,
    });

  const [emailAddress, setEmailAddress] = useState<QuizTextInputValue>({
    value: "",
    valid: false,
  });

  const [emailAddressOptions, setEmailAddressOptions] =
    useState<QuizeTextInputOptions>({
      initial: true,
      touched: false,
    });

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
    options: idealTimelineQuestion.options,
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
      case "firstName": {
        const name = capitalizeName(value);
        const valid = formValidator(value, isRequiredValidationRules);
        setFirstName({
          value: name,
          valid: valid,
        });
        break;
      }
      case "emailAddress": {
        const email = value.trim();
        const valid = formValidator(value, emailValidationRules);
        setEmailAddress({
          value: email,
          valid: valid,
        });
        break;
      }
      case "haveWebsite": {
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          haveWebsiteQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          haveWebsiteQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
        setHaveWebsite({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "haveTimeline": {
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          haveTimelineQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          haveTimelineQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
        setHaveTimeline({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "haveBudget": {
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          haveBudgetQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          haveBudgetQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
        setHaveBudget({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "haveMarketingPlan": {
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          haveMarketingPlanQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          haveMarketingPlanQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
        setHaveMarketingPlan({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "howManyProducts": {
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          howManyProductsQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          howManyProductsQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
        setNumberOfProducts({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "salesCopyPurpose": {
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          salesCopyPurposeQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          salesCopyPurposeQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
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
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          idealTimelineQuestion.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          idealTimelineQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
        setIdealTimeline({
          value: value,
          nextQuestion: nextQuestion,
          options: newOptions,
        });
        break;
      }
      case "primaryInterest": {
        setCurrentQuestion((prevValue) => prevValue + 1);
        const newOptions = updateProjectQuizOptions(
          primaryInterest.options,
          value
        );
        const nextQuestion = findNextQuestion(newOptions);
        setPastQuestionArray((preValue) => [
          ...preValue,
          primaryInterestQuestion.id,
        ]);
        setNextQuestionIdWithDelay(nextQuestion);
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
      case "firstName": {
        setFirstNameOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
        break;
      }
      case "emailAddress": {
        setEmailAddressOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
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
      default: {
        throw new Error(
          "You did not handle all possible inputs in the Project Quiz form hook."
        );
      }
    }
  };

  return {
    currentQuestion,
    setCurrentQuestion,
    nextQuestionId,
    haveWebsite,
    haveTimeline,
    haveBudget,
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
    setNextQuestionId,
    firstName,
    firstNameOptions,
    emailAddress,
    emailAddressOptions,
    pastQuestionArray,
    setPastQuestionArray,
  };
};
