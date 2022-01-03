import { BaseSVG } from "../../../types/components";

export const Letter11: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="m411.4 65.953-19.845 8.307c-5.846-23.691-13.846-44.459-24-62.305l17.077-5.538C394.17 23.955 403.093 43.8 411.4 65.953Zm-45.691 10.154-22.153 7.384c-3.692-22.153-9.692-43.229-17.999-63.229l17.999-4.615c8.615 17.538 16 37.691 22.153 60.46ZM184.332 80.26l-24.922 42.46c-48.922-22.461-91.997-39.998-129.226-52.613l25.845-42.46C95.104 37.8 137.872 55.338 184.332 80.26Zm229.837 49.383c-13.23 31.383-33.076 63.305-59.536 95.766-26.461 32.46-53.306 58.997-80.535 79.612-27.23 20.614-57.691 39.614-91.382 56.998s-84.996 33.46-153.917 48.229L2.492 348.865c52.306-9.23 95.689-19.691 130.149-31.383 34.461-11.692 68.305-28.691 101.535-50.998 33.229-22.307 61.305-47.152 84.228-74.536 22.922-27.383 46.075-62.151 69.458-104.303l26.307 41.998Zm-276.451 56.305-9.23 46.153c-46.46-6.154-88.458-9.692-125.996-10.615l3.693-51.691c40.921 1.231 84.766 6.615 131.533 16.153Z"
        fillRule="nonzero"
      />
    </svg>
  );
};