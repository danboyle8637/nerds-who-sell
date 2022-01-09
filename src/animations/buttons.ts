import { gsap, Power2, Power3 } from "gsap";

import { randomValue, randomNegOne } from "../utils/utilityFunctions";
import { SiteTheme } from "../types/components";

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

export const actionButtonPixelSpreadAni = (
  pixel: HTMLDivElement,
  color: SiteTheme,
  kill: boolean
) => {
  const translateX = [20, 40, 60, 100, 120, 140, 160, 180];
  const translateY = [50, 54, 62, 64, 66, 49, 72, 74];
  const scalePixel = [1.05, 1.08, 1.1, 1.15, 1.18, 1.2];
  const opacity = [0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0.05];
  const blueArray = [
    "hsl(176, 92%, 53%)",
    "hsl(176, 92%, 73%)",
    "hsl(176, 92%, 83%)",
    "hsl(176, 92%, 93%)",
  ];
  const purpleArray = [
    "hsl(246, 59%, 62%)",
    "hsl(246, 59%, 72%)",
    "hsl(246, 59%, 82%)",
    "hsl(246, 59%, 92%)",
  ];

  const greenArray = ["#00FF2C", "#53FF74", "#9EF9AF", "#277240"];

  const tX = translateX[randomValue(translateX.length)];
  const tY = translateY[randomValue(translateY.length)];
  const s = scalePixel[randomValue(scalePixel.length)];
  const o = opacity[randomValue(opacity.length)];
  const bg =
    color === "blue"
      ? blueArray[randomValue(blueArray.length)]
      : color == "purple"
      ? purpleArray[randomValue(purpleArray.length)]
      : greenArray[randomValue(greenArray.length)];

  const tl = gsap.timeline();

  if (kill) {
    tl.kill();
  }

  tl.to(pixel, {
    duration: 0.3,
    x: tX * randomNegOne(),
    y: tY * randomNegOne(),
    autoAlpha: o,
    scale: s,
    backgroundColor: bg,
    ease: Power2.easeOut,
  });
};

export const actionButtonPixelsReturnAni = (
  pixel: HTMLDivElement,
  kill: boolean
) => {
  const tl = gsap.timeline();

  if (kill) {
    tl.kill();
  }

  tl.to(pixel, {
    duration: 0.3,
    x: 0,
    y: 0,
    autoAlpha: 0,
    scale: 0,
    ease: Power2.easeIn,
  });
};
