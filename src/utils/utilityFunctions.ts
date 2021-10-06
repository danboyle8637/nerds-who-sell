export const capitalizeName = (name: string) => {
  const nameArray = name.split("");
  const firstChar = nameArray.shift()?.toUpperCase();

  if (firstChar) {
    nameArray.unshift(firstChar);
    const cappedName = nameArray.join("");

    return cappedName;
  } else {
    return "";
  }
};

export const useImageTransformations = (
  url: string,
  transformationString: string
): string => {
  const splitUrl = url.split("2021");
  const blurred = "tr:w-10,bl-2";
  const progressive = "tr:pr-true";
  const fullUrl = [splitUrl[0], `2021/${progressive}`, splitUrl[1]].join("");
  return fullUrl;
};

export const randomValue = (max: number): number => {
  return Math.floor(Math.random() * max);
};
