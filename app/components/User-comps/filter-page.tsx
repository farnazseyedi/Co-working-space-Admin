"use client";

import { useState, useMemo } from "react";
import { MOCK_DATA } from "@/app/services/mock/payment-service";
import { SearchFilters } from "@/app/components/User-comps/filter";
import { UsersTable } from "@/app/components/User-comps/table";
import { Plus } from "lucide-react";
import AddUserModal from "./addUser-modal";

export default function SearchPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [inputFilters, setInputFilters] = useState({
    fullName: "",
    userName: "",
    phone: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    fullName: "",
    userName: "",
    phone: "",
  });

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
      phone: "",
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
      const matchesPhone = !filters.phone || user.phone.includes(filters.phone);

      return matchesName && matchesCode && matchesPhone;
    });
  }, [appliedFilters]);

  return (
    <div className="min-h-screen py-1">
      <div className="w-full mx-auto space-y-1 ">
        <SearchFilters
          filters={inputFilters}
          onFilterChange={handleInputChange}
          onApply={handleApplyFilter}
          onReset={handleReset}
        />
        <div className="bg-others-white1 rounded-lg mt-3">
          <div className="flex justify-between items-center px-2 py-4">
            <h1 className="text-xl  font-bold text-neutral-900">
              لیست کاربران فضای اشتراکی مکین
            </h1>
            <button className="px-3 py-1 border-none text-primary-500 text-md" onClick={() => setIsAddModalOpen(true)}>
              <div className="flex gap-3 items-center">
            <Plus/>
             <p> افزودن عضو جدید</p>
             </div>
            </button>
          </div>
          <UsersTable data={filteredData} />
        </div>
      </div>
      <AddUserModal
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        
      />
    </div>
    
  );
}
