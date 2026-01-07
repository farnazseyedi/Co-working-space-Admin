import type { SVGProps } from "react";

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 32}
    height={props.height ?? 32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M20 26.5599L11.3066 17.8666C10.28 16.8399 10.28 15.1599 11.3066 14.1333L20 5.43994"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowLeftIcon;
