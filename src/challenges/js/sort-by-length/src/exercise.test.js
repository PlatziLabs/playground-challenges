import { sortByLength } from "./exercise";

describe("tests", () => {
  it("should return sorted", () => {
    const array = ["Hola","Viajar","Sol","Aprender"];
    const rta = sortByLength(array);
    expect(rta).toEqual(["Sol","Hola","Viajar", "Aprender"]);
  });

  it("should return sorted", () => {
    const array = ["22","333","1","4444"];
    const rta = sortByLength(array);
    expect(rta).toEqual(["1","22","333", "4444"]);
  });

  it("should return []", () => {
    const array = [];
    const rta = sortByLength(array);
    expect(rta).toEqual([]);
  });
});
