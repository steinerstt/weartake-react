export const handlePriceFormat = (price) => {
  return Number(price).toLocaleString("us-US", {
    currency: "USD",
    style: "currency",
    minimumIntegerDigits: 1,
  });
};
