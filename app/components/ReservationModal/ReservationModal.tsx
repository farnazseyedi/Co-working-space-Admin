// ReservationModal.tsx
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
            <div className="bg-white rounded-lg w-[90%] max-w-lg p-6 relative">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-900" onClick={onClose}>
                    ✕
                </button>
                <h2 className="text-xl font-bold mb-4">جزئیات رزرو</h2>
                <div className="space-y-2 text-sm">
                    <p><strong>نام و نام خانوادگی:</strong> {data.name}</p>
                    <p><strong>تاریخ:</strong> {data.date} — <strong>ساعت:</strong> {data.time}</p>
                    <p><strong>مبلغ:</strong> {data.amount}</p>
                    <p><strong>شماره پیگیری:</strong> {data.trackingNumber}</p>
                    <p><strong>شماره تراکنش:</strong> {data.transactionId}</p>
                    <p><strong>شماره همراه:</strong> {data.phone}</p>
                    <p><strong>کد رزرو:</strong> {data.code}</p>
                    <p><strong>وضعیت رزرو:</strong> {data.status}</p>
                </div>
            </div>
        </div>
    );
};

export default ReservationModal;
