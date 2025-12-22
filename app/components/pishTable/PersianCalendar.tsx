"use client";

import { useState } from "react";
import DaySlider from "../DaySlider/DaySlider";
import TodayReservationsTable from "./TodayReservationsTable";
import { days } from "../../data/days";

export default function PersianCalendar() {
    interface Reservation {
        id: number;
        rowNumber: string;
        fullName: string;
        phone: string;
        service: string;
    }

    const [activeIndex, setActiveIndex] = useState(0);

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

    return (
        <div className="h-full w-full max-w-full overflow-x-hidden p-4 box-border">
            <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-center">
                <h1 className="text-lg font-bold">پیشخوان</h1>
            </header>

            <div className="mt-6">
                <DaySlider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>

            <TodayReservationsTable reservations={reservations} />
        </div>
    );
}
