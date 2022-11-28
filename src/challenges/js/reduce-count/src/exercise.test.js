import { counterNumbers } from "./exercise";

describe("tests", () => {
  it("should return an object with numbers", () => {
    const array = [1, 2, 2, 3, 3, 3];
    const rta = counterNumbers(array);
    expect(rta).toEqual({
      1: 1,
      2: 2,
      3: 3,
    });
  });

  it("should return an object with numbers", () => {
    const array = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];
    const rta = counterNumbers(array);
    expect(rta).toEqual({
      1: 2,
      2: 2,
      4: 3,
      45: 1,
      '-3': 1,
      '-1': 2
    });
  });

  it("should return []", () => {
    const array = [];
    const rta = counterNumbers(array);
    expect(rta).toEqual({});
  });
});
