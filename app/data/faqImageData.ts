interface FAQItem {
  question: string;
  answer: string;
  status: string;
  date: string;
  daysAgo: number;
  active?: boolean;
  editable?: boolean;
  publishMain?: boolean;
  publishPopular?: boolean;
}
export const FAQ_IMAGE_DATA: FAQItem[] = [
  {
    question: "یک سوال که برای فضای کار اشتراک مکین استفاده می‌شود؟",
    answer: "متن پاسخ نمونه برای سوال تصویر",
    status: "در انتظار تایید",
    date: "۱۴۰۴/۰۸/۰۱",
    daysAgo: 2,
  },
  {
    question: "یک سوال که برای فضای کار اشتراک مکین استفاده می‌شود؟",
    answer: "متن نمونه جواب دوم برای تصویر",
    status: "عدم تایید",
    date: "۱۴۰۴/۰۸/۰۱",
    daysAgo: 2,
  },
  {
    question: "یک سوال که برای فضای کار اشتراک مکین استفاده می‌شود؟",
    answer: "متن نمونه جواب سوم برای تصویر",
    status: "تایید شده",
    date: "۱۴۰۴/۰۸/۰۱",
    daysAgo: 2,
  },
];
