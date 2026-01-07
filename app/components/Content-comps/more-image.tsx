"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { Upload } from "lucide-react";

interface ImageSectionProps {
  initialImage?: string;
  onImageChange: (file: File) => void;
}

export function ImageSection({
  initialImage,
  onImageChange,
}: ImageSectionProps) {
  const [preview, setPreview] = useState<string | null>(initialImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-109.5 w-73 rounded-xl overflow-hidden flex items-center justify-center">
        {preview ? (
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-contain p-1"
          />
        ) : (
          <div className="text-primary-400">
            <Upload size={48} />
          </div>
        )}
      </div>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
      />
      <Button
        type="button"
        variant="outline"
        className="w-72 h-12 text-primary-500 border-primary-500 hover:bg-primary-300 hover:border-none hover:text-white rounded-xl gap-2 mr-0.5 text-sm"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload size={18} />
        بارگذاری تصویر جدید
      </Button>
    </div>
  );
}
