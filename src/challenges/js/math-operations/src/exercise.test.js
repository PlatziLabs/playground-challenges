import { solution } from "./exercise";

describe("tests", () => {
  it("should return 19 when input is 5 and 4", () => {
    const rta = solution(5, 4);
    expect(rta).toEqual(19);
  });
  it("should return 1626 when input is 21 and 5", () => {
    const rta = solution(21, 5);
    expect(rta).toEqual(1626);
  });
  it("should return a numeric value", () => {
    const rta = solution(18, 2);
    expect(typeof rta).toBe('number')
  });
});
