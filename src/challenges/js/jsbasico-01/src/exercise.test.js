import { solution } from "./exercise";

describe("tests", () => {
  it("should return number", () => {
    const t = 8;
    const rta = solution(t);
    expect(rta).toEqual("number");
  });
  it("should return string", () => {
    const t = "Dieguillo";
    const rta = solution(t);
    expect(rta).toEqual("string");
  });
  it("should return boolean", () => {
    const t = false;
    const rta = solution(t);
    expect(rta).toEqual("boolean");
  });
});
