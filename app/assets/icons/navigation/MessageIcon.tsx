import type { SVGProps } from "react";

const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M14.9832 8.99167V12.325C14.9832 12.5417 14.9748 12.75 14.9498 12.95C14.7582 15.2 13.4332 16.3167 10.9915 16.3167H10.6582C10.4498 16.3167 10.2498 16.4167 10.1248 16.5833L9.12485 17.9167C8.68318 18.5083 7.9665 18.5083 7.52484 17.9167L6.52483 16.5833C6.41649 16.4417 6.17484 16.3167 5.99151 16.3167H5.65818C2.99984 16.3167 1.6665 15.6583 1.6665 12.325V8.99167C1.6665 6.55001 2.79151 5.22501 5.03318 5.03334C5.23318 5.00834 5.44151 5 5.65818 5H10.9915C13.6498 5 14.9832 6.33334 14.9832 8.99167Z"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3165 5.65842V8.99175C18.3165 11.4418 17.1915 12.7584 14.9499 12.9501C14.9749 12.7501 14.9832 12.5418 14.9832 12.3251V8.99175C14.9832 6.33342 13.6499 5.00008 10.9915 5.00008H5.6582C5.44154 5.00008 5.2332 5.00842 5.0332 5.03342C5.22487 2.79176 6.54987 1.66675 8.99154 1.66675H14.3249C16.9832 1.66675 18.3165 3.00009 18.3165 5.65842Z"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 1.5}
      strokeMiterlimit={props.strokeMiterlimit ?? 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2464 11.0417H11.2539"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.32942 11.0417H8.33692"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41292 11.0417H5.42042"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MessageIcon;
