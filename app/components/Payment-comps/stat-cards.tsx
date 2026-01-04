import { DashboardStat } from "@/app/lib/types/payment";
import { StatCard } from "./stat-card";
import { TimeRangeFilter } from "./time-range-filter";
import { Button } from "../ui/Button";
import { Plus, Wallet } from "lucide-react";

interface StatCardsProps {
  data: DashboardStat[];
}

export default function StatCards({ data }: StatCardsProps) {
  return (
    <div className="space-y-6 pt-6">
  
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <TimeRangeFilter />
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            className="border-primary-500 text-primary-500 hover:bg-primary-300 hover:border-none hover:text-white"
          >
            <Plus className="ml-2 h-4 w-4" />
            افزودن سند مالی
          </Button>
          <Button className="bg-primary-500 hover:bg-primary-400  text-white shadow-lg shadow-blue-900/20">
            <Wallet className="ml-2 h-4 w-4" />
            شارژ کیف پول
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2 lg:grid-cols-4">
        {data.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>
    </div>
  );
}