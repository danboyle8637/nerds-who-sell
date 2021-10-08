import React, { useEffect } from "react";
import styled from "styled-components";

import { ProjectQuizTextInpu } from "./TextInput";
import { ProjectQuizTextArea } from "./TextArea";
import { RadioInput } from "./RadioInput";
import {
  QuizRadioInputValue,
  QuizeTextInputOptions,
  QuizTextInputValue,
} from "../../../hooks/forms/useProjectQuizForm";

interface ProjectQuizFormProps {
  nextQuestionId: number;
  prevQuestionId: number;
  primaryInterest: QuizRadioInputValue;
  haveWebsite: QuizRadioInputValue;
  haveTimeline: QuizRadioInputValue;
  haveBudget: QuizRadioInputValue;
  haveImages: QuizRadioInputValue;
  haveMarketingPlan: QuizRadioInputValue;
  numberOfProducts: QuizRadioInputValue;
  salesCopyPurpose: QuizRadioInputValue;
  additionalDetailsValue: QuizTextInputValue;
  additionalDetailsOptions: QuizeTextInputOptions;
  websiteUrlValue: QuizTextInputValue;
  websiteUrlOptions: QuizeTextInputOptions;
  idealTimeline: QuizRadioInputValue;
  updateInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  updateInputOptions: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setNextQuestionId: React.Dispatch<React.SetStateAction<number>>;
}

const FormContainer = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color: none;
  width: 100%;
  height: 100vh;
`;

export const ProjectQuizForm: React.FC<ProjectQuizFormProps> = ({
  nextQuestionId,
  prevQuestionId,
  primaryInterest,
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
  updateInputValue,
  updateInputOptions,
  setNextQuestionId,
}) => {
  const handleNextQuestion = (questionId: number) => {
    setNextQuestionId(questionId);
  };

  const handlePrevQuestion = () => {
    setNextQuestionId(prevQuestionId);
  };

  return (
    <FormContainer>
      <RadioInput
        activeId={nextQuestionId}
        questionId={11}
        name="primaryInterest"
        inputLabel="What is your primary goal?"
        options={primaryInterest.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={0}
        name="haveWebsite"
        inputLabel="Do you currently have a website?"
        options={haveWebsite.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={1}
        name="haveTimeline"
        inputLabel="Do you have a timeline?"
        options={haveTimeline.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={2}
        name="haveBudget"
        inputLabel="Do you have a budget?"
        options={haveBudget.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={3}
        name="haveImages"
        inputLabel="Do you have website images?"
        options={haveImages.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={4}
        name="haveMarketingPlan"
        inputLabel="Do you have website marketing plan?"
        options={haveMarketingPlan.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={5}
        name="howManyProducts"
        inputLabel="How many products or services do you have?"
        options={numberOfProducts.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={7}
        name="salesCopyPurpose"
        inputLabel="What do you need copy help with?"
        options={salesCopyPurpose.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={10}
        name="idealTimeline"
        inputLabel="What is your ideal timeline?"
        options={idealTimeline.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <ProjectQuizTextInpu
        activeId={nextQuestionId}
        questionId={9}
        nextQuestionId={1}
        inputName="websiteUrl"
        labelName="Your website url (address)?"
        labelFor="websiteUrl"
        value={websiteUrlValue.value}
        valid={websiteUrlValue.valid}
        initial={websiteUrlOptions.initial}
        touched={websiteUrlOptions.touched}
        updateInputValue={updateInputValue}
        updateInputOptions={updateInputOptions}
        handleNextQuestion={handleNextQuestion}
        handlePrevQuestion={handlePrevQuestion}
      />
      <ProjectQuizTextArea
        activeId={nextQuestionId}
        questionId={8}
        nextQuestionId={99}
        name="moreDetails"
        labelName="Optional: More details..."
        maxLength={600}
        rows={8}
        value={additionalDetailsValue.value}
        valid={additionalDetailsValue.valid}
        initial={additionalDetailsOptions.initial}
        touched={additionalDetailsOptions.touched}
        updateInputValue={updateInputValue}
        updateInputOptions={updateInputOptions}
        handleNextQuestion={handleNextQuestion}
        handlePrevQuestion={handlePrevQuestion}
      />
    </FormContainer>
  );
};
