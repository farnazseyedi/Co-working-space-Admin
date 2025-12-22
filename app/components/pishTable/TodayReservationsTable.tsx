import React from 'react';

interface Reservation {
    id: number;
    rowNumber: string;
    fullName: string;
    phone: string;
    service: string;
    profileIcon?: boolean;
}

interface TodayReservationsTableProps {
    reservations: Reservation[];
    title?: string;
}

const TodayReservationsTable: React.FC<TodayReservationsTableProps> = ({
    reservations
}) => {
    return (
        <div className="mx-4 mt-8">

            <div className="bg-white rounded-lg w-full shadow overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-orange-50 text-gray-700">
                        <tr className="text-right">
                            <th className="py-3 px-4">ردیف</th>
                            <th className="py-3 px-4">نام کاربری</th>
                            <th className="py-3 px-4">شماره همراه</th>
                            <th className="py-3 px-4">نام و نام خانوادگی</th>
                            <th className="py-3 px-4">شماره رزرو</th>
                            <th className="py-3 px-4">جزئیات</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {reservations.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-8 text-gray-500">
                                    هیچ رزروئی برای امروز ثبت نشده است.
                                </td>
                            </tr>
                        ) : (
                            reservations.map((item) => (
                                <tr key={item.id} className="border-t text-center">
                                    <td className="py-4 px-4">{item.rowNumber}</td>
                                    <td className="py-4 px-4 dir-ltr">{item.phone}</td>
                                    <td className="py-4 px-4">{item.phone}</td>
                                    <td className="py-4 px-4">{item.fullName}</td>
                                    <td className="py-4 px-4">{item.service}</td>
                                    <td className="py-4 px-4">
                                        <div className="w-9 h-9 rounded-full border-2 border-gray-300 mx-auto" />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodayReservationsTable;