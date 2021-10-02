import { Option } from "../types/forms";
import { AnswerOption } from "../hooks/forms/useProjectQuizForm";

export const updateOptions = (
  optionsArray: Option[],
  value: string
): Option[] => {
  return optionsArray.map((option) => {
    if (option.value === value) {
      option.isChecked = !option.isChecked;
      return option;
    } else if (option.isChecked) {
      option.isChecked = !option.isChecked;
      return option;
    }
    return option;
  });
};

export const updateProjectQuizOptions = (
  optionsArray: AnswerOption[],
  value: string
): AnswerOption[] => {
  return optionsArray.map((option) => {
    if (option.value === value) {
      option.isSelected = !option.isSelected;
      return option;
    } else if (option.isSelected) {
      option.isSelected = !option.isSelected;
      return option;
    }
    return option;
  });
};

export const findNextQuestion = (options: AnswerOption[]) => {
  const selectedOption = options.find((option) => option.isSelected === true);
  return selectedOption?.nextQuestion ?? 11;
};
