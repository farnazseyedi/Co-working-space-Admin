import type { SVGProps } from "react";

const GalleryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M7.50016 8.33333C8.42064 8.33333 9.16683 7.58714 9.16683 6.66667C9.16683 5.74619 8.42064 5 7.50016 5C6.57969 5 5.8335 5.74619 5.8335 6.66667C5.8335 7.58714 6.57969 8.33333 7.50016 8.33333Z"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8332 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 16.6667 3.33317 18.3334 7.49984 18.3334H12.4998C16.6665 18.3334 18.3332 16.6667 18.3332 12.5001V8.33342"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.9501 2.1583L12.9251 5.1833C12.8084 5.29996 12.6917 5.52496 12.6751 5.69163L12.5084 6.84996C12.4501 7.26663 12.7417 7.5583 13.1584 7.49996L14.3167 7.3333C14.4751 7.3083 14.7084 7.19996 14.8251 7.0833L17.8501 4.0583C18.3751 3.5333 18.6167 2.9333 17.8501 2.16663C17.0751 1.3833 16.4751 1.6333 15.9501 2.1583Z"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5166 2.59155C15.7749 3.50822 16.4916 4.22489 17.4083 4.48322"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.2251 15.7916L6.33343 13.0332C6.99176 12.5916 7.94176 12.6416 8.53343 13.1499L8.80843 13.3916C9.45843 13.9499 10.5084 13.9499 11.1584 13.3916L14.6251 10.4166C15.2751 9.85822 16.3251 9.85822 16.9751 10.4166L18.3334 11.5832"
      stroke={props.stroke ?? "#6D808A"}
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GalleryIcon;
