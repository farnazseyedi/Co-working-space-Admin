"use client";

import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@mui/material/styles";
import PlusPicIcon from "@/app/assets/icons/contentManagement/PlusPicIcon";

type AddFAQModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (data: {
    question: string;
    answer: string;
    publishMain: boolean;
    publishPopular: boolean;
  }) => void;
};

export default function AddFAQModal({
  open,
  onClose,
  onSave,
}: AddFAQModalProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [publishMain, setPublishMain] = useState(false);
  const [publishPopular, setPublishPopular] = useState(false);
  const theme = useTheme();

  if (!open) return null;

  const handleSave = () => {
    onSave({ question, answer, publishMain, publishPopular });

    setQuestion("");
    setAnswer("");
    setPublishMain(false);
    setPublishPopular(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-3xl px-5 py-2">
        <div className="text-xl font-extrabold mb-3">افزودن سوال جدید</div>
        <div className="my-3 h-px bg-neutral-300" />
        <div className="space-y-4">
          <div className="relative w-full">
            <label className="block text-sm mb-1">سوال</label>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border border-neutral-400 rounded-md pl-10 px-3 py-2"
            />
            <div className="absolute left-2 top-11 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer">
              <PlusPicIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="relative w-full">
            <label className="block text-sm mb-1">جواب</label>
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full border border-neutral-400 rounded-md pl-10 py-2"
            />
            <div className="absolute left-2 top-11 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer">
              <PlusPicIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-1 text-sm">
              <Checkbox
                checked={publishMain}
                onChange={(e) => setPublishMain(e.target.checked)}
                sx={{
                  color: "#dbeafe",
                  "&.Mui-checked": {
                    color: "#1e40af",
                  },
                }}
              />
              انتشار در صفحه اصلی
            </label>

            <label className="flex items-center gap-1 text-sm">
              <Checkbox
                checked={publishPopular}
                onChange={(e) => setPublishPopular(e.target.checked)}
                sx={{
                  color: "#dbeafe",
                  "&.Mui-checked": {
                    color: "#1e40af",
                  },
                }}
              />
              انتشار در سوالات پرتکرار
            </label>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            className="bg-primary-500 text-white px-4 py-2 rounded-md"
          >
            ذخیره تغییرات
          </button>
          <button
            onClick={onClose}
            className="border border-primary-500 text-primary-500 px-6 py-2 rounded-md"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}
