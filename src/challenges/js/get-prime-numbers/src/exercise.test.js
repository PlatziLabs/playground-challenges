import { solution } from "./exercise";

describe("tests", () => {
  it("should return [2,3,5] when input is 5", () => {
    const rta = solution(5);
    expect(rta).toEqual([2, 3, 5]);
  });
  it("should return [] when input is 1", () => {
    const rta = solution(1);
    expect(rta).toEqual([]);
  });
  it("should return [2] when input is 2", () => {
    const rta = solution(2);
    expect(rta).toEqual([2]);
  });
});
