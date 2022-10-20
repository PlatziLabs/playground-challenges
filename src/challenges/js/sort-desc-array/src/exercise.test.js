import { sortDesc } from "./exercise";

describe("tests", () => {
  it("should return [4,3,2,1]", () => {
    const array = [3,1,4,2];
    const rta = sortDesc(array);
    expect(rta).toEqual([4,3,2,1]);
  });

  it("should return [-3, -2, -1, 1]", () => {
    const array = [1,-3,-1,-2];
    const rta = sortDesc(array);
    expect(rta).toEqual([1, -1, -2, -3]);
  });

  it("should return []", () => {
    const array = [];
    const rta = sortDesc(array);
    expect(rta).toEqual([]);
  });
});
