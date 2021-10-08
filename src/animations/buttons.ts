import { gsap, Linear, Power3 } from "gsap";

export const buttonBoostersOnAni = (booster: HTMLDivElement) => {
  const tl = gsap.timeline();

  tl.to(booster, {
    duration: 0.2,
    y: 18,
    autoAlpha: 1,
    ease: Linear.easeNone,
  })
    .add("booster")
    .to(booster, {
      duration: 0.2,
      y: 14,
      ease: Linear.easeNone,
    })
    .to(booster, {
      duration: 0.2,
      y: 18,
      ease: Linear.easeNone,
      onComplete: () => {
        tl.seek("booster");
      },
    });
};

export const buttonBoostersOffAni = (booster: HTMLDivElement) => {
  gsap.to(booster, {
    duration: 0.2,
    y: 0,
    autoAlpha: 0,
    ease: Linear.easeNone,
  });
};

export const quizCloseButtonEnterAni = (button: HTMLButtonElement) => {
  gsap.fromTo(
    button,
    {
      x: "100%",
      autoAlpha: 0,
    },
    {
      duration: 0.2,
      x: 0,
      autoAlpha: 1,
      ease: Power3.easeOut,
      delay: 0.4,
    }
  );
};
