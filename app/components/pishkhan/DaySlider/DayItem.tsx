import { DayItem as DayItemType } from "../../../data/days";
import { toPersianNumber } from "../../../utils/convertNumber";

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
        w-full px-3 py-3 text-center transition
        ${
          active
            ? " border border-orange-500 rounded-md"
            : "hover:bg-secondary-100"
        }
      `}
    >
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <div className="text-sm sm:text-md text-gray-600">
          {item.day}-{toPersianNumber(item.date)}
        </div>
        <div className="text-xs sm:text-sm">
          {item.status === "full" && (
            <span className="text-green-600">ظرفیت تکمیل</span>
          )}
          {item.status === "holiday" && (
            <span className="text-red-500">تعطیل رسمی</span>
          )}
          {item.status === "available" && (
            <span className="text-gray-700">
              {toPersianNumber(item.date ?? 0)} صندلی
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
