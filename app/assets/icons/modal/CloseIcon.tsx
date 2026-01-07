import type { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 32}
    height={props.height ?? 32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M12.2266 19.7734L19.7732 12.2267"
      stroke={props.stroke ?? "#292D32"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.7732 19.7734L12.2266 12.2267"
      stroke={props.stroke ?? "#292D32"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9998 29.3333H19.9998C26.6665 29.3333 29.3332 26.6666 29.3332 20V12C29.3332 5.33329 26.6665 2.66663 19.9998 2.66663H11.9998C5.33317 2.66663 2.6665 5.33329 2.6665 12V20C2.6665 26.6666 5.33317 29.3333 11.9998 29.3333Z"
      stroke={props.stroke ?? "#292D32"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
