import type { SVGProps } from "react";

const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 19}
    height={props.height ?? 19}
    viewBox="0 0 19 19"
    fill="none"
    {...props}
  >
    <path
      d="M17.4167 7.41667V9.91667C17.4167 13.25 15.75 14.9167 12.4167 14.9167H12C11.7417 14.9167 11.4917 15.0417 11.3333 15.25L10.0833 16.9167C9.53333 17.65 8.63333 17.65 8.08333 16.9167L6.83333 15.25C6.7 15.0667 6.39167 14.9167 6.16667 14.9167H5.75C2.41667 14.9167 0.75 14.0833 0.75 9.91667V5.75C0.75 2.41667 2.41667 0.75 5.75 0.75H10.75"
      stroke="#1E3A8A"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MessageIcon;
