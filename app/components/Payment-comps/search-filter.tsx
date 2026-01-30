"use client";

import { Input } from "@/app/components/ui/Input";

import { Button } from "@/app/components/ui/Button";

interface SearchFiltersProps {
  filters: {
    userName: string;
    fullName: string;
    price: string;
    fromDate: string;
    toDate: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
}

export function SearchFilters({
  filters,
  onFilterChange,
  onReset,
}: SearchFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              نام کاربری
            </label>
            <Input
              value={filters.userName}
              onChange={(e) => onFilterChange("userName", e.target.value)}
              className="focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              نام و نام خانوادگی
            </label>
            <Input
              value={filters.fullName}
              onChange={(e) => onFilterChange("fullName", e.target.value)}
              className="focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">مبلغ</label>
            <Input
              value={filters.price}
              onChange={(e) => onFilterChange("price", e.target.value)}
              className="focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              {" "}
              از تاریخ
            </label>
            <Input
              value={filters.fromDate}
              onChange={(e) => onFilterChange("fromDate", e.target.value)}
              className="focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              {" "}
              تا تاریخ
            </label>
            <Input
              value={filters.toDate}
              onChange={(e) => onFilterChange("toDate", e.target.value)}
              className="focus-visible:ring-primary"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onReset} className="">
            <div className="w-4 h-4 ml-2">remove</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
