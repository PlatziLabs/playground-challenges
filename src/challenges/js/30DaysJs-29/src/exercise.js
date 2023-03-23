import { Product } from "./product";

export class BasicProduct extends Product {
  constructor(price, description) {
    super(price);
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}