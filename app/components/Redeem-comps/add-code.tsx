"use client";

import * as React from "react";
import { useState } from "react";
import { X, Plus} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import RangeCalendar from "@/app/components/pishkhan/Reservation/Calendar";
interface AddCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function CreateDiscountModal({ isOpen, onClose }: AddCodeModalProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" max-w-3xl bg-white rounded-2xl [&>button]:hidden p-0 overflow-hidden border-none">
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b">
          <DialogTitle className="text-lg font-bold text-neutral-800">
            ایجاد کد تخفیف جدید
          </DialogTitle>
          <DialogClose className="rounded-md border p-1 hover:bg-gray-100 transition-colors">
            <X className="h-4 w-4 text-gray-500" />
          </DialogClose>
        </DialogHeader>

        <div className="p-6 space-y-8">
          <section className="space-y-4">
            <h3 className="font-bold text-sm text-neutral-900">
              اطلاعات کد تخفیف
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-neutral-700">
                  کد تخفیف جدید
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="متن ورودی"
                    className="w-full h-11 pr-10 pl-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                  />
                  <Plus className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-sm text-neutral-700">تاریخ رزرو</label>
                <div className="w-full h-12">
                  <RangeCalendar
                    startDate={startDate}
                    endDate={endDate}
                    onDateChange={handleDateChange}
                  />
                </div>
              </div>
              {/* <div className="space-y-2">
                <label className="text-sm text-neutral-700">تاریخ شروع</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="۱۴۰۴/۰۷/۰۱"
                    className="w-full h-11 pr-10 pl-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm text-gray-400"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div> */}

              {/* <div className="space-y-2">
                <label className="text-sm text-neutral-700">تاریخ پایان</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="۱۴۰۴/۰۷/۰۷"
                    className="w-full h-11 pr-10 pl-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm text-gray-400"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-sm text-neutral-700">نوع تخفیف</label>
                <Select dir="rtl">
                  <SelectTrigger className="h-11 rounded-xl border-gray-200">
                    <SelectValue placeholder="درصدی" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percent">درصدی</SelectItem>
                    <SelectItem value="fixed">مبلغ ثابت</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-neutral-700">مقدار تخفیف</label>
                <input
                  type="text"
                  placeholder="متن ورودی"
                  className="w-full h-11 px-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                />
              </div>
            </div>
          </section>

          <div className="flex items-center justify-start gap-3 pt-4">
            <Button className="w-35 h-12 rounded-xl bg-[#28398b] hover:bg-[#1e2b6b] text-white">
              ثبت
            </Button>
            <Button
              variant="outline"
              className="w-14 h-12 rounded-xl border-indigo-900 text-indigo-900 hover:bg-indigo-50"
            >
              لغو
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
