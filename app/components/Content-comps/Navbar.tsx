import Image from "next/image";

import home from "@/icons/home-2.svg";
import logout from "@/icons/logout icon.svg";

export default function Navbar() {
  return (
    <div>
      <div className="bg-others-white1 flex justify-between items-center px-7 w-258 h-14 shadow-md rounded-sm border-b-neutral-700">
        <div className="font-bold text-neutral-800">مدیریت محتوا</div>
        <div className="flex gap-4">
          <div>
            <Image src={home} alt="home" width={24} height={24}/>
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
            <span className="font-bold leading-none hover:text-neutral-900 text-neutral-600">
              صفحه اصلی
            </span>

            <span className="mt-3 h-1 w-1 rounded-full bg-neutral-600 transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500 hover:text-neutral-900"></span>
          </li>
          <li className="relative group cursor-pointer flex flex-col items-center">
            <span className="font-bold leading-none hover:text-neutral-900 text-neutral-600">
              مرام نامه{" "}
            </span>

            <span className="mt-3 h-1 w-1 rounded-full bg-neutral-600 transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500 hover:text-neutral-900"></span>
          </li>
          <li className="relative group cursor-pointer flex flex-col items-center">
            <span className="font-bold leading-none hover:text-neutral-900 text-neutral-600">
              {" "}
              سوالات پرتکرار
            </span>
            <span className="mt-3 h-1 w-1 rounded-full bg-neutral-600 transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500 hover:text-neutral-900"></span>
          </li>
          <li className="relative group cursor-pointer flex flex-col items-center">
            <span className="font-bold leading-none hover:text-neutral-900 text-neutral-600">
              تماس با ما
            </span>

            <span className="mt-3 h-1 w-1 rounded-full bg-neutral-600 transition-all duration-300 ease-out group-hover:w-full group-hover:h-0.5 group-hover:bg-primary-500 hover:text-neutral-900"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
