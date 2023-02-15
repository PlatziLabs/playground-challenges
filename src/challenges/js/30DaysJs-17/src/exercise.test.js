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

  it("should sort different products by availability and price", () => {
    const books = [
      { name: "book1", price: 200, inStock: true },
      { name: "book4", price: 5, inStock: false },
      { name: "book2", price: 20, inStock: false },
      { name: "book3", price: 150, inStock: true },
    ];

    const rta = sortByAvailabilityAndPrice(books);
    expect(rta).toEqual([
      { name: "book3", price: 150, inStock: true },
      { name: "book1", price: 200, inStock: true },
      { name: "book4", price: 5, inStock: false },
      { name: "book2", price: 20, inStock: false },
    ]);
  });

  it("should sort different components by availability and price", () => {
    const components = [
      { name: "CPU", price: 300, inStock: true },
      { name: "Mouse", price: 80, inStock: true },
      { name: "GPU", price: 505, inStock: false },
      { name: "Keyboard", price: 120, inStock: true },
    ];

    const rta = sortByAvailabilityAndPrice(components);
    expect(rta).toEqual([
      { name: "Mouse", price: 80, inStock: true },
      { name: "Keyboard", price: 120, inStock: true },
      { name: "CPU", price: 300, inStock: true },
      { name: "GPU", price: 505, inStock: false },
    ]);
  });
});
