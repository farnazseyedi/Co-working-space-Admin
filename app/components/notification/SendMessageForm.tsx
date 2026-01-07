"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FeatureCheckbox } from "./CheckBox";
import Image from "next/image";

type User = {
  id: string;
  name: string;
  phone: string;
};

export default function SendMessageForm() {
  const [agree, setAgree] = useState(false);
  const [nationalId, setNationalId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleAddUser = () => {
    if (nationalId && fullName && phone) {
      setSelectedUsers((prev) => [
        ...prev,
        { id: nationalId, name: fullName, phone },
      ]);
      setNationalId("");
      setFullName("");
      setPhone("");
    }
  };

  const handleRemoveUser = (id: string) => {
    setSelectedUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      nationalId,
      fullName,
      phone,
      selectedUsers,
      subject,
      messageText,
      file,
    });
  };

  return (
    <>
      <form className="space-y-6 p-6" onSubmit={handleSubmit}>
        <div className="text-xl">ارسال پیام </div>
        <div className="flex items-center gap-2">
          <FeatureCheckbox value={agree} onChange={setAgree} />
          <span className="text-sm">ارسال به همه کاربران</span>
        </div>

        <div className="h-px bg-gray-300 my-3 w-full"></div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">نام کاربری</label>
            <input
              placeholder="کد ملی"
              type="text"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="mt-1 block w-full border bg-others-white1 border-neutral-400 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              نام و نام خانوادگی
            </label>
            <input
              placeholder="محمدمهدی حسن‌پور"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 bg-others-white1 block w-full border border-neutral-400 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">شماره همراه</label>
            <input
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 bg-others-white1 block w-full border border-neutral-400 p-2 rounded"
            />
          </div>
        </div>
        <label>کاربران</label>
        <div className="bg-others-white1 max-h-36 shadow-sm px-6 py-4 flex overflow-y-scroll scroll-smooth">
          <div className="flex flex-col">
            <div>محمدمهدی حسن‌پور / 5262754971 / ۰۹۱۲۳۴۵۶۷۸۹</div>
            <div>محمدحسن قرائتی / 5262754971 / ۰۹۱۲۳۴۵۶۷۸۹</div>
            <div>مازیار هومندنیا / 5262754971 / ۰۹۱۲۳۴۵۶۷۸۹</div>
            <div>محمدمهدی حسن‌پور / 5262754971 / ۰۹۱۲۳۴۵۶۷۸۹</div>
            <div>محمدحسن قرائتی / 5262754971 / ۰۹۱۲۳۴۵۶۷۸۹</div>
            <div>مازیار هومندنیا / 5262754971 / ۰۹۱۲۳۴۵۶۷۸۹</div>
          </div>
        </div>

        {selectedUsers.length > 0 && (
          <div className="border p-3 rounded space-y-2">
            {selectedUsers.map((u) => (
              <div
                key={u.id}
                className="flex justify-between items-center bg-gray-50 p-2 rounded"
              >
                <span>
                  {u.name} / {u.phone} / {u.id}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveUser(u.id)}
                  className="text-red-500"
                >
                  حذف
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">موضوع اعلان</label>
            <input
              placeholder="تغییر ساعت کاری"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full border p-2 bg-others-white1 border-neutral-400 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">متن پیام</label>
            <textarea
              placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="mt-1 block w-full border p-2 bg-others-white1 border-neutral-400 rounded h-40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">بارگذاری فایل</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full"
            />
            {file && <p className="text-sm text-gray-600 mt-1">{file.name}</p>}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex gap-1 bg-primary-500 text-white px-4 py-2 rounded hover:opacity-80"
          >
            <Image src="/icons/send.svg" alt="send" width={20} height={20} />
            ارسال پیام
          </button>
          <button
            type="button"
            className="px-4 py-2 border-primary-500 text-primary-500 border rounded-md bg-others-white1 hover:opacity-80"
          >
            انصراف
          </button>
        </div>
      </form>
    </>
  );
}
