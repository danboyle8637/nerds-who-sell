import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { TextInput } from "../../components/forms/inputs/TextInput";
import { Textarea } from "../../components/forms/inputs/TextArea";
import { RadioInput } from "../../components/forms/inputs/RadioInput";
import { FormButton } from "../../components/buttons/FormButton";
import { useContactForm, options } from "../../hooks/forms/useContactForm";
import { NotificationCard } from "../../components/cards/NotificationCard";
import { Portal } from "../../components/shared/Portal";
import { ContactFormReqBody } from "../../types/api";
import { sizes } from "../../styles/sizes";

const FormContainer = styled.form`
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 80px;
  width: 100%;
  max-width: 800px;
`;

const NameEmailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

const ServiceMessageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-columns: max-content 1fr;
  }
`;

export const Form = () => {
  const [isErrorOpen, setIsErrorOpen] = useState<boolean>(true);

  const { isReady, push } = useRouter();

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

  const toggleErrorNotification = () => {
    setIsErrorOpen((prevValue) => !prevValue);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const contactData: ContactFormReqBody = {
      formType: "contact",
      firstName: firstName.value,
      emailAddress: emailAddress.value,
      primaryGoal: serviceValue.value,
      moreDetails: contactMessage.value,
    };

    console.log(contactData);

    const url =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_WORKER_BASE_URL
        : process.env.WORKER_BASE_URL;

    try {
      await fetch(`${url}/airtable`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (isReady) {
        setClearForm(true);
        push("/thank-you/contact");
      }
    } catch {
      toggleErrorNotification();
    }
  };

  const formValid =
    firstName.valid && emailAddress.valid && contactMessage.valid;

  return (
    <>
      <FormContainer onSubmit={handleFormSubmit}>
        <NameEmailContainer>
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
        </NameEmailContainer>
        <ServiceMessageContainer>
          <RadioInput
            name="service"
            inputLabel="What are you looking for?"
            options={options}
            updateInputValue={updateInputValue}
          />
          <Textarea
            name="contactMessage"
            labelFor="contactMessage"
            labelName="Tell Me Some Details"
            maxLength={600}
            rows={7}
            value={contactMessage.value}
            valid={contactMessage.valid}
            initial={contactMessageOptions.initial}
            touched={contactMessageOptions.touched}
            onChange={updateInputValue}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
        </ServiceMessageContainer>
        <FormButton isDisabled={!formValid}>
          {formValid ? "Let's Setup a Chat!" : "Fill Out Entire Form"}
        </FormButton>
      </FormContainer>
      <Portal>
        <NotificationCard
          isActive={isErrorOpen}
          type="danger"
          message="Oh no! A squirrel must have been burying his nut and he clipped the internet optic cable. You know their only buried a couple inches deep. Hit refresh and try again."
          handleCloseNotification={toggleErrorNotification}
        />
      </Portal>
    </>
  );
};
