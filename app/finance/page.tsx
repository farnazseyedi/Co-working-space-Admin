import NavigatinBar from "../components/Navigation/NavigationBar";
import Image from "next/image";
import home from "@/icons/home-2.svg";
import logout from "@/icons/logout icon.svg";
import StatCards from "../components/Payment-comps/stat-cards";
import PaymentChart from "@/app/components/Payment-comps/chart"; // ایمپورت نمودار
import { DashboardService } from "@/app/services/mock/payment-service";
import { TimeRange } from "../lib/types/payment";

interface Props {
  searchParams: Promise<{ range?: string }>;
}

export default async function PaymentManagement({ searchParams }: Props) {
  const { range } = await searchParams;
  const currentRange = (range || "daily") as TimeRange;

  // فراخوانی موازی برای جلوگیری از تأخیر (Parallel Data Fetching)
  const [stats, chartData] = await Promise.all([
    DashboardService.getStats(currentRange),
    DashboardService.getChartData("monthly") // دریافت دیتای نمودار
  ]);

  return (
    <div className="min-h-screen bg-neutral-100" dir="rtl">
      <NavigatinBar />
      <div className="mr-64 p-6">
        {/* Header */}
        <div className="bg-white flex justify-between items-center px-7 h-16 shadow-sm rounded-lg border-b border-neutral-200 mb-6">
          <div className="font-bold text-neutral-800">امور مالی</div>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer">
              <Image src={home} alt="home" width={24} height={24} />
            </div>
            <span className="bg-neutral-200 w-px h-6"></span>
            <div className="cursor-pointer">
              <Image src={logout} alt="logout" width={24} height={24} />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {/* بخش کارت‌ها و فیلترهای زمانی */}
          <StatCards data={stats} />
          
          {/* بخش نمودار تراکنش‌ها */}
          <PaymentChart data={chartData} />
        </div>
      </div>
    </div>
  );
}