"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface MenuItem {
    title: string;
    href: string;
}

const menuItems: MenuItem[] = [
    { title: "پیشخوان", href: "/dashboard" },
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

    const isMessagesRoute =
        pathname === "/messages" || pathname.startsWith("/messages/");

    const [messagesOpen, setMessagesOpen] = useState<boolean>(false);

    useEffect(() => {
        setMessagesOpen(isMessagesRoute);
    }, [isMessagesRoute]);

    const toggleMessages = () => {
        setMessagesOpen(prev => !prev);
    };

    return (
        <aside className="w-64 h-screen border-r bg-white flex flex-col">
            <div className="flex flex-col items-center py-6 border-b">
                {/* <Image
                    src=""
                    alt="profile"
                    width={96}
                    height={96}
                    className="rounded-full"
                /> */}
                <span className="mt-3 font-medium text-gray-800">
                    محمد درستکار
                </span>
            </div>

            <nav className="flex-1 py-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const isMessages = item.href === "/messages";

                        if (isMessages) {
                            return (
                                <li key={item.href}>
                                    <button
                                        onClick={toggleMessages}
                                        className={`w-full flex items-center justify-between px-4 py-3 text-sm transition
                                        ${messagesOpen || isMessagesRoute
                                                ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500"
                                                : "text-gray-600 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span>پیام‌ها</span>

                                        <svg
                                            className={`w-4 h-4 transition-transform
                                            ${messagesOpen ? "rotate-180" : ""}`}
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
                                        <div className="mx-4 mt-1 rounded-lg bg-white border p-2 space-y-1">
                                            <Link
                                                href="/messages/inbox"
                                                className={`block px-3 py-2 rounded text-xs transition
                                                ${pathname === "/messages/inbox"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                    }`}
                                            >
                                                صندوق پیام‌ها
                                            </Link>

                                            <Link
                                                href="/messages/new"
                                                className={`block px-3 py-2 rounded text-xs transition
                                                ${pathname === "/messages/new"
                                                        ? "bg-orange-500 text-white"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                    }`}
                                            >
                                                ایجاد پیام جدید
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            );
                        }

                        const active = pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 text-sm transition
                                    ${active
                                            ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500"
                                            : "text-gray-600 hover:bg-gray-50"
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
