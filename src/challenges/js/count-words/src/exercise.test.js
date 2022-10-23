import { countWords } from "./exercise";

describe("tests", () => {
  it("should return 20 words", () => {
    const array = [
      "Beautiful is better than ugly",
      "Explicit is better than implicit",
      "Simple is better than complex",
      "Complex is better than complicated"
    ];
    const rta = countWords(array);
    expect(rta).toEqual(20);
  });

  it("should return 7 words", () => {
    const array = [
      "Hola hola hola",
      "hola",
      "hola hola",
      "hola"
    ];
    const rta = countWords(array);
    expect(rta).toEqual(7);
  });

  it("should return 0 words", () => {
    const array = [];
    const rta = countWords(array);
    expect(rta).toEqual(0);
  });

  it("should return 1 words", () => {
    const array = ['hola'];
    const rta = countWords(array);
    expect(rta).toEqual(1);
  });
});
