import { BaseSVG } from "../../types/components";

export const VerticalIphoneOutline: React.FC<BaseSVG> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 341 686"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path id="Artboard1" fill="none" d="M0 0h340.96v685.873H0z" />
      <path
        style={{ fill: "var(--iphone-color, hsl(225, 32%, 16%))" }}
        id="phone-body"
        d="M294.677 680.577H46.531c-22.736 0-41.167-18.431-41.167-41.167V46.941c0-22.735 18.431-41.166 41.167-41.166h248.146c22.735 0 41.167 18.431 41.167 41.166V639.41c0 22.736-18.432 41.167-41.167 41.167Zm-6.268-655.77h-34.124c.011.263.02.525.02.791v1.879c0 11.426-9.262 20.689-20.688 20.689H108.024c-11.427 0-20.689-9.263-20.689-20.689v-1.879c0-.266.01-.528.02-.791H52.799c-16.045 0-29.051 13.007-29.051 29.051v577.77c0 16.045 13.006 29.051 29.051 29.051h235.61c16.044 0 29.051-13.006 29.051-29.051V53.858c0-16.044-13.007-29.051-29.051-29.051Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
