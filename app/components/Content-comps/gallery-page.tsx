"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/app/lib/utils";

import {
  featuresAndGallerySchema,
  FormValues,
} from "@/app/lib/schemas/content-schema";
import { MOCK_DATA } from "@/app/services/mock/features-gallery-service";
import { FeaturesSection } from "@/app/components/Content-comps/features";
import { GallerySection } from "@/app/components/Content-comps/gallery-section";

export default function AdminGalleryPage() {
  const methods = useForm<FormValues>({
    resolver: zodResolver(featuresAndGallerySchema),
    defaultValues: MOCK_DATA,
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = methods;
  const onSubmit = async (data: FormValues) => {
    console.log("Submitting:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Saved");
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <FeaturesSection />

          <GallerySection />

          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex items-center justify-end gap-4 z-50 shadow-lg">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              انصراف
            </button>
            <button
              type="submit"
              disabled={!isDirty || isSubmitting}
              className={cn(
                "px-8 py-2 rounded-lg text-white font-medium transition-all shadow-md",
                !isDirty || isSubmitting
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              )}
            >
              {isSubmitting ? "در حال ذخیره..." : "ثبت تغییرات"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
