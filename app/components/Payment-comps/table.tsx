"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/Button";
import EyeIcon from "@/app/assets/icons/dashboard/EyeIcon";
import { UserData } from "@/app/services/mock/payment-service";
import { toPersianNumber } from "@/app/lib/Persian";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useMemo } from "react";
import { convertToDate } from "@/app/utils/convertDate";
import InfoModal from "../Modal/InfoModal";
import { ReservationData } from "../Modal/InfoModal";

interface UsersTableProps {
  data: UserData[];
  onViewDetails: (user: UserData) => void;
}

export function UsersTable({ data }: UsersTableProps) {
  const [sortDir, setSortDir] = useState<"asc" | "desc" | null>(null);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<ReservationData | null>(
    null,
  );
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const pageSize = 5;

  const toggleSort = () => {
    setSortDir((prev) =>
      prev === null ? "asc" : prev === "asc" ? "desc" : null,
    );
  };

  const sortedData = useMemo(() => {
    if (!sortDir) return data;

    return [...data].sort((a, b) => {
      const dateA = convertToDate(a.date);
      const dateB = convertToDate(b.date);
      if (!dateA || !dateB) return 0;

      return sortDir === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
  }, [data, sortDir]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, page]);

  if (data.length === 0) {
    return (
      <div className="text-center py-10 border rounded-xl bg-neutral-100 text-neutral-500">
        هیچ نتیجه‌ای یافت نشد.
      </div>
    );
  }
  return (
    <div className="rounded-xl shadow-sm overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-secondary-100">
          <TableRow className="hover:bg-orange-50/50 border-b border-gray-100">
            <TableHead className="text-right py-4 font-bold text-neutral-900">
              نام کاربری
            </TableHead>
            <TableHead className="text-right py-4 font-bold text-neutral-900">
              نام و نام خانوادگی
            </TableHead>
            <TableHead className="text-right py-4 font-bold text-neutral-900">
              مبلغ<span className="text-neutral-600 text-xs">(تومان)</span>
            </TableHead>
            <TableHead
              className="text-right cursor-pointer select-none py-4 font-bold text-neutral-900"
              onClick={toggleSort}
            >
              <div className="flex items-center gap-2">
                تاریخ
                {sortDir === null && (
                  <div className="flex w-12 h-6 bg-others-white1 shadow-sm">
                    <span className="text-xs flex flex-col justify-center pr-0.5">
                      A-Z
                    </span>
                    <ArrowUpDown className="" />
                  </div>
                )}
                {sortDir === "asc" && (
                  <div className="flex w-12 h-6 bg-others-white1 shadow-sm">
                    <span className="text-xs flex flex-col justify-center pr-0.5">
                      A-Z
                    </span>
                    <ArrowUp className="" />
                  </div>
                )}
                {sortDir === "desc" && (
                  <div className="flex w-12 h-6 bg-others-white1 shadow-sm">
                    <span className="text-xs flex flex-col justify-center pr-0.5">
                      A-Z
                    </span>
                    <ArrowDown className="" />
                  </div>
                )}
              </div>
            </TableHead>
            <TableHead className="text-center py-4 font-bold text-neutral-900">
              جزئیات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((user) => (
            <TableRow
              key={user.id}
              className="even:bg-gray-50 hover:bg-gray-100 border-b border-gray-50 transition-colors"
            >
              <TableCell className="py-4 font-medium text-neutral-900">
                {toPersianNumber(user.userName)}
              </TableCell>
              <TableCell className="py-4 text-neutral-900 font-medium">
                {user.fullName}
              </TableCell>
              <TableCell className="py-4 text-neutral-900">
                {toPersianNumber(user.price)}
              </TableCell>
              <TableCell className="py-4 text-neutral-900">
                {toPersianNumber(user.date)}
              </TableCell>
              <TableCell className="text-center py-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-gray-200 rounded-full w-8 h-8"
                  onClick={() => {
                    const modalData: ReservationData = {
                      name: user.fullName,
                      transactionId: user.userName,
                      trackingNumber: user.userName,
                      phone: user.phone,
                      status: user.status,
                      code: String(user.id),
                      date: user.date,
                      amount: user.price,
                      time: "-",
                    };

                    setSelectedUser(modalData);
                    setIsInfoOpen(true);
                  }}
                  title="مشاهده جزئیات"
                >
                  <EyeIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex p-4 bg-white">
        <span className="text-sm text-gray-400">
          {toPersianNumber(page)} -{" "}
          {toPersianNumber(totalPages)}
        </span>

        <div className="flex items-center justify-center gap-2 flex-1">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 rounded-lg hover:bg-gray-100 disabled:opacity-30"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </Button>

          <div className="flex items-center gap-1">
            {page > 1 && (
              <button
                className="w-8 h-8 rounded-lg text-sm text-neutral-400 hover:bg-primary-50 "
                onClick={() => setPage(page - 1)}
              >
                {toPersianNumber(page - 1)}
              </button>
            )}

            <button className="w-8 h-8 rounded-lg text-sm bg-primary-200 text-primary-900 font-bold ">
              {toPersianNumber(page)}
            </button>

            {page < totalPages && (
              <button
                className="w-8 h-8 rounded-lg text-sm text-neutral-800 hover:bg-primary-50"
                onClick={() => setPage(page + 1)}
              >
                {toPersianNumber(page + 1)}
              </button>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 rounded-lg hover:bg-gray-100 disabled:opacity-30"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
      </div>
      {selectedUser && isInfoOpen && (
        <InfoModal data={selectedUser} onClose={() => setIsInfoOpen(false)} />
      )}
    </div>
  );
}
