import { Transition } from "react-transition-group";
import { gsap, Power3 } from "gsap";

interface FormMessageTransitionProps {
  isActive: boolean;
}

export const InputStatusTransition: React.FC<FormMessageTransitionProps> = ({
  isActive,
  children,
}) => {
  const messageEnter = (node: HTMLElement): void => {
    if (isActive) {
      gsap.fromTo(
        node,
        {
          scale: 0.9,
          autoAlpha: 0,
        },
        {
          duration: 0.4,
          scale: 1,
          autoAlpha: 1,
          ease: Power3.easeIn,
        }
      );
    }
  };

  const messageExit = (node: HTMLElement): void => {
    if (!isActive) {
      gsap.to(node, {
        duration: 0.4,
        scale: 0.9,
        autoAlpha: 0,
        ease: Power3.easeOut,
      });
    }
  };

  return (
    <Transition
      in={isActive}
      timeout={800}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => messageEnter(node)}
      onExit={(node: HTMLElement) => messageExit(node)}
    >
      {children}
    </Transition>
  );
};
