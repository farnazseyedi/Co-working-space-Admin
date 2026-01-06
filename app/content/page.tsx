"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contentSchema, FormValues } from "@/app/lib/schemas/content-schema";
import { MOCK_DATA } from "@/app/services/mock/content-service";
import { FeaturesSection } from "../components/Content-comps/features";
import { GallerySection } from "../components/Content-comps/gallery-section";
import HeroBannerForm from "../components/Content-comps/HeroSection";
import Navbar from "../components/Content-comps/Navbar";
import NavigatinBar from "../components/Navigation/NavigationBar";
import ContactWays from "../components/Content-comps/ContactWays";
import { useState } from "react";
import edit from "@/icons/edit.svg";
import Image from "next/image";

export default function ContentManageMent() {
  const [editMode, setEditMode] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(contentSchema),
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
        <div className="flex justify-end">
          <button onClick={() => setEditMode(!editMode)} className="flex rounded-2xl p-3 bg-primary-500 text-white">
            <Image src={edit} alt="edit" width={25} height={25} />
            ویرایش
          </button>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
            <HeroBannerForm editMode={editMode} />
            <FeaturesSection editMode={editMode} />
            <GallerySection editMode={editMode} />
            <ContactWays editMode={editMode} />
            <div className="flex justify-center itsems-center ml-50 mt-15 p-4">
              <button
                type="submit"
                className="bg-primary-500 text-white px-8 py-2 rounded-2xl w-97 h-12"
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
