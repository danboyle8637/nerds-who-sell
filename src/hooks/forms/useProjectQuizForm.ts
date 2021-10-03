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
  label: string;
  isSelected: boolean;
  nextQuestion: number;
}

export interface QuizRadioInputValue {
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

export const useProjectQuizForm = () => {
  const [nextQuestionId, setNextQuestionId] = useState<number>(11);
  const [prevQuestionId, setPrevQuestionId] = useState<number>(0);

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
        setPrevQuestionId(haveTimelineQuestion.id);
        setNextQuestionId(nextQuestion);
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
        setPrevQuestionId(haveBudgetQuestion.id);
        setNextQuestionId(nextQuestion);
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
        setPrevQuestionId(haveImagesQuestion.id);
        setNextQuestionId(nextQuestion);
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
        setPrevQuestionId(haveMarketingPlanQuestion.id);
        setNextQuestionId(nextQuestion);
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
        setPrevQuestionId(howManyProductsQuestion.id);
        setNextQuestionId(nextQuestion);
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
        setPrevQuestionId(salesCopyPurposeQuestion.id);
        setNextQuestionId(nextQuestion);
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
        setPrevQuestionId(timelineQuestion.id);
        setNextQuestionId(nextQuestion);
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
        setPrevQuestionId(primaryInterestQuestion.id);
        setNextQuestionId(nextQuestion);
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
    nextQuestionId,
    prevQuestionId,
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
    setNextQuestionId,
  };
};
