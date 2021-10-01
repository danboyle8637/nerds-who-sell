import React from "react";
import { BaseSVG } from "../../types/components";

export const LaptopOutline: React.FC<BaseSVG> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 575 335"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeMiterlimit="1.5"
    >
      <path id="laptop-container" fill="none" d="M0 0h574.993v334.354H0z" />
      <clipPath id="body_clip1">
        <path d="M0 0h574.993v334.354H0z" />
      </clipPath>
      <g clipPath="url(#body_clip1)">
        <path
          style={{ fill: "var(--laptop-color, hsl(225, 32%, 16%))" }}
          id="body"
          d="M499.444 331.746h-424.3v-.027c-4.951-.138-26.935-.795-38.362-1.932-20.905-2.079-33.356-6.924-33.356-6.924v-10.409H571.3v10.409s-12.452 4.845-33.356 6.924c-11.537 1.147-33.835 1.807-38.5 1.935v.024Z"
        />
        <g
          id="screen"
          style={{ stroke: "var(--laptop-color, hsl(225, 32%, 16%))" }}
        >
          <path
            d="M510.205 20.406c0-5.523-4.477-10-10-10H73.492c-5.523 0-10 4.477-10 10V306.46h446.713V20.406Z"
            fill="none"
            strokeWidth="12.5"
          />
          <path
            style={{ fill: "var(--laptop-color, hsl(225, 32%, 16%))" }}
            d="M68.111 10.406H504.91v13.813H68.111z"
          />
          <path
            style={{ fill: "var(--laptop-color, hsl(225, 32%, 16%))" }}
            d="M68.963 295.519h436.799v10.941H68.963z"
          />
        </g>
      </g>
    </svg>
  );
};
