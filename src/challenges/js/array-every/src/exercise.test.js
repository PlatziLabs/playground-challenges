import { checkArray } from "./exercise";

describe("tests", () => {
  it("should return true", () => {
    const array = [2, 4, 6, 8, 44];
    const rta = checkArray(array);
    expect(rta).toEqual(true);
  });

  it("should return false", () => {
    const array = [1,1,1];
    const rta = checkArray(array);
    expect(rta).toEqual(false);
  });

  it("should return false with []", () => {
    const array = [];
    const rta = checkArray(array);
    expect(rta).toEqual(false);
  });
});
