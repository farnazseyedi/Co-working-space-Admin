"use client";

import { useState } from "react";
import AddFAQModal from "../Modal/AddFAQModal";
import { FAQItem } from "./F&Q";
import PenIcon from "@/app/assets/icons/contentManagement/PenIcon";
import TrashIcon from "@/app/assets/icons/contentManagement/TrashIcon";
import { FeatureCheckbox } from "../notification/CheckBox";
import { PlusIcon } from "@/app/assets/icons";
import IOSSwitch from "../../components/F&Q/Toggle";

type FAQAccordionProps = {
  data?: FAQItem[];
};

type NewFAQData = Pick<
  FAQItem,
  "question" | "answer" | "publishMain" | "publishPopular"
>;

const statusColor: Record<string, string> = {
  بیشتر: "text-primary-500",
  کمتر: "text-primary-500",
};

export default function FAQAccordion({ data }: FAQAccordionProps) {
  const safeData: FAQItem[] = Array.isArray(data) ? data : [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [modalData, setModalData] = useState({
    question: "",
    answer: "",
    publishMain: false,
    publishPopular: false,
  });

  const [items, setItems] = useState<FAQItem[]>(
    safeData.map((item) => ({
      ...item,
      active: item.active ?? false,
      editable: item.editable ?? false,
      publishMain: item.publishMain ?? false,
      publishPopular: item.publishPopular ?? false,
      status: item.status ?? "بیشتر",
    }))
  );

  const toggleField = <K extends keyof FAQItem>(
    field: K,
    index: number,
    val?: FAQItem[K]
  ) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, [field]: val !== undefined ? val : !item[field] }
          : item
      )
    );
  };

  const setStatusToLess = (index: number) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, status: "کمتر" } : item))
    );
  };

  const setStatusToMore = (index: number) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, status: "بیشتر" } : item))
    );
  };

  const removeFAQ = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
    if (activeIndex === index) setActiveIndex(null);
  };

  const addNewFAQ = (data: NewFAQData) => {
    setItems((prev) => [
      {
        ...data,
        status: "بیشتر",
        date: "",
        daysAgo: 0,
        active: true,
        editable: false,
      },
      ...prev,
    ]);
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setOpenModal(true)}
          className="flex bg-primary-500 text-white px-6 py-3 rounded-sm hover:opacity-80 transition-opacity"
        >
          <PlusIcon />
          ایجاد سوال جدید
        </button>
      </div>

      <section className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden bg-neutral-50 ${
              !item.active ? "opacity-50" : ""
            } shadow-md`}
          >
            <div className="absolute top-0 right-0 h-full w-1 bg-tertiary-500" />

            <button
              onClick={() => {
                const isOpening = activeIndex !== index;
                setActiveIndex(isOpening ? index : null);

                if (isOpening) {
                  setStatusToLess(index);
                } else {
                  setStatusToMore(index);
                }
              }}
              className="w-full flex justify-between items-center px-8 py-4 text-right"
            >
              <div>
                <div className="text-lg">{item.question || "سوال جدید"}</div>
                <div className="text-sm text-neutral-400">
                  {item.date}
                  {item.publishMain
                    ? "انتشار در صفحه اصلی"
                    : "عدم انتشار در صفحه اصلی"}
                  |
                  {item.publishPopular
                    ? "انتشار در سوالات پرتکرار"
                    : "عدم انتشار در سوالات پرتکرار"}
                  |{item.active ? "فعال" : "غیرفعال"}
                </div>
              </div>

              <div className="flex text-xl gap-5">
                <div className={statusColor[item.status]}>{item.status}</div>
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
                maxHeight: activeIndex === index ? "700px" : "0",
                opacity: activeIndex === index ? 1 : 0,
                transition: "all 0.3s ease",
              }}
              className="overflow-hidden px-5"
            >
              <div className="my-3 h-px bg-neutral-300" />

              <div className="flex justify-end mb-3">
                <TrashIcon className="stroke-error-500" />
                <button
                  onClick={() => removeFAQ(index)}
                  className="text-error-500 text-md font-bold"
                >
                  حذف سوال
                </button>
              </div>

              <div className="relative mb-3">
                <div className="mb-2">
                  <label>تغییر سوال</label>
                </div>
                <input
                  placeholder="متن برای نمونه"
                  value={item.question}
                  disabled={!item.editable}
                  onChange={(e) =>
                    toggleField("question", index, e.target.value)
                  }
                  className={`w-full border rounded-md px-3 py-2 mb-2 ${
                    !item.editable
                      ? "bg-neutral-100 border border-neutral-400 cursor-not-allowed"
                      : ""
                  }`}
                />

                <div className="mb-2">
                  <label>تغییر جواب</label>
                </div>
                <input
                  placeholder="متن برای نمونه"
                  value={item.answer}
                  disabled={!item.editable}
                  onChange={(e) => toggleField("answer", index, e.target.value)}
                  className={`w-full border rounded-md px-3 py-2 resize-none ${
                    !item.editable
                      ? "bg-neutral-100 border border-neutral-400 cursor-not-allowed"
                      : ""
                  }`}
                />

                {!item.editable && (
                  <button
                    type="button"
                    onClick={() => toggleField("editable", index, true)}
                    className="absolute left-1 top-10 text-neutral-500 hover:text-neutral-700"
                  >
                    <PenIcon />
                  </button>
                )}
              </div>

              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <FeatureCheckbox
                    value={!!item.publishMain}
                    onChange={(value) =>
                      toggleField("publishMain", index, value)
                    }
                  />
                  <span>انتشار در صفحه اصلی</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <FeatureCheckbox
                    value={!!item.publishPopular}
                    onChange={(value) =>
                      toggleField("publishPopular", index, value)
                    }
                  />
                  <span>انتشار در سوالات پرتکرار</span>
                </div>
              </div>

              <div className="flex justify-between gap-3 mt-6 mb-5">
                <div className="flex gap-4 mt-3 mb-3 mr-2">
                  <button
                    onClick={() => toggleField("editable", index, false)}
                    className="bg-primary-500 text-white px-4 py-2 rounded-md"
                  >
                    ذخیره تغییرات
                  </button>
                  <button
                    onClick={() => toggleField("editable", index, false)}
                    className="border border-primary-500 px-6 text-primary-500 py-2 rounded-md mr-1.5"
                  >
                    انصراف
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <div>وضعیت سوال :{item.active ? "فعال" : "غیرفعال"}</div>

                  <IOSSwitch
                    sx={{ m: 1 }}
                    checked={item.active}
                    onChange={(e) =>
                      toggleField("active", index, e.target.checked)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <AddFAQModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        question={modalData.question}
        answer={modalData.answer}
        publishMain={modalData.publishMain}
        publishPopular={modalData.publishPopular}
        onQuestionChange={(val) =>
          setModalData((prev) => ({ ...prev, question: val }))
        }
        onAnswerChange={(val) =>
          setModalData((prev) => ({ ...prev, answer: val }))
        }
        onPublishMainChange={(val) =>
          setModalData((prev) => ({ ...prev, publishMain: val }))
        }
        onPublishPopularChange={(val) =>
          setModalData((prev) => ({ ...prev, publishPopular: val }))
        }
        onSave={(data) => {
          addNewFAQ(data);
          setModalData({
            question: "",
            answer: "",
            publishMain: false,
            publishPopular: false,
          });
          setOpenModal(false);
        }}
      />
    </div>
  );
}
