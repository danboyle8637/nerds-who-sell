import { gsap, Power3, Back } from "gsap";

export const moveLabelAboveInputAni = (
  label: HTMLLabelElement,
  reverse: boolean
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    label,
    {
      x: 20,
      y: "100%",
      fontSize: "2rem",
      fontWeight: 700,
    },
    {
      duration: 0.2,
      x: "20%",
      y: "-140%",
      fontSize: "1.4rem",
      fontWeight: 500,
      ease: Power3.easeOut,
      reversed: reverse,
    }
  );
};

export const moveLabelAboveTextareaAni = (
  label: HTMLLabelElement,
  reverse: boolean
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    label,
    {
      x: 20,
      y: "100%",
      fontSize: "2rem",
      fontWeight: 700,
    },
    {
      duration: 0.2,
      x: "20%",
      y: "-140%",
      fontSize: "1.4rem",
      fontWeight: 500,
      ease: Power3.easeOut,
      reversed: reverse,
    }
  );
};

export const basicRadioIsChecked = (dot: HTMLDivElement) => {
  gsap.to(dot, { duration: 0.2, scale: 1, autoAlpha: 1, ease: Back.easeIn });
};

export const basicRadioIsNotChecked = (dot: HTMLDivElement) => {
  gsap.to(dot, { duration: 0.2, scale: 0, autoAlpha: 0, ease: Power3.easeIn });
};
