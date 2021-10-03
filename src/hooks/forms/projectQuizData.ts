import { RadioQuestion } from "./useProjectQuizForm";

export const haveWebsiteQuestion: RadioQuestion = {
  id: 0,
  question: "Do you have a website?",
  options: [
    {
      id: 0,
      value: "yes",
      label: "Yes I do",
      isSelected: false,
      nextQuestion: 9,
    },
    {
      id: 1,
      value: "no",
      label: "No I don't",
      isSelected: false,
      nextQuestion: 1,
    },
  ],
};

export const haveTimelineQuestion: RadioQuestion = {
  id: 1,
  question: "Do you have a timeline?",
  options: [
    {
      id: 0,
      value: "yes",
      label: "Yes I have a timeline",
      isSelected: false,
      nextQuestion: 10,
    },
    {
      id: 1,
      value: "no",
      label: "No nothing strict",
      isSelected: false,
      nextQuestion: 10,
    },
  ],
};

export const haveBudgetQuestion: RadioQuestion = {
  id: 2,
  question: "Do you have a budget?",
  options: [
    {
      id: 0,
      value: "yes",
      label: "Yes I have a budget",
      isSelected: false,
      nextQuestion: 3,
    },
    {
      id: 1,
      value: "no",
      label: "No not yet",
      isSelected: false,
      nextQuestion: 3,
    },
  ],
};

export const haveImagesQuestion: RadioQuestion = {
  id: 3,
  question: "Do you have images for your website?",
  options: [
    {
      id: 0,
      value: "yes",
      label: "Yes I have images already",
      isSelected: false,
      nextQuestion: 4,
    },
    {
      id: 1,
      value: "no",
      label: "No I don't have images",
      isSelected: false,
      nextQuestion: 4,
    },
  ],
};

export const haveMarketingPlanQuestion: RadioQuestion = {
  id: 4,
  question: "Do you have a plan for how to use your website?",
  options: [
    {
      id: 0,
      value: "yes",
      label: "Yes I have a marketing plan",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 1,
      value: "no",
      label: "No I have not thought of that yet",
      isSelected: false,
      nextQuestion: 8,
    },
  ],
};

export const howManyProductsQuestion: RadioQuestion = {
  id: 5,
  question: "How many products or services are you going to sell?",
  options: [
    {
      id: 0,
      value: "1 to 10",
      label: "About 1 to 10",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 1,
      value: "11 to 50",
      label: "About 11 to 20",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 2,
      value: "51 to 100",
      label: "51 to 100",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 3,
      value: "Over 101 products",
      label: "Move 100 for sure",
      isSelected: false,
      nextQuestion: 0,
    },
  ],
};

export const salesCopyPurposeQuestion: RadioQuestion = {
  id: 7,
  question: "What is the sales copy for?",
  options: [
    {
      id: 0,
      value: "Website rewrite",
      label: "A website re-write",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 1,
      value: "Emails",
      label: "Emails or email campaigns",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 2,
      value: "E-comm product copy",
      label: "E-commmerce product page copy",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 3,
      value: "Sales page / landing page copy",
      label: "Sales page or landing page copy",
      isSelected: false,
      nextQuestion: 8,
    },
  ],
};

export const additionalDetailsQuestion = {
  id: 8,
  question: "Optional: Add more initial details...",
  input: {
    value: "",
    valid: false,
  },
  options: {
    initial: true,
    touched: false,
    nextQuestion: 99,
  },
};

export const whatIsUrlQuestion = {
  id: 9,
  question: "What is the address (url)?",
  input: {
    value: "",
    valid: false,
  },
  options: {
    initial: true,
    touched: false,
    nextQuestion: 1,
  },
};

export const timelineQuestion: RadioQuestion = {
  id: 10,
  question: "When would you like to have your website live?",
  options: [
    {
      id: 0,
      value: "2 weeks",
      label: "About 2 week or less",
      isSelected: false,
      nextQuestion: 2,
    },
    {
      id: 0,
      value: "3 weeks",
      label: "3 weeks or less",
      isSelected: false,
      nextQuestion: 2,
    },
    {
      id: 0,
      value: "No more than 4 weeks",
      label: "No more than 4 weeks",
      isSelected: false,
      nextQuestion: 2,
    },
    {
      id: 0,
      value: "I need it NOW!",
      label: "I'm in a crunch I need it now",
      isSelected: false,
      nextQuestion: 2,
    },
  ],
};

export const primaryInterestQuestion: RadioQuestion = {
  id: 11,
  question: "What is your primary interest?",
  options: [
    {
      id: 0,
      value: "website",
      label: "A new website or rebuild",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 1,
      value: "e-commerce website",
      label: "An e-commerce based website",
      isSelected: false,
      nextQuestion: 5,
    },
    {
      id: 2,
      value: "landing pages",
      label: "A landing page for a service or prodcut",
      isSelected: false,
      nextQuestion: 9,
    },
    {
      id: 3,
      value: "copywriting",
      label: "Copywriting to convert better",
      isSelected: false,
      nextQuestion: 9,
    },
    {
      id: 4,
      value: "seo and marketing",
      label: "Get my website found",
      isSelected: false,
      nextQuestion: 9,
    },
  ],
};
