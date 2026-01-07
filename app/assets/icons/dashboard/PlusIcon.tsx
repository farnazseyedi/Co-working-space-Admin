import type { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M5 10H15"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15V5"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusIcon;
