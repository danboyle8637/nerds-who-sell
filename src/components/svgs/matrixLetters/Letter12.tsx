import { BaseSVG } from "../../../types/components";

export const Letter12: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M238.526 74.371h155.656c5.666 0 8.499 2.982 8.499 8.946l-.895 48.307c-.298 10.735-.447 26.539-.447 47.412 0 56.955-16.699 106.604-50.096 148.947-33.398 42.343-94.527 69.479-183.388 81.406l-35.336-42.045c39.063-4.472 77.008-14.462 113.835-29.968 36.826-15.506 62.694-38.616 77.604-69.329 14.91-30.714 22.364-69.479 22.364-116.295 0-14.015-.894-22.588-2.683-25.719-1.789-3.131-6.56-4.697-14.313-4.697H87.79c-6.858 0-11.256.895-13.195 2.684-1.938 1.789-2.907 5.666-2.907 11.629v63.068h-57.7V80.186c0-2.982.373-4.697 1.118-5.144.746-.447 2.013-.671 3.802-.671h162.365V7.278h57.253v67.093Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
