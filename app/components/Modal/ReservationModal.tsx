"use client";

import { FC, ReactNode, useState } from "react";
import RangeCalendar from "../Reservation/Calendar";
import BookingSummary from "../Reservation/SummaryPanel";

interface Props {
  onClose: () => void;
  children?: ReactNode;
}

const ReservationModal: FC<Props> = ({ onClose, children }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const basePrice = 200000;

  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  const daysCount =
    startDate && endDate
      ? Math.max(
          0,
          new Date(endDate).getTime() - new Date(startDate).getTime()
        ) /
          (1000 * 60 * 60 * 24) +
        1
      : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white w-[600px] rounded-lg shadow-lg p-6 relative">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-semibold">افزودن رزرو جدید</h2>

          <button
            className="absolute top-4 right-4 text-black rounded-xl border-black px-2.5 py-0 border-2 hover:opacity-45 text-lg"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {children}

        <div className="mt-4">
          <RangeCalendar
            startDate={startDate}
            endDate={endDate}
            onDateChange={handleDateChange}
          />
        </div>

        <div className="mt-6">
          <BookingSummary
            daysCount={daysCount}
            basePrice={basePrice}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
