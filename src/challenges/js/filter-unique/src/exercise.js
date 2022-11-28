export function filterUnique(array) {
  return array
    .filter((item, i, array) => array.indexOf(item) === i)
    .sort((a, b) => a - b);
}
