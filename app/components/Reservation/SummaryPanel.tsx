"use client";

import { toPersianNumber, formatPrice } from "../../lib/Persian";
import { Button } from "../ui/Button";
import { Card } from "../ui/card";

interface BookingSummaryProps {
  daysCount: number;
  basePrice: number;
  isLoading?: boolean;
}

export default function BookingSummary({
  daysCount,
  basePrice,
  isLoading = false,
}: BookingSummaryProps) {
  const totalPrice = daysCount * basePrice;
  const discount = 0;
  const finalPrice = totalPrice - discount;

  return (
    <div className="flex justify-center">
      <Card className=" w-120 h-full p-6 shadow-sm border border-gray-100 rounded-3xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center justify-center text-center font-black my-1 gap-3">
            <span className="h-px rounded-l-xl w-40 bg-linear-to-r from-primary-500 to-others-bg1 "></span>
            اطلاعات پرداخت
            <span className="h-px rounded-l-xl w-40 bg-linear-to-l from-primary-500 to-others-bg1"></span>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-sm text-neutral-500 font-medium">
          <div className="flex justify-between items-center">
            <span>تعداد روزهای انتخاب شده :</span>
            <span className="text-neutral-500 text-base">
              {toPersianNumber(daysCount)} روز
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>قیمت پایه :</span>
            <span className="text-neutral-500 text-base">
              {formatPrice(basePrice)} تومان
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>قیمت کل :</span>
            <span className="text-neutral-500 text-base">
              {formatPrice(totalPrice)} تومان
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>تخفیف پلکانی :</span>
            <span className="text-neutral-500">هیچی</span>
          </div>
        </div>

        <div className="h-px bg-neutral-400 w-full my-6"></div>

        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-slate-900 text-base">
            مبلغ قابل پرداخت :
          </span>
          <span className="font-bold text-slate-900 text-lg">
            {isLoading
              ? "در حال محاسبه..."
              : `${formatPrice(finalPrice)} تومان`}
          </span>
        </div>

        <Button
          className="w-full bg-primary-500 hover:bg-primary-400 text-white py-6 text-base rounded-xl"
          disabled={isLoading}
        >
          ثبت و پرداخت
        </Button>
      </Card>
    </div>
  );
}
