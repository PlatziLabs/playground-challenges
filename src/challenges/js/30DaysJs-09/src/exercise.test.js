import { myMap } from "./exercise";

describe("tests", () => {
  it("should return [2,4,6,8]", () => {
    const array = [1, 2, 3, 4];
    const double = (el) => el * 2;
    const rta = myMap(array, double);
    expect(rta).toEqual([2, 4, 6, 8]);
  });

  it("should return the properties of objects", () => {
    const pets = [
      { name: "michi", age: 3 },
      { name: "firulais", age: 5 },
    ];
    const names = myMap(pets, (pet) => pet.name);
    expect(names).toEqual(["michi", "firulais"]);
  });

  it("should work on a two-dimensional array", () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const double = (el) => el * 2;
    const rta = myMap(array, (innerArray) => myMap(innerArray, double));
    const expected = [
      [2, 4, 6],
      [8, 10, 12],
      [14, 16, 18],
    ];
    expect(rta).toEqual(expected);
  });

  it("should return an empty array", () => {
    const array = [];
    const double = (el) => el * 2;
    const rta = myMap(array, double);
    expect(rta).toEqual([]);
  });

  it("should not use array methods", () => {
    const originalArray = [1, 2, 3];
    const double = (el) => el * 2;
    const mapSpy = jest.spyOn(Array.prototype, 'map');
    const doubledArray = myMap(originalArray, double);
    expect(mapSpy).not.toHaveBeenCalled();
  });
});
