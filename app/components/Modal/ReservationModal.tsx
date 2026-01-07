"use client";
import { useState } from "react";
import RangeCalendar from "../../components/pishkhan/Reservation/Calendar";
import BookingSummary from "../../components/pishkhan/Reservation/SummaryPanel";
import { CloseIcon } from "@/app/assets/icons";

type Props = {
  date: string;
  onClose: () => void;
};

function ReservationModal({ onClose }: Props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [username, setUsername] = useState("");

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-auto">
      <div className="bg-white w-full max-w-225 rounded-lg shadow-lg p-6 relative my-8 overflow-auto">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-semibold">افزودن رزرو جدید</h2>
          <button
            className="px-3 py-1 border-none hover:opacity-75 text-lg cursor-pointer"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="h-px bg-gray-400 my-5 w-full"></div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">نام کاربری</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-md px-3 h-12 text-sm
             w-70 box-border focus:border-gray-500 focus:outline-none"
              placeholder="نام کاربری"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <label className="mb-1 text-sm font-medium">تاریخ رزرو</label>
            <div className="w-full h-12">
              <RangeCalendar
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <BookingSummary daysCount={daysCount} basePrice={basePrice} />
        </div>
      </div>
    </div>
  );
}

export default ReservationModal;
