import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  const baseClasses = "px-8 py-2 rounded-md font-medium transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-primary-500 text-white hover:opacity-80"
      : "border border-primary-500 text-primary-500 hover:bg-primary-200";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {label}
    </button>
  );
}

function MessageButtons() {
  return (
    <div className="flex gap-4 mt-7">
      <Link href="/notificationsList">
        <Button label="صندوق پیام‌ها" variant="secondary" />
      </Link>
      <Button label="+ پیام جدید" variant="primary" />
    </div>
  );
}

export { MessageButtons };
