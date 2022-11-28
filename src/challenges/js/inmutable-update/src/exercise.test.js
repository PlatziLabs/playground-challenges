import { updateArray } from "./exercise";

describe("tests", () => {
  it("should return ['change', 2] without change the original", () => {
    const originalArray = [1, 2];
    const rta = updateArray(originalArray, 0, 'change');
    expect(rta).toEqual(['change', 2]);
    expect(originalArray).toEqual([1, 2]);
  });

  it("should return [1, 'change'] without change the original", () => {
    const originalArray = [1, 2];
    const rta = updateArray(originalArray, 1, 'change');
    expect(rta).toEqual([1, 'change']);
    expect(originalArray).toEqual([1, 2]);
  });
});
