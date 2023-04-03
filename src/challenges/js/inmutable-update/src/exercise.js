export function updateArray(array, index, newValue) {
  return array.map((item, i) => {
    if (i === index) {
      return newValue;
    }
    return item;
  });
}
