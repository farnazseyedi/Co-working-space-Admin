import type { SVGProps } from "react";

const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 64}
    height={props.height ?? 64}
    viewBox="0 0 64 64"
    fill="none"
    {...props}
  >
    <path
      d="M31.9997 58.6666C46.6663 58.6666 58.6663 46.6666 58.6663 31.9999C58.6663 17.3333 46.6663 5.33325 31.9997 5.33325C17.333 5.33325 5.33301 17.3333 5.33301 31.9999C5.33301 46.6666 17.333 58.6666 31.9997 58.6666Z"
      stroke="#319861"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.667 32L28.2137 39.5467L43.3337 24.4534"
      stroke="#319861"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SuccessIcon;
