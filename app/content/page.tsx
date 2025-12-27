"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  featuresAndGallerySchema,
  FormValues,
} from "@/app/lib/schemas/content-schema";
import { MOCK_DATA } from "@/app/services/mock/features-gallery-service";

import { FeaturesSection } from "../components/Content-comps/features";
import { GallerySection } from "../components/Content-comps/gallery-section";
import HeroBannerForm from "../components/Content-comps/HeroSection";
import Navbar from "../components/Content-comps/Navbar";
import NavigatinBar from "../components/Navigation/NavigationBar";

export default function ContentManageMent() {
  const methods = useForm<FormValues>({
    resolver: zodResolver(featuresAndGallerySchema),
    defaultValues: MOCK_DATA,
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Global Submit Data:", data);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <NavigatinBar />
      <div className="mr-64 p-6">
        <Navbar />
        <HeroBannerForm />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
            
            <FeaturesSection />
            <GallerySection />

            <div className="flex justify-center p-4">
              <button
                type="submit"
                className="bg-primary-500 text-white px-8 py-2 rounded-md "
              >
                ذخیره تغییرات
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
