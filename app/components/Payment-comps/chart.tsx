"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "@/app/lib/types/payment";
import { toPersianNumber } from "@/app/utils/convertNumber";
import { TooltipPayloadItem } from "@/app/services/mock/payment";
const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative -top-4">
        <div className="bg-[#90D0EB] text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm">
          {toPersianNumber(payload[0].value?.toLocaleString() || "")}
        </div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-1.5 w-0 h-0 
          border-l-6 border-l-transparent
          border-r-6 border-r-transparent
          border-t-8 border-t-[#8ecae6]"
        ></div>
      </div>
    );
  }
  return null;
};

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: ChartDataPoint;
}

const CustomizedDot = ({ cx, cy }: CustomDotProps) => {
  if (cx === undefined || cy === undefined) return null;
  const chartHeight = 300;

  return (
    <g>
      <line
        x1={cx}
        y1={cy}
        x2={cx}
        y2={cy + chartHeight}
        stroke="url(#verticalLineGradient)"
        strokeWidth={2}
      />

      <svg
        x={cx - 12}
        y={cy - 12}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className="overflow-visible"
      >
        <circle cx="12" cy="12" r="9" fill="#ffffff" />
        <circle cx="12" cy="12" r="7" fill="#2b3438" />
        <circle cx="12" cy="12" r="3" fill="#ffffff" />
      </svg>
    </g>
  );
};

interface PaymentChartProps {
  data: ChartDataPoint[];
}

export default function PaymentChart({ data }: PaymentChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const step = Math.ceil(maxValue / 10);
  const yTicks = Array.from({ length: 11 }, (_, i) => i * step);

  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-neutral-800 text-lg">آمار تراکنش‌ها</h3>
          <p className="text-xs text-neutral-400 font-medium">
            گزارش وضعیت مالی در بازه انتخاب شده
          </p>
        </div>
      </div>

      <div className="h-87.5 w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 0, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="10%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>

              <linearGradient
                id="verticalLineGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#36A8D9" stopOpacity={0.5} />
                <stop offset="80%" stopColor="#36A8D9" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              dy={10}
              interval={0}
              padding={{ left: 30, right: 30 }}
            />

            <YAxis
              ticks={yTicks}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "transparent",
                fontSize: 0,
              }}
              width={0}
              domain={[0, yTicks[yTicks.length - 1]]}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#36A8D9"
              strokeWidth={3}
              fill="url(#chartGradient)"
              dot={<CustomizedDot />}
              activeDot={<CustomizedDot />}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
