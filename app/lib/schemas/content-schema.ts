
import { z } from "zod";

export const featuresAndGallerySchema = z.object({
  features: z.array(z.string()).min(1, "حداقل یک ویژگی انتخاب کنید"),
  gallery: z.array(
    z.object({
      id: z.string(),
      file: z.any().optional(),
      preview: z.string(),
    })
  ).min(1, "حداقل یک تصویر برای گالری الزامی است"),
});

export type FormValues = z.infer<typeof featuresAndGallerySchema>;