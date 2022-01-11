import { BaseSVG } from "../../../types/components";

export const Letter1: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M46.569 54.878h316.142c4.922 0 7.384 2.616 7.384 7.846 0 29.23-5 55.844-14.999 79.843-10 23.999-26.538 48.152-49.614 72.459l-47.075-17.538c23.384-16.922 39.306-33.922 47.767-50.998 8.462-17.076 12.692-29.537 12.692-37.383 0-7.846-4.307-11.769-12.922-11.769H46.569v-42.46Zm183.224 80.305c1.538 71.074-10.385 122.303-35.768 153.686-25.384 31.384-64.382 55.691-116.996 72.921l-28.614-32.307c51.075-17.23 86.535-37.075 106.38-59.536 19.846-22.461 29.769-57.844 29.769-106.15 0-8.615-.154-18.922-.462-30.922l45.691 2.308Z"
        fillRule="nonzero"
        id="matrix-code-container1"
      />
    </svg>
  );
};
