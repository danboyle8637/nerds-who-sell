import { gsap, Linear, Back, Power3 } from "gsap";

export const phoneRingAni = (phone: HTMLDivElement) => {
  const tl = gsap.timeline({ repeat: 8 });

  tl.to(phone, {
    duration: 0.04,
    transformOrigin: "50% 50%",
    rotate: 4,
    ease: Linear.easeNone,
  }).to(phone, {
    duration: 0.04,
    transformOrigin: "50% 50%",
    rotate: -4,
    ease: Linear.easeNone,
  });
};

export const getLeadsAni = (
  lead1: HTMLDivElement,
  lead2: HTMLDivElement,
  lead3: HTMLDivElement
) => {
  const tl = gsap.timeline();

  tl.to(lead1, {
    duration: 0.5,
    x: 40,
    autoAlpha: 1,
    ease: Back.easeOut,
  })
    .to(
      lead2,
      {
        duration: 0.5,
        x: 60,
        autoAlpha: 1,
        ease: Back.easeOut,
      },
      "-=0.1.5"
    )
    .to(
      lead3,
      {
        duration: 0.5,
        x: 80,
        autoAlpha: 1,
        ease: Back.easeOut,
      },
      "-=0.15"
    );
};

export const makeSalesAni = (
  dollar1: HTMLDivElement,
  dollar2: HTMLDivElement
) => {
  const tl = gsap.timeline();

  tl.to(dollar1, {
    duration: 2,
    y: -50,
    autoAlpha: 1,
    scale: 1,
    ease: Power3.easeOut,
  }).to(
    dollar2,
    {
      duration: 2,
      y: -80,
      autoAlpha: 1,
      scale: 1,
      ease: Power3.easeOut,
    },
    "-=1.4"
  );
};

export const serviceImageAni = (image: HTMLDivElement) => {};
