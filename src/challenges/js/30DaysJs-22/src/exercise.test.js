import { Article, Service, Cart } from "./exercise";
import { Product } from "./product";

describe("tests", () => {
  let book;
  let course;
  let cart;

  beforeEach(() => {
    book = new Article("Libro", 100, 2);
    course = new Service("Curso", 120, 1);
    cart = new Cart();
  });

  it("Article should be an instance of Product", () => {
    expect(book instanceof Product).toBe(true);
  });

  it("Service should be an instance of Product", () => {
    expect(course instanceof Product).toBe(true);
  });

  it("Cart should not be an instance of Product", () => {
    expect(cart instanceof Product).toBe(false);
  });

  it("Should add a product to cart", () => {
    cart.addProduct(book);
    const currentProducts = cart.getProducts()
    expect(currentProducts.length).toEqual(1);
    expect(currentProducts[0]).toEqual(book);
  });

  it("should delete a product from the cart", () => {
    cart.addProduct(book);
    cart.addProduct(course);
    cart.deleteProduct(book);
    const currentProducts = cart.getProducts()
    expect(currentProducts.length).toEqual(1);
    expect(currentProducts[0]).toEqual(course);
  });

  it("should calculate the cart total", () => {
    cart.addProduct(book);
    cart.addProduct(course);
    expect(cart.calculateTotal()).toEqual(320);
  });

  it("should return a string after add an article", () => {
    expect(typeof book.addToCart()).toEqual("string");
  });

  it("should return a string after add a service", () => {
    expect(typeof course.addToCart()).toEqual("string");
  });

  it("should not modify the Product class", () => {
    const product = new Product("product", 1, 1);
    expect(() => product.addToCart()).toThrow(
      Error(
        "La lógica de este método debe ser implementada por las clases hijas"
      )
    );
  });
});
