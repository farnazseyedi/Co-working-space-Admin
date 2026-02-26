import NavigatinBar from "@/app/components/Navigation/NavigationBar";
import { HomeIcon } from "@/app/assets/icons";
import { VectorIcon } from "@/app/assets/icons";
import StatCards from "@/app/components/Payment-comps/stat-cards";
import PaymentChart from "@/app/components/Payment-comps/chart";
import { DashboardService } from "@/app/services/mock/payment-service";
import { TimeRange } from "@/app/lib/types/payment";
import SearchPage from "@/app/components/Payment-comps/search-page";

interface Props {
  searchParams: Promise<{ range?: string }>;
}
export default async function PaymentManagement({ searchParams }: Props) {
  const { range } = await searchParams;
  const currentRange = (range || "daily") as TimeRange;
  const [stats, chartData] = await Promise.all([
    DashboardService.getStats(currentRange),
    DashboardService.getChartData("monthly"),
  ]);
  return (
    <div className="min-h-screen bg-neutral-100" dir="rtl">
      <NavigatinBar />
      <div className="mr-64 p-6">
        <div className="bg-white flex justify-between items-center px-7 h-16 shadow-sm rounded-lg border-b border-neutral-200 mb-6">
          <div className="font-bold text-neutral-800">امور مالی</div>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer">
              <HomeIcon />
            </div>
            <span className="bg-neutral-200 w-px h-6"></span>
            <div className="cursor-pointer">
              <VectorIcon />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <StatCards data={stats} />
          <PaymentChart data={chartData} />
          <SearchPage />
        </div>
      </div>
    </div>
  );
}
