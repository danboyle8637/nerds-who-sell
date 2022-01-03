import { BaseSVG } from "../../../types/components";

export const Letter16: React.FC<BaseSVG> = ({ width, height, className }) => {
  return (
    <svg
      viewBox="0 0 417 417"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path
        id="matrix-code-container"
        fill="none"
        d="M0 0h416.667v416.667H0z"
      />
      <path
        style={{ fill: "var(--letter-fill, var(--matrix-green))" }}
        d="M413.246 394.79H3.416v-48.922h173.07V70.34H36.184V21.881h341.525V70.34h-142.61v275.528h178.147v48.922Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
