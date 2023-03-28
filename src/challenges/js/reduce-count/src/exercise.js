export function counterNumbers(numbers) {
  return numbers.reduce((obj, item) => {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});
}
