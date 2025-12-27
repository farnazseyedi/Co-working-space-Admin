import { FormValues } from "@/app/lib/schemas/features-gallery";
import gallery from "@/images/gallery.svg"

export const FEATURES_OPTIONS = [
  { id: "internet", label: "اینترنت رایگان" },
  { id: "food_warmer", label: "گرمکن غذا" },
  { id: "fridge", label: "یخچال" },
  { id: "access", label: "دسترسی راحت" },
  { id: "locker", label: "کمد شخصی" },
  { id: "price", label: "قیمت مناسب" },
  { id: "cafe", label: "کافه" },
];

export const MOCK_DATA: FormValues = {
  features: ["اینترنت رایگان", "کافه", "قیمت مناسب", "کمد شخصی"],
  gallery: [
    { id: "1", preview: gallery },
    { id: "2", preview: gallery },
    { id: "3", preview: gallery },
    { id: "4", preview: gallery },
    { id: "5", preview: gallery },
  ],
};