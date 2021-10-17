import { Transition } from "react-transition-group";
import { gsap, Back, Linear } from "gsap";

interface TransitionProps {
  isActive: boolean;
}

export const NotificationTransition: React.FC<TransitionProps> = ({
  isActive,
  children,
}) => {
  const notificationEnter = (node: HTMLElement): void => {
    if (isActive) {
      gsap.fromTo(
        node,
        {
          y: "200%",
          autoAlpha: 0,
        },
        {
          duration: 0.2,
          y: 0,
          autoAlpha: 1,
          ease: Back.easeIn,
        }
      );
    }
  };

  const notificationExit = (node: HTMLElement): void => {
    if (!isActive) {
      gsap.to(node, {
        duration: 0.2,
        y: "200%",
        autoAlpha: 0,
        ease: Linear.easeNone,
      });
    }
  };

  return (
    <Transition
      in={isActive}
      timeout={800}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => notificationEnter(node)}
      onExit={(node: HTMLElement) => notificationExit(node)}
    >
      {children}
    </Transition>
  );
};
