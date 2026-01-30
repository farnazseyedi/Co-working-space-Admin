"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ArrowIcon from "@/app/assets/icons/navigation/ArrowIcon";
import * as Icons from "@/app/assets/icons";

interface MenuItem {
  title: string;
  href: string;
  children?: MenuItem[];
  Icon?: React.ComponentType<{ className?: string }>;
}

const menuItems: MenuItem[] = [
  { title: "پیشخوان", href: "/pages/dashboard", Icon: Icons.PishkhanIcon },
  { title: "تقویم فضا", href: "/pages/calendar", Icon: Icons.CalendarIconNav },
  { title: "رزروها", href: "/pages/reservations", Icon: Icons.ReservationIcon },
  { title: "امور مالی", href: "/pages/finance", Icon: Icons.CoinIconNav },
  { title: "مدیریت کاربران", href: "/pages/users", Icon: Icons.MemberIcon },
  {
    title: "پیام‌ها",
    href: "/messages",
    Icon: Icons.MessageIcon,
    children: [
      { title: "صندوق پیام‌ها", href: "/pages/notificationsList" },
      { title: "ایجاد پیام جدید", href: "/pages/sendMessage" },
    ],
  },
  { title: "تخفیف‌ها", href: "/discounts", Icon: Icons.DiscountIcon },
  { title: "مدیریت محتوا", href: "/pages/content", Icon: Icons.GalleryIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (href: string) => {
    setOpenMenus((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  const isActive = (href: string) => pathname === href;
  const isChildActive = (children?: MenuItem[]) =>
    children?.some((child) => pathname === child.href);

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
            const hasChildren = !!item.children?.length;
            const parentActive = isActive(item.href);
            const childActive = isChildActive(item.children);

            return (
              <li key={item.href} className="relative">
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.href)}
                      className={`relative w-full flex items-center justify-between px-4 py-3 text-lg transition ${
                        parentActive || childActive
                          ? "bg-secondary-100 text-orange-600 font-medium"
                          : "text-gray-600 hover:bg-secondary-100 hover:text-orange-600"
                      }`}
                    >
                      {(parentActive || childActive) && (
                        <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-r"></div>
                      )}

                      <div className="flex items-center gap-2">
                        {item.Icon && (
                          <item.Icon
                            className={`w-5 h-5 ${
                              parentActive || childActive
                                ? "text-orange-500"
                                : "text-gray-400"
                            }`}
                          />
                        )}
                        <span>{item.title}</span>
                      </div>

                      <ArrowIcon
                        open={openMenus[item.href] || childActive}
                        active={parentActive || childActive}
                      />
                    </button>

                    {(openMenus[item.href] || childActive) && (
                      <div className="w-full mt-1 space-y-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block w-full pl-11 pr-4 py-2 text-lg transition ${
                              pathname === child.href
                                ? "bg-secondary-300 text-neutral-800 font-medium"
                                : "text-neutral-600 hover:bg-secondary-100 hover:text-orange-600"
                            }`}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-3 px-4 py-3 text-lg transition rounded ${
                        parentActive
                          ? "bg-secondary-100 text-orange-600 font-medium"
                          : "text-neutral-600 hover:bg-secondary-100 hover:text-orange-600"
                      }`}
                    >
                      {parentActive && (
                        <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-r"></div>
                      )}

                      {item.Icon && (
                        <item.Icon
                          className={`w-5 h-5 ${
                            parentActive ? "text-orange-500" : "text-gray-400"
                          }`}
                        />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
