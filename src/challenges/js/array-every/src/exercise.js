export function checkArray(array) {
  if (array.length === 0) {
    return false;
  }
  return array.every((item) => item % 2 === 0);
}
