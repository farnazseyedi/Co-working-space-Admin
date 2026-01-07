import type { SVGProps } from "react";

const VerticalDividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 2}
    height={props.height ?? 58}
    viewBox="0 0 2 58"
    fill="none"
    {...props}
  >
    <path
      d="M1 1L0.999998 57"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
    />
  </svg>
);

export default VerticalDividerIcon;
