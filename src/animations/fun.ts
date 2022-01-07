import { gsap, Linear, Back, Power3 } from "gsap";

import { randomValue } from "../utils/utilityFunctions";

export const matrixRain = (
  char: HTMLDivElement,
  delay: number,
  kill: boolean,
  runAction: boolean
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
      duration: 1,
      y: 200,
      autoAlpha: 1,
      fill: blueColorArray[value],
      ease: Linear.easeNone,
      delay: delay,
    })
    .to(char, {
      duration: 1,
      y: 400,
      autoAlpha: 0,
      ease: Linear.easeNone,
      onComplete: () => {
        tl.pause();
        tl.seek("beg");
      },
    });

  if (runAction) {
    tl.play();
  }
};
