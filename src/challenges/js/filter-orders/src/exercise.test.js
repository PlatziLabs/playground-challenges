import { filterOrders } from "./exercise";

describe("tests", () => {
  it("should return one order", () => {
    const array = [
      {
        customerName: "Zulema",
        total: 120,
        delivered: false,
      },
      {
        customerName: "Nicolas",
        total: 100,
        delivered: true,
      },
      {
        customerName: "Santiago",
        total: 300,
        delivered: false,
      }
    ];
    const rta = filterOrders(array);
    expect(rta.length).toEqual(1);
    expect(rta[0].customerName).toEqual('Nicolas');
    expect(rta[0].total).toEqual(100);
    expect(rta[0].delivered).toEqual(true);
  });

  it("should return []", () => {
    const array = [
      {
        customerName: "Nicolas",
        total: 100,
        delivered: false,
      },
      {
        customerName: "Zulema",
        total: 120,
        delivered: false,
      },
      {
        customerName: "Santiago",
        total: 300,
        delivered: false,
      }
    ];
    const rta = filterOrders(array);
    expect(rta).toEqual([]);
  });
});
