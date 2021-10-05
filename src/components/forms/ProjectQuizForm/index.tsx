import { useState, useEffect } from "react";
import styled from "styled-components";

import { ProjectQuizTextInpu } from "./TextInput";
import { ProjectQuizTextArea } from "./TextArea";
import { RadioInput } from "./RadioInput";
import { useProjectQuizForm } from "../../../hooks/forms/useProjectQuizForm";
import {
  additionalDetailsQuestion,
  haveBudgetQuestion,
  haveImagesQuestion,
  haveMarketingPlanQuestion,
  haveTimelineQuestion,
  haveWebsiteQuestion,
  howManyProductsQuestion,
  idealTimelineQuestion,
  primaryInterestQuestion,
  salesCopyPurposeQuestion,
  whatIsUrlQuestion,
} from "../../../hooks/forms/projectQuizData";

const FormContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  width: 100%;
  height: 100vh;
`;

export const ProjectQuizForm = () => {
  const [questionId, setQuestionId] = useState({
    activeId: 11,
    prevId: 0,
  });

  const {
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
  } = useProjectQuizForm();

  useEffect(() => {
    return () => {
      console.log("Clear out the form data if they close it.");
    };
  }, []);

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
        questionId={primaryInterestQuestion.id}
        name="primaryInterest"
        inputLabel="What is your primary goal?"
        options={primaryInterest.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={haveWebsiteQuestion.id}
        name="haveWebsite"
        inputLabel="Do you currently have a website?"
        options={haveWebsite.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={haveTimelineQuestion.id}
        name="haveTimeline"
        inputLabel="Do you have a timeline?"
        options={haveTimeline.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={haveBudgetQuestion.id}
        name="haveBudget"
        inputLabel="Do you have a budget?"
        options={haveBudget.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={haveImagesQuestion.id}
        name="haveImages"
        inputLabel="Do you have website images?"
        options={haveImages.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={haveMarketingPlanQuestion.id}
        name="haveMarketingPlan"
        inputLabel="Do you have website marketing plan?"
        options={haveMarketingPlan.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={howManyProductsQuestion.id}
        name="howManyProducts"
        inputLabel="How many products or services do you have?"
        options={numberOfProducts.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={salesCopyPurposeQuestion.id}
        name="salesCopyPurpose"
        inputLabel="What do you need copy help with?"
        options={salesCopyPurpose.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <RadioInput
        activeId={nextQuestionId}
        questionId={idealTimelineQuestion.id}
        name="idealTimeline"
        inputLabel="What is your ideal timeline?"
        options={idealTimeline.options}
        updateInputValue={updateInputValue}
        handlePrevQuestion={handlePrevQuestion}
      />
      <ProjectQuizTextInpu
        activeId={nextQuestionId}
        questionId={whatIsUrlQuestion.id}
        nextQuestionId={whatIsUrlQuestion.options.nextQuestion}
        inputName="websiteUrl"
        labelName="What is your website url (address)?"
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
        questionId={additionalDetailsQuestion.id}
        nextQuestionId={additionalDetailsQuestion.options.nextQuestion}
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
