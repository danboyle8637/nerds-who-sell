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

export const codingLoaderAni = (codeLines: HTMLDivElement[], kill: boolean) => {
  const tl = gsap.timeline({ repeat: -1 });

  if (kill) {
    tl.kill();
  }

  tl.fromTo(
    codeLines,
    {
      x: "-100%",
      autoAlpha: 0,
    },
    {
      duration: 0.2,
      x: 12,
      autoAlpha: 1,
      ease: Linear.easeNone,
      stagger: 0.2,
    }
  ).to(codeLines, {
    duration: 0.2,
    y: 4,
    autoAlpha: 0,
    stagger: 0.2,
    ease: Linear.easeNone,
  });
};

export const dollarBillCellAni = (dollarBill: HTMLDivElement) => {
  gsap.to(dollarBill, {
    duration: 1.4,
    y: 0,
    scale: 1,
    ease: Power3.easeOut,
  });
};

export const dollarBillLaptopAni = (dollarBill: HTMLDivElement) => {
  gsap.to(dollarBill, {
    duration: 1.4,
    y: 0,
    rotateY: 180,
    scale: 1,
    ease: Power3.easeOut,
    delay: 0.6,
  });
};

export const mainLogoScreenGlow = (glow: HTMLDivElement) => {
  gsap.fromTo(
    glow,
    {
      scale: 0.8,
      autoAlpha: 0.7,
    },
    {
      duration: 1,
      scale: 1.1,
      autoAlpha: 1,
      ease: Power3.easeInOut,
      yoyo: true,
      repeat: -1,
    }
  );
};

export const serviceCardImageShadowHover = (shadow: HTMLDivElement) => {
  gsap.fromTo(
    shadow,
    {
      y: 0,
      scale: 0.2,
      autoAlpha: 0,
    },
    {
      duration: 0.2,
      y: 30,
      scale: 1,
      autoAlpha: 1,
      ease: Linear.easeNone,
    }
  );
};

export const serviceCardImageShadowNotHover = (shadow: HTMLDivElement) => {
  gsap.to(shadow, {
    duration: 0.2,
    y: 0,
    scale: 0.2,
    autoAlpha: 0,
  });
};
