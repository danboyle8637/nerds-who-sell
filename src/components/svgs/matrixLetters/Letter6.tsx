import { BaseSVG } from "../../../types/components";

export const Letter6: React.FC<BaseSVG> = ({ width, height, className }) => {
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
        d="m408.164 65.266-18.147 7.596c-5.345-21.664-12.661-40.655-21.945-56.973l15.615-5.064c8.722 16.037 16.881 34.184 24.477 54.441Zm-30.808 10.972-20.257 6.753c-3.376-20.257-8.862-39.53-16.459-57.818l16.459-4.22c7.878 16.037 14.63 34.466 20.257 55.285Zm21.102 94.112h-70.056c-.282 41.077-3.236 72.237-8.863 93.479-5.627 21.242-15.474 40.725-29.542 58.45-14.067 17.725-35.52 34.184-64.359 49.377-28.838 15.193-64.077 26.588-105.717 34.184l-26.165-41.358c29.541-4.502 55.707-11.747 78.496-21.735 22.79-9.988 41.71-21.593 56.763-34.817 15.052-13.223 25.532-25.11 31.441-35.661 5.908-10.551 9.776-22.86 11.605-36.927 1.829-14.068 2.884-35.732 3.165-64.992H126.674v60.772c0 12.66.281 20.96.844 24.899H74.765V170.35H8.507v-47.267h66.258V24.751h44.734c2.814 0 4.853.282 6.12.844 1.266.563 1.758 2.04 1.477 4.432-.282 2.391-.422 8.511-.422 18.358v74.698h148.552V23.485h43.469c4.783 0 7.878.282 9.285.844 1.406.563 1.828 2.04 1.266 4.432-.563 2.391-.844 9.636-.844 21.734v72.588h70.056v47.267Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
