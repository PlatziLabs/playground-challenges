import { filterByTerm } from "./exercise";

describe("tests", () => {
  it('should return ["ana", "anastasia"]', () => {
    const array = ["ana", "santi", "nico", "anastasia"];
    const rta = filterByTerm(array, "ana");
    expect(rta).toEqual(["ana", "anastasia"]);
  });

  it('should return ["zyx"]', () => {
    const array = ["abc", "zyx", "bcc"];
    const rta = filterByTerm(array, "zy");
    expect(rta).toEqual(["zyx"]);
  });

  it('should return []', () => {
    const array = ["ana", "santi", "nico", "anastasia"];
    const rta = filterByTerm(array, "xyx");
    expect(rta).toEqual([]);
  });
});
