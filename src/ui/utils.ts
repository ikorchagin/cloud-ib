export function formatMoney(value: number) {
  return value < 0 ? `-$${Math.abs(value)}` : `$${value}`
}
