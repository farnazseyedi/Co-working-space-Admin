"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Check } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { FEATURES_OPTIONS } from "@/app/services/mock/content-service";
import { FormValues } from "@/app/lib/schemas/content-schema";
import { CardTitle } from "../ui/card";
import { Separator } from "../ui/seprator";

interface FeaturesSectionProps {
  editMode: boolean;
}

export const FeaturesSection = ({ editMode }: FeaturesSectionProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

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
        render={({ field }) => {
          const sortedOptions = [...FEATURES_OPTIONS].sort((a, b) => {
            const isASelected = field.value.includes(a.label) ? 1 : 0;
            const isBSelected = field.value.includes(b.label) ? 1 : 0;
            return isASelected - isBSelected;
          });
          const finalOptions = sortedOptions.filter((option) => {
            if (editMode) {
              return sortedOptions;
            }
            if (editMode === false) {
              const checked = field.value.includes(option.label);
              return checked;
            }
          });
          return (
            <div className="flex flex-wrap gap-4 pt-9">
              {finalOptions.map((option) => {
                const isChecked = field.value.includes(option.label);
                return (
                  <div
                    key={option.id}
                    onClick={() => {
                      if (!editMode) {
                        return;
                      }

                      if (isChecked) {
                        field.onChange(
                          field.value.filter((v) => v !== option.label)
                        );
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
                        isChecked
                          ? "bg-primary-100 border border-neutral-900"
                          : "bg-primary-100 border border-neutral-900"
                      )}
                    >
                      {isChecked && (
                        <Check
                          width={15}
                          height={15}
                          className="text-primary-500"
                        />
                      )}
                    </div>
                    <span>{option.label}</span>
                  </div>
                );
              })}
            </div>
          );
        }}
      />
      {errors.features && (
        <p className="text-error-500 text-sm mt-2">{errors.features.message}</p>
      )}
    </section>
  );
};
