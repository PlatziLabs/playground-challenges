import { multiplyElements } from "./exercise";

describe("tests", () => {
  it("should return [2,4,6]", () => {
    const array = [1, 2, 3];
    const rta = multiplyElements(array);
    expect(rta).toEqual([2, 4, 6]);
  });

  it("should return [0, 1, 4]", () => {
    const array = [0, -1, 2];
    const rta = multiplyElements(array);
    expect(rta).toEqual([0, -2, 4]);
  });
  it("should return []", () => {
    const array = [];
    const rta = multiplyElements(array);
    expect(rta).toEqual([]);
  });

});
