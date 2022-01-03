import { BaseSVG } from "../../../types/components";

export const Letter13: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="m411.401 384.174-70.151 21.692c-42.152-55.998-82.92-97.843-122.303-125.534-47.075 48.614-101.842 90.151-164.301 124.611L5.263 365.252c67.382-36.614 119.38-72.228 155.994-106.842 36.614-34.614 64.152-70.844 82.612-108.688 18.461-37.845 27.692-62.306 27.692-73.382 0-5.231-1.846-8.923-5.539-11.077-3.692-2.153-10.615-3.23-20.768-3.23H31.57V10.804h285.681c10.461 0 17.153 1.308 20.076 3.923 2.923 2.615 4.385 7.153 4.385 13.615 0 18.461-6.231 46.998-18.692 85.612s-35.306 80.381-68.536 125.303c65.844 44.306 118.15 92.612 156.917 144.917Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
