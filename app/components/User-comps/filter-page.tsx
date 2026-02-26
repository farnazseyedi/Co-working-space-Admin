"use client";

import { useState } from "react";
import { MOCK_DATA } from "@/app/services/mock/payment-service";
import { UserData } from "@/app/services/mock/payment-service";
import { SearchFilters } from "@/app/components/User-comps/filter";
import { UsersTable } from "@/app/components/User-comps/table";
import AddUserModal, {
  AddUserFormValues,
} from "@/app/components/User-comps/addUser-modal";
import { Plus } from "lucide-react";

export default function SearchPage() {
  const [inputFilters, setInputFilters] = useState({
    fullName:"",
  });

  const [users, setUsers] = useState<UserData[]>(MOCK_DATA);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setInputFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    const emptyState = { fullName: "", };
    setInputFilters(emptyState);
  };

  // const handleAddUserSubmit = (data: AddUserFormValues) => {
  //   const newUser: UserData = {
  //     id: String(users.length + 1),
  //     userName: data.userName,
  //     fullName: data.fullName,
  //     phone: data.phone,
  //     status: "فعال",
  //     date: new Date().toLocaleDateString("fa-IR"),
  //     price: "0",
  //   };
  //   setUsers([newUser, ...users]);
  //   setIsAddModalOpen(false);
  // };

  return (
    <div className="min-h-screen py-8 ">
      <div className="w-full mx-auto space-y-1 ">
        <SearchFilters
          filters={inputFilters}
          onFilterChange={handleInputChange}
          onReset={handleReset}
        />
        <div className="bg-others-white1 rounded-md shadow-sm mt-5">
          <div className="flex justify-between px-2 items-center mb-4 pt-8">
            <h1 className="text-xl font-bold text-neutral-900">
              لیست کاربران فضای اشتراکی مکین
            </h1>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className=" text-primary-600 hover:bg-primary-50 transition-colors"
            >
              <div className="flex gap-2 pl-3 items-center">
                <Plus />
                <p className="text-md"> افزودن کاربر جدید</p>
              </div>
            </button>
          </div>
          <UsersTable data={users} />
        </div>
      </div>

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        
      />
    </div>
  );
}
