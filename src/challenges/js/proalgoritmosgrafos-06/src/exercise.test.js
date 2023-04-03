import { letterCombinations } from "./exercise";

describe("tests", () => {
  it("should return 9 combinations", () => {
    const number = "23";
    const rta = letterCombinations(number);
    expect(rta.length).toEqual(9);
  });

  it("should return 27 combinations", () => {
    const number = "234";
    const rta = letterCombinations(number);
    expect(rta.length).toEqual(27);
  });

  it("should return 48 combinations", () => {
    const number = "967";
    const rta = letterCombinations(number);
    expect(rta.length).toEqual(48);
  });
});
