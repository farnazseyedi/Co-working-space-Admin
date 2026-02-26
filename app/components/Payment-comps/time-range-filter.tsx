"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/app/lib/utils";

const ranges = [
  { label: "روزانه", value: "daily" },
  { label: "هفتگی", value: "weekly" },
  { label: "ماهانه", value: "monthly" },
  { label: "سالانه", value: "yearly" },
];

export function TimeRangeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentRange = searchParams.get("range") || "daily";


  const handleRangeChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("range", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className=" w-83.25 h-12 flex justify-between bg-white p-1 rounded-md shadow-sm">
      <button className="text-neutral-700 text-sm mr-2">بازه زمانی</button>
      <span className="bg-neutral-200 w-px pt-6 h-5 mt-2 "></span>
   
      {ranges.map((range) => (
        <button
          key={range.value}
          onClick={() => handleRangeChange(range.value)}
          className={cn(
            "w-14  text-sm rounded-md transition-all ease-in-out duration-300",

            currentRange === range.value
              ? "bg-tertiary-500  text-white shadow-sm"
              : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200"
          )}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}
