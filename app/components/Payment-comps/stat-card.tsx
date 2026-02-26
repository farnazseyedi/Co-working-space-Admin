"use client";

import {
  Card,

} from "@/app/components/ui/card";
import { DashboardStat } from "@/app/lib/types/payment";
import { cn } from "@/app/lib/utils";
import { Wallet, Users, TrendingUp, TrendingDown } from "lucide-react";

 
import { toPersianNumber } from "@/app/lib/Persian";
const iconMap = {
  wallet: Wallet,
  new: Users,
  cancell:Wallet,
};

interface StatCardProps {
  data: DashboardStat; 
}

export function StatCard({ data }: StatCardProps) {
  const Icon = iconMap[data.icon];

  const trendColorClass = data.isIncrease
    ? "text-success-600 "
    : "text-error-600 ";

  const TrendIcon = data.isIncrease ? TrendingUp : TrendingDown;

  return (

    <Card className="relative w-full h-33 bg-primary-100 rounded-md overflow-hidden border-neutral-300 shadow-sm hover:shadow-md transition-all duration-300 group">
 
  <div className="absolute top-0 left-0 right-0 bg-others-white1 rounded-md m-1 h-21 z-10 p-4 flex flex-col justify-between border-0.5 border-neutral-500 shadow-md">
    <div className="flex flex-row justify-between items-start">
      <span className="text-xs font-medium text-neutral-600">
        {data.title}
      </span>
      <div className="p-1.5">
        <Icon className="h-5 w-5" />
      </div>
    </div>

    <div className="text-lg font-bold text-primary-600 tracking-tight">
      {toPersianNumber(data.formattedValue)}
      
    </div>
  </div>

  
  <div className="absolute bottom-0 w-full h-11.25 flex items-end pb-2 px-4">
    <div
      className={cn(
        "flex items-center text-[10px] font-bold gap-1",
        trendColorClass 
      )}
    >
      <TrendIcon className="h-3 w-3" />
      <span>{data.trend}%</span>
      <span className="font-normal mr-1">
        {data.isIncrease ? "افزایش" : "کاهش"} نسبت به ماه گذشته
      </span>
    </div>
  </div>
</Card>
    
  );
}
