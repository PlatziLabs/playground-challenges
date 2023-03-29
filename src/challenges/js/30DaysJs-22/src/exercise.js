import { Product } from "./product";

export class Article extends Product {
  addToCart() {
    return `Agregando ${this.quantity} unidades del articulo ${this.name} al carrito`;
  }
}

export class Service extends Product {
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

export class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    product.addToCart();
    this.products.push(product);
  }

  deleteProduct(product) {
    this.products = this.products.filter((item) => item.name !== product.name);
  }

  calculateTotal() {
    const total = this.products.reduce(
      (sum, currentItem) => currentItem.price * currentItem.quantity + sum,
      0
    );
    return total;
  }
  
  getProducts(){
    return this.products
  }
}

