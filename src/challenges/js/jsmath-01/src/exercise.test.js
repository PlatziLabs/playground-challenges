import { solution } from "./exercise";

describe("tests", () => {
  it("should return 8", () => {
    const arrayA = [6,8,10];
    const rta = solution(...arrayA);
    expect(rta).toEqual(8);
  });
  it("should return 4", () => {
    const arrayA = [16,8,10];
    const rta = solution(...arrayA);
    expect(rta).toEqual(4);
  });
  it("should return false", () => {
    const arrayA = [6,6,8];
    const rta = solution(...arrayA);
    expect(rta).toEqual(false);
  });
});
