import { BaseSVG } from "../../../types/components";

export const Letter3: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M11.954 18.419h372.909c13.23 0 19.845 2.615 19.845 7.846 0 1.23-.307 2.769-.923 4.615-2.154 6.153-4.153 15.076-6 26.768-5.845 36.614-24.768 74.305-56.767 113.073-31.998 38.767-73.843 75.227-125.533 109.38 27.691 28.614 52.459 60.921 74.305 96.919l-49.845 21.23c-42.46-68.92-99.073-128.61-169.839-179.07l36.46-27.229c21.23 14.461 43.998 31.691 68.305 51.69 52.921-32.307 91.919-64.69 116.995-97.15 25.076-32.461 37.614-54.383 37.614-65.767 0-8-7.999-12-23.999-12H11.954V18.419Z"
        fillRule="nonzero"
        id="matrix-code-container1"
      />
    </svg>
  );
};
