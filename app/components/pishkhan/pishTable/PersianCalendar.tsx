"use client";

import TodayReservationsTable, { Reservation } from "./TodayReservationsTable";
import ReservationModal, { ReservationData } from "../../Modal/InfoModal";
import { days } from "../../../data/days";
import { toPersianNumber, toEnglishNumber } from "../../../utils/convertNumber";
import { reservationsByDay } from "../../../data/reservationsData";
import { useState } from "react";

interface PersianCalendarProps {
  activeIndex: number;
}

export default function PersianCalendar({ activeIndex }: PersianCalendarProps) {
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
      transactionId: "۱۲۳۴۵۶۰۹۸۰۰۰۴۳۲۰۰۳۴۵۶۸۷۴۵",
      phone: toPersianNumber(res.phone),
      code: toPersianNumber(res.rowNumber),
      status: "موفق",
    };
    setSelectedReservation(modalData);
  };

  return (
    <>
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
    </>
  );
}
