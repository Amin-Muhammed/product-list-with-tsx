interface converFnTypes {
  price: number;
  toFixedNum?: number;
  currency?: string;
}
export function convertToPrice({
  price = 1,
  toFixedNum = 2,
  currency = "$",
}: converFnTypes): string {
  return `${currency}${price.toFixed(toFixedNum)}`;
}