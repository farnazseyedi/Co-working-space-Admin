import EyeIcon from "@/app/assets/icons/dashboard/EyeIcon";
export interface Reservation {
  id: number;
  rowNumber: number;
  fullName: string;
  phone: string;
  service: string;
}

interface Props {
  reservations: Reservation[];
  onDetailClick: (reservation: Reservation) => void;
}

function TodayReservationsTable({ reservations, onDetailClick }: Props) {
  return (
    <div className="mx-4 mt-8">
      <div className="bg-white rounded-lg w-full shadow overflow-hidden">
        <table className="w-full text-sm table-fixed border-collapse">
          <thead className="bg-orange-50 text-gray-700">
            <tr className="text-center">
              <th className="py-3 px-4">ردیف</th>
              <th className="py-3 px-4">نام کاربری</th>
              <th className="py-3 px-4">شماره همراه</th>
              <th className="py-3 px-4">شماره رزرو</th>
              <th className="py-3 px-4">جزئیات</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {reservations.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-200 text-center"
              >
                <td className="py-4 px-4">{item.rowNumber}</td>
                <td className="py-4 px-4">{item.fullName}</td>
                <td className="py-4 px-4">{item.phone}</td>
                <td className="py-4 px-4">{item.service}</td>
                <td className="py-4 px-4">
                  <button
                    className="w-9 h-9 rounded-full mx-auto"
                    onClick={() => onDetailClick(item)}
                  >
                    <EyeIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodayReservationsTable;
