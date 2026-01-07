import { Reservation } from "../components/pishkhan/pishTable/TodayReservationsTable";

export const reservationsByDay: Record<string, Reservation[]> = {
  "07/15": [
    {
      id: 1,
      rowNumber: 1,
      fullName: "محمد مهدی حسن پور",
      phone: "09123456789",
      service: " A",
    },
    {
      id: 2,
      rowNumber: 2,
      fullName: "محمدحسین قربانی",
      phone: "09367894567",
      service: " B",
    },
  ],
  "07/16": [
    {
      id: 3,
      rowNumber: 1,
      fullName: "علی رضایی",
      phone: "09123456790",
      service: " C",
    },
  ],
};
