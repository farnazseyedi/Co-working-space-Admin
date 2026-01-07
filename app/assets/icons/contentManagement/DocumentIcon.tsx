import type { SVGProps } from "react";

const DocumentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M7.49992 14.1667V9.16675L5.83325 10.8334"
      stroke={props.stroke ?? "#1E3A8A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 9.16675L9.16667 10.8334"
      stroke={props.stroke ?? "#1E3A8A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3334 8.33341V12.5001C18.3334 16.6667 16.6667 18.3334 12.5001 18.3334H7.50008C3.33341 18.3334 1.66675 16.6667 1.66675 12.5001V7.50008C1.66675 3.33341 3.33341 1.66675 7.50008 1.66675H11.6667"
      stroke={props.stroke ?? "#1E3A8A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3334 8.33341H15.0001C12.5001 8.33341 11.6667 7.50008 11.6667 5.00008V1.66675L18.3334 8.33341Z"
      stroke={props.stroke ?? "#1E3A8A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DocumentIcon;
