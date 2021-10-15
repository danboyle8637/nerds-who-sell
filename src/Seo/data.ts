interface PageData {
  title: string;
  description: string;
  socialHeadline?: string;
  socialDescription?: string;
  socialSlug?: string;
  socialImage?: string;
}

interface Pages {
  home: PageData;
  about: PageData;
  portfolio: PageData;
  contact: PageData;
  quizFormThankYou: PageData;
  contactThankYou: PageData;
  privacyPolicy: PageData;
  blog: PageData;
}

export const seo: Pages = {
  home: {
    title: "Web Design Charleston - Design Development Fast Websites",
    description:
      "Work with a nerd and get an affordable - blazing fast - website that sells. Nerds can develop a site for speed and make the words on it count. Let's set up a talk.",
    socialHeadline: "Nerds Who Sell Web Design and Development",
    socialDescription:
      "We're a web development and sales team that help businesses and app creators turn there ideas into sales machines online. If you need to make your web pressence stand out... let's talk today.",
    socialSlug: "/",
    socialImage:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/seo/home-social-1200x630_Fgivfp6ef.jpg",
  },
  about: {
    title: "Charleston Web Design, Development, and Copywriting",
    description:
      "We're nerds who code and sell. That means we build you a custom, lean and fast website that actually talks to your customers. Find out how we do it.",
    socialHeadline: "Learn More About Nerds Who Sell",
    socialDescription:
      "We focus on building blazing fast websites for businesses and coaches. But we also specialize in copywriting so the words on your site make a difference. Let's chat and see if we should work together.",
    socialSlug: "/about",
    socialImage:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/seo/about-social-1200x630_Z7VJDUhn73F.jpg",
  },
  portfolio: {
    title: "Web Design and Copywriting Portfolio - We Actually Do This",
    description:
      "See some of our projects and learn what the challenges were and how we solved them. It might just help your project become more successful!",
    socialHeadline: "See Some Of Our Personal And Client Projects",
    socialDescription:
      "We not only build for clients but we build online assets for ourselves too. See the range or projects and experience we offer. It might just be the type of expertise you want on your team.",
    socialSlug: "/portfolio",
    socialImage:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/seo/blog-social-1200x630_OiKvviTVn.jpg",
  },
  contact: {
    title: "Contact a Nerd Who Sells Today",
    description:
      "You can contact us today and share the details about your project. But you better hurry... we're busy nerds and our schedule is full.",
  },
  quizFormThankYou: {
    title: "Thank You for Taking The Project Quiz",
    description:
      "Awesome you took the project quiz. I will look over what you said and contact you to set up a date. Who knows... maybe we can be a great fit.",
  },
  contactThankYou: {
    title: "Thank You For Contacting The Nerds",
    description:
      "Sweet. You contacted the nerds. You can expect a reply from us quickly. Like in a day or less.",
  },
  privacyPolicy: {
    title: "Nerdy Privacy Policy",
    description: "We protect your information and ",
  },
  blog: {
    title: "Learn About Web Design, Coding, Marketing, And More Here",
    description:
      "Our blog is more than just web design. It's app design and development. You'll learn about marketing and selling too. There's a lot to cover to let's go!",
    socialHeadline: "The Nerd Who Sells Blog... Let's Learn",
    socialDescription:
      "You'll learn all the lessons we have over the years of building businesses. From our failures to the wins... there's a lot to cover. So let's get going.",
    socialSlug: "/blog",
    socialImage:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/seo/blog-social-1200x630_OiKvviTVn.jpg",
  },
};
