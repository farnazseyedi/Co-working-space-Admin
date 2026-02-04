"use client";

import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import { Eraser } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface SearchFiltersProps {
  filters: {
    userName: string;
    fullName: string;
    phone: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onApply: () => void;
  onReset: () => void;
}

export function SearchFilters({
  filters,
  onFilterChange,
  onApply,
  onReset,
}: SearchFiltersProps) {
  return (
    <div className="bg-others-white1 p-4 rounded-xl h-33 shadow-md flex justify-center items-center">
      <div className="flex flex-col xl:flex-row gap-6 items-end justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full xl:w-auto flex-1">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              نام کاربری
            </label>
            <Input
              value={filters.userName}
              onChange={(e) => onFilterChange("userName", e.target.value)}
              className="h-10 border-neutral-400 focus:border-neutral-600 focus:ring-primary rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              نام و نام خانوادگی
            </label>
            <Input
              value={filters.fullName}
              onChange={(e) => onFilterChange("fullName", e.target.value)}
              className="h-10 border-neutral-400 focus:border-neutral-600 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              شماره همراه
            </label>
            <Input
              value={filters.phone}
              onChange={(e) => onFilterChange("phone", e.target.value)}
              className="h-10 border-neutral-400 focus:border-neutral-600 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              وضعیت حساب
            </label>
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="h-10 border-neutral-400 focus:border-neutral-600 rounded-lg">
                <SelectValue className="data-placeholder:text-neutral-300" placeholder="فعال" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="active"> فعال</SelectItem>
                <SelectItem value="inactive"> غیر فعال</SelectItem>
                
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full xl:w-auto justify-end xl:justify-start pt-2">
          <Button
            variant="outline"
            onClick={onApply}
            className="border-primary-500 text-primary-500 hover:bg-primary-100 px-6 h-10 font-medium"
          >
            اعمال فیلتر
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onReset}
            className="text-gray-400 hover:text-error-500 hover:bg-red-50"
            title="پاک کردن فیلترها"
          >
            <Eraser className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
