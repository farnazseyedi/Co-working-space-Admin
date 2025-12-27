"use client";

import Image from "next/image";
import Link from "next/link";
import home from "@/icons/home-2.svg";
import logout from "@/icons/logout icon.svg";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="bg-others-white1 flex justify-between items-center px-7 w-258 h-14 shadow-md rounded-sm border-b-neutral-700">
        <div className="font-bold text-neutral-800">مدیریت محتوا</div>
        <div className="flex gap-4">
          <div>
            <Image src={home} alt="home" width={24} height={24} />
          </div>
          <span className="bg-neutral-200 w-px h-6"></span>
          <div>
            <Image src={logout} alt="logout" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="pt-6 flex w-162 h-14 gap-10 mr-5">
        <ul className="flex gap-8 relative items-center">
          <li className="relative group cursor-pointer flex flex-col items-center">
            <Link href="/content">
              <span
                className={`font-bold leading-none transition-colors${
                  pathname === "/content"
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                } `}
              >
                صفحه اصلی
              </span>
            </Link>
            <span
              className={`mt-2 rounded-full transition-all duration-300 ease-out ${
                pathname === "/content"
                  ? "w-full h-0.5 bg-primary-500"
                  : "w-1 h-1 bg-neutral-600 group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500"
              } `}
            />
          </li>

          <li className="relative group cursor-pointer flex flex-col items-center">
            <Link href="/content">
              <span
                className={`font-bold leading-none transition-colors${
                  pathname === "/content"
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                } `}
              >
                مرام نامه
              </span>
            </Link>
            <span
              className={`mt-2 rounded-full transition-all duration-300 ease-out ${
                pathname === "/content/maram"
                  ? "w-full h-0.5 bg-primary-500"
                  : "w-1 h-1 bg-neutral-600 group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500"
              } `}
            />
          </li>

          <li className="relative group cursor-pointer flex flex-col items-center">
            <Link href="/content">
              <span
                className={`font-bold leading-none transition-colors${
                  pathname === "/content"
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                } `}
              >
                سوالات پرتکرار
              </span>
            </Link>
            <span
              className={`mt-2 rounded-full transition-all duration-300 ease-out ${
                pathname === "/content/questions"
                  ? "w-full h-0.5 bg-primary-500"
                  : "w-1 h-1 bg-neutral-600 group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500"
              } `}
            />
          </li>
          <li className="relative group cursor-pointer flex flex-col items-center">
            <Link href="/content">
              <span
                className={`font-bold leading-none transition-colors${
                  pathname === "/content"
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                } `}
              >
                تماس با ما
              </span>
            </Link>
            <span
              className={`mt-2 rounded-full transition-all duration-300 ease-out ${
                pathname === "/content/call"
                  ? "w-full h-0.5 bg-primary-500"
                  : "w-1 h-1 bg-neutral-600 group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500"
              } `}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
