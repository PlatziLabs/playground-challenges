import { solution } from "./exercise";

describe("tests", () => {
  it("should return 9 when input results are [27, 36, 45, 54, 63, 72]", () => {
    const rta = solution([27, 36, 45, 54, 63, 72]);
    expect(rta).toEqual(9);
  });
  it("should return 2 when input results are [6, 8, 10, 12, 14, 16]", () => {
    const rta = solution([6, 8, 10, 12, 14, 16]);
    expect(rta).toEqual(2);
  });
  it("should return false when multiplier factor doesn't match", () => {
    const rta = solution([1, 36, 45, 54, 33, 72]);
    expect(rta).toBe(false)
  });
});