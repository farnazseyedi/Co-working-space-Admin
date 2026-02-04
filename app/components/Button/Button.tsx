"use client"

import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  icon,
  ...props
}) => {
  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-primary-500 text-white hover:opacity-80"
      : "border border-primary-500 text-primary-500 bg-others-white1 hover:bg-primary-100";

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {icon && <span className="">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
