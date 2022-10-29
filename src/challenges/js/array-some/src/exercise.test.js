import { checkArray } from "./exercise";

describe("tests", () => {
  it("should return true", () => {
    const array = [1, 2];
    const rta = checkArray(array);
    expect(rta).toEqual(true);
  });

  it("should return false", () => {
    const array = [1, 1];
    const rta = checkArray(array);
    expect(rta).toEqual(false);
  });

  it("should return false with []", () => {
    const array = [];
    const rta = checkArray(array);
    expect(rta).toEqual(false);
  });

  it("should return true with big numbers", () => {
    const array = [2224, 23, 23];
    const rta = checkArray(array);
    expect(rta).toEqual(true);
  });
});
