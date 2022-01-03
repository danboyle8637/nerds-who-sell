import { BaseSVG } from "../../../types/components";

export const Letter8: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M362.176 12.732c12.088 9.524 27.655 19.78 46.703 30.769 1.831 1.099 2.747 2.198 2.747 3.297 0 1.099-1.099 2.472-3.297 4.121-2.197 1.648-6.776 5.586-13.736 11.813-45.421 42.124-93.039 79.486-142.856 112.087v229.119h-55.494V209.983c-43.589 24.176-93.406 47.619-149.449 70.329L5.036 235.258C149.357 185.075 268.404 110.9 362.176 12.732Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
