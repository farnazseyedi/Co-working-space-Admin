import type { SVGProps } from "react";

const ReservationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M9.1665 16.25H17.4998"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.1665 10.4166H17.4998"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.1665 4.58337H17.4998"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 4.58329L3.33333 5.41663L5.83333 2.91663"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10.4167L3.33333 11.25L5.83333 8.75"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 16.25L3.33333 17.0834L5.83333 14.5834"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ReservationIcon;
