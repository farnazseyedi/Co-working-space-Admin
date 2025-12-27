"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Check } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { FEATURES_OPTIONS } from "@/app/services/mock/features-gallery-service";
import { FormValues } from "@/app/lib/schemas/features-gallery";
import { CardTitle } from "../ui/card";
import { Separator } from "../ui/seprator";

export const FeaturesSection = () => {
  const { control, formState: { errors } } = useFormContext<FormValues>();

  return (
    <section>
      <div className="flex items-center gap-4">
            <CardTitle className="text-xl font-bold text-neutral-900">
               چرا مکین؟
            </CardTitle>
            <Separator className="flex-1 bg-neutral-400" />
          </div>

      <Controller
        control={control}
        name="features"
        render={({ field }) => (
          <div className="flex flex-wrap gap-4 pt-9">
            {FEATURES_OPTIONS.map((option) => {
              const isChecked = field.value.includes(option.label);
              return (
                <div
                  key={option.id}
                  onClick={() => {
                    if (isChecked) {
                      field.onChange(field.value.filter((v) => v !== option.label));
                    } else {
                      field.onChange([...field.value, option.label]);
                    }
                  }}
                  className={cn(
                    "cursor-pointer select-none flex items-center gap-2 px-4 py-3 rounded-sm border transition-all duration-200 text-sm font-medium min-w-[140px] justify-center",
                    isChecked
                      ? "bg-primary-200 border-none text-neutral-900"
                      : "border-neutral-400 bg-neutral-100 text-neutral-900 hover:border-neutral-300"
                  )}
                >
                  <div
                    className={cn(
                      "w-5 h-5 rounded border-neutral-900 flex items-center justify-center transition-colors ",
                      isChecked ? "bg-primary-100 border border-neutral-900" : "bg-primary-100 border border-neutral-900"
                    )}
                  >
                    {isChecked && <Check width={15} height={15} className="text-primary-500" />}
                  </div>
                  <span>{option.label}</span>
                </div>
              );
            })}
          </div>
        )}
      />
      {errors.features && <p className="text-error-500 text-sm mt-2">{errors.features.message}</p>}
    </section>
  );
};