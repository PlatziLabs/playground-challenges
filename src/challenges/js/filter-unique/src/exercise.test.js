import { filterUnique } from "./exercise";

describe("tests", () => {
  it("should return [1, 2, 3]", () => {
    const array = [3, 3, 2, 2, 1, 1];
    const rta = filterUnique(array);
    expect(rta).toEqual([1, 2, 3]);
  });

  it("should return [ -3, -1, 1, 2, 4, 45 ]", () => {
    const array = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
    const rta = filterUnique(array);
    expect(rta).toEqual([ -3, -1, 1, 2, 4, 45 ]);
  });

  it("should return [-1, 4, 6, 7]", () => {
    const array = [7, 7, 4, 6, -1, 7, 7, 4, 6, -1]
    const rta = filterUnique(array);
    expect(rta).toEqual([-1, 4, 6, 7]);
  });

  it("should return []", () => {
    const array = []
    const rta = filterUnique(array);
    expect(rta).toEqual([]);
  });
});
