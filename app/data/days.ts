// data/days.ts
export type DayItem = {
    date: string;
    day: string;
    status: "full" | "holiday" | "available";
    seats?: number;
};

export const days: DayItem[] = [
    { date: "۰۷/۱۵", day: "سه‌شنبه", status: "available", seats: 9 },
    { date: "۰۷/۱۶", day: "چهارشنبه", status: "available", seats: 20 },
    { date: "۰۷/۱۷", day: "پنجشنبه", status: "available", seats: 11 },
    { date: "۰۷/۱۸", day: "جمعه", status: "holiday" },
    { date: "۰۷/۱۹", day: "شنبه", status: "available", seats: 3 },
    { date: "۰۷/۲۰", day: "یکشنبه", status: "full" },
    { date: "۰۷/۲۱", day: "دوشنبه", status: "full" },
    { date: "۰۷/۱۵", day: "سه‌شنبه", status: "available", seats: 9 },
    { date: "۰۷/۱۶", day: "چهارشنبه", status: "available", seats: 20 },
    { date: "۰۷/۱۷", day: "پنجشنبه", status: "available", seats: 11 },
    { date: "۰۷/۱۸", day: "جمعه", status: "holiday" },
    { date: "۰۷/۱۹", day: "شنبه", status: "available", seats: 3 },
    { date: "۰۷/۲۰", day: "یکشنبه", status: "full" },
    { date: "۰۷/۲۱", day: "دوشنبه", status: "full" },
];
