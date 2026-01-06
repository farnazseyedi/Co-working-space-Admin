"use client";

import { useState } from "react";
import PaymentButtons from "../Button/PaymentButtons";

export type FAQItem = {
  question: string;
  answer: string;
  status: string;
  date: string;
  daysAgo: number;
  active: boolean;
  editable: boolean;
  publishMain: boolean;
  publishPopular: boolean;
};

type FAQAccordionProps = {
  data: FAQItem[];
  withButtons?: boolean;
};

export default function FAQAccordion({
  data,
  withButtons = false,
}: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("همه");

  const filters = [
    "همه",
    "تایید شده",
    "در انتظار تایید",
    "عدم تایید",
    "تاریخ امروز",
  ];

  const filterCounts: Record<string, number> = {
    همه: data.length,
    "تایید شده": data.filter((f) => f.status === "تایید شده").length,
    "در انتظار تایید": data.filter((f) => f.status === "در انتظار تایید")
      .length,
    "عدم تایید": data.filter((f) => f.status === "عدم تایید").length,
    "تاریخ امروز": data.filter((f) => f.daysAgo === 0).length,
  };

  const filteredFaqs = data.filter((f) => {
    if (filter === "همه") return true;
    if (filter === "تاریخ امروز") return f.daysAgo === 0;
    return f.status === filter;
  });

  const statusColor: Record<string, string> = {
    "تایید شده": "text-success-500",
    "در انتظار تایید": "text-neutral-500",
    "عدم تایید": "text-error-600",
  };

  return (
    <div>
      <div className="flex gap-2 mb-6 justify-start flex-wrap mt-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === f
                ? "bg-tertiary-500 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {f} ({filterCounts[f]})
          </button>
        ))}
      </div>

      <section className="space-y-3">
        {filteredFaqs.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl border-0.5 transition-all duration-300 overflow-hidden bg-neutral-50 shadow-md border-secondary-500"
          >
            <div className="absolute top-0 right-0 h-full w-1 bg-tertiary-500 rounded-tr-xl rounded-br-xl" />

            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center px-8 py-6 text-left text-neutral-900 font-medium focus:outline-none"
            >
              <div className="text-xl flex flex-col gap-2">
                <div className="flex gap-4 justify-between">
                  <div>{item.question}</div>
                </div>
                <div className="flex text-neutral-400 text-sm">
                  ارسال شده از {item.daysAgo} روز پیش | {item.date}
                </div>
              </div>

              <div className="flex text-xl gap-5">
                <div className={`${statusColor[item.status]}`}>
                  {item.status}
                </div>
                <div
                  className={`transform transition-transform duration-300 scale-x-175 ${
                    statusColor[item.status]
                  } ${activeIndex === index ? "rotate-0" : "rotate-180"}`}
                >
                  ^
                </div>
              </div>
            </button>

            <div
              style={{
                maxHeight: activeIndex === index ? "500px" : "0",
                opacity: activeIndex === index ? 1 : 0,
                transition: "all 0.3s ease",
              }}
              className="px-5 overflow-hidden"
            >
              <div className="h-px bg-neutral-300 flex-1"></div>
              <p className="text-gray-700 text-sm py-2">{item.answer}</p>
              <div className="h-px bg-neutral-300 flex-1"></div>

              {withButtons && (
                <div className="mb-7 mt-7">
                  <PaymentButtons />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
