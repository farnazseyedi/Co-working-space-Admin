"use client";

import { useState } from "react";
import DaySlider from "../DaySlider/DaySlider";
import TodayReservationsTable, { Reservation } from "./TodayReservationsTable";
import ReservationModal, { ReservationData } from "../ReservationModal/ReservationModal";
import { days } from "../../data/days";

export default function PersianCalendar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedReservation, setSelectedReservation] = useState<ReservationData | null>(null);

    const reservationsByDay: Record<string, Reservation[]> = {
        "25": [
            { id: 1, rowNumber: '۰۱', fullName: 'محمد مهدی حسن پور', phone: '۰۹۱۲۳۴۵۶۷۸۹', service: 'خدمت A' },
            { id: 2, rowNumber: '۰۲', fullName: 'محمدحسین قربانی', phone: '۰۹۳۶۷۸۹۴۵۶۷', service: 'خدمت B' },
        ],
        "26": [
            { id: 3, rowNumber: '۰۱', fullName: 'علی رضایی', phone: '۰۹۱۲۳۴۵۶۷۹۰', service: 'خدمت C' },
        ],
    };

    const activeDay = days[activeIndex].date.toString();
    const reservations = reservationsByDay[activeDay] || [];

    const handleDetailClick = (res: Reservation) => {
        const modalData: ReservationData = {
            name: res.fullName,
            date: activeDay,
            time: "۱۰:۰۰",
            amount: "۵۰۰۰۰",
            trackingNumber: "123456",
            transactionId: "654321",
            phone: res.phone,
            code: res.rowNumber,
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
            <TodayReservationsTable reservations={reservations} onDetailClick={handleDetailClick} />
            {selectedReservation && (
                <ReservationModal data={selectedReservation} onClose={() => setSelectedReservation(null)} />
            )}
        </div>
    );
}
