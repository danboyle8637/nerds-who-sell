import { Transition } from "react-transition-group";
import { gsap } from "gsap";

interface QuizTransitionProps {
  isOpen: boolean;
}

export const QuizDrawerTransition: React.FC<QuizTransitionProps> = ({
  isOpen,
  children,
}) => {
  const menuEnter = (node: HTMLElement): void => {
    if (isOpen) {
      gsap.to(node, {
        autoAlpha: 1,
      });
    }
  };

  const menuExit = (node: HTMLElement): void => {
    if (!isOpen) {
      gsap.to(node, {
        autoAlpha: 1,
      });
    }
  };

  return (
    <Transition
      in={isOpen}
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => menuEnter(node)}
      onExit={(node: HTMLElement) => menuExit(node)}
    >
      {children}
    </Transition>
  );
};
