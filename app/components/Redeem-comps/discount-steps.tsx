"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export default function DiscountSteps() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">تخفیف های پلکانی</h1>
        <div className="bg-neutral-400 h-px w-[88%]"></div>
      </div>
      <div className="flex gap-9 w-full">
        <div className="space-y-2 w-86.25">
          <label className="text-sm font-medium text-neutral-900">
            دوره (روز)
          </label>
          <Select onValueChange={(value) => console.log(value)}>
            <SelectTrigger className="h-10 border-neutral-400 bg-white focus:border-neutral-600 rounded-lg">
              <SelectValue
                className="data-placeholder:text-neutral-300"
                placeholder="18"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active"> فعال</SelectItem>
              <SelectItem value="inactive"> غیر فعال</SelectItem>
              <SelectItem value="both"> فعال و غیر فعال</SelectItem>
            </SelectContent>
          </Select>
        </div>
          <div className="space-y-2 w-86.25">
          <label className="text-sm font-medium text-neutral-900 ">
            روز رایگان
          </label>
          <Select onValueChange={(value) => console.log(value)}>
            <SelectTrigger className="h-10 border-neutral-400 focus:border-neutral-600 bg-white rounded-lg">
              <SelectValue
                className="data-placeholder:text-neutral-300"
                placeholder="3"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active"> فعال</SelectItem>
              <SelectItem value="inactive"> غیر فعال</SelectItem>
              <SelectItem value="both"> فعال و غیر فعال</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
