export class Product {
  // Este código no debe ser editado ❌
  constructor(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    throw new Error("Este método debe ser implementado en las subclases");
  }
}
