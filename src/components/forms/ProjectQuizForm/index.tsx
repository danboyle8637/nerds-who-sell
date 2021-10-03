import { useState, useEffect } from "react";
import styled from "styled-components";

import { TextInput } from "../inputs/TextInput";
import { Textarea } from "../inputs/TextArea";
import { RadioInput } from "./RadioInput";
import { useProjectQuizForm } from "../../../hooks/forms/useProjectQuizForm";
import {
  haveBudgetQuestion,
  haveImagesQuestion,
  haveMarketingPlanQuestion,
  haveTimelineQuestion,
  haveWebsiteQuestion,
  howManyProductsQuestion,
  primaryInterestQuestion,
  salesCopyPurposeQuestion,
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

  const handleNextQuestion = () => {
    setQuestionId((prevValue) => ({
      activeId: nextQuestionId,
      prevId: prevValue.activeId,
    }));
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
    </FormContainer>
  );
};
