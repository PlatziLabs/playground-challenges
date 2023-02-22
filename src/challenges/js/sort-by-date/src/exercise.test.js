import { sortByDate } from "./exercise";

describe("tests", () => {
  it("should return array names sorted by date", () => {
    const array = [
      {
        name: "Nicolas",
        dateOfBirth: new Date(1993, 6, 9),
      },
      {
        name: "Santiago",
        dateOfBirth: new Date(2018, 6, 11),
      },
      {
        name: "Zulema",
        dateOfBirth: new Date(1994, 10, 7),
      },
    ];
    const rta = sortByDate(array);
    expect(rta).toEqual(["Santiago", "Zulema", "Nicolas"]);
  });

  it("should return array names sorted by date", () => {
    const array = [
      {
        name: "Pepe",
        dateOfBirth: new Date(1993, 6, 9),
      },
      {
        name: "Juan",
        dateOfBirth: new Date(2018, 6, 11),
      },
    ];
    const rta = sortByDate(array);
    expect(rta).toEqual(["Juan", "Pepe"]);
  });

  it("should return []", () => {
    const array = [];
    const rta = sortByDate(array);
    expect(rta).toEqual([]);
  });
});
