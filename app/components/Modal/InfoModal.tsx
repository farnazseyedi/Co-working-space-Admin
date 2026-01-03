import React, { useState } from "react";
import copy from "clipboard-copy";
import { CalendarIcon } from "@/app/assets/icons";
import { ClockIcon } from "@/app/assets/icons";
import { CloseIcon } from "@/app/assets/icons";
import { CoinIcon } from "@/app/assets/icons";
import { CopyIcon } from "@/app/assets/icons";
import { UserIcon } from "@/app/assets/icons";
import VerticalDividerIcon from "@/app/assets/icons/modal/VerticalDividerIcon";
export interface ReservationData {
  name: string;
  date: string;
  time: string;
  amount: string;
  trackingNumber: string;
  transactionId: string;
  phone: string;
  code: string;
  status: string;
  text?: string;
}

interface Props {
  data: ReservationData;
  onClose: () => void;
}

function InfoModal({ data, onClose }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [showFullPhone, setShowFullPhone] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(data.transactionId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  const maskPhone = (phone?: string): string => {
    if (!phone || phone.length <= 5) return phone ?? "";
    const start = phone.slice(0, 3);
    const end = phone.slice(-2);
    const stars = "*".repeat(phone.length - 5);
    return `${start}${stars}${end}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl flex flex-col w-110 h-140 p-6 relative gap-4">
        <div className="mt-1.5">
          <button
            className="absolute top-4 right-4 px-2.5 py-0 border-none hover:opacity-45 text-lg"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex justify-between mt-10">
          <div>
            <h2 className="text-2xl mb-6 text-right">جزئیات رزرو</h2>
          </div>
          <div className="flex text-gray-400">
            {data.date}-{data.time}
            <ClockIcon className="mt-1 mr-1" />
          </div>
        </div>

        <div className="space-y-4 text-ml text-right">
          <div>
            <div className="flex">
              <UserIcon />
              نام و نام خانوادگی:
            </div>
            <div className="border w-47 border-gray-300 rounded-md mt-2 flex justify-center">
              {data.name}
            </div>
          </div>

          <div className="flex mt-10">
            <div>
              <div className="flex">
                <CalendarIcon />
                تاریخ:
              </div>
              <div className="mt-3 border border-gray-400 rounded-md flex justify-center px-4 py-0.5">
                {data.date}
              </div>
            </div>
            <div className="mr-25">
              <div className="flex">
                <CoinIcon />
                مبلغ:
              </div>
              <div className="mt-3 border border-gray-300 rounded-md flex justify-center px-4 py-0.5">
                {data.amount} تومان
              </div>
            </div>
          </div>

          <div className="flex mt-10 justify-between">
            <div>
              شماره پیگیری:
              <div className="mt-4 border text-sm border-gray-300 rounded-md flex justify-center">
                {data.trackingNumber}
              </div>
            </div>

            <div>
              شماره تراکنش:
              <div className="flex justify-center items-center">
                <div className="mt-4 border border-gray-300 rounded-md flex items-center justify-between px-4 py-0.5">
                  <div className="text-sm">{data.transactionId}</div>
                </div>
                <div className="relative inline-block">
                  <div className="flex justify-center items-center mt-3.5 mr-2">
                    <button
                      onClick={handleCopyClick}
                      className="text-sm text-blue-600 flex items-center gap-1 cursor-pointer"
                    >
                      <CopyIcon />
                    </button>
                  </div>

                  {isCopied && (
                    <span
                      className="absolute -top-4 right-1/2 translate-x-1/2
      bg-secondary-100 text-xs px-2 py-1 rounded
      whitespace-nowrap pointer-events-none"
                    >
                      کپی شد
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <div className="flex justify-center flex-col">
              <div>وضعیت رزرو:</div>
              <div
                className={`${
                  data.status === "موفق" ? "text-green-600" : "text-red-600"
                } mt-4 flex justify-center`}
              >
                {data.status}
              </div>
            </div>

            <VerticalDividerIcon />

            <div className="flex justify-center flex-col">
              <div>کد رزرو:</div>
              <div className="mt-4 flex justify-center">{data.code}</div>
            </div>

            <VerticalDividerIcon />

            <div>
              <div>شماره همراه:</div>
              <div
                className="text-neutral-800 underline mt-4"
                style={{ direction: "ltr" }}
              >
                {showFullPhone ? data.phone : maskPhone(data.phone)}
              </div>
              <div
                className="text-xs text-info-500 cursor-pointer mt-1"
                onClick={() => setShowFullPhone((prev) => !prev)}
              >
                {showFullPhone ? "مخفی کردن" : "نمایش کامل"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
