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

export const MOCK_ContactWays : ContactWays = {
  id:1,
  Address:"بزرگراه شهید قاسم سلیمانی،بین خیابان مدائن و میدان ۲۳،پلاک ۵۲۰",
  firstPhoneNumber: "02177188185" ,
  secondPhoneNumber: "02177188185" ,
  bale :"https://web.bale.ai/chat",
  instagram: "https://www.instagram/makeenacademy",
  linkedin:"linkedin.com/in/makeenacademy",
  webSite:"linkedin.com/in/makeenacademy",
}

import {
  ContactWays,
  HeroBannerData,
} from "@/app/lib/schemas/content-schema";

export const MOCK: HeroBannerData = {
  id: 1,
  title: "فضای کار اشتراکی آکادمی مکین",
  subtitle: "فضایی که کارت نیاز داره!",
  imageUrl: "/images/placeholder-hero.jpg",
};

export interface UpdateResponse {
  success: boolean;
  message: string;
}

export const heroService = {
  getBannerData: async (): Promise<HeroBannerData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK);
      }, 800);
    });
  },

  updateBannerData: async (
    data: FormValues
  ): Promise<UpdateResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock API Received Data:", data);
        resolve({ success: true, message: "اطلاعات با موفقیت آپدیت شد" });
      }, 1000);
    });
  },
};
