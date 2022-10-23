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
}
