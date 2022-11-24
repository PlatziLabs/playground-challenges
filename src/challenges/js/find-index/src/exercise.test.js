import { findMyKey } from "./exercise";

describe("tests", () => {
  it("should return 1", () => {
    const array = ["diamonds", "myKey", "spades", "AS"];
    const rta = findMyKey(array);
    expect(rta).toEqual(1);
  });

  it("should return 0", () => {
    const array = ["myKey"];
    const rta = findMyKey(array);
    expect(rta).toEqual(0);
  });

  it("should return 2", () => {
    const array = ["a", "a", "myKey", "a"];
    const rta = findMyKey(array);
    expect(rta).toEqual(2);
  });

  it("should return false with empty array", () => {
    const array = [];
    const rta = findMyKey(array);
    expect(rta).toEqual(false);
  });
});
