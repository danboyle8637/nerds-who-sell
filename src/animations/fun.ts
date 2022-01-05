import { gsap, Linear, Back, Power3 } from "gsap";

import { randomValue } from "../utils/utilityFunctions";

export const matrixRain = (
  char: HTMLDivElement,
  delay: number,
  kill: boolean,
  runAction: boolean,
  resetRain?: () => void
) => {
  const tl = gsap.timeline({ paused: true });

  if (kill) {
    tl.kill();
    return;
  }

  const value = randomValue(4);

  const blueColorArray = [
    "hsl(225, 32%, 24%)",
    "hsl(225, 32%, 32%)",
    "hsl(225, 32%, 36%)",
    "hsl(225, 32%, 39%)",
  ];

  tl.addLabel("beg")
    .to(char, {
      duration: 0.5,
      y: 60,
      autoAlpha: 1,
      fill: blueColorArray[value],
      ease: Linear.easeNone,
      delay: delay,
    })
    .to(char, {
      duration: 0.5,
      y: 140,
      autoAlpha: 0,
      ease: Linear.easeNone,
      onComplete: () => {
        if (resetRain) {
          resetRain();
        }
      },
    });

  if (runAction) {
    tl.play();
  } else {
    tl.stop();
    tl.seek("beg");
  }
};
