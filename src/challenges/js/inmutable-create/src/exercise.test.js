import { addNumber } from "./exercise";

describe("tests", () => {
  it("should return [1, 2, 3] without change the original", () => {
    const originalArray = [1, 2];
    const rta = addNumber(originalArray, 3);
    expect(rta).toEqual([1, 2, 3]);
    expect(originalArray).toEqual([1, 2]);
  });

  it("should return [1, 2] without change the original", () => {
    const originalArray = [1];
    const rta = addNumber(originalArray, 2);
    expect(rta).toEqual([1, 2]);
    expect(originalArray).toEqual([1]);
  });

  it("should return [1] without change the original", () => {
    const originalArray = [];
    const rta = addNumber(originalArray, 1);
    expect(rta).toEqual([1, 2]);
    expect(originalArray).toEqual([]);
  });
});
