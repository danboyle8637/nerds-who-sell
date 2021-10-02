import { useState, useEffect } from "react";
import styled from "styled-components";

import { TextInput } from "../inputs/TextInput";
import { Textarea } from "../inputs/TextArea";
import { ProjectQuizRadioInput } from "../inputs/ProjectQuizRadioInput";
import { useProjectQuizForm } from "../../../hooks/forms/useProjectQuizForm";

const FormContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  width: 100%;
  height: 100vh;
  border: 1px solid cyan;
`;

export const ProjectQuizForm = () => {
  const [questionId, setQuestionId] = useState({
    activeId: 11,
    prevId: 0,
  });

  const {
    primaryInterest,
    haveWebsite,
    haveTimeline,
    updateInputValue,
    updateInputOptions,
  } = useProjectQuizForm();

  const handleNextQuestion = (questionId: number) => {
    setQuestionId((prevValue) => ({
      activeId: questionId,
      prevId: prevValue.activeId,
    }));
  };

  const handlePrevQuestion = (questionId: number) => {};

  return (
    <FormContainer>
      <ProjectQuizRadioInput
        name="primaryInterest"
        inputLabel="What is your primarygoal"
        options={primaryInterest.options}
        updateInputValue={updateInputValue}
      />
    </FormContainer>
  );
};
