"use client";

import { useState } from "react";
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

export default function SearchPage() {
  const [inputFilters, setInputFilters] = useState({
    fullName: "",
    fromDate: "",
    toDate: "",
  });
  const [appliedFilters, setAppliedFilters] = useState({
    fullName: "",
    fromDate: "",
    toDate: "",
  });

  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    setAppliedFilters(inputFilters);
  };

  const handleReset = () => {
    const emptyState = {
      fullName: "",
      fromDate: "",
      toDate: "",
    };
    setInputFilters(emptyState);
    setAppliedFilters(emptyState);
  };

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
          onReset={handleReset}
        />

        <h1 className="text-xl font-bold text-neutral-900">
          لیست آخرین تراکنش‌ها
        </h1>
        <UsersTable data={MOCK_DATA} onViewDetails={handleViewDetails} />
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
