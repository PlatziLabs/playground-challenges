import { mergeArrays } from "./exercise";

describe("tests", () => {
  it("should return [1,2,3,4]", () => {
    const arrayA = [1, 2];
    const arrayB = [3, 4];
    const rta = mergeArrays(arrayA, arrayB);
    expect(rta).toEqual([1, 2, 3, 4]);
  });

  it("should return [1,2,3,4,5]", () => {
    const arrayA = [1, 2];
    const arrayB = [3, 4, 5];
    const rta = mergeArrays(arrayA, arrayB);
    expect(rta).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return [3,4,5]", () => {
    const arrayA = [];
    const arrayB = [3, 4, 5];
    const rta = mergeArrays(arrayA, arrayB);
    expect(rta).toEqual([3, 4, 5]);
  });

  it("should return []", () => {
    const arrayA = [];
    const arrayB = [];
    const rta = mergeArrays(arrayA, arrayB);
    expect(rta).toEqual([]);
  });
});
