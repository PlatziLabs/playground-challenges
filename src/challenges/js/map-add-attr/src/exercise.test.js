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
    expect(rta[0].taxes).toEqual(190);
    expect(rta[0].taxes).toEqual(380);
  });
});
