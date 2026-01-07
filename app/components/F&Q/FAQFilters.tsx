"use client";

import { useState } from "react";

type Props = {
  filters?: string[];
  activeFilter?: string;
  counts?: Record<string, number>;
  onChange?: (filter: string) => void;
};

export default function FAQFilters({
  filters = ["همه", "تایید شده", "در انتظار تایید", "عدم تایید", "تاریخ امروز"],
  activeFilter: initialFilter,
  counts = {},
  onChange: externalOnChange,
}: Props) {
  const [activeFilter, setActiveFilter] = useState(initialFilter || filters[0]);

  const handleClick = (f: string) => {
    setActiveFilter(f);
    if (externalOnChange) externalOnChange(f);
  };

  return (
    <div className="flex gap-2 mb-6 justify-start flex-wrap mt-10">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => handleClick(f)}
          className={`px-4 py-2 rounded-full border transition ${
            activeFilter === f
              ? "bg-tertiary-500 text-white"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {f} ({counts[f] ?? 0})
        </button>
      ))}
    </div>
  );
}
