export function countWords(array) {
  return array.flatMap(line => line.split(' ')).length;
}
