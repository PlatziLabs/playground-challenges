import { calcSum } from "./exercise";

describe("tests", () => {
  it("should return 4 with [1,1,1,1]", () => {
    const array = [1,1,1,1];
    const rta = calcSum(array);
    expect(rta).toEqual(4);
  });

  it("should return 12 with [2,2,4,4]", () => {
    const array = [2,2,4,4];
    const rta = calcSum(array);
    expect(rta).toEqual(12);
  });

  it("should return 3 with [1,2,-2,2]", () => {
    const array = [1,2,-2,2];
    const rta = calcSum(array);
    expect(rta).toEqual(3);
  });

  it("should return 0 with []", () => {
    const array = [];
    const rta = calcSum(array);
    expect(rta).toEqual(0);
  });
});
