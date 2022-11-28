import { sortByLastName } from "./exercise";

describe("tests", () => {
  it("should return an array sorted by lastName", () => {
    const array = [
      "Nicolas Molina",
      "Andrea Perez",
      "Zulema Vicente",
      "Juan Amador",
    ];
    const rta = sortByLastName(array);
    expect(rta).toEqual([
      "Juan Amador",
      "Nicolas Molina",
      "Andrea Perez",
      "Zulema Vicente",
    ]);
  });

  it("should return an array sorted by lastName", () => {
    const array = [
      "Nicolas c",
      "Andrea a",
      "Zulema b",
      "Juan d",
    ];
    const rta = sortByLastName(array);
    expect(rta).toEqual([
      "Andrea a",
      "Zulema b",
      "Nicolas c",
      "Juan d",
    ]);
  });

  it("should return []", () => {
    const array = [];
    const rta = sortByLastName(array);
    expect(rta).toEqual([]);
  });
});
