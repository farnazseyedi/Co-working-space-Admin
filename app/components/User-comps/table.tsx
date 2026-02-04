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
import { Edit } from "lucide-react";
import { UserData } from "@/app/services/mock/payment-service";
import { toPersianNumber } from "@/app/lib/Persian";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";

interface UsersTableProps {
  data: UserData[];
  onViewDetails?: (user: UserData) => void;
}

export function UsersTable({ data }: UsersTableProps) {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page]);

  if (data.length === 0) {
    return (
      <div className="text-center py-10 border rounded-xl bg-neutral-100 text-neutral-500">
        هیچ نتیجه‌ای یافت نشد.
      </div>
    );
  }

  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-secondary-100">
          <TableRow className="hover:bg-orange-50/50 border-b border-gray-100">
            <TableHead className="text-right py-4 font-bold text-neutral-900">
              ردیف
            </TableHead>
            <TableHead className="text-right py-4 font-bold text-neutral-900">
              نام کاربری
            </TableHead>
            <TableHead className="text-right py-4 font-bold text-neutral-900">
              نام و نام خانوادگی
            </TableHead>
            <TableHead className="text-right py-4 font-bold text-neutral-900">
              شماره همراه
            </TableHead>
            <TableHead className="text-center py-4 font-bold text-neutral-900">
              ویرایش
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((user, index) => {
            const rowNumber = (page - 1) * pageSize + (index + 1);
            const formattedRowNumber =
              rowNumber < 10 ? `0${rowNumber}` : `${rowNumber}`;

            return (
              <TableRow
                key={user.id}
                className="even:bg-gray-50 hover:bg-gray-100 border-b border-gray-50 transition-colors"
              >
                <TableCell className="py-4 font-medium text-neutral-900">
                  {toPersianNumber(formattedRowNumber)}
                </TableCell>
                <TableCell className="py-4 font-medium text-neutral-900">
                  {toPersianNumber(user.userName)}
                </TableCell>
                <TableCell className="py-4 text-neutral-900 font-medium">
                  {user.fullName}
                </TableCell>
                <TableCell className="py-4 text-neutral-900">
                  {toPersianNumber(user.phone)}
                </TableCell>

                <TableCell className="text-center py-4">
                  <Link href={`/pages/userManagement/${user.id}/edit`}>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-gray-200 rounded-full w-8 h-8"
                      title="ویرایش"
                    >
                      <Edit />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex p-4 bg-white">
        <span className="text-sm text-gray-400">
          {toPersianNumber(page)} - {toPersianNumber(totalPages)}
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
    </div>
  );
}
