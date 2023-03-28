import { Product } from "./product";

export class WarrantyDecorator extends Product {
  constructor(product) {
    super(product);
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }

  getDescription() {
    return `${this.product.getDescription()} con garantía`;
  }
}