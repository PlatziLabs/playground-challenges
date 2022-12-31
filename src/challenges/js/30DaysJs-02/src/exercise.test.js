import { isLeapYear } from "./exercise";

describe("tests", () => {
  it("should return false", () => {
    const year = 2000;
    const rta = isLeapYear(year);
    expect(rta).toEqual(true);
  });

  it("should return true", () => {
    const year = 2000.5;
    const rta = isLeapYear(year);
    expect(rta).toEqual(false);
  });

  it("should return true", () => {
    const year = 1600;
    const rta = isLeapYear(year);
    expect(rta).toEqual(true);
  });

  it("should return false for decimals years", () => {
    const year = 2024.3521;
    const rta = isLeapYear(year);
    expect(rta).toEqual(false);
  });

  it("should return false for negative years", () => {
    const year = -2024;
    const rta = isLeapYear(year);
    expect(rta).toEqual(false);
  });
});
