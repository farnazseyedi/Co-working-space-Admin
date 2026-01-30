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
import { Eye } from "lucide-react";
import { UserData } from "@/app/services/mock/payment-service";

import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { useState, useMemo } from "react";
import { convertToDate } from "@/app/utils/convertDate";
import InfoModal from "../Modal/InfoModal";
import { ReservationData } from "../Modal/InfoModal";

interface UsersTableProps {
  data: UserData[];
  onViewDetails: (user: UserData) => void;
}

export function UsersTable({ data}: UsersTableProps) {
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
      <div className="text-center py-10 border rounded-xl bg-gray-50 text-gray-500">
        هیچ نتیجه‌ای یافت نشد.
      </div>
    );
  }

  return (
    <div className="rounded-xl border shadow-sm overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-secondary-200">
          <TableRow>
            <TableHead className="text-right">نام کاربری</TableHead>
            <TableHead className="text-right"> نام و نام خانوادگی</TableHead>
            <TableHead className="text-right">مبلغ</TableHead>
            <TableHead
              className="text-right cursor-pointer select-none"
              onClick={toggleSort}
            >
              <div className="flex items-center gap-2">
                تاریخ
                {sortDir === null && (
                  <ArrowUpDown className="w-4 h-4 opacity-40" />
                )}
                {sortDir === "asc" && (
                  <ArrowUp className="w-4 h-4 text-primary-400" />
                )}
                {sortDir === "desc" && (
                  <ArrowDown className="w-4 h-4 text-primary-400" />
                )}
              </div>
            </TableHead>
            <TableHead className="text-center">جزییات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.price}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell className="text-center">
                <Button
                  size="icon"
                  onClick={() => {
                    const modalData = {
                      name: user.fullName,
                      transactionId: user.userName,
                      trackingNumber: user.userName,
                      phone: user.phone,
                      status: user.status,
                      code: user.id,
                      date: user.date,
                      amount: user.price,
                    };

                    setSelectedUser(modalData as any);
                    setIsInfoOpen(true);
                  }}
                  title="مشاهده جزئیات"
                  className="text-neutral-500 hover:text-secondary-600"
                >
                  <Eye className="w-5 h-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-center gap-3 p-4 border-t bg-gray-50">
        <span className="text-sm text-gray-600">
          {totalPages} - {page}
        </span>

        <div className="flex gap-2 space-x-5 text-center">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            قبلی
          </Button>
          <div className="flex gap-3 justify-center ">
            <p
              className="opacity-50 rounded-lg w-8 h-8 hover:bg-primary-300"
              onClick={() => setPage((p) => p - 1)}
            >
              {page - 1}
            </p>
            <p className="bg-primary-300 rounded-lg w-8 h-8 justify-center align-bottom text-center">
              {page}
            </p>
            <p
              className="opacity-50 rounded-lg w-8 h-8 hover:bg-primary-300"
              onClick={() => setPage((p) => p + 1)}
            >
              {page + 1}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            بعدی
          </Button>
        </div>
      </div>
      {selectedUser && isInfoOpen && (
        <InfoModal data={selectedUser} onClose={() => setIsInfoOpen(false)} />
      )}
    </div>
  );
}
