export function filterOrders(array) {
  return array.filter((item) => item?.total >= 100 && item?.delivered)
}
