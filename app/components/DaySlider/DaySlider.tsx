"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import DayItem from "./DayItem";
import { days } from "../../data/days";

type Props = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export default function DaySlider({ activeIndex, setActiveIndex }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex h-[96px] w-full overflow-hidden rounded-b-md shadow-md">
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="h-full w-[48px] bg-orange-200 text-white hover:bg-orange-300 transition flex items-center justify-center rounded-none"
      >
        ›
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={7}
        spaceBetween={8}
        dir="rtl"
        className="flex-1"
      >
        {days.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center relative">
              <DayItem
                item={item}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
              {index !== days.length - 1 && (
                <div className="absolute right-0 top-0 h-full border-r border-gray-300" />
              )}
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="h-full w-[48px] bg-orange-200 text-white hover:bg-orange-300 transition flex items-center justify-center rounded-none"
      >
        ‹
      </button>
    </div>
  );
}
