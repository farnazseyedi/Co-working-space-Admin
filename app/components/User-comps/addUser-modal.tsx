"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import { Pencil, User } from "lucide-react";
import { CloseIcon } from "@/app/assets/icons";

const formSchema = z.object({
  userName: z.string().min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد"),
  fullName: z.string().min(3, "نام و نام خانوادگی الزامی است"),
  phone: z
    .string()
    .regex(/^09[0-9]{9}$/, "شماره موبایل معتبر نیست (مثال: ۰۹۱۲...)"),
  nationalId: z
    .string()
    .length(10, "کد ملی باید ۱۰ رقم باشد")
    .regex(/^\d+$/, "فقط عدد وارد کنید"),
});

export type AddUserFormValues = z.infer<typeof formSchema>;

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddUserModal({ isOpen, onClose }: AddUserModalProps) {
  const form = useForm<AddUserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      fullName: "",
      phone: "",
      nationalId: "",
    },
  });

  const onSubmit = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-175 p-0 overflow-hidden bg-white rounded-xl">
        <div className="p-3 border-b border-neutral-400 flex justify-between items-center">
          <h2 className="text-lg font-bold text-neutral-900">افزودن کاربران</h2>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-6 h-6 text-[#292D32]" />
            <span className=" text-lg">افزودن کاربر جدید</span>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-right block">
                        نام کاربری
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="pl-10 text-right text-neutral-400"
                            placeholder="۵۲۶۲۷۵۴۹۷۱"
                            {...field}
                          />
                          <Pencil className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-right block">
                        نام و نام خانوادگی
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="pl-10 text-right text-neutral-400"
                            placeholder="محمدمهدی حسن‌پور"
                            {...field}
                          />
                          <Pencil className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-right block text-neutral-400">
                        شماره همراه
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="pl-10 text-right text-neutral-400"
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                            {...field}
                          />
                          <Pencil className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationalId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-right block">
                        شماره ملی
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="pl-10 text-right text-neutral-400"
                            placeholder="۵۲۶۲۷۵۴۹۷۱"
                            {...field}
                          />
                          <Pencil className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-3 items-center pt-6 mt-4">
                <Button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-400 text-white min-w-35"
                >
                  ذخیره تغییرات
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="border-primary-500 text-primary-500 hover:bg-primary-200 hover:border-none  min-w-35"
                >
                  لغو و انصراف
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
