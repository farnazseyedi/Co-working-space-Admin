"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/Button";

import { Switch } from "@/app/components/ui/switch";
import { ChevronLeft, ChevronRight, Edit, Plus } from "lucide-react";
import { toPersianNumber } from "@/app/lib/Persian";
import { Discounts } from "@/app/services/mock/discount-service";
import { CreateDiscountModal } from "./add-code";
import { EditDiscountModal } from "./edit-code";

interface RedeemTableProps {
  data: Discounts[];
}

export default function RedeemTable({ data }: RedeemTableProps) {
  const [page, setPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Discounts | null>(null);
  const pageSize = 5;

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page]);

  const [statuses, setStatuses] = useState<{ [key: string]: boolean }>(() => {
    const initial: { [key: string]: boolean } = {};
    data.forEach((item) => {
      if (item.status !== "منقضی شده") {
        initial[item.id] = item.status === "فعال";
      }
    });
    return initial;
  });

  const [masterDisabled, setMasterDisabled] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between space-y-3 mt-5">
        <h1 className="font-bold text-lg">سایر کد های تخفیف</h1>
        <div className="bg-neutral-400 h-px w-[88%]"></div>
      </div>
      <div className="flex justify-end ">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className=" text-primary-600 border border-primary-600 rounded-lg py-2 px-3 hover:bg-primary-50 transition-colors"
        >
          <div className="flex gap-2 pl-3 items-center">
            <Plus />
            <p className="text-md"> ایجاد کد تخفیف جدید</p>
          </div>
        </button>
      </div>
      <div className="flex mt-3 items-center justify-between bg-white p-4 rounded-md border border-gray-100">
        <h1 className="font-bold text-lg text-neutral-900">همه کدهای تخفیف</h1>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-neutral-700">
            غیرفعال کردن همه
          </span>
          <Switch
            checked={masterDisabled}
            onCheckedChange={setMasterDisabled}
          />
        </div>
      </div>
      <div className="rounded-md shadow-sm overflow-hidden bg-white border border-neutral-100">
        <Table>
          <TableHeader className="bg-[#FFF8F0]">
            <TableRow className="hover:bg-[#FFF8F0] border-b border-gray-100">
              <TableHead className="text-right py-4 font-bold text-neutral-900 w-20">
                ردیف
              </TableHead>
              <TableHead className="text-right py-4 font-bold text-neutral-900">
                وضعیت
              </TableHead>
              <TableHead className="text-center py-4 font-bold text-neutral-900">
                کد تخفیف
              </TableHead>
              <TableHead className="text-center py-4 font-bold text-neutral-900">
                از تاریخ
              </TableHead>
              <TableHead className="text-center py-4 font-bold text-neutral-900">
                تا تاریخ
              </TableHead>
              <TableHead className="text-center py-4 font-bold text-neutral-900">
                ویرایش
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item, index) => {
              const rowNumber = (page - 1) * pageSize + (index + 1);
              const formattedRowNumber =
                rowNumber < 10 ? `0${rowNumber}` : `${rowNumber}`;

              const isExpired = item.status === "منقضی شده";
              const itemId = item.id;
              const individualChecked = statuses[itemId] ?? false;
              const effectiveChecked = masterDisabled
                ? false
                : individualChecked;
              const effectiveStatus = effectiveChecked ? "فعال" : "غیرفعال";

              return (
                <TableRow
                  key={item.id}
                  className="even:bg-white hover:bg-gray-50 border-b border-gray-50 transition-colors h-16"
                >
                  <TableCell className="py-4 font-medium text-neutral-900">
                    {toPersianNumber(formattedRowNumber)}
                  </TableCell>

                  <TableCell className="py-4">
                    <div className="flex items-center gap-2">
                      {isExpired ? (
                        <span className="text-red-500 font-medium text-sm">
                          منقضی شده
                        </span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-900 text-sm font-medium w-12 text-right">
                            {effectiveStatus}
                          </span>
                          <Switch
                            checked={effectiveChecked}
                            disabled={masterDisabled}
                            onCheckedChange={(checked) =>
                              setStatuses((prev) => ({
                                ...prev,
                                [itemId]: checked,
                              }))
                            }
                          />
                        </div>
                      )}
                    </div>
                  </TableCell>

                  <TableCell className="py-4 text-neutral-900 text-center font-medium">
                    {item.discountCode}
                  </TableCell>

                  <TableCell className="py-4 text-neutral-900 text-center dir-ltr">
                    {toPersianNumber(item.fromDate)}
                  </TableCell>

                  <TableCell className="py-4 text-neutral-900 text-center font-medium dir-ltr">
                    {toPersianNumber(item.toDate)}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-gray-100 w-9 h-9"
                      title="ویرایش"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditingItem(item);
                      }}
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </Button>
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
      <CreateDiscountModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditDiscountModal
        item={editingItem}
        onClose={() => setEditingItem(null)}
      />
    </div>
  );
}
