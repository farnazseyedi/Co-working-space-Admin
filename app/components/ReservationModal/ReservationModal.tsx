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
            <div className="bg-white rounded-xl w-[90%] max-w-lg p-6 relative font-sans">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-6 text-right">جزئیات رزرو</h2>

                <div className="space-y-4 text-sm text-right">
                    <p><strong>نام و نام خانوادگی:</strong> {data.name}</p>
                    <p>
                        <strong>تاریخ:</strong> {data.date} &nbsp;
                        — <strong>ساعت:</strong> {data.time}
                    </p>
                    <p><strong>مبلغ:</strong> {data.amount}</p>

                    <div className="grid grid-cols-2 gap-x-4">
                        <p><strong>شماره پیگیری:</strong> {data.trackingNumber}</p>
                        <p><strong>شماره تراکنش:</strong> {data.transactionId}</p>
                    </div>

                    <p>
                        <strong>شماره همراه:</strong>
                        <span className="text-blue-500 underline cursor-pointer">{data.phone}</span>
                    </p>
                    <p><strong>کد رزرو:</strong> {data.code}</p>
                    <p>
                        <strong>وضعیت رزرو:</strong>
                        <span className={`font-bold ${data.status === "موفق" ? "text-green-600" : "text-red-600"}`}>
                            {data.status}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReservationModal;
