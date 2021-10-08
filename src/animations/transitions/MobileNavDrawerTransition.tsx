import { Transition } from "react-transition-group";
import { gsap, Power3 } from "gsap";

interface MobileNavDrawerProps {
  isOpen: boolean;
}

export const MobileNavDrawerTransition: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  children,
}) => {
  const drawerEnter = (node: HTMLElement): void => {
    if (isOpen) {
      gsap.fromTo(
        node,
        {
          scale: 0,
          autoAlpha: 0,
        },
        {
          duration: 0.3,
          transformOrigin: "100% 0%",
          autoAlpha: 1,
          scale: 1,
          ease: Power3.easeOut,
          delay: 0.14,
        }
      );
    }
  };

  const drawerExit = (node: HTMLElement): void => {
    if (!isOpen) {
      gsap.to(node, {
        duration: 0.3,
        transformOrigin: "100% 0%",
        autoAlpha: 0,
        scale: 0,
        ease: Power3.easeIn,
        delay: 0.2,
      });
    }
  };

  return (
    <Transition
      in={isOpen}
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => drawerEnter(node)}
      onExit={(node: HTMLElement) => drawerExit(node)}
    >
      {children}
    </Transition>
  );
};
