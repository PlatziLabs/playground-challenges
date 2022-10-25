export function addNewAttr(array) {
  return array.map((item) => ({
    ...item,
    taxes: Math.trunc(item.price * 0.19),
  }));
}
