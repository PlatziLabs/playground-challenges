import { isAlienSorted } from "./exercise";

describe("tests", () => {
  it("should return true", () => {
    const words = ["habito", "hacer", "lectura", "sonreir"];
    const order = "hlabcdfgijkmnopqrstuvwxyz";
    const rta = isAlienSorted(words, order);
    expect(rta).toEqual(true);
  });
  it("should return false (order)", () => {
    const words = ["habito", "hacer", "sonreir", "lectura"];
    const order = "hlabcdfgijkmnopqrstuvwxyz";
    const rta = isAlienSorted(words, order);
    expect(rta).toEqual(false);
  });
  it("should return false (length)", () => {
    const words = ["conocer", "cono"];
    const order = "abcdefghijkmnopqrstuvwxyz";
    const rta = isAlienSorted(words, order);
    expect(rta).toEqual(false);
  });
});
