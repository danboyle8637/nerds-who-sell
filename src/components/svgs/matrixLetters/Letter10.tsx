import { BaseSVG } from "../../../types/components";

export const Letter10: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M309.58 8.266h45.69c10.769 0 15.692 2.077 14.769 6.231-.923 4.153-1.385 10.23-1.385 18.23v126.918c0 49.229-4.538 85.458-13.615 108.688-9.076 23.23-23.537 45.075-43.383 65.536-19.845 20.461-43.844 36.845-71.997 49.152-28.153 12.307-60.844 20.769-98.073 25.384l-35.537-49.383c26.768-1.538 52.536-6.384 77.305-14.538 24.768-8.153 46.459-19.23 65.074-33.229 18.615-14 32.23-29.538 40.845-46.614 8.615-17.076 14.153-32.614 16.614-46.614 2.462-13.999 3.693-33.46 3.693-58.382V8.266ZM46.513 11.035h45.69c12.307 0 17.769 2 16.384 6-1.384 4-2.077 10.615-2.077 19.845v161.994l.462 27.692H46.513V11.035Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
