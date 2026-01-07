"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/app/components/ui/Input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Separator } from "@/app/components/ui/seprator";
import { CardTitle } from "@/app/components/ui/card";
import { MOCK_ContactWays } from "@/app/services/mock/content-service";

interface ContactWaysProps {
  editMode: boolean;
}

export default function ContactWays({ editMode }: ContactWaysProps) {
  const { control } = useFormContext();

  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <CardTitle className="text-xl font-bold text-neutral-900 whitespace-nowrap">
          راه های ارتباطی
        </CardTitle>
        <Separator className="flex-1 bg-neutral-400" />
      </div>

      <div className="flex flex-col mt-8 w-223.75">
        <div className="mb-6 w-223.75">
          <FormField
            control={control}
            name="address.title"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>آدرس</FormLabel>
                <FormControl>
                  <div className="relative flex w-full">
                    <Input
                      {...field}
                      placeholder={MOCK_ContactWays.Address}
                      value={field.value ?? ""}
                      disabled={!editMode}
                      className={`w-full ${
                        editMode
                          ? "pl-10 h-12 text-neutral-400 border-neutral-400"
                          : "placeholder:text-neutral-950"
                      }`}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full">
          <div>
            <FormField
              control={control}
              name="firstPhoneNumber.title"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>شماره تلفن</FormLabel>
                  <FormControl>
                    <div className="relative flex w-full">
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        disabled={!editMode}
                        placeholder={MOCK_ContactWays.firstPhoneNumber}
                        className={`w-full ${
                          editMode
                            ? "pl-10 h-12 text-neutral-400 border-neutral-400"
                            : "placeholder:text-neutral-950"
                        }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="secondPhoneNumber.title"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>شماره تلفن</FormLabel>
                  <FormControl>
                    <div className="relative flex w-full">
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder={MOCK_ContactWays.secondPhoneNumber}
                        disabled={!editMode}
                        className={`w-full ${
                          editMode
                            ? "pl-10 h-12 text-neutral-400 border-neutral-400"
                            : "placeholder:text-neutral-950"
                        }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="bale.title"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>لینک بله</FormLabel>
                  <FormControl>
                    <div className="relative flex w-full">
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        disabled={!editMode}
                        placeholder={MOCK_ContactWays.bale}
                        className={`w-full ${
                          editMode
                            ? "pl-10 h-12 text-neutral-400 border-neutral-400"
                            : "placeholder:text-neutral-950"
                        }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="instagram.title"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>لینک اینستاگرام</FormLabel>
                  <FormControl>
                    <div className="relative flex w-full">
                      <Input
                        {...field}
                        disabled={!editMode}
                        value={field.value ?? ""}
                        placeholder={MOCK_ContactWays.instagram}
                        className={`w-full ${
                          editMode
                            ? "pl-10 h-12 text-neutral-400 border-neutral-400"
                            : "placeholder:text-neutral-950"
                        }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="linkedin.title"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>لینک لینکدین</FormLabel>
                  <FormControl>
                    <div className="relative flex w-full">
                      <Input
                        {...field}
                        disabled={!editMode}
                        value={field.value ?? ""}
                        placeholder={MOCK_ContactWays.linkedin}
                        className={`w-full ${
                          editMode
                            ? "pl-10 h-12 text-neutral-400 border-neutral-400"
                            : "placeholder:text-neutral-950"
                        }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="webSite.title"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>لینک وبسایت مکین</FormLabel>
                  <FormControl>
                    <div className="relative flex w-full">
                      <Input
                        {...field}
                        disabled={!editMode}
                        value={field.value ?? ""}
                        placeholder={MOCK_ContactWays.webSite}
                        className={`w-full ${
                          editMode
                            ? "pl-10 h-12 text-neutral-400 border-neutral-400"
                            : "placeholder:text-neutral-950"
                        }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
