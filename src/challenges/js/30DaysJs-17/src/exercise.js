export function sortByAvailabilityAndPrice(products) {
  const copy = [...products];

  copy.sort((a, b) => {
    if (a.inStock === b.inStock) {
      return a.price - b.price;
    } else {
      return a.inStock ? -1 : 1;
    }
  });

  return copy;
}
