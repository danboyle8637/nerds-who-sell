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
  haveWebsite: boolean;
  websiteUrl: string;
  haveTimeline: boolean;
  idealTimeline: string;
  haveBudget: boolean;
  haveMarketingPlan: boolean;
  numberOfProducts: string;
  copyHelp: string;
  moreDetails: string;
}

export interface ContactFormReqBody {
  formType: FormType;
  date: string;
  firstName: string;
  emailAddress: string;
  primaryGoal: string;
  moreDetails: string;
}
