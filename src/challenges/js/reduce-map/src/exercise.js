export function calcTotal(orders) {
  return orders
    .map((item) => item.total)
    .reduce((count, item) => count + item, 0);
}
