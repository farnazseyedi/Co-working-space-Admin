import {
  HeroBannerData,
  HeroBannerFormValues,
} from "@/app/lib/schemas/hero-banner";

const MOCK_DATA: HeroBannerData = {
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
        resolve(MOCK_DATA);
      }, 800);
    });
  },

  updateBannerData: async (
    data: HeroBannerFormValues
  ): Promise<UpdateResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock API Received Data:", data);
        resolve({ success: true, message: "اطلاعات با موفقیت آپدیت شد" });
      }, 1000);
    });
  },
};
