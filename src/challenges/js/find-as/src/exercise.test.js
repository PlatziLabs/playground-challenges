import { findAs } from "./exercise";

describe("tests", () => {
  it("should return 'Tienes el AS'", () => {
    const array = ['diamonds', 'hearts', 'spades', 'AS'];
    const rta = findAs(array);
    expect(rta).toEqual('Tienes el AS');
  });

  it("should return 'No, tienes el AS'", () => {
    const array = ['diamonds', 'hearts', 'spades'];
    const rta = findAs(array);
    expect(rta).toEqual('No, tienes el AS');
  });

  it("should return 'No, tienes el AS' with empty array", () => {
    const array = [];
    const rta = findAs(array);
    expect(rta).toEqual('No, tienes el AS');
  });
});
