import { useState, useEffect } from "react";

import { Option, RadioInputValue, ContactFormInput } from "../../types/forms";
import {
  formValidator,
  isRequiredValidationRules,
  emailValidationRules,
} from "../../utils/formValidation";
import { capitalizeName } from "../../utils/utilityFunctions";
import { updateOptions } from "../../utils/formFunctions";

interface InputValue {
  value: string;
  valid: boolean;
}

interface InputOptions {
  initial: boolean;
  touched: boolean;
}

export const options: Option[] = [
  {
    id: 0,
    label: "Web Design or Re-design",
    value: "website",
    isChecked: true,
  },
  {
    id: 1,
    label: "Build a Landing Page",
    value: "landing pages",
    isChecked: false,
  },
  {
    id: 2,
    label: "Ecommerce Site",
    value: "e-commerce website",
    isChecked: false,
  },
  {
    id: 3,
    label: "Website Re-Write",
    value: "copywriting",
    isChecked: false,
  },
  {
    id: 4,
    label: "Email Writing",
    value: "emails",
    isChecked: false,
  },
  {
    id: 5,
    label: "Buying Ads",
    value: "seo and marketing",
    isChecked: false,
  },
];

export const useContactForm = () => {
  const [firstName, setFirstName] = useState<InputValue>({
    value: "",
    valid: false,
  });

  const [firstNameOptions, setFirstNameOptions] = useState<InputOptions>({
    initial: true,
    touched: false,
  });

  const [emailAddress, setEmailAddress] = useState<InputValue>({
    value: "",
    valid: false,
  });

  const [emailAddressOptions, setEmailAddressOptions] = useState<InputOptions>({
    initial: true,
    touched: false,
  });

  const [serviceValue, setServiceValue] = useState<RadioInputValue>({
    value: "",
    options: options,
  });

  const [contactMessage, setContactMessage] = useState<InputValue>({
    value: "",
    valid: false,
  });

  const [contactMessageOptions, setContactMessageOptions] =
    useState<InputOptions>({
      initial: true,
      touched: false,
    });

  const [clearForm, setClearForm] = useState<boolean>(false);

  useEffect(() => {
    if (clearForm) {
      setFirstName({ value: "", valid: false });
      setFirstNameOptions({ initial: true, touched: false });
      setEmailAddress({ value: "", valid: false });
      setEmailAddressOptions({ initial: true, touched: false });
      setServiceValue({ value: "", options: options });
      setContactMessage({ value: "", valid: false });
      setContactMessageOptions({ initial: true, touched: false });
    }

    setClearForm(false);
  }, [clearForm]);

  const updateInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name as ContactFormInput;
    const value = event.target.value;

    switch (name) {
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
        const email = value.toLowerCase();
        const valid = formValidator(email, emailValidationRules);
        setEmailAddress({
          value: email,
          valid: valid,
        });
        break;
      }
      case "service": {
        const newOptions = updateOptions(options, value);
        setServiceValue({
          value: value,
          options: newOptions,
        });
        break;
      }
      case "contactMessage": {
        const valid = formValidator(value, isRequiredValidationRules);
        setContactMessage({
          value: value,
          valid: valid,
        });
        break;
      }
      default: {
        throw new Error(
          "In useContactForm and you did not handle a form input."
        );
      }
    }

    const isValid = formValidator(value, isRequiredValidationRules);
  };

  const updateInputOptions = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Normally need name if the form as multiple inputs which most do.
    const name = event.target.name;

    switch (name) {
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
      case "contactMessage": {
        setContactMessageOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
        break;
      }
      default: {
        throw new Error(
          "In useContactForm and you did not handle a form input."
        );
      }
    }
  };

  return {
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
  };
};
