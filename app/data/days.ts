export type DayItem = {
  date: string;
  day: string;
  status: "full" | "holiday" | "available";
  seats?: number;
};

export const days: DayItem[] = [
  { date: "07/15", day: "سه‌شنبه", status: "available", seats: 911 },
  { date: "07/16", day: "چهارشنبه", status: "available", seats: 220 },
  { date: "07/17", day: "پنجشنبه", status: "available", seats: 111 },
  { date: "07/18", day: "جمعه", status: "holiday" },
  { date: "07/19", day: "شنبه", status: "available", seats: 355 },
  { date: "07/20", day: "یکشنبه", status: "full" },
  { date: "07/21", day: "دوشنبه", status: "full" },
  { date: "07/22", day: "سه‌شنبه", status: "available", seats: 966 },
  { date: "07/23", day: "چهارشنبه", status: "available", seats: 207 },
  { date: "07/24", day: "پنجشنبه", status: "available", seats: 117 },
  { date: "07/25", day: "جمعه", status: "holiday" },
  { date: "07/26", day: "شنبه", status: "available", seats: 377 },
  { date: "07/27", day: "یکشنبه", status: "full" },
  { date: "07/28", day: "دوشنبه", status: "full" },
];
