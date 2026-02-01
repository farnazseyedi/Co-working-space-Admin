"use client";

import { useState, useMemo } from "react";
import { MOCK_DATA } from "@/app/services/mock/payment-service";
import { UserData } from "@/app/services/mock/payment-service";
import { SearchFilters } from "@/app/components/Payment-comps/search-filter";
import { UsersTable } from "@/app/components/Payment-comps/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { convertToDate } from "@/app/utils/convertDate";

export default function SearchPage() {
  const [inputFilters, setInputFilters] = useState({
    fullName: "",
    userName: "",
    price: "",
    fromDate: "",
    toDate: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    fullName: "",
    userName: "",
    price: "",
    fromDate: "",
    toDate: "",
  });

  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilter = () => {
    setAppliedFilters(inputFilters);
  };

  const handleReset = () => {
    const emptyState = {
      fullName: "",
      userName: "",
      price: "",
      fromDate: "",
      toDate: "",
    };
    setInputFilters(emptyState);
    setAppliedFilters(emptyState);
  };

  const filteredData = useMemo(() => {
    return MOCK_DATA.filter((user) => {
      const filters = appliedFilters;

      const matchesName =
        !filters.fullName ||
        user.fullName.toLowerCase().includes(filters.fullName.toLowerCase());

      const matchesCode =
        !filters.userName ||
        user.userName.toLowerCase().includes(filters.userName.toLowerCase());

      const matchesPrice =
        !filters.price || String(user.price).includes(String(filters.price));

      const userDate = convertToDate(user.date);
      if (!userDate) return false;

      const fromDate = convertToDate(filters.fromDate);
      const toDate = convertToDate(filters.toDate);

      let matchesFromDate = true;
      let matchesToDate = true;

      if (fromDate) {
        matchesFromDate = userDate >= fromDate;
      }
      if (toDate) {
        toDate.setHours(23, 59, 59);
        matchesToDate = userDate <= toDate;
      }

      return (
        matchesName &&
        matchesCode &&
        matchesPrice &&
        matchesToDate &&
        matchesFromDate
      );
    });
  }, [appliedFilters]);

  const handleViewDetails = (user: UserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-others-white1 shadow-lg rounded-xl p-8 ">
      <div className="max-w-350 mx-auto space-y-6">
        <div className="flex justify-between items-center mb-4">
          <div></div>
        </div>

        <SearchFilters
          filters={inputFilters}
          onFilterChange={handleInputChange}
          onApply={handleApplyFilter}
          onReset={handleReset}
        />
        <h1 className="text-xl font-bold text-neutral-900">
          لیست آخرین تراکنش‌ها
        </h1>
        
        <UsersTable data={filteredData} onViewDetails={handleViewDetails} />
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>جزئیات کاربر</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
