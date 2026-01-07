"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import NotificationMessageIcon from "../../assets/icons/notification/NotificationMessageIcon";
import PlusIcon from "../../assets/icons/dashboard/PlusIcon";

function MessageButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-4 mt-7">
      <Button
        label="صندوق پیام‌ها"
        variant="secondary"
        icon={<NotificationMessageIcon />}
        onClick={() => router.push("/pages/notificationsList")}
      />

      <Button
        label="پیام جدید"
        variant="primary"
        icon={<PlusIcon />}
        onClick={() => router.push("/pages/sendMessage")}
      />
    </div>
  );
}

export { MessageButtons };
