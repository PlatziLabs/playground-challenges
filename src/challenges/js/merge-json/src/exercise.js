<<<<<<< HEAD
export function solution(json1, json2) {
 // Tu código aquí 👈
=======
export function solution(
  json1 = {
    name: "Mr. Michi",
    food: "Pescado",
  },
  json2 = {
    age: 12,
    color: "Blanco",
  }
) {
  return {
    ...json1,
    ...json2,
  };
>>>>>>> 51415ad298d70157018eb249591b90ac65ce01ff
}
