import { Option } from "../types/forms";

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
