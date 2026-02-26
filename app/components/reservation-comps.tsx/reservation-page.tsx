"use client";

import { useState } from "react";
import { MOCK_DATA, UserReservation } from "@/app/services/mock/reservation-service";
import { SearchFilters } from "@/app/components/reservation-comps.tsx/reservation-filter";
import { UsersTable } from "@/app/components/reservation-comps.tsx/reservation-table";
import { ReservationDetailModal } from "@/app/components/reservation-comps.tsx/reservationModal"; 

export default function SearchPage() {
  const [inputFilters, setInputFilters] = useState({
    fullName: "",
    fromDate: "",
    toDate: "",
  });
  const [selectedUser, setSelectedUser] = useState<UserReservation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleViewDetails = (user: UserReservation) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-others-white1 shadow-lg rounded-xl p-8 ">
      <div className="max-w-350 mx-auto space-y-6">
        <SearchFilters
          filters={inputFilters}
          onFilterChange={handleInputChange}
          onReset={() => {}} 
        />
        <h1 className="text-xl font-bold text-neutral-900">
          لیست آخرین تراکنش‌ها
        </h1>
        <UsersTable data={MOCK_DATA} onViewDetails={handleViewDetails} />
      </div>
      <ReservationDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={selectedUser} 
      />
    </div>
  );
}