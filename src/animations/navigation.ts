import { gsap, Power2 } from "gsap";
import { randomValue } from "../utils/utilityFunctions";

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
  const scalePixel = [8, 11, 14, 16, 20, 26, 34];
  const opacity = [0.9, 0.7, 0.5, 0.3, 0.2, 0.1, 0.05];
  const colorArray = [
    "hsl(246, 59%, 62%)",
    "hsl(259, 78%, 70%)",
    "hsl(256, 39%, 62%)",
    "hsl(227, 39%, 62%)",
  ];

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
    stagger: 0.1,
  }).to(
    pixel,
    {
      duration: 0.3,
      x: tX * -1,
      y: tY,
      autoAlpha: 0,
      scale: s * 2,
      stagger: 0.1,
    },
    "-=0.05"
  );
};

export const navPixelCloseAni = (pixel: HTMLDivElement) => {};
