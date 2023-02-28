import { searchValue } from "./exercise";

describe("tests", () => {
  it("should return {row: 1, column: 1}", () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const value = 5;
    const rta = searchValue(array, value);
    expect(rta).toEqual({
      row: 1,
      column: 1,
    });
  });

  it("should throw an error", () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const value = 45;
    expect(() => searchValue(array, value)).toThrow();
  });

  it("should return {row: 0, column: 0}", () => {
    const array = [
      ["bread", "fish", "milk"],
      ["eggs", "meal", "carrots"],
      ["melon", "watermelon", "sugar"],
    ];
    const value = "bread";
    const rta = searchValue(array, value);
    expect(rta).toEqual({
      row: 0,
      column: 0,
    });
  });

  it("should work with bigger arrays", () => {
    const array = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
    const value = 16;
    const rta = searchValue(array, value);
    expect(rta).toEqual({
      row: 3,
      column: 0,
    });
  });
});
