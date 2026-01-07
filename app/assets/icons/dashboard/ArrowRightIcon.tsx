import type { SVGProps } from "react";

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 32}
    height={props.height ?? 32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M11.8799 26.5599L20.5732 17.8666C21.5999 16.8399 21.5999 15.1599 20.5732 14.1333L11.8799 5.43994"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
