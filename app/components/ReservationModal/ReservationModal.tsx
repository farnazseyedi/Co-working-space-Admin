import React from "react";

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
}

interface Props {
  data: ReservationData;
  onClose: () => void;
}

const ReservationModal: React.FC<Props> = ({ data, onClose }) => {
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
            <div className="border border-gray-300 rounded-md mt-2">
              {data.name}
            </div>
          </div>
          <div className="flex mt-10">
            <div>
              تاریخ:
              <div className="mt-4">{data.date}</div>
            </div>
            <div className="mr-32">
              {" "}
              مبلغ:
              <div className="mt-4">{data.amount} تومان</div>
            </div>
          </div>

          <div className="flex mt-10">
            <div>
              {" "}
              شماره پیگیری:
              <div className="mt-4">{data.trackingNumber}</div>
            </div>
            <div className="mr-17">
              {" "}
              شماره تراکنش:
              <div className="mt-4">{data.transactionId}</div>
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

            <div className="flex justify-center flex-col">
              <div>کد رزرو:</div>
              <div className="mt-4 flex justify-center">{data.code}</div>
            </div>
            <div>
              <div>شماره همراه:</div>
              <div className="text-blue-500 underline cursor-pointer mt-4">
                {data.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
