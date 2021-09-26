import styled from "styled-components";

import { TextInput } from "../../components/forms/inputs/TextInput";
import { Textarea } from "../../components/forms/inputs/TextArea";
import { RadioInput } from "../../components/forms/inputs/RadioInput";
import { useContactForm, options } from "../../hooks/forms/useContactForm";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
`;

export const Form = () => {
  const {
    firstName,
    firstNameOptions,
    emailAddress,
    emailAddressOptions,
    serviceValue,
    contactMessage,
    contactMessageOptions,
    updateInputValue,
    updateInputOptions,
    setClearForm,
  } = useContactForm();

  return (
    <FormContainer>
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
      <RadioInput
        inputLabel="What are you looking for?"
        options={options}
        updateInputValue={updateInputValue}
      />
    </FormContainer>
  );
};
