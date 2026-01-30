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
import PersianCalendar from "../pishkhan/pishTable/PersianCalendar";
import InfoModal from "../Modal/InfoModal";

export default function SearchPage() {
  const [filters, setFilters] = useState({
    fullName: "",
    userName: "",
    price: "",
    fromDate: "",
    toDate: "",
  });

  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    const newValue = value === "all" ? "" : value;
    setFilters((prev) => ({ ...prev, [key]: newValue }));
  };

  const handleReset = () => {
    setFilters({
      fullName: "",
      userName: "",
      price: "",
      fromDate: "",
      toDate: "",
    });
  };
  const filteredData = useMemo(() => {
    return MOCK_DATA.filter((user) => {
      const matchesName =
        !filters.fullName ||
        user.fullName.toLowerCase().includes(filters.fullName.toLowerCase());

      const matchesCode =
        !filters.userName ||
        user.userName.toLowerCase().includes(filters.userName.toLowerCase());

      const matchesPrice =
        !filters.price || String(user.price) === String(filters.price);

      const userDate = convertToDate(user.date);
      if (!userDate) return false;
      const fromDate = convertToDate(filters.fromDate);
      const toDate = convertToDate(filters.toDate);
      let matchesFromDate = true;
      let matchesToDate = true;
      if(fromDate){
        matchesFromDate = userDate >= fromDate;
      }
      if(toDate){
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
  }, [filters]);

  const handleViewDetails = (user: UserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          لیست اخرین تراکنش ها
        </h1>

        <SearchFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
        />

        <UsersTable data={filteredData} onViewDetails={handleViewDetails} />
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>جزئیات کاربر</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4 py-4 text-right">
             
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
