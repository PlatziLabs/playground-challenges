import { filterByTerm } from "./exercise";

describe("tests", () => {
  it('should return ["ana", "santi", "anastasia"]', () => {
    const array = ["ana", "santi", "nico", "anastasia"];
    const rta = filterByTerm(array, "ana");
    expect(rta).toEqual(["ana", "santi", "anastasia"]);
  });

  it('should return []', () => {
    const array = ["ana", "santi", "nico", "anastasia"];
    const rta = filterByTerm(array, "xyx");
    expect(rta).toEqual([]);
  });
});
