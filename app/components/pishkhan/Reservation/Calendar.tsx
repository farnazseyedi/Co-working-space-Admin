"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import jalaali from "jalaali-js";
import { toPersianNumber } from "../../../lib/Persian";
import { cn } from "../../../lib/Persian";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

interface RangeCalendarProps {
  startDate: string;
  endDate: string;
  onDateChange: (start: string, end: string) => void;
  onConfirm?: () => void;
}

export default function RangeCalendar({
  startDate,
  endDate,
  onDateChange,
  onConfirm,
}: RangeCalendarProps) {
  const [viewDate, setViewDate] = useState({ year: 1404, month: 6 });
  const [openInput, setOpenInput] = useState<"start" | "end" | null>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const [tempStart, setTempStart] = useState(startDate);
  const [tempEnd, setTempEnd] = useState(endDate);

  const calendarDays = useMemo(() => {
    const { year, month } = viewDate;
    const daysInMonth = jalaali.jalaaliMonthLength(year, month);
    const { gy, gm, gd } = jalaali.toGregorian(year, month, 1);
    const date = new Date(gy, gm - 1, gd);
    const dayOfWeek = (date.getDay() + 1) % 7;

    const days = [];
    for (let i = 0; i < dayOfWeek; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  }, [viewDate]);

  const handlePrevMonth = () => {
    setViewDate((prev) =>
      prev.month === 1
        ? { year: prev.year - 1, month: 12 }
        : { ...prev, month: prev.month - 1 }
    );
  };

  const handleNextMonth = () => {
    setViewDate((prev) =>
      prev.month === 12
        ? { year: prev.year + 1, month: 1 }
        : { ...prev, month: prev.month + 1 }
    );
  };

  const getFullDateString = (day: number) =>
    `${viewDate.year}-${String(viewDate.month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setOpenInput(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateSelect = (date: string) => {
    if (openInput === "start") {
      setTempStart(date);
      if (tempEnd && tempEnd < date) setTempEnd(date);
    } else if (openInput === "end") {
      setTempEnd(date);
      if (tempStart && tempStart > date) setTempStart(date);
    }
    onDateChange(
      openInput === "start" ? date : tempStart,
      openInput === "end" ? date : tempEnd
    );
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <div className="flex gap-2 mb-3 h-12">
        <input
          readOnly
          value={tempStart || ""}
          placeholder="تاریخ شروع"
          onClick={() => setOpenInput("start")}
          className="w-70 h-full px-3 border border-neutral-300 rounded-md cursor-pointer text-sm
               focus:outline-none focus:ring-1 focus:ring-primary-500"
        />

        <input
          readOnly
          value={tempEnd || ""}
          placeholder="تاریخ پایان"
          onClick={() => setOpenInput("end")}
          className="w-70 h-full px-3 border-neutral-300 border rounded-md cursor-pointer text-sm
               focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {openInput && (
        <div className="bg-white p-3 rounded-lg shadow absolute z-50 w-full max-w-xs">
          <div className="flex justify-between items-center mb-3 text-sm">
            <button onClick={handlePrevMonth} className="p-2 text-lg">
              ‹
            </button>
            <span className="font-bold">
              {persianMonths[viewDate.month - 1]}{" "}
              {toPersianNumber(viewDate.year)}
            </span>
            <button onClick={handleNextMonth} className="p-2 text-lg">
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {weekDays.map((d) => (
              <span key={d} className="text-xs font-bold">
                {d}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0">
            {calendarDays.map((day, idx) => {
              if (!day) return <div key={idx} className="py-3"></div>;
              const dateStr = getFullDateString(day);
              const isStart = dateStr === tempStart;
              const isEnd = dateStr === tempEnd;
              const inRange =
                tempStart &&
                tempEnd &&
                dateStr > tempStart &&
                dateStr < tempEnd;

              return (
                <button
                  key={dateStr}
                  onClick={() => handleDateSelect(dateStr)}
                  className={cn(
                    "py-3 text-sm font-bold transition-all w-full",
                    inRange ? "bg-secondary-100 rounded-none" : "",
                    isStart ? "bg-secondary-500 text-white rounded-r-full" : "",
                    isEnd ? "bg-secondary-500 text-white rounded-l-full" : "",
                    !inRange && !isStart && !isEnd
                      ? "hover:bg-orange-100 rounded"
                      : ""
                  )}
                >
                  {toPersianNumber(day)}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              setOpenInput(null);
              onConfirm?.();
            }}
            className="mt-3 w-full py-2 bg-primary-500 text-white rounded text-sm"
          >
            تأیید
          </button>
        </div>
      )}
    </div>
  );
}
