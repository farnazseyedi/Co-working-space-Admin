export const toPersianNumber = (num: string | number) => {
  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};

export const toEnglishNumber = (num: string) => {
  return num.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
};
