"use client";

import { useState } from "react";
import DaySlider from "../DaySlider/DaySlider";
import TodayReservationsTable, { Reservation } from "./TodayReservationsTable";
import ReservationModal, {
  ReservationData,
} from "../ReservationModal/ReservationModal";
import { days } from "../../data/days";
import { toPersianNumber, toEnglishNumber } from "../../utils/convertNumber";
import { reservationsByDay } from "../../data/reservationsData";

export default function PersianCalendar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedReservation, setSelectedReservation] =
    useState<ReservationData | null>(null);

  const activeDayKey = toEnglishNumber(days[activeIndex]?.date ?? "00/00");
  const reservations = reservationsByDay[activeDayKey] || [];

  const handleDetailClick = (res: Reservation) => {
    const modalData: ReservationData = {
      name: res.fullName,
      date: toPersianNumber(activeDayKey),
      time: "۱۰:۰۰",
      amount: toPersianNumber(50000),
      trackingNumber: "123456",
      transactionId: "654321",
      phone: toPersianNumber(res.phone),
      code: toPersianNumber(res.rowNumber),
      status: "ثبت شده",
    };
    setSelectedReservation(modalData);
  };

  return (
    <div className="h-full w-full max-w-full overflow-x-hidden p-4 box-border">
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-center">
        <h1 className="text-lg font-bold">پیشخوان</h1>
      </header>
      <div className="mt-6">
        <DaySlider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <TodayReservationsTable
        reservations={reservations}
        onDetailClick={handleDetailClick}
      />
      {selectedReservation && (
        <ReservationModal
          data={selectedReservation}
          onClose={() => setSelectedReservation(null)}
        />
      )}
    </div>
  );
}
