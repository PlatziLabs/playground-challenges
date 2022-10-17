export function solution(json1 = {
  name: "Mr. Michi",
  food: "Pescado"
}, json2 = {
  age: 12,
  color: "Blanco"
}) {
  // Tu código aquí 👈
  return {
    ...json1,
    ...json2
  }
}
