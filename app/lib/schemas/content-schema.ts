import { z } from "zod";

export const contentSchema = z.object({
  features: z.array(z.string()).min(1, "حداقل یک ویژگی انتخاب کنید"),
  gallery: z
    .array(
      z.object({
        id: z.string(),
        file: z.any().optional(),
        preview: z.string(),
      })
    )
    .min(1, "حداقل یک تصویر برای گالری الزامی است"),

  title: z.string().min(2, { message: "بنر اول باید حداقل ۲ کاراکتر باشد." }),
  subtitle: z
    .string()
    .min(2, { message: "بنر دوم باید حداقل ۲ کاراکتر باشد." }),
  image: z.any().optional(),
});


export interface HeroBannerData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}
export interface ContactWays {
  id: number;
  Address: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  bale: string;
  instagram: string;
  linkedin: string;
  webSite: string;
}



export const moreSchema = z.object({
  word1: z.string().min(1, "این فیلد الزامی است"),
  word2: z.string().min(1, "این فیلد الزامی است"),
  word3: z.string().min(1, "این فیلد الزامی است"),
  word4: z.string().min(1, "این فیلد الزامی است"),
  image: z.union([z.string(), z.any()]).optional(),
});
export type FormValues = z.infer<typeof contentSchema>;
export type MoreFormValues = z.infer<typeof moreSchema>;
