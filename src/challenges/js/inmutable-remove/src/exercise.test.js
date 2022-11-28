import { removeFromArray } from "./exercise";

describe("tests", () => {
  it("should return [1, 2] without change the original", () => {
    const originalArray = [1, 2, 3];
    const rta = removeFromArray(originalArray, 2);
    expect(rta).toEqual([1, 2]);
    expect(originalArray).toEqual([1, 2, 3]);
  });

  it("should return [1] without change the original", () => {
    const originalArray = [1, 2];
    const rta = removeFromArray(originalArray, 0);
    expect(rta).toEqual([2]);
    expect(originalArray).toEqual([1, 2]);
  });
});
