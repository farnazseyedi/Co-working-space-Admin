"use client";

import { useState } from "react";
import NavigatinBar from "@/app/components/Navigation/NavigationBar";
import { HomeIcon, VectorIcon } from "@/app/assets/icons";
import { SearchFilters } from "@/app/components/reservation-comps.tsx/reservation-filter";
import { UsersTable } from "@/app/components/reservation-comps.tsx/reservation-table";
import { ReservationDetailModal } from "@/app/components/reservation-comps.tsx/reservationModal";
import { MOCK_DATA, UserReservation } from "@/app/services/mock/reservation-service";

export default function ReservationList() {

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

  const handleReset = () => {
    setInputFilters({
      fullName: "",
      fromDate: "",
      toDate: "",
    });
  };


  const handleViewDetails = (user: UserReservation) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <NavigatinBar />
      
      <div className="mr-64 p-6">
        <div className="bg-white flex justify-between items-center px-7 h-16 shadow-sm rounded-lg border-b border-neutral-200 mb-6">
          <div className="font-bold text-neutral-800">رزرو ها </div>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer">
              <HomeIcon />
            </div>
            <span className="bg-neutral-200 w-px h-6"></span>
            <div className="cursor-pointer">
              <VectorIcon />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <SearchFilters
            filters={inputFilters}
            onFilterChange={handleInputChange}
            onReset={handleReset}
          />
        </div>
        <div className="mt-8">
          <h1 className="text-xl font-bold text-neutral-900 mb-4 text-right">
             لیست آخرین تراکنش‌ها
          </h1>
          <UsersTable 
            data={MOCK_DATA} 
            onViewDetails={handleViewDetails} 
          />
        </div>
      </div>
      <ReservationDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={selectedUser} 
      />
    </div>
  );
}