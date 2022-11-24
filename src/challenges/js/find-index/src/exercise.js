export function findMyKey(array) {
  const index = array.findIndex((item) => item === 'myKey');
  return index !== -1 ? index : false;
}
