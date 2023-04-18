import { processShoppingList } from "./exercise";

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 },
  { name: "leche", price: 25, quantity: 1 },
  { name: "oferta manzanas", price: 10, quantity: 3 },
];

describe("tests", () => {
  it("should return the total", () => {
    const rta = processShoppingList(shoppingList);
    expect(rta).toBe(89);
  });

  it("should apply the discount to items", () => {
    const item = shoppingList.find((i) => i.name.includes("oferta"));
    expect(item.price).toBe(24);
  });

  it("should delete the quantity property", () => {
    const item = shoppingList[0];
    expect(item.quantity).toBe(undefined);
  });

  it("should modify the original array", () => {
    expect(shoppingList).toEqual([
      { name: "pan", price: 40 },
      { name: "leche", price: 25 },
      { name: "oferta manzanas", price: 24 },
    ]);
  });
});
