"use client";
import { useState } from "react";
import NavigatinBar from "../components/Navigation/NavigationBar";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("همه");

  const faqs = [
    {
      question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟",
      answer: "Answer 1...",
      status: "تایید شده",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
    {
      question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟",
      answer: "Answer 2...",
      status: "در انتظار تایید",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
    {
      question: "یک سوال که برای فضای کار اشتراکی مکین استفاده می‌شود؟",
      answer: "Answer 3...",
      status: "عدم تایید",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
  ];

  const statusColor: Record<string, string> = {
    "تایید شده": "text-green-500",
    "در انتظار تایید": "text-gray-500",
    "عدم تایید": "text-red-500",
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filters = [
    "همه",
    "تایید شده",
    "در انتظار تایید",
    "عدم تایید",
    "تاریخ امروز",
  ];

  const filterCounts: Record<string, number> = {
    همه: faqs.length,
    "تایید شده": faqs.filter((f) => f.status === "تایید شده").length,
    "در انتظار تایید": faqs.filter((f) => f.status === "در انتظار تایید")
      .length,
    "عدم تایید": faqs.filter((f) => f.status === "عدم تایید").length,
    "تاریخ امروز": faqs.filter((f) => f.daysAgo === 0).length,
  };

  const filteredFaqs = faqs.filter((f) => {
    if (filter === "همه") return true;
    if (filter === "تاریخ امروز") return f.daysAgo === 0;
    return f.status === filter;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigatinBar />

      {/* 🟦 این بخش مثل Dashboard هست */}
      <div className="mr-64 p-6">
        <div className="flex gap-2 mb-6 justify-start flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === f
                  ? "bg-blue-500 text-white"
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
              <div className="absolute top-0 right-0 h-full w-1 bg-blue-500 rounded-tr-xl rounded-br-xl"></div>

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left text-gray-900 font-medium focus:outline-none"
              >
                <div className="text-xl flex flex-col gap-2">
                  <span className="flex items-center gap-4">
                    <span>{item.question}</span>
                    <span
                      className={`${
                        statusColor[item.status]
                      } text-sm font-semibold`}
                    >
                      ({item.status})
                    </span>
                  </span>
                  <span className="text-gray-400 text-sm">
                    ارسال شده از {item.daysAgo} روز پیش | {item.date}
                  </span>
                </div>
                <span
                  className={`transform transition-transform duration-300 scale-x-175 ${
                    statusColor[item.status]
                  } ${activeIndex === index ? "rotate-0" : "rotate-180"}`}
                >
                  ^
                </span>
              </button>

              <div
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  opacity: activeIndex === index ? 1 : 0,
                  transition: "all 0.3s ease",
                }}
                className="px-5 overflow-hidden"
              >
                <hr className="border-gray-300 mb-3" />
                <p className="text-gray-700 text-sm py-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
