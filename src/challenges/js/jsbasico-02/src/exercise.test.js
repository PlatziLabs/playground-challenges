import { solution } from "./exercise";

describe("tests", () => {
  it("should be minor and return false", () => {
    const secreto = 1;
    const rta = solution(secreto);
    expect(rta).toEqual(false);
  });
  it("should be equal and return false", () => {
    const secreto = 5;
    const rta = solution(secreto);
    expect(rta).toEqual(false);
  });
  it("should be greater and return true", () => {
    const secreto = 10;
    const rta = solution(secreto);
    expect(rta).toEqual(true);
  });
});
