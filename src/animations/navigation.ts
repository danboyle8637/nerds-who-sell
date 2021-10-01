import { gsap, Power2 } from "gsap";

export const navDrawerOpenAni = (drawer: HTMLElement) => {
  const tl = gsap.timeline();

  tl.to(drawer, {
    duration: 0.4,
    x: 0,
    ease: Power2.easeInOut,
  });
};

export const navDrawerClosedAni = (drawer: HTMLElement) => {
  const tl = gsap.timeline();

  tl.to(drawer, {
    duration: 0.4,
    x: "108%",
    ease: Power2.easeInOut,
  });
};
