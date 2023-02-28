import { maxArea } from "./exercise";

describe("tests", () => {
  it("should return 49", () => {
    const alturas = [1,8,6,2,5,4,8,3,7];
    const rta = maxArea(alturas);
    expect(rta).toEqual(49);
  });

  it("should return 56", () => {
    const alturas = [8,1,6,2,5,4,1,3,7];
    const rta = maxArea(alturas);
    expect(rta).toEqual(56);
  });

  it("should return number of jumps", () => {
    const alturas = [1,1,1,1,1,1,1,1];
    const rta = maxArea(alturas);
    expect(rta).toEqual(7);
  });
});
