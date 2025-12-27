"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  ImageIcon, Loader2 } from "lucide-react";
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
import edit from "@/icons/edit.svg";
import upload from "@/icons/upload.svg";
import trash from "@/icons/trash.svg";

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                        className="w-[220px] h-[48px] text-md text-primary-500 border-primary-500 hover:bg-primary-200 hover:border-none"
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
                        disabled={!preview}
                      >
                        <Image src={trash} alt="trash" className="w-5 h-5 " />
                        حذف
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-100 h-55 bg-neutral-100 rounded-xl overflow-hidden relative border border-neutral-200 order-1 md:order-1">
                  {preview ? (
                    <Image
                      src={heroBanner}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-neutral-400">
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
                        <div className="relative flex w-140">
                          <Input
                            {...field}
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
                  control={form.control}
                  name="subtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>جمله دوم بنر اصلی</FormLabel>
                      <FormControl>
                        <div className="relative w-140">
                          <Input
                            {...field}
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
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
