import { Transition } from "react-transition-group";
import { gsap, Back } from "gsap";

interface BackButtonTransitionProps {
  isActive: boolean;
}

export const BackButtonTransition: React.FC<BackButtonTransitionProps> = ({
  isActive,
  children,
}) => {
  const buttonEnter = (node: HTMLElement): void => {
    if (isActive) {
      gsap.fromTo(
        node,
        {
          x: "-100%",
          autoAlpha: 0,
        },
        {
          duration: 0.4,
          x: 0,
          autoAlpha: 1,
          ease: Back.easeIn,
        }
      );
    }
  };

  const buttonExit = (node: HTMLElement): void => {
    if (!isActive) {
      gsap.to(node, {
        duration: 0.4,
        x: "-100%",
        autoAlpha: 0,
        ease: Back.easeOut,
      });
    }
  };

  return (
    <Transition
      in={isActive}
      timeout={800}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => buttonEnter(node)}
      onExit={(node: HTMLElement) => buttonExit(node)}
    >
      {children}
    </Transition>
  );
};
