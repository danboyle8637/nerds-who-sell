export interface PostSlug {
  slug: string;
}

export interface PostSlugs {
  params: {
    slug: string;
  };
}

type FormType = "quiz" | "contact";

export interface QuizFormReqBody {
  formType: FormType;
  date: string;
  firstName: string;
  emailAddress: string;
  primaryGoal: string;
  haveWebsite: string;
  websiteUrl: string;
  haveTimeline: string;
  idealTimeline: string;
  haveBudget: string;
  haveMarketingPlan: string;
  numberOfProducts: string;
  copyHelp: string;
  moreDetails: string;
}

export interface ContactFormReqBody {
  formType: FormType;
  firstName: string;
  emailAddress: string;
  primaryGoal: string;
  moreDetails: string;
}
