import { BaseSVG } from "../../../types/components";

export const Letter17: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M404.016 393.367H12.646v-53.075H168.64V86.456H41.261V34.765h332.295c4.307 0 7.076 1.077 8.307 3.231 1.231 2.154 1.846 5.846 1.846 11.077 0 59.074-13.845 111.688-41.537 157.84l-46.613-21.692c9.845-19.076 16.538-36.614 20.076-52.613 3.538-15.999 5.307-26.691 5.307-32.076 0-5.384-1.23-9.076-3.692-11.076-2.461-2-7.23-3-14.307-3h-76.612v253.836h177.685v53.075Z"
        fillRule="nonzero"
        id="matrix-code-container1"
      />
    </svg>
  );
};
