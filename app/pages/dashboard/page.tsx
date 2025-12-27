"use client";

import { useState } from "react";
import NavigatinBar from "../../components/Navigation/NavigationBar";
import PersianCalendar from "../../components/pishTable/PersianCalendar";
import BlueButton from "../../components/Button/BlueButton";
import DaySlider from "../../components/DaySlider/DaySlider";
import ReservationModal from "../../components/Modal/ReservationModal";

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const todayDate = "۱۴ شهریور ۱۴۰۴";

  return (
    <div className="min-h-screen bg-gray-100 ">
      <NavigatinBar />

      <div className="mr-64 p-6">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-center">
          <h1 className="text-lg font-bold">پیشخوان</h1>
        </header>
        <div className="flex justify-between items-center mt-8">
          <div className="font-semibold text-2xl">چهارشنبه ۱۵ مهر ۱۴۰۴</div>
          <div className="flex text-Neutral-500 flex-col justify-center">
            <div className="flex gap-7">
              <div className="flex flex-col items-center">
                <div className="text-xl font-semibold">16</div>
                <div className="mt-3">رزرو شده امروز</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xl font-semibold">09</div>
                <div className="mt-3">ظرفیت باقی‌مانده</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-400 my-5 w-full"></div>

        <div className="mt-6 space-y-4">
          <DaySlider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          <div className="flex justify-between items-end">
            <div className="font-bold text-xl">
              <h1>لیست رزورهای امروز</h1>
            </div>

            <BlueButton onClick={() => setShowModal(true)} />
          </div>

          <PersianCalendar activeIndex={activeIndex} />
        </div>
      </div>

      {showModal && (
        <ReservationModal
          date={todayDate}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
