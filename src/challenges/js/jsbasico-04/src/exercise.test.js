import { solution } from "./exercise";

describe("tests", () => {
  it("should return true", () => {
    const arrayA = ["Huevo", "Gallina", "Vaca"];
    const rta = solution(arrayA);
    expect(rta).toEqual(true);
  });

  it("should return false", () => {
    const arrayB = [1, "Gallina", "Vaca"];
    const rta = solution(arrayB);
    expect(rta).toEqual(false);
  });
});
