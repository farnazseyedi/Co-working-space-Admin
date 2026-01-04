
import { ChartDataPoint, DashboardStat, Transaction } from "@/app/lib/types/payment";

export const MOCK_STATS: DashboardStat[] = [
  {
    id: "total-income",
    title: "درآمد کل",
    value: 129560300,
    formattedValue: "۱۲۹/۵۶۰/۳۰۰ تومان",
    trend: 17,
    isIncrease: true,
    icon: "wallet",
  },
  {
    id: "arrears",
    title: "معوقات",
    value: 18003000,
    formattedValue: "۱۸/۰۰۳/۰۰۰ تومان",
    trend: 0.8,
    isIncrease: false,
    icon: "wallet",
  },
  {
    id: "new-members",
    title: "تعداد عضو جدید",
    value: 18003000,
    formattedValue: "22 نفر ",
    trend: 0.8,
    isIncrease: false,
    icon: "new",
  },
  {
    id: "cancelled",
    title: "تعداد رزرو لغو شده",
    value: 18003000,
    formattedValue:  "1 نفر",
    trend: 0.8,
    isIncrease: false,
    icon: "cancell",
  },
];

export const MOCK_CHART_DATA: Record<string, ChartDataPoint[]> = {
  monthly: [
    { name: "فروردین", value: 40000000 },
    { name: "اردیبهشت", value: 30000000 },
    { name: "خرداد", value: 50000000 },
    { name: "تیر", value: 45000000 },
    { name: "مرداد", value: 80000000 },
    { name: "شهریور", value: 60000000 },
  ],
  weekly: [
    { name: "شنبه", value: 100 },
    { name: "یکشنبه", value: 200 },
    { name: "دوشنبه", value: 300 },
    { name: "سه شنبه", value: 400 },
    { name: "چهارشنبه", value: 500 },
    { name: "پنج شنبه", value: 600 },
    { name: "جمعه", value: 700 },
  ],
};

export const MOCK_TRANSACTIONS: Transaction[] = Array.from({ length: 20 }).map(
  (_, i) => ({
    id: `trx-${i}`,
    userId: `52627549${i}`,
    fullName: i % 2 === 0 ? "محمدمهدی حسن‌پور" : "علی دهقانی",
    amount: 350000,
    date: "1404/06/31",
    status: "success",
  })
);
