import { BaseSVG } from "../../../types/components";

export const Letter7: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="m405.244 85.484-18.9 7.912c-5.567-22.563-13.186-42.342-22.855-59.337l16.262-5.275c9.084 16.703 17.582 35.603 25.493 56.7Zm-43.514 9.67-21.097 7.032c-3.516-21.097-9.23-41.169-17.142-60.216l17.142-4.395c8.204 16.702 15.237 35.895 21.097 57.579Zm46.151 281.301-56.26 11.428c-21.39-92.302-59.19-192.516-113.399-300.641l45.711-13.186c53.037 100.214 94.353 201.013 123.948 302.399ZM163.94 82.847c-12.893 75.893-26.591 134.717-41.096 176.473-14.505 41.755-35.968 84.024-64.392 126.805L8.785 354.039c28.423-33.698 50.473-71.131 66.15-112.301 15.677-41.169 28.643-96.038 38.899-164.605l50.106 5.714Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
