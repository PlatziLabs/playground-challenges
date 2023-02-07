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

export class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super(product);
    this.product = product;
  }

  getPrice() {
    return this.product.getPrice() + 20;
  }

  getDescription() {
    return `${this.product.getDescription()} con seguro de envío`;
  }
}
