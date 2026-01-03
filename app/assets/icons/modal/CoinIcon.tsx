import type { SVGProps } from "react";

const CoinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M14.0835 14.0834C16.3335 11.8334 16.3335 8.08337 14.0835 5.83337"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.9165 5.91663C3.6665 8.16663 3.6665 11.9166 5.9165 14.1666"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.0835 11.3334C8.0835 12.0834 8.66683 12.6667 9.41683 12.6667H10.8335C11.4168 12.6667 12.0002 12.1667 12.0002 11.5C12.0002 10.75 11.6668 10.5 11.2502 10.3334L8.91683 9.50004C8.3335 9.41671 8.0835 9.16671 8.0835 8.50004C8.0835 7.83337 8.5835 7.33337 9.25016 7.33337H10.7502C11.5002 7.33337 12.0835 7.91671 12.0835 8.66671"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6.5V13.5"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333Z"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CoinIcon;
