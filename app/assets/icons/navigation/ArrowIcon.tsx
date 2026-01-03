import type { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  open?: boolean;
  active?: boolean;
}

const ArrowIcon = ({ open, active, className, ...rest }: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={rest.width ?? 20}
      height={rest.height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      className={`${className ?? ""} transition-transform ${
        open ? "" : "rotate-180"
      }`}
      {...rest}
    >
      <path
        d="M16.5999 7.45825L11.1666 12.8916C10.5249 13.5333 9.4749 13.5333 8.83324 12.8916L3.3999 7.45825"
        stroke={active ? "#FF7B00" : "#6D808A"}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
