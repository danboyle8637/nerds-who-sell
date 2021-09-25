export interface Rules {
  maxLength?: number;
  minLength?: number;
  isRequired: boolean;
  isEmail?: boolean;
  isSelected?: boolean;
}

export interface Option {
  id: number;
  name: string;
  label: string;
  value: string;
  isChecked: boolean;
}

export interface RadioInputValue {
  value: string;
  options: Option[];
}

export type ContactFormInput =
  | "firstName"
  | "emailAddress"
  | "service"
  | "contactMessage";
