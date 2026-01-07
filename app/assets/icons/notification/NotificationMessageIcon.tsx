import type { SVGProps } from "react";

const NotificationMessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M18.3337 8.33317V10.8332C18.3337 14.1665 16.667 15.8332 13.3337 15.8332H12.917C12.6587 15.8332 12.4087 15.9582 12.2503 16.1665L11.0003 17.8332C10.4503 18.5665 9.55033 18.5665 9.00033 17.8332L7.75033 16.1665C7.61699 15.9832 7.30866 15.8332 7.08366 15.8332H6.66699C3.33366 15.8332 1.66699 14.9998 1.66699 10.8332V6.6665C1.66699 3.33317 3.33366 1.6665 6.66699 1.6665H11.667"
      stroke="#1E3A8A"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.2503 5.83317C17.4009 5.83317 18.3337 4.90043 18.3337 3.74984C18.3337 2.59924 17.4009 1.6665 16.2503 1.6665C15.0997 1.6665 14.167 2.59924 14.167 3.74984C14.167 4.90043 15.0997 5.83317 16.2503 5.83317Z"
      stroke="#1E3A8A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3301 9.16667H13.3375"
      stroke="#1E3A8A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99607 9.16667H10.0036"
      stroke="#292D32"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66209 9.16667H6.66957"
      stroke="#292D32"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NotificationMessageIcon;
