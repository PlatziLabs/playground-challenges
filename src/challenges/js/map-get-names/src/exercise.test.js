import { getNames } from "./exercise";

describe("tests", () => {
  it("should return a array with names", () => {
    const array = [
      {
        name: 'Nicolas',
        lastName: 'Molina',
        age: 28
      },
      {
        name: 'Valentina',
        lastName: 'Molina',
        age: 19
      },
    ];
    const rta = getNames(array);
    expect(rta).toEqual(['Nicolas', 'Valentina']);
  });

  it("should return a array with names", () => {
    const array = [
      {
        name: 'Santiago',
        lastName: 'Molina',
        age: 28
      },
      {
        name: 'Zulema',
        lastName: 'Molina',
        age: 19
      },
    ];
    const rta = getNames(array);
    expect(rta).toEqual(['Santiago', 'Zulema']);
  });

  it("should return a empty array", () => {
    const array = [];
    const rta = getNames(array);
    expect(rta).toEqual([]);
  });
});
