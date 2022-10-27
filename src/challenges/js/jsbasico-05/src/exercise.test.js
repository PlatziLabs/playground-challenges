import { solution } from "./exercise";

describe("tests", () => {
  it('should return ["Nico", "Zule", "Santi"]', () => {
    const arrayA = ["Nico", "Zule"];
    const deathCountA = 0;
    const nuevoA = "Santi";

    const rta = solution(arrayA, deathCountA, nuevoA);
    expect(rta).toEqual(["Nico", "Zule", "Santi"]);
  });
  it('should return ["Juan", "Juanita", "Julian"]', () => {
    const arrayB = ["Juan", "Juanita", "Daniela"];
    const deathCountB = 1;
    const nuevoB = "Julian";

    const rta = solution(arrayB, deathCountB, nuevoB);
    expect(rta).toEqual(["Juan", "Juanita", "Julian"]);
  });
  it('should return ["Nath", "Cami"]', () => {
    const arrayC = ["Nath", "Luisa", "Noru"];
    const deathCountC = 2;
    const nuevoC = "Cami";
    const rta = solution(arrayC, deathCountC, nuevoC);
    expect(rta).toEqual(["Nath", "Cami"]);
  });
});
