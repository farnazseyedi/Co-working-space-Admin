export const toPersianNumber = (n: number | string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return n.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

export const formatPrice = (price: number): string => {
  return toPersianNumber(price.toLocaleString());
};
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
