"use client";

import React, { useState, useEffect } from "react";
import { X, Eye } from "lucide-react";
import { UserReservation } from "@/app/services/mock/reservation-service";
import { toPersianNumber } from "@/app/lib/Persian";

interface ReservationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserReservation | null;
}

const PERSIAN_MONTHS = [
  "فروردین", "اردیبهشت", "خرداد",
  "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر",
  "دی", "بهمن", "اسفند"
];

interface MonthlyStats {
  count: number;
  totalPrice: number;
}

export const ReservationDetailModal = ({
  isOpen,
  onClose,
  user,
}: ReservationDetailModalProps) => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(6); 
  const [stats, setStats] = useState<MonthlyStats>({ count: 0, totalPrice: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || !user) return;
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      
      setTimeout(() => {
        if (!isMounted) return;
        const isDefaultMonth = selectedMonthIndex === 6;
        const mockCount = isDefaultMonth 
          ? Number(user.count || 7) 
          : Math.floor(Math.random() * 15) + 1; 
        
        const mockPrice = mockCount * 350000; 

        setStats({
          count: mockCount,
          totalPrice: mockPrice,
        });
        
        setLoading(false);
      }, 300); 
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [isOpen, user, selectedMonthIndex]); 

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-all">
      <div className="bg-white w-full max-w-100 rounded-3xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="pt-6 pb-4 text-center relative">
          <h2 className="text-lg font-bold text-neutral-900">مشخصات رزرو کننده</h2>
          <button 
            onClick={onClose} 
            className="absolute left-4 top-6 text-gray-400 hover:text-neutral-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="px-8 py-2">
          <div className="grid grid-cols-3 gap-y-6 gap-x-2 text-center" dir="rtl">
            {PERSIAN_MONTHS.map((month, index) => {
              const isSelected = selectedMonthIndex === index;
              return (
                <div
                  key={month}
                  onClick={() => setSelectedMonthIndex(index)}
                  className={`
                    cursor-pointer py-2 rounded-lg text-sm font-medium transition-all duration-200 select-none
                    ${isSelected 
                      ? "bg-secondary-500 text-white shadow-md shadow-secondary-200" 
                      : "text-neutral-500 hover:bg-gray-50 hover:text-neutral-900"}
                  `}
                >
                  {month}
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-8 mt-8 mb-6 space-y-4">

          <div className="flex justify-between items-center text-sm">
            <span className="text-neutral-900 font-bold">تعداد رزرو</span>
            {loading ? (
               <span className="text-xs text-gray-400 animate-pulse">در حال دریافت...</span>
            ) : (
              <span className="text-neutral-600 font-medium">
                {toPersianNumber(stats.count)} روز
              </span>
            )}
          </div>

     
          <div className="flex justify-between items-center text-sm">
            <span className="text-neutral-900 font-bold">مبلغ پرداختی</span>
            {loading ? (
               <span className="text-xs text-gray-400 animate-pulse">...</span>
            ) : (
              <div className="flex items-center gap-1 text-neutral-600">
                <span className="font-medium tracking-wide text-base">
                  {toPersianNumber(stats.totalPrice.toLocaleString())}
                </span>
                <span className="text-xs text-gray-400">(تومان)</span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-neutral-900 font-bold">شماره همراه</span>
            <span className="text-neutral-600 font-medium tracking-wide dir-ltr">
              {toPersianNumber(user.phone)}
            </span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2">
          <button className="w-full border border-primary-500 text-primary-500 hover:bg-neutral-200 hover:border-none rounded-xl py-3 flex items-center justify-center gap-2 transition-colors text-sm font-medium">
            <Eye size={18} />
            <span>مشاهده روزهای رزرو شده از ماه</span>
          </button>
        </div>

      </div>
    </div>
  );
};