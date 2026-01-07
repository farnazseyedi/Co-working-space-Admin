"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Check } from "lucide-react";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Label } from "@/app/components/ui/Label";
import { ErrorMessage } from "@hookform/error-message";
import NavigatinBar from "@/app/components/Navigation/NavigationBar";

import { moreSchema, MoreFormValues } from "@/app/lib/schemas/content-schema";
import { CONTENT_MOCK_DATA } from "@/app/services/mock/content-service";
import { ImageSection } from "@/app/components/Content-comps/more-image";
import Navbar from "@/app/components/Content-comps/Navbar";
import logo from "@/images/logo.png";
import Image from "next/image";
import edit from "@/icons/edit.svg";

const FORM_FIELDS = [
  { id: "word1", label: "تغییر کلمه اول" },
  { id: "word2", label: "تغییر کلمه دوم" },
  { id: "word4", label: "تغییر کلمه چهارم" },
  { id: "word3", label: "تغییر کلمه سوم" },
] as const;

export default function ContentManagement() {
  const [activeField, setActiveField] = useState<keyof MoreFormValues | null>(
    null
  );

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<MoreFormValues>({
    resolver: zodResolver(moreSchema),
    defaultValues: CONTENT_MOCK_DATA,
  });

  const onSubmit = async (data: MoreFormValues) => {
    console.log("Final Data to Send:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("تغییرات با موفقیت ذخیره شد.");
    setActiveField(null);
  };

  const handleEditClick = (id: keyof MoreFormValues) => {
    setActiveField(id);
    setTimeout(() => setFocus(id), 50);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <NavigatinBar />
      <div className="mr-64 p-6">
        <Navbar />
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {FORM_FIELDS.map((field) => {
                  const isEditing = activeField === field.id;

                  return (
                    <div key={field.id} className="space-y-4">
                      <Label className="text-neutral-900 pr-1 font-medium">
                        {field.label}
                      </Label>
                      <div className="relative group pt-2">
                        <Input
                          {...register(field.id)}
                          disabled={!isEditing}
                          className={`h-12 rounded-xl pl-12 transition-all border border-neutral-400    
                            ${
                              isEditing
                                ? "bg-white border-primary-500 ring-2 ring-blue-100 text-neutral-900"
                                : "bg-others-white1 text-neutral-600 cursor-default"
                            }
                          `}
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                          {isEditing ? (
                            <button
                              type="button"
                              onClick={() => setActiveField(null)}
                              className="text-success-600 hover:text-success-700 p-1"
                            >
                              <Check className="w-5 h-5" />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleEditClick(field.id)}
                              className="text-neutral-400 hover:text-primary-600 p-1 flex justify-center items-center transition-colors"
                            >
                              <Image
                                src={edit}
                                alt="edit"
                                width={18}
                                height={18}
                              />
                            </button>
                          )}
                        </div>
                      </div>

                      <ErrorMessage
                        errors={errors}
                        name={field.id}
                        render={({ message }) => (
                          <p className="text-error-500 text-[11px] mt-1 mr-1 font-medium">
                            {message}
                          </p>
                        )}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  type="submit"
                  disabled={!isDirty || isSubmitting}
                  className="w-36.75 h-12 bg-primary-500 hover:bg-primary-700 text-white rounded-xl shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 /> : "ثبت تغییرات"}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 pt-5">
              <ImageSection
                initialImage={typeof logo === "string" ? logo : logo.src}
                onImageChange={(file) =>
                  setValue("image", file, { shouldDirty: true })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
