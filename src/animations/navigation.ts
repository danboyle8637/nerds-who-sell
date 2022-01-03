import { gsap, Power2 } from "gsap";
import { randomValue, randomNegOne } from "../utils/utilityFunctions";
import { NavColor } from "../types/components";

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

export const navPixelsOpenAni = (pixel: HTMLDivElement) => {
  const translateX = [10, 52, 92, 132, 172, 212, 252, 320];
  const translateY = [40, 140, 240, 340, 440, 540, 640, 740];
  const scalePixel = [8, 11, 14, 16, 20, 19, 24];
  const opacity = [0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0.05];
  const purpleArray = [
    "hsl(246, 59%, 62%)",
    "hsl(259, 78%, 70%)",
    "hsl(256, 39%, 62%)",
    "hsl(227, 39%, 62%)",
  ];

  const matrixArray = ["#00FF2C", "#53FF74", "#9EF9AF", "#277240"];

  const blueArray = [];

  const colorArray = ["#00FF2C", "#53FF74", "#9EF9AF", "#277240"];

  const tX = translateX[randomValue(8)];
  const tY = translateY[randomValue(8)];
  const s = scalePixel[randomValue(8)];
  const o = opacity[randomValue(8)];
  const bg = colorArray[randomValue(4)];

  const tl = gsap.timeline();

  tl.to(pixel, {
    duration: 0.3,
    x: tX * -1,
    y: tY,
    autoAlpha: o,
    scale: s,
    backgroundColor: bg,
    ease: Power2.easeOut,
  });
};

export const navPixelCloseAni = (pixel: HTMLDivElement, kill: boolean) => {
  const delayArray = [0.4, 0.42, 0.44, 0.46, 0.48, 0.47, 0.49, 0.5];

  const delay = delayArray[randomValue(8)];

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
    delay: delay,
  });
};

export const closeIconEnterAni = (icon: HTMLButtonElement) => {
  gsap.fromTo(
    icon,
    {
      scale: 0,
      autoAlpha: 0,
    },
    {
      duration: 0.3,
      transformOrigin: "100% 0%",
      scale: 1,
      autoAlpha: 1,
      delay: 0.15,
    }
  );
};

export const closeIconExitAni = (icon: HTMLButtonElement) => {
  gsap.to(icon, {
    duration: 0.3,
    transformOrigin: "100% 0%",
    scale: 0,
    autoAlpha: 0,
    delay: 0.1,
  });
};

export const navItemsEnterAni = (navItems: HTMLDivElement[]) => {
  gsap.fromTo(
    navItems,
    {
      scale: 0,
      autoAlpha: 0,
    },
    {
      duration: 0.3,
      transformOrigin: "50% 0%",
      scale: 1,
      autoAlpha: 1,
      ease: Power2.easeOut,
      stagger: 0.05,
      delay: 0.3,
    }
  );
};

export const footerNavPixelSpreadAni = (
  pixel: HTMLDivElement,
  color: NavColor,
  kill: boolean
) => {
  const translateX = [5, 10, 20, 30, 40, 50, 60, 70];
  const translateY = [5, 8, 11, 13, 15, 17, 19, 21];
  const scalePixel = [1.05, 1.08, 1.1, 1.15, 1.18, 1.2];
  const opacity = [0.7, 0.6, 0.5, 0.3, 0.2, 0.1, 0.05];
  const blueArray = [
    "hsl(176, 92%, 53%)",
    "hsl(176, 92%, 73%)",
    "hsl(176, 92%, 83%)",
    "hsl(176, 92%, 93%)",
  ];
  // const purpleArray = [
  //   "hsl(246, 59%, 62%)",
  //   "hsl(246, 59%, 72%)",
  //   "hsl(246, 59%, 82%)",
  //   "hsl(246, 59%, 92%)",
  // ];

  const purpleArray = ["#00FF2C", "#53FF74", "#9EF9AF", "#277240"];

  const tX = translateX[randomValue(translateX.length)];
  const tY = translateY[randomValue(translateY.length)];
  const s = scalePixel[randomValue(scalePixel.length)];
  const o = opacity[randomValue(opacity.length)];
  const bg =
    color === "blue"
      ? blueArray[randomValue(blueArray.length)]
      : purpleArray[randomValue(purpleArray.length)];

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

export const footerNavPixelsReturnAni = (
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
