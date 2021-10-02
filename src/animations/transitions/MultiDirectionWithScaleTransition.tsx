import { Transition } from "react-transition-group";
import { gsap, Power3 } from "gsap";

export type WorkoutTrackingViewDirection =
  | "to_left"
  | "to_right"
  | "to_bottom"
  | "to_top"
  | "from_left"
  | "from_right"
  | "from_bottom"
  | "from_top";

interface ViewTransitionProps {
  isActive: boolean;
  enterDirection: WorkoutTrackingViewDirection;
  exitDirection: WorkoutTrackingViewDirection;
}

export const MultiDirectionWithScaleTransition: React.FC<ViewTransitionProps> =
  ({ isActive, enterDirection, exitDirection, children }) => {
    const duration = 0.4;
    const delay = 0.3;

    const viewEnterFromLeft = (node: HTMLElement): void => {
      if (isActive) {
        gsap.fromTo(
          node,
          {
            x: "-100%",
            scale: 0.7,
            autoAlpha: 0,
            transformOrigin: "50% 50%",
          },
          {
            duration: duration,
            x: 0,
            scale: 1,
            autoAlpha: 1,
            ease: Power3.easeOut,
            delay: delay,
          }
        );
      }
    };

    const viewEnterFromRight = (node: HTMLElement): void => {
      if (isActive) {
        gsap.fromTo(
          node,
          {
            x: "100%",
            scale: 0.7,
            autoAlpha: 0,
            transformOrigin: "50% 50%",
          },
          {
            duration: duration,
            x: 0,
            scale: 1,
            autoAlpha: 1,
            ease: Power3.easeOut,
            delay: delay,
          }
        );
      }
    };

    const viewEnterFromTop = (node: HTMLElement) => {
      if (isActive) {
        gsap.fromTo(
          node,
          {
            y: "-100%",
            scale: 0.7,
            autoAlpha: 0,
            transformOrigin: "50% 50%",
          },
          {
            duration: duration,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            ease: Power3.easeOut,
            delay: delay,
          }
        );
      }
    };

    const viewEnterFromBottom = (node: HTMLElement) => {
      if (isActive) {
        gsap.fromTo(
          node,
          {
            y: "100%",
            scale: 0.7,
            autoAlpha: 0,
            transformOrigin: "50% 50%",
          },
          {
            duration: duration,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            ease: Power3.easeOut,
            delay: delay,
          }
        );
      }
    };

    const viewExitToBottom = (node: HTMLElement) => {
      if (!isActive) {
        gsap.to(node, {
          duration: duration,
          y: "100%",
          scale: 0.7,
          autoAlpha: 0,
          ease: Power3.easeIn,
          transformOrigin: "50% 50%",
        });
      }
    };

    const viewExitToTop = (node: HTMLElement) => {
      if (!isActive) {
        gsap.to(node, {
          duration: duration,
          y: "-100%",
          scale: 0.7,
          autoAlpha: 0,
          ease: Power3.easeIn,
          transformOrigin: "50% 50%",
        });
      }
    };

    const viewExitToRight = (node: HTMLElement): void => {
      if (!isActive) {
        gsap.to(node, {
          duration: duration,
          x: "100%",
          autoAlpha: 0,
          ease: Power3.easeIn,
          transformOrigin: "50% 50%",
        });
      }
    };

    const viewExitToLeft = (node: HTMLElement): void => {
      if (!isActive) {
        gsap.to(node, {
          duration: duration,
          x: "-100%",
          autoAlpha: 0,
          ease: Power3.easeIn,
          transformOrigin: "50% 50%",
        });
      }
    };

    const viewEnterAnimationFunc =
      enterDirection === "from_bottom"
        ? viewEnterFromBottom
        : enterDirection === "from_left"
        ? viewEnterFromLeft
        : enterDirection === "from_right"
        ? viewEnterFromRight
        : viewEnterFromTop;

    const viewExitAnimationFunc =
      exitDirection === "to_bottom"
        ? viewExitToBottom
        : exitDirection === "to_left"
        ? viewExitToLeft
        : exitDirection === "to_right"
        ? viewExitToRight
        : viewExitToTop;

    return (
      <Transition
        in={isActive}
        timeout={1000}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={(node: HTMLElement) => viewEnterAnimationFunc(node)}
        onExit={(node: HTMLElement) => viewExitAnimationFunc(node)}
      >
        {children}
      </Transition>
    );
  };
