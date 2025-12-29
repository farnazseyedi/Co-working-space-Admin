"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "پیشخوان", href: "/pages/dashboard" },
  { title: "تقویم فضا", href: "/calendar" },
  { title: "رزروها", href: "/reservations" },
  { title: "امور مالی", href: "/finance" },
  { title: "مدیریت کاربران", href: "/users" },
  { title: "پیام‌ها", href: "/messages" },
  { title: "تخفیف‌ها", href: "/discounts" },
  { title: "مدیریت محتوا", href: "/content" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [messagesOpen, setMessagesOpen] = useState(
    pathname.startsWith("/messages") ||
      pathname.startsWith("/notificationsList")
  );

  const toggleMessages = () => {
    setMessagesOpen((prev) => !prev);
  };

  return (
    <aside className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg">
      <div className="flex flex-col items-center py-6 border-b">
        <span className="mt-3 font-medium text-neutral-800 text-lg">
          محمد درستکار
        </span>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isMessages = item.href === "/messages";
            const active = pathname === item.href;

            if (isMessages) {
              return (
                <li key={item.href}>
                  <button
                    onClick={toggleMessages}
                    className={`w-full flex items-center justify-between px-4 py-3 text-lg transition
                      ${
                        messagesOpen
                          ? "bg-secondary-100 text-orange-600 font-medium"
                          : "text-gray-600 hover:bg-secondary-100 hover:text-orange-600"
                      }`}
                  >
                    <span>پیام‌ها</span>

                    <svg
                      className={`w-5 h-5 transition-transform ${
                        messagesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {messagesOpen && (
                    <div className="w-full mt-1 space-y-1">
                      <Link
                        href="/pages/notificationsList"
                        className={`block w-full px-4 py-2 text-lg transition
        ${
          pathname === "/pages/notificationsList"
            ? "bg-secondary-300 text-neutral-800 font-medium"
            : "text-neutral-600 hover:bg-secondary-100 hover:text-orange-600"
        }`}
                      >
                        صندوق پیام‌ها
                      </Link>

                      <Link
                        href="/messages/new"
                        className={`block w-full px-4 py-2 text-lg transition
        ${
          pathname === "/messages/new"
            ? "bg-secondary-100 text-orange-600 font-medium"
            : "text-neutral-600 hover:bg-secondary-100 hover:text-orange-600"
        }`}
                      >
                        ایجاد پیام جدید
                      </Link>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-lg transition rounded
                    ${
                      active
                        ? "bg-secondary-100 text-orange-600 font-medium"
                        : "text-neutral-600 hover:bg-secondary-100 hover:text-orange-600"
                    }`}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
