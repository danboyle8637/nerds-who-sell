import styled from "styled-components";

import { TextInput } from "../inputs/TextInput";
import { ProjectQuizTextInput } from "./TextInput";
import { ProjectQuizTextArea } from "./TextArea";
import { RadioInput } from "./RadioInput";
import { NameEmailInput } from "./NameEmailInput";
import { SavingData } from "./SavingData";
import {
  QuizRadioInputValue,
  QuizeTextInputOptions,
  QuizTextInputValue,
} from "../../../hooks/forms/useProjectQuizForm";

interface ProjectQuizFormProps {
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  nextQuestionId: number;
  pastQuestionArray: number[];
  setPastQuestionArray: React.Dispatch<React.SetStateAction<number[]>>;
  primaryInterest: QuizRadioInputValue;
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
  firstName: QuizTextInputValue;
  firstNameOptions: QuizeTextInputOptions;
  emailAddress: QuizTextInputValue;
  emailAddressOptions: QuizeTextInputOptions;
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
  setCurrentQuestion,
  nextQuestionId,
  pastQuestionArray,
  setPastQuestionArray,
  primaryInterest,
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
  firstName,
  firstNameOptions,
  emailAddress,
  emailAddressOptions,
  updateInputValue,
  updateInputOptions,
  setNextQuestionId,
}) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setNextQuestionId(99);

    const quizResults = {
      firstName: firstName.value,
      emailAddress: emailAddress.value,
      primaryInterest: primaryInterest.value,
      haveWebsite: haveWebsite.value,
      websiteUrl: websiteUrlValue.value,
      haveTimeline: haveTimeline.value,
      haveBudget: haveBudget.value,
      haveMarketingPlan: haveMarketingPlan.value,
      numberOfProducts: numberOfProducts.value,
      salesCopyPurpose: salesCopyPurpose.value,
      idealTimeline: idealTimeline.value,
      additionalDetails: additionalDetailsValue.value,
    };

    console.log(quizResults);
  };

  const handleNextQuestion = (questionId: number) => {
    setCurrentQuestion((prevValue) => prevValue + 1);
    setPastQuestionArray((prevValue) => [...prevValue, questionId]);
    setNextQuestionId(questionId);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion((prevValue) => prevValue - 1);
    const lastQuestion = pastQuestionArray.pop();
    setPastQuestionArray((prevValue) => prevValue.slice(0, -1));
    setNextQuestionId(lastQuestion ?? 11);
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
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
      <ProjectQuizTextInput
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
        nextQuestionId={12}
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
      <NameEmailInput
        activeId={nextQuestionId}
        questionId={12}
        nextQuestionId={99}
        handleNextQuestion={handleNextQuestion}
        handlePrevQuestion={handlePrevQuestion}
        valid={firstName.valid && emailAddress.valid}
      >
        <TextInput
          inputType="text"
          inputName="firstName"
          labelFor="firstName"
          labelName="First Name"
          value={firstName.value}
          valid={firstName.valid}
          initial={firstNameOptions.initial}
          touched={firstNameOptions.touched}
          onChange={updateInputValue}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <TextInput
          inputType="text"
          inputName="emailAddress"
          labelFor="emailAddress"
          labelName="Email Address"
          value={emailAddress.value}
          valid={emailAddress.valid}
          initial={emailAddressOptions.initial}
          touched={emailAddressOptions.touched}
          onChange={updateInputValue}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
      </NameEmailInput>
      <SavingData activeId={nextQuestionId} questionId={99} />
    </FormContainer>
  );
};
