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

  it("should return true for leap years", () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2004)).toBe(true);
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2024)).toBe(true);
  });

  it("should return false for non-leap years", () => {
    expect(isLeapYear(1700)).toBe(false);
    expect(isLeapYear(1800)).toBe(false);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2001)).toBe(false);
    expect(isLeapYear(2019)).toBe(false);
    expect(isLeapYear(2022)).toBe(false);
  });
});
