import { sortByAvailabilityAndPrice } from "./exercise";

describe("tests", () => {
  const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
  ];

  it("should sort products by availability and price", () => {
    const rta = sortByAvailabilityAndPrice(products);
    expect(rta).toEqual([
      { name: "product1", price: 10, inStock: true },
      { name: "product3", price: 15, inStock: true },
      { name: "product4", price: 5, inStock: false },
      { name: "product2", price: 20, inStock: false },
    ]);
  });

  it("should return a new copy of the array", () => {
    const rta = sortByAvailabilityAndPrice(products);
    expect(rta).not.toBe(products);
  });
});
