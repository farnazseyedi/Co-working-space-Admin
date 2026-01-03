"use client";

type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

export default function Checkbox({ label, value, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
