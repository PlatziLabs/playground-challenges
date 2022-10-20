import { flatArray } from "./exercise";

describe("tests", () => {
  it("should return [1,2,3,4,5]", () => {
    const array = [
      [1, 2],
      [3, 4],
      [5]
    ];
    const rta = flatArray(array);
    expect(rta).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return [1,2,5]", () => {
    const array = [
      [1, 2],
      [],
      [5]
    ];
    const rta = flatArray(array);
    expect(rta).toEqual([1, 2, 5]);
  });

  it("should return [1,2,5,3,4]", () => {
    const array = [
      [1, 2],
      [],
      [5],
      [3, 4]
    ];
    const rta = flatArray(array);
    expect(rta).toEqual([1, 2, 5, 3, 4]);
  });
});
