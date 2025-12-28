import React, { useState } from "react";
import copy from "clipboard-copy";

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

function ReservationModal({ data, onClose }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [showFullPhone, setShowFullPhone] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(data.transactionId);
      setIsCopied(true);
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
            className="absolute top-4 right-4 text-black rounded-xl border-black px-2.5 py-0 border-2 hover:opacity-45 text-lg"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="flex justify-between mt-10">
          <div>
            <h2 className="text-2xl mb-6 text-right">جزئیات رزرو</h2>
          </div>
          <div className="text-gray-400">
            {data.date}-{data.time}
          </div>
        </div>

        <div className="space-y-4 text-ml text-right">
          <div>
            نام و نام خانوادگی:
            <div className="border w-47 border-gray-300 rounded-md mt-2 flex justify-center">
              {data.name}
            </div>
          </div>

          <div className="flex mt-10">
            <div>
              تاریخ:
              <div className="mt-4 border border-gray-300 rounded-md flex justify-center px-4 py-0.5">
                {data.date}
              </div>
            </div>
            <div className="mr-25">
              مبلغ:
              <div className="mt-4 border border-gray-300 rounded-md flex justify-center px-4 py-0.5">
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
                <button
                  onClick={handleCopyClick}
                  className="text-sm text-blue-600"
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
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

            <div className="w-px h-20 bg-neutral-400 mx-4"></div>

            <div className="flex justify-center flex-col">
              <div>کد رزرو:</div>
              <div className="mt-4 flex justify-center">{data.code}</div>
            </div>

            <div className="w-px h-20 bg-neutral-400 mx-4"></div>

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

export default ReservationModal;
