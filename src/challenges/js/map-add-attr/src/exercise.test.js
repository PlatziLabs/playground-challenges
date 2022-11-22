import { addNewAttr } from "./exercise";

describe("tests", () => {
  it("should return array with taxes", () => {
    const array = [
      {
        name: "Product 1",
        price: 1000,
        stock: 10
      },
      {
        name: "Product 2",
        price: 2000,
        stock: 20
      },
    ];
    const rta = addNewAttr(array);
    expect(rta[0]?.taxes).toEqual(190);
    expect(rta[1]?.taxes).toEqual(380);
  });

  it("should return array random prices", () => {
    const array = [
      {
        name: "Product 1",
        price: 856,
        stock: 12
      },
      {
        name: "Product 2",
        price: 8562,
        stock: 12
      },
      {
        name: "Product 3",
        price: 656,
        stock: 12
      },
    ];
    const rta = addNewAttr(array);
    expect(rta[0]?.taxes).toEqual(162);
    expect(rta[1]?.taxes).toEqual(1626);
    expect(rta[2]?.taxes).toEqual(124);
  });
});
