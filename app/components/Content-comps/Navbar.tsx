"use client";

import Link from "next/link";
import { HomeIcon } from "@/app/assets/icons";
import { VectorIcon } from "@/app/assets/icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">مدیریت محتوا</h1>
        </div>
        <div className="flex gap-8">
          <div>
            <HomeIcon />
          </div>
          <div>
            <VectorIcon />
          </div>
        </div>
      </header>
      <div className="pt-6 flex w-162 h-14 gap-10 mr-5">
        <ul className="flex gap-8 relative items-center">
          <li className="relative group cursor-pointer flex flex-col items-center">
            <Link href="/pages/content">
              <span
                className={`font-bold leading-none transition-colors${
                  pathname === "/pages/content"
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                } `}
              >
                صفحه اصلی
              </span>
            </Link>
            <span
              className={`mt-2 rounded-full transition-all duration-300 ease-out ${
                pathname === "/pages/content"
                  ? "w-full h-0.5 bg-primary-500"
                  : "w-1 h-1 bg-neutral-600 group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500"
              } `}
            />
          </li>
          <li className="relative group cursor-pointer flex flex-col items-center">
            <Link href="/pages/content/more">
              <span
                className={`font-bold leading-none transition-colors${
                  pathname === "/pages/content/more"
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                } `}
              >
                فراتر از یک آکادمی
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
          <li className="relative group cursor-pointer flex flex-col items-center">
            <Link href="/pages/content/F&Q">
              <span
                className={`font-bold leading-none transition-colors${
                  pathname === "/pages/content/F&Q"
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                } `}
              >
                سوالات پر تکرار
              </span>
            </Link>
            <span
              className={`mt-2 rounded-full transition-all duration-300 ease-out ${
                pathname === "/pages/content/F&Q"
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
