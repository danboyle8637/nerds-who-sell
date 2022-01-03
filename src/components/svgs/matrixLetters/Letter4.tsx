import { BaseSVG } from "../../../types/components";

export const Letter4: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="M153.085 81.855H381.53c8.477 0 14.324.511 17.539 1.534 3.216 1.023 4.823 3.508 4.823 7.454 0 3.947-4.165 17.759-12.496 41.436-8.331 23.678-19.951 46.844-34.859 69.499-14.908 22.654-33.47 43.043-55.686 61.167l-46.479-34.201c21.047-15.785 38.952-33.909 53.714-54.371 14.762-20.462 22.143-33.324 22.143-38.586 0-2.631-1.535-4.458-4.604-5.481-3.07-1.023-10.305-1.534-21.705-1.534H160.1l38.148 267.469-54.371 8.77-38.148-276.239H12.773V81.855h86.379l-9.208-65.333 47.356-4.823c5.261-.293 7.892 1.023 7.892 3.946l-.438 5.262c0 2.338.584 7.308 1.754 14.908l6.577 46.04Z"
        fillRule="nonzero"
        id="matrix-code-container1"
      />
    </svg>
  );
};
