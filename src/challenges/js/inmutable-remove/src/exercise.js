export function removeFromArray(array, index) {
  return array.filter((item, i) =>  i !== index);
}
