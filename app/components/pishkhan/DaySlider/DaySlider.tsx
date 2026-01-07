"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import DayItem from "./DayItem";
import { days } from "../../../data/days";
import ArrowRightIcon from "@/app/assets/icons/dashboard/ArrowRightIcon";
import ArrowLeftIcon from "@/app/assets/icons/dashboard/ArrowLeftIcon";

type Props = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export default function DaySlider({ activeIndex, setActiveIndex }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex w-full overflow-hidden rounded-b-md shadow-md">
      <div className="bg-secondary-100 flex items-center justify-center w-9 sm:w-10 md:w-12">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-white hover:text-gray-100 transition text-lg"
        >
          <ArrowRightIcon />
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={6}
        dir="rtl"
        className="flex-1 py-2"
        breakpoints={{
          0: { slidesPerView: 1 },
          420: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          534: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          660: { slidesPerView: 3 },
          780: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {days.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-stretch border-r last:border-r-0 border-gray-300"
          >
            <DayItem
              item={item}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-secondary-100 flex items-center justify-center w-9 sm:w-10 md:w-12">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-white hover:text-gray-100 transition text-lg"
        >
          <ArrowLeftIcon />
        </button>
      </div>
    </div>
  );
}
