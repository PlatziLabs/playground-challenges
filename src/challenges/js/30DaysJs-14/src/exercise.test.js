import { groupProducts } from "./exercise";

describe("tests", () => {
  let products;

  beforeEach(() => {
    products = [
      { name: "Smartphone", category: "Electronics", price: 800 },
      { name: "Laptop", category: "Electronics", price: 1200 },
      { name: "Shirt", category: "Clothing", price: 50 },
      { name: "Pants", category: "Clothing", price: 100 },
      { name: "Chicken", category: "Food", price: 80 },
      { name: "Beef", category: "Food", price: 50 },
      { name: "PS5", category: "Gaming", price: 600 },
      { name: "Xbox One", category: "Gaming", price: 450 },
    ];
  });

  it("should return Clothing products", () => {
    const rta = groupProducts(products, "Clothing");
    expect(rta).toEqual({
      products: "Shirt, Pants",
      totalPrice: 150,
    });
  });

  it("should return Electronic products", () => {
    const rta = groupProducts(products, "Electronics");
    expect(rta).toEqual({
      products: "Smartphone, Laptop",
      totalPrice: 2000,
    });
  });

  it("should return Food products", () => {
    const rta = groupProducts(products, "Food");
    expect(rta).toEqual({
      products: "Chicken, Beef",
      totalPrice: 130,
    });
  });

  it("should return Gaming products", () => {
    const rta = groupProducts(products, "Gaming");
    expect(rta).toEqual({
      products: "PS5, Xbox One",
      totalPrice: 1050,
    });
  });
});
