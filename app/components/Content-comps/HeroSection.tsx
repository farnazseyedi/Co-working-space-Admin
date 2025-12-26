"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2, UploadCloud, Pencil, ImageIcon, Loader2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import {
  Form,
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

import {
  heroBannerSchema,
  HeroBannerFormValues,
} from "@/app/lib/schemas/hero-banner";
import { heroService } from "@/app/services/mock/hero-service";

import heroBanner from "@/images/heroBanner.jpg";

export default function HeroBannerForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<HeroBannerFormValues>({
    resolver: zodResolver(heroBannerSchema),
    defaultValues: {
      title: "",
      subtitle: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await heroService.getBannerData();
        form.reset({
          title: data.title,
          subtitle: data.subtitle,
        });
        setPreview(data.imageUrl);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [form]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      form.setValue("image", file, { shouldDirty: true });
    }
  };

  const handleDeleteImage = () => {
    setPreview(null);
    form.setValue("image", null, { shouldDirty: true });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const onSubmit = async (data: HeroBannerFormValues) => {
    setIsSubmitting(true);
    try {
      await heroService.updateBannerData(data);
      form.reset(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-10">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pt-0">
          <div className="flex items-center gap-4">
            <CardTitle className="text-xl font-bold text-slate-800">
              بنر اصلی
            </CardTitle>
            <Separator className="flex-1 bg-slate-200" />
          </div>
        </CardHeader>

        <CardContent className="px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1 space-y-32 order-2 md:order-2 w-full">
                  <div className="space-y-2 text-sm text-slate-400 text-right">
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
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <UploadCloud className="w-4 h-4 ml-2" />
                        بارگذاری تصویر جدید
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="text-slate-500 hover:text-red-500"
                        onClick={handleDeleteImage}
                        disabled={!preview}
                      >
                        <Trash2 className="w-4 h-4 ml-2" />
                        حذف
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-100 h-55 bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 order-1 md:order-1">
                  {preview ? (
                    <Image
                      src={heroBanner}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400">
                      <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                      <span>تصویری انتخاب نشده</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>جمله اول بنر اصلی</FormLabel>
                      <FormControl>
                        <div className="relative w-140">
                          <Input {...field} className="pl-10 h-12" />
                          <Pencil className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>جمله دوم بنر اصلی</FormLabel>
                      <FormControl>
                        <div className="relative w-140">
                          <Input {...field} className="pl-10 h-12" />
                          <Pencil className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={!form.formState.isDirty || isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white min-w-30"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-4 h-4" />
                  ) : (
                    "ذخیره تغییرات"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
