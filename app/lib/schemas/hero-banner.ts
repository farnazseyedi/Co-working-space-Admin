import { z } from "zod";

export const heroBannerSchema = z.object({
  title: z.string().min(2, { message: "بنر اول باید حداقل ۲ کاراکتر باشد." }),
  subtitle: z.string().min(2, { message: "بنر دوم باید حداقل ۲ کاراکتر باشد." }),
  image: z.any().optional(),
  
});

export type HeroBannerFormValues = z.infer<typeof heroBannerSchema>;

export interface HeroBannerData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}