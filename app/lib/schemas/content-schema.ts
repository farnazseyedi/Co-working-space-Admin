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

export type FormValues = z.infer<typeof contentSchema>;
export interface HeroBannerData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}