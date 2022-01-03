import { BaseSVG } from "../../../types/components";

export const Letter2: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M405.818 169.013H253.906c-.596 62.552-14.819 111.551-42.669 146.998-27.851 35.446-70.818 65.828-128.902 91.147l-47.361-37.531c31.574-11.915 61.361-27.553 89.36-46.914 27.999-19.362 47.212-39.989 57.637-61.882 10.426-21.893 15.638-52.499 15.638-91.818H10.847v-47.807h186.762V9.506h56.297v111.7h151.912v47.807Z"
        fillRule="nonzero"
        id="matrix-code-container1"
      />
    </svg>
  );
};
