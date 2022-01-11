import { BaseSVG } from "../../../types/components";

export const Letter5: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M375.865 61.107H41.724V12.186h334.141v48.921ZM11.264 135.412h381.677c5.539 0 9 1.231 10.385 3.692 1.384 2.462 2.076 11.384 2.076 26.768s-2.153 31.153-6.461 47.306c-4.307 16.153-11.076 32.23-20.307 48.229-9.23 15.999-20.076 30.153-32.537 42.46-12.461 12.307-30.23 25.461-53.306 39.46-23.076 13.999-46.767 25.691-71.074 35.076-24.307 9.384-54.152 18.076-89.535 26.076l-41.537-44.306c64.921-11.385 115.765-27.615 152.533-48.691 36.768-21.076 62.305-43.383 76.612-66.92 14.307-23.538 21.461-39.46 21.461-47.768 0-4.307-1.846-7.307-5.538-8.999-3.692-1.693-10.154-2.539-19.384-2.539H11.264v-49.844Z"
        fillRule="nonzero"
        id="matrix-code-container1"
      />
    </svg>
  );
};
