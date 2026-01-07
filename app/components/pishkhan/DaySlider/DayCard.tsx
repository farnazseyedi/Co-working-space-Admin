import { DayItem as DayItemType } from "../../../data/days";

type Props = {
  item: DayItemType;
  active: boolean;
  onClick: () => void;
};

export default function DayItem({ item, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-2 text-center
        transition
        hover:bg-orange-100
        ${active ? "border border-orange-500 rounded-md" : ""}
      `}
    >
      <div className="flex flex-col items-center relative">
        <div className="text-gray-600">
          {item.day}-{item.date}
        </div>
        <div>
          {item.status === "full" && (
            <span className="text-green-600">ظرفیت تکمیل</span>
          )}
          {item.status === "holiday" && (
            <span className="text-red-500">تعطیل رسمی</span>
          )}
          {item.status === "available" && (
            <span className="text-gray-700">{item.seats} صندلی</span>
          )}
        </div>
      </div>
    </button>
  );
}
