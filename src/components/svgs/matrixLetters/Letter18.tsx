import { BaseSVG } from "../../../types/components";

export const Letter18: React.FC<BaseSVG> = ({ width, height, className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path id="matrix-code-container" fill="none" d="M0 0h100v100H0z" />
      <path
        style={{ fill: "var(--letter-fill, var(--matrix-green))" }}
        d="M97.02 91.814c0 1.255-.185 2.012-.554 2.271-.369.258-1.144.387-2.326.387H3.091V82.62h75.431c1.699 0 2.862-.258 3.489-.775.628-.517.942-1.735.942-3.655V21.478c0-1.551-.296-2.585-.886-3.102-.591-.516-1.625-.775-3.102-.775H2.98V5.528h91.825c.812 0 1.384.129 1.716.387.333.259.499.757.499 1.496v84.403Z"
        fillRule="nonzero"
        id="matrix-code-container1"
      />
    </svg>
  );
};
