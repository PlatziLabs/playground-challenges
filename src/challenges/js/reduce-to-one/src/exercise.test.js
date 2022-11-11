import { solution } from "./exercise";

describe("tests", () => {
  it("should return 5 steps if the input number is 15", () => {
    expect(solution(15)).toBe(5)
  });
  it("should return 0 steps if the input number is 0", () => {
    expect(solution(0)).toBe(0)
  });
  it("should return 1 steps if the input number is 1", () => {
    expect(solution(1)).toBe(0)
  });
  it("should return 23 steps if the input number is 328593", () => {
    expect(solution(328593)).toBe(23)
  });
});
