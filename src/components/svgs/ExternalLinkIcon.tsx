import { BaseSVG } from "../../types/components";

export const ExternalLinkIcon: React.FC<BaseSVG> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      id="external-link-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 83.24 81.95"
    >
      <path
        style={{ stroke: "var(--link-icon-color, var(--accent-2) )" }}
        id="box"
        d="M69.95 45.72v14a16.26 16.26 0 01-16.22 16.25H22.21A16.26 16.26 0 016 59.73V28.21a16.26 16.26 0 0116.21-16.24h12.35"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
      <g
        style={{ stroke: "var(--link-icon-color, var(--accent-2) )" }}
        id="arrow"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="12"
      >
        <path id="link-out-base-line" d="M37.97 43.97L77.09 6.09" />
        <path id="top-arrow-head" d="M56.13 6h21" />
        <path id="bottom-arrow-head" d="M77.24 6v21" />
      </g>
    </svg>
  );
};
