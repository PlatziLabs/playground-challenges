import { calcTotal } from "./exercise";

describe("tests", () => {
  it("should return 240", () => {
    const array = [
      {
        customerName: "Nicolas",
        total: 100,
        delivered: true,
      },
      {
        customerName: "Zulema",
        total: 120,
        delivered: false,
      },
      {
        customerName: "Santiago",
        total: 20,
        delivered: false,
      }
    ]
    const rta = calcTotal(array);
    expect(rta).toEqual(240);
  });

  it("should return 11", () => {
    const array = [
      {
        customerName: "Nicolas",
        total: 2,
        delivered: true,
      },
      {
        customerName: "Zulema",
        total: 8,
        delivered: false,
      },
      {
        customerName: "Santiago",
        total: 1,
        delivered: false,
      }
    ]
    const rta = calcTotal(array);
    expect(rta).toEqual(11);
  });

  it("should return []", () => {
    const array = [];
    const rta = calcTotal(array);
    expect(rta).toEqual(0);
  });
});
