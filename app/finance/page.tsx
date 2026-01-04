import NavigatinBar from "../components/Navigation/NavigationBar";
import Image from "next/image";
import home from "@/icons/home-2.svg";
import logout from "@/icons/logout icon.svg";
import StatCards from "../components/Payment-comps/stat-cards";
import { DashboardService } from "@/app/services/mock/payment-service";

interface Props {
  searchParams: Promise<{ range?: string }>;
}

export default async function PaymentManagement({ searchParams }: Props) {
  const { range } = await searchParams;
  const currentRange = range || "daily";
  const stats = await DashboardService.getStats(currentRange);

  return (
    <div className="min-h-screen bg-neutral-100" dir="rtl">
      <NavigatinBar />
      <div className="mr-64 p-6">
        <div className="bg-others-white1 flex justify-between items-center px-7 w-258 h-14 shadow-md rounded-sm border-b-neutral-700">
          <div className="font-bold text-neutral-800">امور مالی</div>
          <div className="flex gap-4">
            <div>
              <Image src={home} alt="home" width={24} height={24} />
            </div>
            <span className="bg-neutral-200 w-px h-6"></span>
            <div>
              <Image src={logout} alt="logout" width={24} height={24} />
            </div>
          </div>
        </div>
        <div>
          <StatCards data={stats} />
        </div>
      </div>
    </div>
  );
}
