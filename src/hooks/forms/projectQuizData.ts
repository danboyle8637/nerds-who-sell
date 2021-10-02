export const haveWebsiteQuestion = {
  id: 0,
  question: "Do you have a website?",
  options: [
    {
      id: 0,
      value: "yes",
      isSelected: false,
      nextQuestion: 9,
    },
    {
      id: 1,
      value: "no",
      isSelected: false,
      nextQuestion: 1,
    },
  ],
};

export const haveTimelineQuestion = {
  id: 1,
  question: "Do you have a timeline?",
  options: [
    {
      id: 0,
      value: "yes",
      isSelected: false,
      nextQuestion: 10,
    },
    {
      id: 1,
      value: "no",
      isSelected: false,
      nextQuestion: 10,
    },
  ],
};

export const haveBudgetQuestion = {
  id: 2,
  question: "Do you have a budget?",
  options: [
    {
      id: 0,
      value: "yes",
      isSelected: false,
      nextQuestion: 3,
    },
    {
      id: 1,
      value: "no",
      isSelected: false,
      nextQuestion: 3,
    },
  ],
};

export const haveImagesQuestion = {
  id: 3,
  question: "Do you have images for your website?",
  options: [
    {
      id: 0,
      value: "yes",
      isSelected: false,
      nextQuestion: 4,
    },
    {
      id: 1,
      value: "no",
      isSelected: false,
      nextQuestion: 4,
    },
  ],
};

export const haveMarketingPlanQuestion = {
  id: 4,
  question: "Do you have a plan for how to use your website?",
  options: [
    {
      id: 0,
      value: "yes",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 1,
      value: "no",
      isSelected: false,
      nextQuestion: 8,
    },
  ],
};

export const howManyProductsQuestion = {
  id: 5,
  question: "How many products or services are you going to sell?",
  options: [
    {
      id: 0,
      value: "1 to 10",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 1,
      value: "11 to 50",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 2,
      value: "51 to 100",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 3,
      value: "Over 101 products",
      isSelected: false,
      nextQuestion: 0,
    },
  ],
};

export const salesCopyPurposeQuestion = {
  id: 7,
  question: "What is the sales copy for?",
  options: [
    {
      id: 0,
      value: "Website rewrite",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 1,
      value: "Emails",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 2,
      value: "E-comm product copy",
      isSelected: false,
      nextQuestion: 8,
    },
    {
      id: 3,
      value: "Sales page / landing page copy",
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

export const timelineQuestion = {
  id: 10,
  question: "When would you like to have your website live?",
  options: [
    {
      id: 0,
      value: "2 weeks",
      isSelected: false,
      nextQuestion: 2,
    },
    {
      id: 0,
      value: "3 weeks",
      isSelected: false,
      nextQuestion: 2,
    },
    {
      id: 0,
      value: "No more than 4 weeks",
      isSelected: false,
      nextQuestion: 2,
    },
    {
      id: 0,
      value: "I need it NOW!",
      isSelected: false,
      nextQuestion: 2,
    },
  ],
};

export const primaryInterestQuestion = {
  id: 11,
  question: "What are you primarily interested in?",
  options: [
    {
      id: 0,
      value: "website",
      isSelected: false,
      nextQuestion: 0,
    },
    {
      id: 1,
      value: "e-commerce website",
      isSelected: false,
      nextQuestion: 5,
    },
    {
      id: 2,
      value: "landing pages",
      isSelected: false,
      nextQuestion: 9,
    },
    {
      id: 3,
      value: "copywriting",
      isSelected: false,
      nextQuestion: 9,
    },
    {
      id: 4,
      value: "seo and marketing",
      isSelected: false,
      nextQuestion: 9,
    },
  ],
};
