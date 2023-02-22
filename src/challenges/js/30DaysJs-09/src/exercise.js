export function myMap(array, func) {
  const rta = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    rta.push(func(element));
  }
  return rta;
}
