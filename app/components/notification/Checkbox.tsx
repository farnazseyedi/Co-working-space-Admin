import { Check } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface FeatureCheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

export const FeatureCheckbox = ({
  value,
  onChange,
  disabled = false,
}: FeatureCheckboxProps) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (disabled) return;
        onChange(!value);
      }}
      className={cn(
        "w-5 h-5 rounded-md border flex items-center justify-center transition-all select-none bg-primary-100",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        value
          ? "border-primary-500"
          : "border-neutral-400 hover:border-neutral-500"
      )}
    >
      {value && <Check className="w-4 h-4 text-primary-500" strokeWidth={3} />}
    </button>
  );
};
