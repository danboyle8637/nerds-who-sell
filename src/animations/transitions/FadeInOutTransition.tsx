import { Transition } from "react-transition-group";
import { gsap, Power3 } from "gsap";

interface TransitionProps {
  isOpen: boolean;
}

export const FadeInOutTransition: React.FC<TransitionProps> = ({
  isOpen,
  children,
}) => {
  const nodeOpen = (node: HTMLElement): void => {
    if (isOpen) {
      gsap.fromTo(
        node,
        {
          autoAlpha: 0,
        },
        {
          duration: 0.4,
          autoAlpha: 1,
          ease: Power3.easeIn,
        }
      );
    }
  };

  const nodeClosed = (node: HTMLElement): void => {
    if (!isOpen) {
      gsap.to(node, {
        duration: 0.4,
        autoAlpha: 0,
        ease: Power3.easeOut,
      });
    }
  };

  return (
    <Transition
      in={isOpen}
      timeout={800}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => nodeOpen(node)}
      onExit={(node: HTMLElement) => nodeClosed(node)}
    >
      {children}
    </Transition>
  );
};
