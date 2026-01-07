"use client";

import PlusPicIcon from "@/app/assets/icons/contentManagement/PlusPicIcon";
import { FeatureCheckbox } from "../notification/CheckBox";

type AddFAQModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (data: {
    question: string;
    answer: string;
    publishMain: boolean;
    publishPopular: boolean;
  }) => void;
  publishMain: boolean;
  publishPopular: boolean;
  onPublishMainChange: (val: boolean) => void;
  onPublishPopularChange: (val: boolean) => void;
  question: string;
  answer: string;
  onQuestionChange: (val: string) => void;
  onAnswerChange: (val: string) => void;
};

export default function AddFAQModal({
  open,
  onClose,
  onSave,
  publishMain,
  publishPopular,
  onPublishMainChange,
  onPublishPopularChange,
  question,
  answer,
  onQuestionChange,
  onAnswerChange,
}: AddFAQModalProps) {
  if (!open) return null;

  const handleSave = () => {
    onSave({ question, answer, publishMain, publishPopular });
    onClose();
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
              onChange={(e) => onQuestionChange(e.target.value)}
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
              onChange={(e) => onAnswerChange(e.target.value)}
              className="w-full border border-neutral-400 rounded-md pl-10 py-2"
            />
            <div className="absolute left-2 top-11 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer">
              <PlusPicIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <div className="flex items-center gap-2 text-sm">
              <FeatureCheckbox
                value={publishMain}
                onChange={onPublishMainChange}
              />
              <span>انتشار در صفحه اصلی</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <FeatureCheckbox
                value={publishPopular}
                onChange={onPublishPopularChange}
              />
              <span>انتشار در سوالات پرتکرار</span>
            </div>
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
