"use client";

import React, { useState, useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Separator } from "@/app/components/ui/seprator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import heroBannerImg from "@/images/heroBanner.jpg";
import edit from "@/icons/edit.svg";
import upload from "@/icons/upload.svg";
import trash from "@/icons/trash.svg";

export default function HeroSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newFilePreview, setNewFilePreview] = useState<string | null>(null);
  const { control, setValue, watch, formState: { errors } } = useFormContext();
  const watchedImage = watch("heroSection.image");
  const displayImage = newFilePreview || (typeof watchedImage === 'string' ? watchedImage : null);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    
      const objectUrl = URL.createObjectURL(file);
      setNewFilePreview(objectUrl);
      setValue("heroSection.image", file, { shouldDirty: true, shouldValidate: true });
    }
  };

  const handleDeleteImage = () => {
    setNewFilePreview(null);
    setValue("heroSection.image", null, { shouldDirty: true, shouldValidate: true }); 
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (newFilePreview && newFilePreview.startsWith("blob:")) {
        URL.revokeObjectURL(newFilePreview);
      }
    };
  }, [newFilePreview]);

  return (
    <div className="w-full mx-auto">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pt-0">
          <div className="flex items-center gap-4">
            <CardTitle className="text-xl font-bold text-slate-800">
              بنر اصلی
            </CardTitle>
            <Separator className="flex-1 bg-neutral-400" />
          </div>
        </CardHeader>

        <CardContent className="px-0">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              <div className="flex-1 space-y-21 order-2 md:order-2 w-full">
                <div className="space-y-2 text-sm text-neutral-400 text-right pt-3">
                  <p>فرمت عکس JPG</p>
                  <p>ابعاد 1440*810</p>
                  <p>حجم حداکثر 10 مگابایت</p>
                </div>
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-55 h-12 text-md text-primary-500 border-primary-500 hover:bg-primary-200 hover:border-none"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Image
                        src={upload}
                        alt="upload"
                        className="w-5 h-5 ml-1"
                      />
                      بارگذاری تصویر جدید
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="text-md text-primary-500 hover:text-primary-400"
                      onClick={handleDeleteImage}
                      disabled={!displayImage} 
                    >
                      <Image src={trash} alt="trash" className="w-5 h-5 " />
                      حذف
                    </Button>
                  </div>
                </div>
              </div>

              
              <div className="w-full md:w-100 h-55 bg-neutral-100 rounded-xl overflow-hidden relative border border-neutral-200 order-1 md:order-1">
                {displayImage ? (
                  <Image
                    src={displayImage}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-neutral-400">
                    <Image src={heroBannerImg} alt="hero" fill className="object-cover"/>
                    {/* <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                    <span>تصویری انتخاب نشده</span> */}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <FormField
                control={control}
                name="heroSection.title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>جمله اول بنر اصلی</FormLabel>
                    <FormControl>
                      <div className="relative flex w-140">
                        <Input
                          {...field}
                          value={field.value ?? ""} 
                          className="pl-10 h-12 text-neutral-400 border-neutral-400"
                        />
                        <Image
                          src={edit}
                          alt="edit"
                          width={24}
                          height={24}
                          className="absolute left-3 top-3 text-neutral-400"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="heroSection.subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>جمله دوم بنر اصلی</FormLabel>
                    <FormControl>
                      <div className="relative w-140">
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          className="pl-10 h-12 text-neutral-400 border-neutral-400"
                        />
                        <Image
                          src={edit}
                          alt="edit"
                          width={24}
                          height={24}
                          className="absolute left-3 top-3 text-neutral-400"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}