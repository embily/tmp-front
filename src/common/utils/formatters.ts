export const formatNumber = (number: number | string, minPrecision = 2, maxPrecision = 2) => {
  const newNumber = Number(number);
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return newNumber.toLocaleString(undefined, options)
}
