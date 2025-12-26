export const toPersianNumber = (n: number | string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return n.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

export const formatPrice = (price: number): string => {
  return toPersianNumber(price.toLocaleString());
};
