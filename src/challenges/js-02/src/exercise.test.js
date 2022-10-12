import { getNames } from "./exercise";

describe("tests", () => {
  it("should return ['Nicolas', 'Valentina']", () => {
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
});
