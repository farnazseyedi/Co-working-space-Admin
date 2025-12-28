"use client";
import { useState } from "react";
import NavigatinBar from "../components/Navigation/NavigationBar";
import { MessageButtons } from "../components/Button/MessageButtons";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("همه");

  const faqs = [
    {
      question: "رسید واریز وجه | محمدمهدی حسن‌پور",
      answer: "Answer 1...",
      status: "تایید شده",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
    {
      question: "رسید واریز وجه | محمدمهدی حسن‌پور",
      answer: "Answer 2...",
      status: "در انتظار تایید",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
    {
      question: "رسید واریز وجه | محمدمهدی حسن‌پور",
      answer: "Answer 3...",
      status: "عدم تایید",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
    {
      question: "رسید واریز وجه | محمدمهدی حسن‌پور",
      answer: "Answer 3...",
      status: "در انتظار تایید",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
    {
      question: "رسید واریز وجه | محمدمهدی حسن‌پور",
      answer: "Answer 3...",
      status: "عدم تایید",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
    {
      question: "رسید واریز وجه | محمدمهدی حسن‌پور",
      answer: "Answer 3...",
      status: "تایید شده",
      date: "۱۴۰۴/۰۷/۰۷",
      daysAgo: 5,
    },
  ];

  const statusColor: Record<string, string> = {
    "تایید شده": "text-success-500",
    "در انتظار تایید": "text-neutral-500",
    "عدم تایید": "text-error-600",
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

      <div className="mr-64 p-6">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-center">
          <h1 className="text-lg font-bold">پیام ها</h1>
        </header>
        <div className="flex justify-end">
          <MessageButtons />
        </div>
        <div className="flex items-center mt-7 gap-4">
          <div className="text-neutral-900 text-xl font-bold">
            صندوق پیام‌ها
          </div>
          <div className="h-px bg-neutral-400 flex-1"></div>
        </div>

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
              <div className="absolute top-0 right-0 h-full w-1 bg-tertiary-500 rounded-tr-xl rounded-br-xl"></div>

              <button
                onClick={() => toggleFAQ(index)}
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
