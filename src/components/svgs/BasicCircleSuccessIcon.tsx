import { BaseSVG } from "../../types/components";

export const BasicCircleSuccessIcon: React.FC<BaseSVG> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 186 186"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
    >
      <path
        id="checkmark-icon-container"
        fill="none"
        d="M0 0h185.293v185.717H0z"
      />
      <circle
        id="circle-background"
        cx="92.683"
        cy="92.938"
        r="90.618"
        fill="#fff"
      />
      <path
        id="checkmark"
        d="M43.545 96.842l30.156 30.156 68.12-68.12"
        fill="none"
        stroke="hsl(132, 54%, 47%)"
        stroke-width="27.08"
      />
    </svg>
  );
};
